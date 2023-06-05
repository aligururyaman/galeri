import { useEffect, useState } from 'react'
import SearchHeader from './companents/SearchHeader'
import ImageList from './companents/ImageList'
import searchImages from './companents/Api'
import './style/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Basket from './pages/Basket'


function App() {
  const [images, setImages] = useState([])
  const handleSubmit = async (term) => {
      
      const result = await searchImages(term)
      setImages(result)
    }

    
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <SearchHeader search={handleSubmit} />
              <ImageList imagesPlaceholder={images} />
            </>
          } />
          <Route path="Basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
