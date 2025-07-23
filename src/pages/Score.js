import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import '../css/Score.css'
function Score() {
    const navigate = useNavigate();

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
                <table class="table table-bordered w-50 mx-auto mt-4">
                    <tbody>
                        <tr>
                            <th>Student Name</th>
                            <td>Sasika Dilum</td>
                        </tr>
                        <tr>
                            <th>Subject</th>
                            <td>Mathematics</td>
                        </tr>
                        <tr>
                            <th>Score</th>
                            <td>85%</td>
                        </tr>
                        <tr>
                            <th>Correct Answers</th>
                            <td>17</td>
                        </tr>
                        <tr>
                            <th>Incorrect Answers</th>
                            <td>3</td>
                        </tr>
                        <tr>
                            <th>Submitted At</th>
                            <td>2025-07-23 10:30 AM</td>
                        </tr>
                    </tbody>
                </table>


            </div>
        </div>
    )
}
export default Score;