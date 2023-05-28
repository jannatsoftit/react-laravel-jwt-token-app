import { useEffect, useState } from 'react';
import {useNavigate, Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';


const Home = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8000/api/users')
            .then(res => res.json())
            .then(setUsers);
  },[])

  const handleDelete = (id: any) => {
        fetch(`http://localhost:8000/api/users/${+id}`,{ method: "DELETE" })
        .then((res) => {res.json()
                        navigate('/');
  });
  }


  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            
            <tr key={user.i}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Link to={`/users/${user.id}/edit`}><button style={{marginRight: "8px"}} type='submit' className='btn btn-info'>Edit</button></Link>
              <button type='submit' className='btn btn-danger' onClick={() => handleDelete(user.id)}>Delete</button>
            </td>
          </tr>
            ))}      
        </tbody>

      </Table>
    </div>
  )
}


export default Home;
