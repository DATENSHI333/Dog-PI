import React from "react";
import s from '../styles/Error404.module.css'
import { Link } from "react-router-dom";


export const Error404 = () => {
    return (
        <div>
            <h3 className={s.title} >Error 404</h3>
            <p className={s.subTitle}>Pagina no Encontrada</p>
            <div >
            
          </div>


       
            <Link to= '/home'><button className={s.boton} >Home</button></Link>
        </div>
    )
}

export default Error404;