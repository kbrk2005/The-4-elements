export const UpcomingExams = () => {
  const exams = [
    { title: "Data Structures", date: "10 Feb 2026", time: "10:00 AM" },
    { title: "Operating Systems", date: "15 Feb 2026", time: "2:00 PM" },
    { title: "DBMS", date: "20 Feb 2026", time: "11:00 AM" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>📅 Upcoming Exams</h2>

      {exams.map((exam, index) => (
        <div key={index} style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}>
          <h4>{exam.title}</h4>
          <p>Date: {exam.date}</p>
          <p>Time: {exam.time}</p>
        </div>
      ))}
    </div>
  );
};

export default UpcomingExams;