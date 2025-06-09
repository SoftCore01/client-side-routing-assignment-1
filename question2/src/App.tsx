import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import HomePage from "./components/HomePage"
import StudentsPage from "./components/StudentsPage"
import { StudentsListContext } from "./utils"
import StudentPage from "./components/StudentPage"
import CoursePage from "./components/CoursePage"
import SearchResults from "./components/SearchResults"

const student = [
  {
    id: 1, 
    name: "Alice",
    grade: "A",
    courses: [
      {
        id: 1,
        name: "Mathematics",
        details: "Algebra"
      },
      {
        id: 2,
        name: "Biology",
        details: "Study of Life"
      },
    ]
  },
  {
    id: 2, 
    name: "Bob",
    grade: "B",
    courses: [
      {
        id: 1,
        name: "Mathematics",
        details: "Algebra"
      },
      {
        id: 2,
        name: "Biology",
        details: "Study of Life"
      },
    ]
  },
  {
    id: 3, 
    name: "Cynthia",
    grade: "C",
    courses: [
      {
        id: 1,
        name: "Mathematics",
        details: "Algebra"
      },
      {
        id: 2,
        name: "Biology",
        details: "Study of Life"
      },
    ]
  },
  {
    id: 4, 
    name: "Denny",
    grade: "A",
    courses: [
      {
        id: 1,
        name: "Mathematics",
        details: "Algebra"
      },
      {
        id: 2,
        name: "Biology",
        details: "Study of Life"
      },
    ]
  },
]

function App() {
  
  return (
    <>
      <StudentsListContext.Provider value={student}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/students" element={<StudentsPage />} />
              <Route path="/students/:studentId" element={<StudentPage />} />
              <Route
                path="/students/:studentId/courses/:courseId"
                element={<CoursePage />}
              />
              <Route path="/search" element={<SearchResults/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </StudentsListContext.Provider>
    </>
  );
}

export default App
