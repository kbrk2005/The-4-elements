import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  CheckCircle,
  Trophy,
  Clock,
  FileText,
  Bell,
  PlayCircle,
} from "lucide-react";

/* ===== STATIC DATA (SIMULATED BACKEND) ===== */
const upcomingExams = [
  { subject: "Data Structures", date: "10 Feb 2026", time: "10:00 AM" },
  { subject: "Operating Systems", date: "15 Feb 2026", time: "2:00 PM" },
  { subject: "DBMS", date: "20 Feb 2026", time: "11:00 AM" },
];

const completedExams = [
  {
    subject: "Computer Networks",
    score: "78%",
    feedback: "Good understanding of concepts",
  },
  {
    subject: "Software Engineering",
    score: "85%",
    feedback: "Excellent performance",
  },
];

const StudentDashboard = () => {
  const [displayName, setDisplayName] = useState("Student");
  const navigate = useNavigate();

  /* ===== LOAD USER NAME ===== */
  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (userData) {
      const user = JSON.parse(userData);
      if (user.name) setDisplayName(user.name);
      else if (user.email) setDisplayName(user.email.split("@")[0]);
    } else {
      const email = localStorage.getItem("email");
      if (email) setDisplayName(email.split("@")[0]);
    }
  }, []);

  /* ===== AVERAGE SCORE CALCULATION ===== */
  const averageScore =
    completedExams.length === 0
      ? 0
      : Math.round(
          completedExams.reduce(
            (sum, exam) => sum + parseInt(exam.score),
            0
          ) / completedExams.length
        );

  /* ===== SIGN OUT HANDLER ===== */
  const handleSignOut = () => {
    // Save progress
    const progress = {
      completedExams,
      averageScore,
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem(
      "studentProgress",
      JSON.stringify(progress)
    );

    // Clear login/session data
    localStorage.removeItem("authToken");
    localStorage.removeItem("isLoggedIn");

    // Redirect to login
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* ===== SIDEBAR ===== */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="p-6 text-xl font-bold">ExamShield</div>

        <nav className="flex-1 px-4 space-y-2">
          <div className="sidebar-item active">Dashboard</div>
          <div className="sidebar-item">My Exams</div>
          <div className="sidebar-item">Results</div>
          <div className="sidebar-item">Schedule</div>
          <div className="sidebar-item">Notifications</div>
          <div className="sidebar-item">Profile</div>
        </nav>

        <div className="p-4 text-sm text-gray-300">
          Signed in as student
          <div
            className="mt-2 cursor-pointer text-white"
            onClick={handleSignOut}
          >
            Sign Out
          </div>
        </div>
      </aside>

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold">
              Welcome back, {displayName}! 👋
            </h1>
            <p className="text-gray-500">
              Here's what's happening with your exams today.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Bell className="text-gray-500" />
            <div className="w-9 h-9 rounded-full bg-teal-500 text-white flex items-center justify-center">
              {displayName.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>

        {/* ===== STATS ===== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div
            className="stat-card cursor-pointer"
            onClick={() => navigate("/upcoming-exams")}
          >
            <div className="icon bg-blue-100 text-blue-600">
              <Calendar />
            </div>
            <h2 className="text-2xl font-bold">
              {upcomingExams.length}
            </h2>
            <p className="text-gray-500">Upcoming Exams</p>
          </div>

          <div
            className="stat-card cursor-pointer"
            onClick={() => navigate("/completed-exams")}
          >
            <div className="icon bg-green-100 text-green-600">
              <CheckCircle />
            </div>
            <h2 className="text-2xl font-bold">
              {completedExams.length}
            </h2>
            <p className="text-gray-500">Completed</p>
          </div>

          <div className="stat-card">
            <div className="icon bg-yellow-100 text-yellow-600">
              <Trophy />
            </div>
            <h2 className="text-2xl font-bold">
              {averageScore}%
            </h2>
            <p className="text-gray-500">Average Score</p>
          </div>

          <div className="stat-card">
            <div className="icon bg-orange-100 text-orange-600">
              <Clock />
            </div>
            <h2 className="text-2xl font-bold">0</h2>
            <p className="text-gray-500">In Progress</p>
          </div>
        </div>

        {/* ===== BOTTOM ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Available Exams */}
          <div className="col-span-2 card">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Available Exams</h3>
              <span className="text-blue-600 cursor-pointer">
                View All →
              </span>
            </div>

            <div className="flex items-center justify-between border rounded-lg p-4">
              <div>
                <h4 className="font-medium">Operating Systems</h4>
                <p className="text-sm text-gray-500">
                  Scheduled now • Duration: 60 mins
                </p>
              </div>

              <button
                onClick={() => navigate("/write-exam")}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                <PlayCircle size={18} />
                Write Exam
              </button>
            </div>
          </div>

          {/* Recent Results */}
          <div className="card">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Recent Results</h3>
              <span className="text-blue-600 cursor-pointer">
                View All
              </span>
            </div>

            <div className="empty-state">
              <Trophy size={48} className="text-gray-300" />
              <p className="mt-2 text-gray-500">
                No results yet.
              </p>
              <p className="text-sm text-gray-400">
                Complete an exam to see your results.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;