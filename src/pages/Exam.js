import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Exam.css'
import { useNavigate } from 'react-router-dom';
function Exam() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/home');
    };
    const goToTackExam = () => {
        navigate('/takeExam')
    }
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
                        <tr>
                            <th scope="row">1</th>
                            {/* <td>1</td> */}
                            <td>java</td>
                            <td>jjjjjjjjjj</td>
                            <td>
                                <button onClick={goToTackExam} className='btn btn-warning'>Start Exam</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            {/* <td>2</td> */}
                            <td>DBMS</td>
                            <td>DDDDDDDDD</td>
                            <td>
                                <button onClick={goToTackExam} className='btn btn-warning'>Start Exam</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            {/* <td>3</td> */}
                            <td>Algo</td>
                            <td>AAAAAAAA</td>
                            <td>
                                <button onClick={goToTackExam} className='btn btn-warning'>Start Exam</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Exam;