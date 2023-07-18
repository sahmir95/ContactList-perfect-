import { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/contacts')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [])

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you Sure for Delete Item?");
    if (confirm) {
      axios.delete('http://localhost:3000/contacts/' + id)
        .then(res => {
          setData(data.filter(d => d.id !== id));
        }).catch(err => console.log(err));
    }
  }

  return (
    <div className="home">
      <h1>Contact List</h1>
      <div className='table-container'>
        <div className='add'><Link to="/new-contact">Add +</Link></div>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>&#127915;</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>
                  <Link to={`/edit/${d.id}`}>Edit</Link>
                  <Button type="button" label="Delete" className="deleteBtn"
                   onClick={() => handleDelete(d.id)} />
                  <Link to={`/detail/${d.id}`}>Detail</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home;