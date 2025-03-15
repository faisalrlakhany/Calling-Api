
import { useEffect , useState } from "react";
import './card.css'
import axios from 'axios'

function Card(){

    const [data , setData] = useState(null)

    useEffect(()=>{

        async function getData() {
            
            const response = await axios('https://dummyjson.com/products')
            console.log(response.data.products);
            setData(response.data.products)
        }
        getData()
    },[])




    return(
                
        <>
        
            <h1>Hello Card</h1>
            <div className="main" >
    {data && data.map((item)=>{

            return(
    
                <div className="product-card" key={item.id}>
                    <div className="product-image-container">
                        <img src={item.images} className="product-image" />
                    </div>
                    <div className="product-info">
                        <h2 className="product-title">{item.title}</h2>
                        <p className="product-price">{item.price}</p>
                        <button className="product-button">Add to Cart</button>
                    </div>
                </div>
            )
       })}
       </div>
        </>



    )


}

export default Card