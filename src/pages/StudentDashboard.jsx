import { useNavigate } from "react-router-dom";
import {
  Calendar,
  CheckCircle,
  Trophy,
  Clock,
  Bell,
  LogOut,
  FileText,
  PlayCircle,
} from "lucide-react";

/* INITIAL COMPLETED EXAMS */
const initialCompletedExams = [
  { title: "Software Engineering", score: 78 },
  { title: "Data Structures", score: 85 },
];

const upcomingExams = [
  { title: "Operating Systems", date: "Today", duration: "60 mins" },
  { title: "DBMS", date: "Tomorrow", duration: "45 mins" },
  { title: "Computer Networks", date: "20 Feb", duration: "60 mins" },
];

const StudentDashboard = () => {
  const navigate = useNavigate();

  const storedCompleted = JSON.parse(
    localStorage.getItem("completedExams")
  );

  if (!storedCompleted) {
    localStorage.setItem(
      "completedExams",
      JSON.stringify(initialCompletedExams)
    );
  }

  const completedExams =
    JSON.parse(localStorage.getItem("completedExams")) || [];

  const latestResult = JSON.parse(
    localStorage.getItem("latestResult")
  );

  const averageScore =
    completedExams.length > 0
      ? Math.round(
          completedExams.reduce(
            (sum, exam) => sum + exam.score,
            0
          ) / completedExams.length
        )
      : 0;

  const handleSignOut = () => {
    localStorage.clear();
    navigate("/auth");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
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
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold">
              Welcome back, Student! 👋
            </h1>
            <p className="text-gray-500">
              Here's what's happening with your exams today.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Bell className="text-gray-500" />
            <button
              onClick={handleSignOut}
              className="flex items-center gap-1 text-sm text-red-600"
            >
              <LogOut size={16} />
              Sign Out
            </button>
          </div>
        </div>

        {/* TOP TABS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div
            onClick={() => navigate("/upcoming-exams")}
            className="cursor-pointer bg-white border rounded-xl p-6 shadow-sm"
          >
            <Calendar />
            <h2 className="text-2xl font-bold">
              {upcomingExams.length}
            </h2>
            <p className="text-gray-500">Upcoming Exams</p>
          </div>

          <div
            onClick={() => navigate("/completed-exams")}
            className="cursor-pointer bg-white border rounded-xl p-6 shadow-sm"
          >
            <CheckCircle />
            <h2 className="text-2xl font-bold">
              {completedExams.length}
            </h2>
            <p className="text-gray-500">Completed</p>
          </div>

          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <Trophy />
            <h2 className="text-2xl font-bold">
              {averageScore}%
            </h2>
            <p className="text-gray-500">Average Score</p>
          </div>

          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <Clock />
            <h2 className="text-2xl font-bold">0</h2>
            <p className="text-gray-500">In Progress</p>
          </div>
        </div>

        {/* BIG TABS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Available Exams */}
          <div className="lg:col-span-2 bg-white border rounded-xl p-6 shadow-sm">
            <div className="flex gap-4 bg-gray-50 p-4 rounded-lg">
              <FileText className="text-blue-600" />
              <div>
                <h4 className="font-medium">
                  Operating Systems
                </h4>
                <p className="text-sm text-gray-500">
                  Scheduled now • 60 mins
                </p>
              </div>
            </div>
          </div>

          {/* Live Exam */}
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">
              Live Exam
            </h3>

            <div className="flex items-center gap-4">
              <PlayCircle className="text-green-600" />
              <div>
                <h4 className="font-medium">
                  Operating Systems
                </h4>

                <button
                  onClick={() => navigate("/exam")}
                  className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg"
                >
                  Write Exam
                </button>
              </div>
            </div>
          </div>

          {/* ✅ RECENT RESULTS (NOW CLICKABLE) */}
          <div
            onClick={() => navigate("/feedback")}
            className="cursor-pointer bg-white border rounded-xl p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-4">
              Recent Results
            </h3>

            {latestResult ? (
              <div>
                <p className="font-medium">
                  {latestResult.title}
                </p>
                <p className="text-sm text-gray-500">
                  Score: {latestResult.score}%
                </p>
              </div>
            ) : (
              <p className="text-gray-500 text-sm">
                No results yet.
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;