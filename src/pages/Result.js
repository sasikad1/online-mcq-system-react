import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import '../css/Result.css'
function Result() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/home');
    };
    return (
        <div className='Result'>
            <h1>Result</h1>
            <button onClick={goToHome} className="btn btn-success">Home Page</button>
        </div>
    );
}

export default Result;