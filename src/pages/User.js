import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import '../css/User.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function User() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    const goToHome = () => {
        navigate('/home');
    };

    useEffect(() => {
        axios.get("http://localhost:8081/api/users/")
            .then(function (response) {
                setUsers(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

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
                        {
                            users && users.map((row) => (
                                <tr key={row.id}>
                                    <th scope="row">{row.id}</th>
                                    <td>{row.name}</td>
                                    <td>{row.email}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default User;
