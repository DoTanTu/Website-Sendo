import axios from 'axios';
export const getAll = async () =>{
    try {
        let temp = await axios.get('http://localhost:8080/products')
        console.log(temp);
        return temp.data
    } catch (error) {
        
    }
}