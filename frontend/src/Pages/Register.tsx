import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


const Register = () => {

  const [users, setUsers] =useState<Record<string, string>>({
    name: '',
    email: '',
    password: ''
  }); 

  const navigate = useNavigate();


  const handleSubmit = (even:any) => {
    even.preventDefault();
    fetch('http://localhost:8000/api/register',{
      body: JSON.stringify(users),
      headers: {
        'Content-type': 'application/json'
      },
      method: 'POST'
    }).then((data) => {data.json()
       alert("register successful");
       navigate('/login')});
       

  }

  return (
    <div>
       <form onSubmit={handleSubmit}>
            <div className="row justify-content-center pt-4">
                <div className="col-sm-4">
                    <div className="card p-4">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                            type="name"
                            className="form-control"
                            placeholder="Enter your name"
                            id="name"
                            name='name'
                            onChange={(event:any) =>  setUsers(Users => ({...Users , [event.target.name]: event.target.value }))}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email address:</label>
                            <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            id="email"
                            name='email'
                            onChange={(event:any) =>  setUsers(Users =>({...Users ,[event.target.name]: event.target.value }))}
                            />
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="password">Password:</label>
                            <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            id="password"
                            name='password'
                            onChange={(event:any) =>  setUsers(Users =>({...Users , [event.target.name]: event.target.value }))}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary mt-4">Register Now</button>
                        <p style={{textAlign: "center", padding: "5px"}}>Already have an Account? <Link to={'/login'}>Login Now</Link></p>
                    </div>
                </div>
            </div>
        </form>

    </div>
  )
}

export default Register
