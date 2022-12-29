import React from "react";
import { useGlobalContext } from "./Context";
import "./App.css";

const Quizform = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <section className="quiz quiz-small">
      <form>
        <h2 style={{ marginBottom: "2rem" }}>Lets start</h2>
        <div className="mb-3">
          <label className="form-label" htmlFor="nofquestions">
            Number of Questions (max 10)
          </label>
          <input
            type="number"
            name="amount"
            className="form-content mx-1"
            value={quiz.amount}
            onChange={handleChange}
            min={1}
            max={50}
            style={{ width: "250px" }}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="category">
            Category
          </label>
          <select
            className="form-select"
            name="category"
            id="category"
            value={quiz.category}
            onChange={handleChange}
          >
            <option value="sports">Sports</option>
            <option value="history">History</option>
            <option value="politics">Politics</option>
            <option value="geography">Geography</option>
            <option value="books">Entertainment : Books</option>
            <option value="film">Entertainment : Film</option>
            <option value="music">Entertainment : Music</option>
            <option value="television">Entertainment : Television</option>
            <option value="computerscience">Computer Science</option>
            <option value="maths">Mathematics</option>
            <option value="mythology">Mythology</option>
            <option value="celebrities">Celebrities</option>
            <option value="animals">Animals</option>
            <option value="vehicles">Automobiles</option>
            <option value="comics">Entertainment : Comics</option>
            <option value="cartoons">Entertainment : cartoons</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="difficulty">
            Difficulty
          </label>
          <select
            className="form-select"
            name="difficulty"
            id="difficulty"
            value={quiz.difficulty}
            onChange={handleChange}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        {error && (
          <p className="error">
            Can't generate questions,please try other options
          </p>
        )}
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary start-btn"
        >
          Start
        </button>
      </form>
    </section>
  );
};
export default Quizform;
