import { Link, useNavigate } from 'react-router-dom';
import './newcontact.css';
import { useState } from 'react';
import axios from 'axios';

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
      <div className='cretae'>
        <h1>Add New Contact</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter Number"
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>
          <button type="submit">Submit</button>
          <Link to="/" className='btn'>Back</Link>
        </form>
      </div>
    </div>
  );
};

export default NewContact;