import React, { useState, useEffect, useRef } from 'react'
import './navbar.css'
import favorite from '../images/favorite.png'
import FavoriteDropDownMenu from '../FavoriteDropDownMenu/FavoriteDropDownMenu'
const Navbar = ({ onChange, favorites, deleteFavorite, addFavorites }) => {
    const [input, setInput] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const dropDownRef = useRef(null);
    useEffect(() => {
        const pageClickEvent = (e) => {
            if (dropDownRef.current !== null && !dropDownRef.current.contains(e.target) && modalOpen === false) {
                setMenuOpen(!menuOpen);
            }
        }
        if (menuOpen) {
            window.addEventListener('click', pageClickEvent);
        }
        return () => {
            window.removeEventListener('click', pageClickEvent);
        }
    }, [menuOpen, modalOpen])
    const modalState = (state) => {
        setModalOpen(state);
    }

    return (<div>
        {menuOpen ? <div ref={dropDownRef}> <FavoriteDropDownMenu modalState={modalState} favorites={favorites} deleteFavorite={deleteFavorite} addFavorites={addFavorites} /> </div>
            : ''}
        <ul className="navbar">
            <li className='favorite' onClick={() => setMenuOpen(!menuOpen)} >Favourites <img src={favorite} alt="failed to load" /></li>
            <li ><input onChange={(event) => {
                setInput(event.target.value);
            }} type="text" placeholder="Search for tags" value={input} /><button onClick={() => onChange(input)}>Search</button> <button onClick={() => {
                onChange("");
                setInput("");
            }}>Clear</button></li>
        </ul>
    </div>
    )
}
export default Navbar;