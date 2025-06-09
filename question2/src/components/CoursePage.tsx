import { useParams } from "react-router-dom";
import { useStudentsListContext } from "../utils";
import { useNavigate } from "react-router-dom";

export default function CoursePage() {
  const students = useStudentsListContext();
  const { studentId, courseId } = useParams();
  const student = students[Number(studentId) - 1];
  const course = student.courses[Number(courseId) -1]
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/students/${studentId}`)
  }
  if (!student) {
    return <h1 className="student-not-found">Course not found!</h1>;
  }

  return (
    <div className="course">
      <h2>{course.name} Details</h2>
      <p className="course-detail-text">{course.details}</p>
      <button onClick={() => handleClick()}>⬅️ Back</button>
    </div>
  );
}
