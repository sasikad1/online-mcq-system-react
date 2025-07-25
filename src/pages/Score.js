import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/Score.css'
import { useEffect, useState } from 'react'; // ✅ Fixed
import axios from 'axios'; // ✅ Also needed if not already imported

function Score() {
    const navigate = useNavigate();
    const location = useLocation();

    const [result, setResult] = useState(null); // ✅ Fixed

    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get('userId');
    const examId = searchParams.get('examId');

    // useEffect(() => {
    //     axios.post(`http://localhost:8081/api/results?userId=${userId}&examId=${examId}`)
    //         .then(response => {
    //             setResult(response.data);
    //             console.log("Received result:", result);
    //         })
    //         .catch(error => {
    //             console.error("Error fetching result:", error);
    //         });
    // }, [userId, examId]);

    useEffect(() => {
        const fetchResult = async () => {
            try {
                const response = await axios.post('http://localhost:8081/api/results', {
                    userId: userId,
                    examId: examId
                });
                setResult(response.data);
                console.log("Received result:", response.data);
            } catch (error) {
                console.error("Error fetching result:", error);
            }
        };

        if (userId && examId) {
            fetchResult();
        }
    }, [userId, examId]);


    const goToHome = () => {
        navigate('/home');
    };

    return (
        <div className='Score'>
            <div className="ScoreHeader">
                <h1>Score</h1>
                <button onClick={goToHome} className="btn btn-success">Home Page</button>
            </div>
            <div className='ScoreContent'>
                {result ? (
                    <table className="table table-bordered w-50 mx-auto mt-4">
                        <tbody>
                            <tr>
                                <th>Student Name</th>
                                <td>{result.userName}</td>
                            </tr>
                            <tr>
                                <th>Subject</th>
                                <td>{result.examName}</td>
                            </tr>
                            <tr>
                                <th>Score</th>
                                <td>{result.score}</td>
                            </tr>
                            <tr>
                                <th>Correct Answers</th>
                                <td>{result.correctAnswers ?? result.answers?.filter(a => a.correct).length}</td>
                            </tr>
                            <tr>
                                <th>Incorrect Answers</th>
                                <td>{result.incorrectAnswers ?? result.answers?.filter(a => !a.correct).length}</td>
                            </tr>
                            <tr>
                                <th>Submitted At</th>
                                <td>{new Date(result.submittedAt).toLocaleString()}</td>
                            </tr>
                        </tbody>
                    </table>
                ) : (
                    <p>Loading result...</p>
                )}
                <button className="btn btn-info" onClick={() => {
                    navigate("/exam")
                }}>Back to Exam</button>
            </div>
        </div>
    )
}
export default Score;
