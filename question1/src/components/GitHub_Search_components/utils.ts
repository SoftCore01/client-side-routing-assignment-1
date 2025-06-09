export type RepoData = {
  full_name: string;
  html_url: string;
  description: string;
  topics: string[];
  stargazers_count: number;
  updated_at: string;
};

export type SortBy = "" | "stars" | "updated"

export type Order = "asc" | "desc"

export type PerPage = "10" | "20" | "50";

export type FetchArg = {
  search: string,
  itemsPerPage?: PerPage, 
  page?: number, 
  sortBy?: SortBy, 
  order?: Order,
}
/* fetch(
  "https://api.github.com/search/repositories?q=node&per_page=10&page=1&sort=stars&order=desc"
)
  .then((data) => data.json())
  .then((json) => {
    let arrayData = [...json.items];
    for (let i = 0; i < arrayData.length; ++i) {
      mydata.push({ name: arrayData[i].name });
    }
    console.log(mydata);
  })
  .catch((err) => console.error(err)); */

//handleFetchItemsPerPage(10, 20, 50) per_page=
//handleFetch() sort=stars&order=desc, sort=updated&order=desc

//full_name: string
//html_url: string
//description: string
//topics: string[]
//stargazers_count: numbers
//updated_at: string