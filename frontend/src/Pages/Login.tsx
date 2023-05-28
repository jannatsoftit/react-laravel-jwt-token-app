import { useState } from 'react';

const Login = () => {
    const [value, setValue] =useState<Record<string, string>>({
        email: '',
        password: ''
      });

      const handleSubmit = (event: any) => {
        event.preventDefault();
        fetch('http://localhost:8000/api/login', {
            body: JSON.stringify(value),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        })
        .then(res => res.json())
         .then(data => {
            localStorage.setItem('user-info', JSON.stringify(data));
            alert(data.message);
            console.log(data);
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
                        </div>
                        <button type="submit" className="btn btn-primary mt-4">Submit</button>
                    </div>
                </div>
            </div>
        </form>

  );
}

export default Login;
