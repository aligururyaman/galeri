import axios from "axios";


const searchImages = async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization:'Client-ID Ur6x76CHEqGdddwvUJt2PFcJMDn8qA-YYrMrwm9Bphs'
      },
      params:{
        query:term
      }
    })
    
    return response.data.results;
  }

  export default searchImages;