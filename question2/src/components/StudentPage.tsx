import { useParams } from "react-router-dom";
import { useStudentsListContext } from "../utils";
import Card from "./Card";

export default function StudentPage() {
    const students = useStudentsListContext()
    const { studentId } = useParams();
    const student = students[Number(studentId)-1];

    if (!student) {
        return <h1 className="student-not-found">Student not found!</h1>;
    }
    return (
        <div className="student-page">
            <h2>Courses for {student.name}</h2>
            <div className="course-container">
                {student.courses.map((course) => <Card key={course.id} name={course.name} studentId={student.id} courseId={course.id}/>)}
            </div>
        </div>
    )
}