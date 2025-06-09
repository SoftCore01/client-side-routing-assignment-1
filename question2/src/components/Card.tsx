import { useNavigate } from "react-router-dom";

type CardProps = {
    name: string;
    extra_text?: string;
    studentId: number;
    courseId?: number;
}

export default function Card({name, extra_text, studentId, courseId}: CardProps) {
    const navigate = useNavigate()

    const handleClick = () => {
        if (extra_text) {
            navigate(`/students/${studentId}`);
        } else {
            navigate(`/students/${studentId}/courses/${courseId}`);
        }
        
    }

    

    return (
      <div className="card">
        <p className="card-text">
          <span className="card-span-text">{name}</span>
          {extra_text ? `(Grade ${extra_text})` : null}
        </p>
        {extra_text ? (
          <button onClick={() => handleClick()}>View Courses</button>
        ) : (
          <button onClick={() => handleClick()}>View Details</button>
        )}
      </div>
    );
}