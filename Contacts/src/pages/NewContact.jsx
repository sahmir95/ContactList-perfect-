import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import InputField from '../components/InputField';
import Button from '../components/Button';
import './newcontact.css';

const NewContact = () => {
  const [values, setValues] = useState({ name: '', email: '', phone: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/contacts', values)
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="create-container">
      <div className='create'>
        <h1>Add New Contact</h1>
        <form onSubmit={handleSubmit}>
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
          {/* <button type="submit">Submit</button> */}
          <Button type="submit" label="Save" className="btn" />
          <Link to="/" className='btn'>Back</Link>
        </form>
      </div>
    </div>
  );
};

export default NewContact;