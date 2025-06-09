import type { RepoData } from "./utils";
import Topic from "./Topic";
import { parse } from "date-fns";

export default function SearhCard(props: RepoData) {
    const formatDate = (dateInput: string): string => {
      const dateOnly = dateInput.split("T")[0];
      const date = parse(dateOnly, "yyyy-MM-dd", new Date());
      const formatter = new Intl.DateTimeFormat("en-UK", {
        day: "numeric",
        month: "long",
        year: "numeric"
      });
      const formattedDate = formatter.format(date);
      return formattedDate;
    };
    return (
      <div className="search-card">
        <div className="search-card-info">
          <a href={props.html_url}>{props.full_name}</a>
          <p>{props.description}</p>
        </div>
        <div className="topics">
          {props.topics.map((topic, index) => (
            <Topic key={index} text={topic} />
          ))}
        </div>
        <div className="stars">
          <p>{`${props.stargazers_count} stars`}</p>
          <p>Updated on {formatDate(props.updated_at)}</p>
        </div>
      </div>
    );
}