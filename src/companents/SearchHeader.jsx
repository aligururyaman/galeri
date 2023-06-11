import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcLike, FcSearch} from "react-icons/fc";

function SearchHeader({ search }){

  const [value, setValue] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    search(value);
  }

  const handleChange = (event) => {
    setValue(event.target.value) 
  }
  const handleKeyPress =(event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
  
      search(value);
    }
  }

  return (
    <>
    <header className="headerSection">
      <div className="container">
        <div className="content">
          <div className="headernadsub">
            <p  className='subhead'><Link to="basket">Favorilere Git</Link></p>
            <p className="head">Bulmak istediğin resim burada !</p>
          </div>
        </div>
        <div className="capture" >
          <div className="inputlabel">
            <input type="text" className="inputField" placeholder='Resim Ara' value={value} onChange={handleChange} onKeyPress={handleKeyPress} />
          </div> 
          <div className="buttonlabel">
            <button className="buttonbase" onClick={handleFormSubmit}>Ara</button> 
          </div> 
        </div>
      </div>
    </header> 
    </>
  )
}
export default SearchHeader;