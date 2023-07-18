import { useState,useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import './detail.css'


const Detail = () =>{
    const [data, setData] = useState([])
    const {id} =useParams();
    useEffect(()=>{
        axios.get('http://localhost:3000/contacts/'+id)
        .then(res =>setData(res.data))
        .catch(err =>console.log(err));
    },[])

    return(
        <div className="details-container">
        <div className="details">
          <h3>Details</h3>
          <div>
            <strong>Name: {data.name}</strong>
          </div>
          <div>
            <strong>Email: {data.email}</strong>
          </div>
          <div>
            <strong>Phone Number: {data.phone}</strong>
          </div>
          <Link to={`/edit/${id}`} class="edit-btn">Edit</Link>
          <Link to="/" class="btn">Back</Link>
        </div>
      </div>
    )
}

export default Detail;