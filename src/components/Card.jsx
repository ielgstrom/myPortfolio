import React from 'react'

const Card = ({urlImage, title, descr}) => {

  return (
    <div className="card col-3 mx-2 my-3 p-0" style={{width: '18rem', height:'30rem'}}>
  <img className="card-img-top" src={urlImage} alt="Card image cap" style={{objectFit:'cover', width:'18rem', height:'18rem', borderRadius:'5px'}}/>
  <div className="card-body">
    <h4>{title}</h4>
    <p className="card-text">{descr}</p>
  </div>
</div>
  )
}

export default Card