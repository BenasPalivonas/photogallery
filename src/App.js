import Items from './Items/Items.js';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar.js';
import './App.css';
import DatePicker from './DatePicker/DatePicker';
const App = () => {
    const [tag, setTag] = useState('nature');
    const [date, setDate] = useState(7);
    const [favorites, setFavorites] = useState([]);
    const onChange = (text) => {
        setTag(text);
    }
    const onClickDate = (event) => {
        setDate(event.target.value)
    }
    const addFavorites = (newFavorite) => {
        setFavorites((prevFavorites) => {
            sessionStorage.setItem('favoriteItems', JSON.stringify([...new Set([...prevFavorites, newFavorite])]));
            return [...new Set([...prevFavorites, newFavorite])];
        })
    }
    const deleteFavorite = (deleteFavorite) => {
        setFavorites((prevFavorites) => {
            const newArray = prevFavorites.filter((item) => {
                return item !== deleteFavorite;
            })
            sessionStorage.setItem('favoriteItems', JSON.stringify(newArray));
            return newArray;
        })
    }
    useEffect(() => {
        console.log(JSON.parse(sessionStorage.getItem('favoriteItems')));
        let favs = JSON.parse(sessionStorage.getItem('favoriteItems'))
        if (favs !== null) {
            setFavorites(favs);
        }
    }, [])
    return (<div>
        <Navbar favorites={favorites} onChange={onChange} deleteFavorite={deleteFavorite} addFavorites={addFavorites} />
        <DatePicker onClickDate={onClickDate} />
        <Items favorites={favorites} deleteFavorite={deleteFavorite} addFavorites={addFavorites} tag={tag} date={date} />
    </div>
    );
}
export default App;