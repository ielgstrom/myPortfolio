import React from 'react'
import Ceramica from '../dataImages.json';
import Card from './Card';

const Ceràmica = () => {
  return (
    <main className='row justify-content-around'>
    {Ceramica.ceramica.map(elem=>
    <Card urlImage={elem.url} title={elem.title} descr={elem.description} o/>
    )}
    </main>
  )
}

export default Ceràmica