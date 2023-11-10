import React, { useState } from 'react';
import s from '../styles/Paginado.module.css';


export default function Paginado({dogsPerPage, allDogs, paginado}) {
    const [currentPage, setCurrentPage] = useState(1);
    const pageNumbers = [];

    for(let i=1; i<=Math.ceil(allDogs/dogsPerPage); i++){
        pageNumbers.push(i)
    }

    const handleClick = (number) => {
        setCurrentPage(number);
        paginado(number);
    }

    return(
        <nav className={s.nav}>
            <ul className={s.paginado}>
                {pageNumbers &&
                pageNumbers.map(number=> (
               <li className={s.number} key={number}>
                     <p className={number === currentPage ? `${s.img} ${s.currentPage}` : s.img} onClick={() => handleClick(number)}>{number}</p>
                 </li>
                ))}
            </ul>
        </nav>
        )
    }