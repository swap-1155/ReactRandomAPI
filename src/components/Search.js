import React, { useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";

import classes from "./Search.module.css";
import Card from "./Card";
import Button from "./Button";
import GifList from "./gifList";

const GifSearch = (props) => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([])

  const apiKey = "cD49R7IUHSLxxoJRQAseROWrpaz5x6fu";
  const giphy = new GiphyFetch(apiKey);

  const searchHandler = (event) => {
    event.preventDefault();
    console.log("SearchHandler");
  };

  const searchChangeHandler = (event) => {
    setSearch(event.target.value);
    console.log("setSearch");
  };

  const resultChangeHandler = (event) => {
    const apiCall = async () => {
      const res = await giphy.search(search, { limit: 20 });
      console.log(res.data);
      setResult(res.data);
    };

    apiCall();
    setSearch("");
  };
  


  return (
    <Card>
      <form className={classes.input} onSubmit={searchHandler}>
        {/* <label htmlFor="search">Search</label> */}
        <input
          id="search"
          type="text"
          placeholder="GIF Search"
          onChange={searchChangeHandler}
        />
        <Button type="submit" onClick={resultChangeHandler}>
          Search
        </Button>
      </form>
      {result && <GifList gifs={result} />}
    </Card>
  );
};

export default GifSearch;
