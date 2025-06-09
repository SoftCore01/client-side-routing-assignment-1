import { useSearchParams } from "react-router-dom";
import { useStudentsListContext } from "../utils";
import Card from "./Card";

export default function SearchResults() {
    const students = useStudentsListContext()
    const [searchParams] = useSearchParams();
    const filter = searchParams.get("grade") || searchParams.get("name");

    if (filter) {
        const filteredStudents = students.filter(
          (student) =>
            student.grade == filter || student.name.startsWith(filter)
        );
        return (
          <div className="student-page">
            <h2>Search Results</h2>
            <div className="student-card-container">
              {filteredStudents.map((student) => {
                console.log();
                return (
                  <Card
                    key={student.id}
                    studentId={student.id}
                    name={student.name}
                    extra_text={student.grade}
                  />
                );
              })}
            </div>
          </div>
        );
    }
  
}
