import Overlay from '../Overlay/Overlay';
import React, { useState } from 'react'
const Card = ({ item, addFavorites }) => {
    const [showOverlay, setShowOverlay] = useState(false);
    return (
        <div onMouseEnter={(event) => {
            setShowOverlay(true)
        }}
            onMouseLeave={(event) => {
                setShowOverlay(false)
            }}
            className={`container`} style={{ cursor: "pointer" }}>
            {showOverlay ? <Overlay addFavorites={addFavorites} item={item} /> : ""}
            <img src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_w.jpg`} alt="failed to load" /></div>
    )
}
export default Card;