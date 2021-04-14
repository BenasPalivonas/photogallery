import React, { useState } from 'react';
import './FavoriteDropDownMenu.css';
import deletePng from '../images/delete.png';
import Modal from '../Modal/Modal.js';
const FavoriteDropDownMenu = ({ favorites, deleteFavorite, modalState, addFavorites }) => {
    const [modalItem, setModalItem] = useState();
    const [showModal, setShowModal] = useState(false);
    const openModal = (item) => {
        modalState(true);
        setShowModal(true);
        setModalItem(item);
    }
    const closeModal = () => {
        modalState(false);
        setShowModal(false);
    }
    return (<div>
        {showModal ? <Modal favorites={favorites} deleteFavorite={deleteFavorite} addFavorites={addFavorites} item={modalItem} closeModal={closeModal} /> : ""}
        <div className="favoriteMenu">
            {favorites.map((item) => {
                return <div style={{ marginLeft: '5px' }} onClick={() => openModal(item)}> Title: {item.title} <br /> Author: {item.ownername} <br /> <img src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_s.jpg`} alt="Failed to load" />
                    <img style={{ borderBottom: 'none' }} src={deletePng} onClick={(e) => {
                        e.stopPropagation();
                        deleteFavorite(item)
                    }} alt="" />
                </div>

            })}
        </div></div>)
}
export default FavoriteDropDownMenu;