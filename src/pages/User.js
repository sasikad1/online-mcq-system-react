import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import '../css/User.css'
function User() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/home');
    };
    return (
        <div className="User">
            <div className="UserHeader">
                <h1>User</h1>
                <button onClick={goToHome} className="btn btn-success">Home Page</button>
            </div>
            <div className="UserContent">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Sasika</td>
                            <td>sasi@gamil.com</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Dilum</td>
                            <td>dil@gamil.com</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Fire</td>
                            <td>fi@gmail.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


    );
}

export default User;