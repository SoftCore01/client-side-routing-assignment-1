import { useStudentsListContext } from "../utils";
import Card from "./Card";

export default function StudentPage() {
  const students = useStudentsListContext();

  return (
    <div className="student-page">
      <h2>All Students</h2>
      <div className="student-card-container">
        {students.map((student) => {
          console.log()
          return (<Card key={student.id} studentId={student.id} name={student.name} extra_text={student.grade}/>)})}
      </div>
    </div>
  )
}