import { useNavigate } from "react-router-dom";
import { useRef} from "react";

export default function HomePage() {
  const searchRef = useRef<HTMLInputElement | null>(null)
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/students")
  }

  const handleSearch = () => {
    if (
      searchRef.current?.value &&
      searchRef.current.value.length == 1 &&
      ["a", "b", "c", "d", "e", "f"].includes(
        searchRef.current.value.toLowerCase()
      )
    ) {
      const queryParams = new URLSearchParams({ grade: searchRef.current.value.toUpperCase() }).toString();
      navigate(`/search?${queryParams}`)
    } else if (searchRef.current?.value) {
      const queryParams = new URLSearchParams({
        name: searchRef.current.value,
      }).toString();
      navigate(`/search?${queryParams}`);
    }    
  };
  
    return (
      <div className="home-page">
        <h1>🎓Student Portal</h1>
        <div className="query-students">
          <button onClick={() => handleClick()} title="view all students">
            📚 View All Students
          </button>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSearch()
            }}
          >
            <label htmlFor="search">
              <input ref={searchRef} type="text" id="input" required />
            </label>
            <button>🔍 Search</button>
          </form>
        </div>
      </div>
    );
}