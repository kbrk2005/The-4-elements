const CompletedExams = () => {
  const completedExams = [
    {
      title: "Software Engineering",
      totalQuestions: 5,
      feedback: [
        {
          question: "What is SDLC?",
          selected: "Software Development Life Cycle",
          correct: "Software Development Life Cycle",
        },
        {
          question: "Which model is iterative?",
          selected: "Spiral",
          correct: "Spiral",
        },
        {
          question: "Which is not an SDLC model?",
          selected: "Agile",
          correct: "Agile",
        },
        {
          question: "What does UML stand for?",
          selected: "Unified Modeling Language",
          correct: "Unified Modeling Language",
        },
        {
          question: "Which phase comes first in SDLC?",
          selected: "Design",
          correct: "Requirement Analysis",
        },
      ],
    },
    {
      title: "Data Structures",
      totalQuestions: 5,
      feedback: [
        {
          question: "Which data structure follows FIFO?",
          selected: "Queue",
          correct: "Queue",
        },
        {
          question: "Time complexity of binary search?",
          selected: "O(log n)",
          correct: "O(log n)",
        },
        {
          question: "Which structure uses LIFO?",
          selected: "Stack",
          correct: "Stack",
        },
        {
          question: "Best structure for recursion?",
          selected: "Stack",
          correct: "Stack",
        },
        {
          question: "Binary tree max children?",
          selected: "3",
          correct: "2",
        },
      ],
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">
        Completed Exams
      </h2>

      {completedExams.map((exam, index) => {
        const correctCount = exam.feedback.filter(
          (q) => q.selected === q.correct
        ).length;

        const wrongCount =
          exam.totalQuestions - correctCount;

        const score = Math.round(
          (correctCount / exam.totalQuestions) * 100
        );

        return (
          <div
            key={index}
            className="bg-white border rounded-xl p-6 mb-8 shadow-sm"
          >
            {/* Exam Summary */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">
                {exam.title}
              </h3>
              <span className="text-sm font-medium text-blue-600">
                Score: {score}%
              </span>
            </div>

            <div className="flex gap-6 text-sm mb-6">
              <span>Total Questions: {exam.totalQuestions}</span>
              <span className="text-green-700">
                Correct: {correctCount}
              </span>
              <span className="text-red-700">
                Wrong: {wrongCount}
              </span>
            </div>

            {/* Feedback */}
            <div className="space-y-4">
              {exam.feedback.map((item, idx) => {
                const isCorrect =
                  item.selected === item.correct;

                return (
                  <div
                    key={idx}
                    className={`border rounded-lg p-4 ${
                      isCorrect
                        ? "border-green-300 bg-green-50"
                        : "border-red-300 bg-red-50"
                    }`}
                  >
                    <p className="font-medium mb-2">
                      Q{idx + 1}. {item.question}
                    </p>

                    <p className="text-sm">
                      <strong>Your Answer:</strong>{" "}
                      <span
                        className={
                          isCorrect
                            ? "text-green-700"
                            : "text-red-700"
                        }
                      >
                        {item.selected}
                      </span>
                    </p>

                    {!isCorrect && (
                      <p className="text-sm">
                        <strong>Correct Answer:</strong>{" "}
                        <span className="text-green-700">
                          {item.correct}
                        </span>
                      </p>
                    )}

                    <p
                      className={`text-sm font-semibold mt-1 ${
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
          </div>
        );
      })}
    </div>
  );
};

export default CompletedExams;