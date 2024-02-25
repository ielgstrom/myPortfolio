import React, { useEffect, useState } from 'react'
import Ceramica from '../dataImages.json';
import Card from './Card';
import '../index.css';

const Ceràmica = () => {

  useEffect(() => {
    const handleScroll = () => {
      const navbarOverlay = document.querySelector('.navbar-overlay');
      if (window.scrollY > 0 && window.scrollY < 40) {
        navbarOverlay.style.display = 'block';
      } else {
        navbarOverlay.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className={`row justify-content-around content`}>
    
    {Ceramica.ceramica.map(elem=>
    <Card urlImage={elem.url} title={elem.title} descr={elem.description}/>
    )}
    </main>
  )
}

export default Ceràmica