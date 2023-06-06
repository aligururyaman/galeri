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

  return (
    <>
    <div>
      <nav className='navbar bg-body-tertiary'>
        <div className="container">
          <Link className='btn btn-info' to="/">Anasayfa</Link>
          
          
            <div className="contailer-fluid">
              <form className='d-flex' onSubmit={handleFormSubmit} >
                
                <div className="mb-1 mt-1 text-center">
                
                    <input type="text" className="form-control me-1" placeholder='Resim Ara' value={value} onChange={handleChange}/> 
                    
                </div>
              </form>
            </div>
          <Link className='btn btn-light' to="basket"><FcLike/></Link>
        </div>
      </nav>
      
    </div>
    
      
    </>
  )
}
export default SearchHeader;