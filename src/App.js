import "./App.css";
import { useGlobalContext } from "./Context";
import Loading from "./Loading";
import Modal from "./Modal";
import Quizform from "./Quizform";
import "./App.css";

function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext();
  if (waiting) {
    return <Quizform />;
  }
  if (loading) {
    return <Loading />;
  }

  const { question, incorrect_answers, correct_answer } = questions[index];
  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }
  return (
    <main>
      <Modal/>
      <section className="quiz">
        <p>
          correct Answers: {correct}/{index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div>
            {answers.map((answer, index) => {
              return (
                <>
                  <button
                    key={index}
                    style={{ width: "60%", textAlign: "center" }}
                    className="btn btn-info answer-btn"
                    onClick={() => checkAnswer(correct_answer === answer)}
                    dangerouslySetInnerHTML={{ __html: answer }}
                  />
                </>
              );
            })}
          </div>
        </article>
        <button
          className="btn btn-warning btn-lg my-4"
          style={{
            width: "auto",
            marginRight: "0.5rem",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={nextQuestion}
        >
          NextQuestion
        </button>
      </section>
    </main>
  );
}

export default App;
