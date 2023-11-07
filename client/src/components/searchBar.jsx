import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {getNameDogs} from '../actions';
import s from '../styles/searchBar.css';


export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value)
        console.log(name)
    }

    function handleSubmit(e){
        e.preventDefault();
        if(name !== ""){
        dispatch(getNameDogs(name));
        setName("");}
        else{
        alert("buscar perrito")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div className={s.searchBar}><input
            className={s.input} 
            type="text"
            placeholder="Buscar Perrito..."
            onChange= {handleInputChange}
            value={name}
            />
            <button  className={s.boton} type='submit' onClick={handleSubmit}>Buscar Perrito</button>
            </div></form>
        </div>
    )
}