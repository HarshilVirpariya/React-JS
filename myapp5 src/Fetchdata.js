import React from 'react'
import { useState , useEffect } from 'react'

function Fetching()
{
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchingdata = async () => {
            try {
                let API = await fetch("https://fakestoreapi.com/products");

                let jsondata = await API.json();
                setData(jsondata);
                console.log(jsondata);
            } catch (err) {
                console.log(err);
            }
        };

        fetchingdata();
        
    }, []);
    return (
        <div className="container" >
        {data.map((el, index) => (
            <div key={index} className="box" >
                <img src={el.image} alt="Product Image" />
                <p>{el.title}</p>
                <h3> $ : {el.price}</h3>
            </div>
        ))}
    </div>
  )
}
export default Fetching