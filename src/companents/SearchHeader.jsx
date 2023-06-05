import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcLike } from "react-icons/fc";

function SearchHeader({ search }){

  const [value, setValue] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    search(value);
  }

  const handleChange = (event) => {
    setValue(event.target.value) 
  }

  return (
    <>
    <div>
      <nav className='navbar bg-body-tertiary'>
        <div className="container">
          <Link className='btn btn-info' to="/">Anasayfa</Link>
          <h2>GaLLeriA</h2>
          <Link className='btn btn-light' to="basket"><FcLike/></Link>
          
        </div>
      </nav>
      
    </div>
    <form className='containerClass' onSubmit={handleFormSubmit} >
            <div className="mb-3 mt-3 text-center">
                <label className="form-label">Aramak istediğiniz Kelimeyi Girin</label>
                <input type="text" className="form-control" value={value} onChange={handleChange}/>
                
            </div>
        </form>
      
    </>
  )
}
export default SearchHeader;