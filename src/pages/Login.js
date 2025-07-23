import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css'
function Login() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/home');
    };
    return (
        <div className="Login">
            <h1>Login</h1>
            <form onSubmit={""} className="m-5 form-login">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">User Name</label>
                    <input type="text" className="form-control in" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary m-4">Submit</button>
            </form>
            <button onClick={goToHome} className="btn btn-success">Home Page</button>

        </div>
    );
}

export default Login;