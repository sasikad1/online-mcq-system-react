import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import '../css/TakeExam.css'
function TakeExam() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/home');
    };
    const goToScore = () => {
        navigate('/score');
    }
    return (
        <div className="TakeExam">
            <div className="TackExamHeader">
                <h1>Subject Exam</h1>
                <button onClick={goToHome} className="btn btn-success">Home Page</button>
            </div>
            <div className="tackExamCOntent">
                <div className='bg-light p-4'>
                    <div classNameName="container mt-5">
                        <div classNameName="card shadow">
                            <div classNameName="card-body">
                                <h5 classNameName="card-title">1. What is the capital of France?</h5>
                                <form>
                                    <div classNameName="form-check mt-3">
                                        <input classNameName="form-check-input" type="radio" name="question1" id="option1" value="A" />
                                        <label classNameName="form-check-label" for="option1">
                                            A. Berlin
                                        </label>
                                    </div>
                                    <div classNameName="form-check">
                                        <input className="form-check-input" type="radio" name="question1" id="option2" value="B" />
                                        <label className="form-check-label" for="option2">
                                            B. Madrid
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="question1" id="option3" value="C" />
                                        <label className="form-check-label" for="option3">
                                            C. Paris
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="question1" id="option4" value="D" />
                                        <label className="form-check-label" for="option4">
                                            D. Rome
                                        </label>
                                    </div>

                                    <button type="submit" className="btn btn-primary mt-4">Next Answer</button>
                                </form>
                                <button onClick={goToScore} type="submit" className="btn btn-success mt-4">Submit Answer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TakeExam;