import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Exam.css'
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
function Exam() {
    const navigate = useNavigate();
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get('userId');

    const goToHome = () => {
        navigate('/home');
    };
    const goToTakeExam = (examId) => {
        navigate(`/takeExam/${examId}?userId=${userId}`);
    };
    const [exams, setExam] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8081/api/exams")
            .then(function (response) {
                setExam(response.data);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (

        <div className='Exam'>
            <div className="ExamHeader">
                <h1>Exam</h1>
                <button onClick={goToHome} className="btn btn-success">Home Page</button>
            </div>
            <div className='content'>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#Id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            exams && exams.map((row) => (
                                < tr key={row.id}>
                                    <th scope="row">{row.id}</th>
                                    <td>{row.title}</td>
                                    <td>{row.description}</td>
                                    <td>
                                        <button onClick={() => goToTakeExam(row.id)} className='btn btn-warning'>
                                            Start Exam
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Exam;