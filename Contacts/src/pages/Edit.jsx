import { Link , useParams ,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios';
import InputField from '../components/InputField';
import Button from '../components/Button';

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
            <InputField
              label="Name:"
              name="name"
              placeholder="Enter Name"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
            <InputField
              label="Email:"
              name="email"
              placeholder="Enter Email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
            <InputField
              label="Phone Number:"
              name="phone"
              placeholder="Enter Number"
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
            <Button type="submit" label="Save" className="btn" />
            <Link to="/" className="btn">Back</Link>
          </form>
        </div>
      </div>
    )
}

export default Edit;