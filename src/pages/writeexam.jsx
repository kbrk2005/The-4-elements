import { useState } from "react";
import { useNavigate } from "react-router-dom";

const WriteExam = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      question: "What is the core of an Operating System?",
      options: ["Shell", "Kernel", "Compiler", "BIOS"],
      correct: "Kernel",
    },
    {
      question: "Which scheduling algorithm is preemptive?",
      options: ["FCFS", "SJF", "Round Robin", "Priority"],
      correct: "Round Robin",
    },
    {
      question: "Which system call creates a process?",
      options: ["exec()", "fork()", "wait()", "exit()"],
      correct: "fork()",
    },
  ];

  const handleSubmit = () => {
    let correct = 0;

    questions.forEach((q, i) => {
      if (answers[i] === q.correct) correct++;
    });

    const score = Math.round(
      (correct / questions.length) * 100
    );

    const newResult = {
      title: "Operating Systems",
      score,
    };

    const completed =
      JSON.parse(localStorage.getItem("completedExams")) ||
      [];

    completed.push(newResult);

    localStorage.setItem(
      "completedExams",
      JSON.stringify(completed)
    );

    localStorage.setItem(
      "latestResult",
      JSON.stringify(newResult)
    );

    navigate("/dashboard");
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">
        Live Exam – Operating Systems
      </h2>

      {questions.map((q, i) => (
        <div key={i} className="mb-6">
          <p className="font-medium mb-2">
            {i + 1}. {q.question}
          </p>

          {q.options.map((opt) => (
            <label key={opt} className="block mb-1">
              <input
                type="radio"
                name={`q${i}`}
                className="mr-2"
                onChange={() =>
                  setAnswers({ ...answers, [i]: opt })
                }
              />
              {opt}
            </label>
          ))}
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-6 py-2 rounded"
      >
        Submit Exam
      </button>
    </div>
  );
};

export default WriteExam;