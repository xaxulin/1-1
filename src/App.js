import React from "react";
import "./styles.css";

const movie = {
  title: "",
  vote_average: 8.1,
  image: "",
  overview: ""
};

function MovieItem(props) {
  console.log("props =", props);
  return (
    <div>
      <p>{props.Title}</p>
      <p>{props.vote_average}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <MovieItem Title="Title !!!" vote_average={8.1} />
    </div>
  );
}
