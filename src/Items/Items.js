import React, { useEffect, useState, useRef, useCallback } from 'react';
import './items.css'
import UseSearchPhotos from './UseSearchPhotos';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';
const Items = ({ tag, date, addFavorites, deleteFavorite, favorites }) => {
    const [pageNumber, setPageNumber] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [modalItem, setModalItem] = useState({})
    var time = new Date();
    time.setDate(time.getDate() - date);
    var ts = Math.round(time.getTime() / 1000);
    const {
        pictures,
        hasMore,
        loading,
        resetPictures
    } = UseSearchPhotos(tag, pageNumber, ts)
    const observer = useRef()
    const lastBookElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    useEffect(() => {
        resetPictures();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tag, date])
    const openModal = (item) => {
        setShowModal(true);
        setModalItem(item);
    }
    const closeModal = () => {
        setShowModal(false);
    }
    return (
        <div>
            {showModal ? <Modal favorites={favorites} deleteFavorite={deleteFavorite} addFavorites={addFavorites} item={modalItem} closeModal={closeModal} /> : ''}
            <div className="grid">
                {pictures.map((item, index) => {
                    if (pictures.length === index + 1) {
                        return <div style={{ width: '400px', height: '400px' }} onClick={() => openModal(item)} ref={lastBookElementRef} ><Card addFavorites={addFavorites} item={item} />
                        </div>
                    }
                    else
                        return <div style={{ width: '400px', height: '400px' }} onClick={() => openModal(item)}><Card addFavorites={addFavorites} item={item} /></div>

                })}
            </div>
        </div>
    );
}
export default Items;