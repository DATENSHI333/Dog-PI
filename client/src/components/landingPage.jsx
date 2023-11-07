import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../images/logo.png'
import s from '../styles/LandingPage.module.css'

export default function LandingPage() {
    return(
        <div>
            <h1 className={s.title}>Perritos!</h1>
            <NavLink className={s.navlink} to ='/home'>
                <h4 className={s.subTitle}>Ingresa para buscar perros o Crearlos tu mismo!</h4>
                <img src={Logo} alt="img not found"/>
            </NavLink>

        </div>
    )
}