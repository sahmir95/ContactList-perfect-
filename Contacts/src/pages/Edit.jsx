import { Link , useParams ,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios';

const Edit = () =>{
    const {id} =useParams();
    const [values, setValues] = useState({ name: '', email: '', phone: '' });
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:3000/contacts/${id}`)
        .then(res =>{
            setValues(res.data);
        })
        .catch(err =>console.log(err));
    }, [id]);
     
    const handleUpdate =(e) =>{
        e.preventDefault();
        axios
          .put(`http://localhost:3000/contacts/${id}`, values)
          .then((res) => {
            console.log(res);
            navigate('/');
          })
          .catch((err) => console.log(err));
    }
    return(
        <div className="create">
        <div>
          <h1>Edit Contact</h1>
          <form onSubmit={handleUpdate}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}/>
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })}/>
            </div>
            <div>
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter Number"
                value={values.phone}
                onChange={(e) => setValues({ ...values, phone: e.target.value })}/>
            </div>
            <button type="submit">Update</button>
            <Link to="/" className="btn">Back</Link>
          </form>
        </div>
      </div>
    )
}

export default Edit;