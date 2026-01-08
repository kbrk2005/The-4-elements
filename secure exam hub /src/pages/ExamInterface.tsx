import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Clock,
  ChevronLeft,
  ChevronRight,
  Send,
} from "lucide-react";

const ExamInterface = () => {
  const navigate = useNavigate();
  const { examId } = useParams();

  const questions = [
    {
      id: 1,
      text: "Which data structure uses FIFO order?",
      type: "mcq",
      options: ["Stack", "Queue", "Tree", "Graph"],
    },
    {
      id: 2,
      text: "What is the time complexity of binary search?",
      type: "mcq",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    },
    {
      id: 3,
      text: "Explain normalization in DBMS.",
      type: "subjective",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<any>({});
  const [timeLeft, setTimeLeft] = useState(1800);

  /* ============================
     RESUME ONLY IF NOT COMPLETED
  ============================ */
  useEffect(() => {
    const completed = localStorage.getItem("examCompleted");
    if (completed === "true") return;

    const saved = localStorage.getItem("examProgress");
    if (saved) {
      const data = JSON.parse(saved);
      setCurrentQuestion(data.currentQuestion);
      setAnswers(data.answers);
      setTimeLeft(data.timeLeft);
    }
  }, []);

  /* ============================
     SAVE PROGRESS CONTINUOUSLY
  ============================ */
  useEffect(() => {
    if (localStorage.getItem("examCompleted") === "true") return;

    localStorage.setItem(
      "examProgress",
      JSON.stringify({
        currentQuestion,
        answers,
        timeLeft,
      })
    );
  }, [currentQuestion, answers, timeLeft]);

  /* ============================
     TIMER
  ============================ */
  useEffect(() => {
    if (localStorage.getItem("examCompleted") === "true") return;

    const timer = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  /* ============================
     SUBMIT EXAM (FINAL)
  ============================ */
  const submitExam = () => {
    localStorage.removeItem("examProgress");
    localStorage.setItem("examCompleted", "true");
    navigate("/feedback");
  };

  return (
    <div className="min-h-screen bg-background p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <Shield className="text-primary" />
          <h2 className="text-xl font-semibold">Secure Exam</h2>
        </div>

        <div className="flex items-center gap-4">
          <Clock />
          <span>
            {Math.floor(timeLeft / 60)}:
            {String(timeLeft % 60).padStart(2, "0")}
          </span>

          <Button variant="outline" onClick={() => navigate("/")}>
            Go to Main
          </Button>
        </div>
      </div>

      {/* QUESTION */}
      <div className="bg-card p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">
          Question {currentQuestion + 1} of {questions.length}
        </h3>

        <p className="mb-4">{questions[currentQuestion].text}</p>

        {questions[currentQuestion].type === "mcq" ? (
          <div className="space-y-2">
            {questions[currentQuestion].options!.map((opt) => (
              <Button
                key={opt}
                variant={answers[currentQuestion] === opt ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => handleAnswer(opt)}
              >
                {opt}
              </Button>
            ))}
          </div>
        ) : (
          <textarea
            className="w-full border rounded p-2"
            rows={5}
            value={answers[currentQuestion] || ""}
            onChange={(e) => handleAnswer(e.target.value)}
          />
        )}
      </div>

      {/* NAVIGATION */}
      <div className="flex justify-between mt-6">
        <Button
          disabled={currentQuestion === 0}
          onClick={() => setCurrentQuestion((q) => q - 1)}
        >
          <ChevronLeft /> Previous
        </Button>

        {currentQuestion === questions.length - 1 ? (
          <Button onClick={submitExam}>
            <Send /> Submit Exam
          </Button>
        ) : (
          <Button onClick={() => setCurrentQuestion((q) => q + 1)}>
            Next <ChevronRight />
          </Button>
        )}
      </div>
    </div>
  );
};

export default ExamInterface;