import React from 'react';
import "./overlay.css"
const Overlay = ({ item, addFavorites }) => {
    return (
        <div className="cardOverlay">
            <div>
                <h1>{item.title ? item.title.length < 30 ? item.title : item.title.substring(0, 30) :
                    ''
                }</h1>
                <div className="line"></div>
                <h2>{item.ownername}</h2>
                <button onClick={(e) => {
                    e.stopPropagation();
                    addFavorites(item);
                }}>Favourite</button>
            </div>
        </div>
    );
}
export default Overlay