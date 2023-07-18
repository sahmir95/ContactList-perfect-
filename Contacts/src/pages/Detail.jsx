import { Link, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios';
import InputField from '../components/InputField';
import './detail.css'

const Detail = () =>{
    const [data, setData] = useState([])
    const {id} =useParams();
    useEffect(()=>{
        axios.get('http://localhost:3000/contacts/'+id)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    },[])

    return(
        <div className="details-container">
        <div className="details">
          <h3>Details</h3>
          <InputField
            label="Name:"
            name="name"
            value={data.name}
            readOnly
          />
          <InputField
            label="Email:"
            name="email"
            value={data.email}
            readOnly
          />
          <InputField
            label="Phone Number:"
            name="phone"
            value={data.phone}
            readOnly
          />
          <Link to='/' className="btn">Back</Link>
        </div>
      </div>
    )
}

export default Detail;