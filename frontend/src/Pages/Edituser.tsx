import {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

const Edituser = () => {

  const [values, setValues] =useState<Record<string, string>>({ 
    name: '' ,
    email: ''
  });
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser()
  }, []);

  // data fetch for edit
  const fetchUser = () => {
      fetch('http://localhost:8000/api/users/'+id+'/edit')
      .then(res => res.json())
      .then(setValues);
  };

   // data fetch for update
  const handleSubmit = (e: any) => {
      e.preventDefault();
      fetch('http://localhost:8000/api/users/'+id, { method: 'PUT',

      body: JSON.stringify(values),
      headers: {
        'Content-type' : 'application/json',
      },
      }).then((res) => {res.json()
                        navigate('/');});
  };
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Name: </label>
                <input 
                type='text' 
                name='name' 
                value={values.name}
                onChange={(e) =>  setValues(values => ({...values,[e.target.name]: e.target.value}))
                }
                />
        </div><br/>

        <div>
        <label>Email: </label>
                <input 
                type='email' 
                name='email' 
                value={values.email}
                onChange={(e) => setValues(values => ({...values,[e.target.name]: e.target.value}))
                }
                />
        </div>
        
        <button type='submit'>Update</button>
      </form>
    </div>
  )
}

export default Edituser