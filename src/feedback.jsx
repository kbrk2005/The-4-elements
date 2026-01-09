const Feedback = () => {
  const result = JSON.parse(
    localStorage.getItem("latestResult")
  );

  // Hardcoded feedback for now (matches live exam)
  const feedback = [
    {
      question: "What is the core of an Operating System?",
      selected: "Kernel",
      correct: "Kernel",
    },
    {
      question: "Which scheduling algorithm is preemptive?",
      selected: "FCFS",
      correct: "Round Robin",
    },
    {
      question: "Which system call creates a process?",
      selected: "fork()",
      correct: "fork()",
    },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">
        Exam Feedback
      </h2>

      {result && (
        <p className="mb-6 text-gray-600">
          <strong>{result.title}</strong> — Score:{" "}
          {result.score}%
        </p>
      )}

      {feedback.map((q, i) => {
        const isCorrect = q.selected === q.correct;

        return (
          <div
            key={i}
            className={`border rounded-lg p-4 mb-4 ${
              isCorrect
                ? "bg-green-50 border-green-300"
                : "bg-red-50 border-red-300"
            }`}
          >
            <p className="font-medium mb-2">
              Q{i + 1}. {q.question}
            </p>

            <p className="text-sm">
              Your Answer:{" "}
              <span
                className={
                  isCorrect
                    ? "text-green-700"
                    : "text-red-700"
                }
              >
                {q.selected}
              </span>
            </p>

            {!isCorrect && (
              <p className="text-sm">
                Correct Answer:{" "}
                <span className="text-green-700">
                  {q.correct}
                </span>
              </p>
            )}

            <p
              className={`mt-1 font-semibold ${
                isCorrect
                  ? "text-green-700"
                  : "text-red-700"
              }`}
            >
              {isCorrect ? "✔ Correct" : "✘ Wrong"}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Feedback;