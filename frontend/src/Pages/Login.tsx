import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
      const [value, setValue] =useState<Record<string, string>>({
        email: '',
        password: ''
      });
      const navigate = useNavigate();

      

      useEffect (() => {
        if(localStorage.getItem('use-info')){
            navigate('/');
        }
      }, []);


      const handleSubmit = (event: any) => {
        event.preventDefault();
        const token = localStorage.grtItem('token');

        fetch('http://localhost:8000/api/login', {
            body: JSON.stringify(value),
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json',
                Authorization: 'Bearer' + token,
            },
            method: 'POST',
        })
        .then(res => res.json())
         .then(data => {
            localStorage.setItem('user-info', JSON.stringify(data.token));

            if(data.message){
                return alert('Login unsuccessful');
            }else{
                alert('Login successful');
                navigate('/');
            }
         });
    }

  return (
        
        <form onSubmit={handleSubmit}>  
            <div className="row justify-content-center pt-4">
                <div className="col-sm-4">
                    <div className="card p-4">
                        <div className="form-group">
                            <label htmlFor="email">Email address:</label>
                            <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            id="email"
                            name='email'
                            onChange={(event:any) =>  setValue(values => ({ ...values, [event.target.name]: event.target.value }))}
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
                            onChange={(event:any) =>  setValue(values => ({ ...values, [event.target.name]: event.target.value }))}
                            />
                            <Link to={'/**'}>Forget Password?</Link>
                        </div>
                        <button type="submit" className="btn btn-primary mt-4">Login Now</button>
                        <p style={{textAlign: "center", padding: "5px"}}>Don't have an Account? <Link to={'/register'}>Singup Now</Link></p>
                    </div>
                </div>
            </div>
        </form>

  );
}

export default Login;
