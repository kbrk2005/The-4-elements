import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Feedback = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">Exam Completed ✅</h1>
      <p className="mb-6 text-muted-foreground">
        Your exam has been submitted successfully.
      </p>

      <Button onClick={() => navigate("/")}>
        Go to Main Page
      </Button>
    </div>
  );
};

export default Feedback;