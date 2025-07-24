import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import '../css/TakeExam.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function TakeExam() {
    const { id } = useParams(); // exam id
    const location = useLocation();
    const navigate = useNavigate();

    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get('userId');

    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [exam, setExam] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8081/api/questions/exam/${id}`)
            .then(response => {
                setQuestions(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error("Error fetching questions:", error);
            });

        axios.get(`http://localhost:8081/api/exams/${id}`)
            .then(response => {
                setExam(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error("Error fetching exam:", error);
            });
    }, [id]);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleNext = () => {
        const currentQuestion = questions[currentIndex];
        if (!selectedOption) {
            alert("Please select an answer");
            return;
        }

        const payload = {
            userId: Number(userId),
            questionId: currentQuestion.id,
            selectedOption: selectedOption
        };


        axios.post("http://localhost:8081/api/answers", payload)
            .then(() => {
                setSelectedOption('');
                setCurrentIndex(currentIndex + 1);
                console.log(payload.selectedOption);
            })
            .catch(error => {
                console.error("Error submitting answer:", error);
                alert("Error submitting answer.");
            });
    };



    const handleGetScore = () => {
    const currentQuestion = questions[currentIndex];
    if (!selectedOption) {
        alert("Please select an answer");
        return;
    }

    const payload = {
        userId: Number(userId),
        questionId: currentQuestion.id,
        selectedOption: selectedOption
    };

    axios.post("http://localhost:8081/api/answers", payload)
        .then(() => {
            navigate(`/score?userId=${userId}&examId=${id}`);
            // navigate(`/score?userId=${userId}`);
            console.log(payload.selectedOption)
        })
        .catch(error => {
            console.error("Error submitting final answer:", error);
            alert("Error submitting final answer.");
        });
};



    const currentQuestion = questions[currentIndex];

    return (
        <div className="TakeExam">
            <div className="TackExamHeader">
                <h1>{exam?.title || 'Loading...'} Exam</h1>
                <h3>User ID: {userId}</h3>
                <button onClick={() => navigate('/home')} className="btn btn-success">Home Page</button>
            </div>

            <div className="tackExamCOntent bg-light p-4">
                <div className="container mt-5">
                    {currentQuestion ? (
                        <div className="card shadow mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{currentIndex + 1}. {currentQuestion.questionText}</h5>
                                {currentQuestion.options.map((option, index) => (
                                    <div className="form-check mt-2" key={index}>
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="answer"
                                            value={option}
                                            checked={selectedOption === option}
                                            onChange={handleOptionChange}
                                        />
                                        <label className="form-check-label">
                                            {String.fromCharCode(65 + index)}. {option}
                                        </label>
                                    </div>
                                ))}
                                {currentIndex < questions.length - 1 ? (
                                    <button onClick={handleNext} className="btn btn-primary mt-4">Next Answer</button>
                                ) : (
                                    <button onClick={handleGetScore} className="btn btn-success mt-4">Get Score</button>
                                )}
                            </div>
                        </div>
                    ) : (
                        <p>Loading questions...</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TakeExam;
