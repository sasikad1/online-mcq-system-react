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
            <div className="ResultHeader">
                <h1>Result</h1>
                <button onClick={goToHome} className="btn btn-success">Home Page</button>
            </div>
            <div className='content'>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#Id</th>
                            <th scope="col">Student Name</th>
                            <th scope="col">Exam</th>
                            <th scope="col">Score</th>
                            <th scope="col">Submited Time</th>
                            <th scope="col">Correct answers</th>
                            <th scope="col">Incorrect answers</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            {/* <td>1</td> */}
                            <td>Sasika</td>
                            <td>java</td>
                            <td>5</td>
                            <td>11:30</td>
                            <td>Q1,Q2,Q3,Q4,Q5</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            {/* <td>2</td> */}
                            <td>Dilum</td>
                            <td>DBMS</td>
                            <td>4</td>
                            <td>5:00</td>
                            <td>Q1,Q2,Q4,Q5</td>
                            <td>Q3</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            {/* <td>3</td> */}
                            <td>Fire</td>
                            <td>Algo</td>
                            <td>3</td>
                            <td>3:50</td>
                            <td>Q2,Q4,Q5</td>
                            <td>Q1,Q3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Result;