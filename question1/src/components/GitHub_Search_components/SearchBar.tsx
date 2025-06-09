import type { SortBy, Order, PerPage } from "./utils";
import { Link } from "react-router-dom";

type SearchBarProps = {
  page: number;
  searchRef: React.RefObject<HTMLInputElement | null>;
  setSearch: (search: string) => void;
  setPerPage: (input: PerPage) => void;
  setOrder: (input: Order) => void;
  setSortBy: (input: SortBy) => void;
  setPage: (input: number) => void;
};
export default function SearchBar({searchRef, setSearch, setPerPage, setOrder, setSortBy/* , setPage, page */}: SearchBarProps) {
    return (
      <>
        <Link to="/">Home</Link>
        <Link to="/contact-book">Contact</Link>
        <h1 className="search-header">GitHub Repository Search</h1>
        <form
          className="search-form"
          onSubmit={(e) => {
            e.preventDefault();
            if (searchRef.current?.value) setSearch(searchRef.current.value);
          }}
        >
          <label htmlFor="search">
            <input
              className="search-input"
              ref={searchRef}
              type="text"
              defaultValue={"nextjs"}
            />
          </label>
          <div>
            <select
              name="items-per-page"
              id="items-per-page"
              onChange={(e) => {
                if (
                  e.target.value === "10" ||
                  e.target.value === "20" ||
                  e.target.value === "50"
                ) {
                  setPerPage(e.target.value);
                }
              }}
            >
              <option value="10" defaultChecked>
                Items per page 10
              </option>
              <option value="20" defaultChecked>
                Items per page 20
              </option>
              <option value="50" defaultChecked>
                Items per page 50
              </option>
            </select>

            <select
              name="sort-by"
              id="sort-by"
              onChange={(e) => {
                if (
                  e.target.value === "" ||
                  e.target.value === "stars" ||
                  e.target.value === "updated"
                )
                  setSortBy(e.target.value);
              }}
            >
              <option value="" defaultChecked>
                Best Match
              </option>
              <option value="stars" defaultChecked>
                Stars
              </option>
              <option value="updated" defaultChecked>
                Most recently updated
              </option>
            </select>

            <select
              name="order"
              id="order"
              onChange={(e) => {
                if (e.target.value === "asc" || e.target.value === "desc")
                  setOrder(e.target.value);
              }}
            >
              <option value="asc" defaultChecked>
                Order Ascending
              </option>
              <option value="desc">Order Descending</option>
            </select>
          </div>
        </form>
      </>
    );
}