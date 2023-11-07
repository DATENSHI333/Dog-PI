import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../images/logo.png'
import s from '../styles/landingPage.css'

export default function LandingPage() {
    return(
        <div>
            <h1 className={s.title}>¡Bienvenido a la Fan Page N°1 de Nuestros amigos peludos!</h1>
            <NavLink className={s.navlink} to ='/home'>
                <h4 className={s.subTitle}>Ingresa para buscar perros por raza o ¡CREARLOS TU MISMO!</h4>
                <img src={Logo} alt="img not found"/>
            </NavLink>

        </div>
    )
}