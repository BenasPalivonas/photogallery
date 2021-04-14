import './Modal.css';
import React, { useEffect, useState } from 'react'
const Modal = ({ closeModal, item, favorites, deleteFavorite, addFavorites }) => {
    const [favorited, setFavorited] = useState(false)
    const [mobileView, setMobileView] = useState(false)
    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth <= 800
                ? setMobileView(true)
                : setMobileView(false);
        };
        setResponsiveness();
        window.addEventListener('resize', () => setResponsiveness());
        return (() => {
            window.removeEventListener('resize', () => setResponsiveness());
        })
    }, []);
    useEffect(() => {
        let a = false;
        favorites.map(favoriteItem => {
            if (favoriteItem === item) {
                a = true;
            }
            return 0;
        })
        setFavorited(a);
    }, [item, favorites]);
    return (
        <div className="modal" onClick={closeModal}>
            <div className="modalContent" onClick={e => e.stopPropagation()}>
                {!mobileView ? <img src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_c.jpg`} alt="Failed to load" /> : <img src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_n.jpg`} alt="Failed to load" />}
                <div className="modalGrid">
                    <button onClick={closeModal}>Close</button>
                    <a href={`https://flickr.com/photos/${item.owner}/${item.id}`} ><button>Original Link</button> </a>
                    {!favorited ? <button onClick={() => {
                        addFavorites(item)
                        setFavorited(true);
                    }
                    }>Favourite</button> : <button onClick={() => {
                        deleteFavorite(item);
                        setFavorited(false);
                    }
                    }>Unfavourite</button>}
                </div>
            </div>
        </div>

    )
}
export default Modal;