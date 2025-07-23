import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Home.css'
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();

    const goToResult = () => {
        navigate('/result');
    };
    const goToUser = () => {
        navigate('/user')
    };
    const goToExam = () => {
        navigate('/exam')
    };
    return (
        <div className='Home'>
            <h1>Home</h1>
            <button onClick={goToResult} className='btn btn-primary'>Results</button>
            <br /><br />
            <button onClick={goToUser} className='btn btn-primary'>Users</button>
            <br /><br />
            <button onClick={goToExam} className='btn btn-primary'>Exam</button>
        </div>
    );
}

export default Home;