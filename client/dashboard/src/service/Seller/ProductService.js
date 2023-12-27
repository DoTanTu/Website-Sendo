
import axios from 'axios'

const getAllProduct = async () => {
    try{
        let response = await axios.get('https://6577469e197926adf62ddcf5.mockapi.io/api/admin');
        return response.data
    }
    catch{
        console.log('Khong cos data')
    }
    
        
}
const getById = (id)=>{
    axios({
        method: 'get',
        url: `https://6577469e197926adf62ddcf5.mockapi.io/api/admin/${id}`,
      })
        .then(function (response) {
          return response.data;
      });
}
export{getAllProduct, getById}