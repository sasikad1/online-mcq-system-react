import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Exam.css'
import { useNavigate } from 'react-router-dom';
function Exam() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/home');
    };
    return (
        <div className='Exam'>
            <h1>Exam</h1>
            <button onClick={goToHome} className="btn btn-success">Home Page</button>
        </div>
    )
}

export default Exam;