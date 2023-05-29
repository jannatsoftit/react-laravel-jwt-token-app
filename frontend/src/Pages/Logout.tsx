import { Link } from "react-router-dom";


const Logout = () => {
    localStorage.clear();
  return (
    <div>
      <Link to={'/login'}>Login</Link>
    </div>
  )
}

export default Logout;
