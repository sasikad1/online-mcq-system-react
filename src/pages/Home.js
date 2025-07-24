import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Home.css'
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
function Home() {
    const navigate = useNavigate();

    const goToResult = () => {
        navigate('/result');
    };
    const goToUser = () => {
        navigate('/user')
    };
    const goToExam = (userId) => {
        navigate(`/exam?userId=${userId}`);
    };



    const location = useLocation();
    const [user, setUser] = useState(null);

    // Parse userId from query params
    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get('userId');

    // Fetch user details when userId is available
    useEffect(() => {
        if (userId) {
            axios.get(`http://localhost:8081/api/users/${userId}`)
                .then(response => {
                    setUser(response.data);
                })
                .catch(error => {
                    console.error('Error fetching user:', error);
                });
        }
    }, [userId]);


    return (
        <div className='Home'>
            <h1>Home</h1>
            <h2>{user ? `User ID: ${user.id}, Name: ${user.name}` : 'Loading user info...'}</h2>
            <div className='button-container'>
                <button onClick={goToResult} className='btn btn-primary'>Results</button>
                <br /><br />
                <button onClick={goToUser} className='btn btn-primary'>Users</button>
                <br /><br />
                {/* <button onClick={goToExam} className='btn btn-primary'>Exam</button> */}
                <button onClick={() => goToExam(user?.id)} className='btn btn-primary'>Exam</button>

            </div>
        </div>
    );
}

export default Home;