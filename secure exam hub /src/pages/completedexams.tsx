export const CompletedExams = () => {
  const exams = [
    {
      title: "Computer Networks",
      score: "78%",
      feedback: "Good understanding of concepts"
    },
    {
      title: "Software Engineering",
      score: "85%",
      feedback: "Excellent performance"
    },
    {
      title: "Aptitude Test",
      score: "72%",
      feedback: "Needs improvement in speed"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>✅ Completed Exams</h2>

      {exams.map((exam, index) => (
        <div key={index} style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}>
          <h4>{exam.title}</h4>
          <p>Score: {exam.score}</p>
          <p>Feedback: {exam.feedback}</p>
        </div>
      ))}
    </div>
  );
};

export default CompletedExams;