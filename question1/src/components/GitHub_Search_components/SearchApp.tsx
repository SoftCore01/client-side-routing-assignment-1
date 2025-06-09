import "./search.css";
import { useState, useEffect, useRef } from "react";
import type { RepoData, SortBy, Order, PerPage } from "./utils";
import SearchBar from "./SearchBar";
import SearhCard from "./SearchCard";

export default function SearchApp() {
  const [repoData, setRepoData] = useState<RepoData[]>([]);
  const [search, setSearch] = useState("nextjs");
  const [page, setPage] = useState(1);
  const [itemsPerPage, setPerPage] = useState<PerPage>("10");
  const [sortBy, setSortBy] = useState<SortBy>("");
  const [order, setOrder] = useState<Order>("asc");

  const searchRef = useRef<HTMLInputElement>(null);

  const handleFetchItems = async () => {
    try {
      const response = sortBy
        ? await fetch(
            `https://api.github.com/search/repositories?q=${search}&per_page=${itemsPerPage}&page=${page}&sort=${sortBy}&order=${order}`
          )
        : await fetch(
            `https://api.github.com/search/repositories?q=${search}&per_page=${itemsPerPage}&page=${page}&order=${order}`
          );
      if (!response.ok) {
        throw new Error("A problem occured. Unable to fetch data");
      }
      const data = await response.json();
      const arrayData = [...data.items];
      const newRepoData: RepoData[] = [];

      for (let i = 0; i < arrayData.length; ++i) {
        newRepoData.push({
          full_name: arrayData[i].full_name,
          html_url: arrayData[i].html_url,
          description: arrayData[i].description,
          topics: arrayData[i].topics,
          stargazers_count: arrayData[i].stargazers_count,
          updated_at: arrayData[i].updated_at,
        });
      }
      setRepoData(newRepoData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleFetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, page, itemsPerPage, sortBy, order]);

  return (
    <div className="search-app">
      <div className="search-app-div">
        <SearchBar
          setSortBy={setSortBy}
          searchRef={searchRef}
          setOrder={setOrder}
          setPerPage={setPerPage}
          setSearch={setSearch}
          setPage={setPage}
          page={page}
        />
        <div className="search-card-container">
          {repoData.map((data, index) => (
            <SearhCard
              key={index}
              full_name={data.full_name}
              html_url={data.html_url}
              description={data.description}
              topics={data.topics}
              stargazers_count={data.stargazers_count}
              updated_at={data.updated_at}
            />
          ))}
        </div>
        <div className="search-buttons-nav" style={{position: "relative"}}>
          {page > 1 ? <button
        className="search-next-button"
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Page {page - 1}
        </button> : null}
          <button
            className="search-next-button"
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Page {page + 1}
          </button>
          <p style={{textAlign: "right", display: "inline", position:"absolute", right: "0", marginTop: "30px"}}>{page}</p>
        </div>
      </div>
    </div>
  );
}
