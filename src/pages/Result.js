import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import '../css/Result.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
function Result() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/home');
    };

    const [results, setResult] = useState(null);
    useEffect(() => {
        axios.get("http://localhost:8081/api/results")
            .then(function (response) {
                setResult(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

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
                        {
                            results && results.map((row) => (
                                <tr key={row.id}>
                                    <th scope='row'>{row.id}</th>
                                    <td>{row.userName}</td>
                                    <td>{row.examName}</td>
                                    <td>{row.score}</td>
                                    <td>{row.submittedAt}</td>
                                    <td>{row.correctQuestions && row.correctQuestions.join('|| ')}</td>
                                    <td>{row.incorrectQuestions && row.incorrectQuestions.join('|| ')}</td>
                                </tr>
                            ))

                        }

                        {
                            results && (
                                <tr className="table-secondary">
                                    <td colSpan="7" className="text-center">
                                        Total Results: {results.length}
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Result;