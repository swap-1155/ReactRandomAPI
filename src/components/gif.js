import React, { useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";

import Card from "./Card";
import Button from "./Button";

const RandomGif = (props) => {
  const [boot, setBoot] = useState(true);
  const [random, setRandom] = useState("");

  const apiKey = "cD49R7IUHSLxxoJRQAseROWrpaz5x6fu";
  const giphy = new GiphyFetch(apiKey);

  const randomChangeHandler = (event) => {
    const apiCall = async () => {
      const res = await giphy.random();
      console.log(res.data);
      setRandom(res.data);
    };

    apiCall();
    setBoot(false);
  };

  return (
    <Card>
      <Button type="submit" onClick={randomChangeHandler}>
        {boot && randomChangeHandler()}
        {random && (
          <img
            src={random.images.original.webp}
            alt="Click me I am supposed to be a gif"
          />
        )}
      </Button>
    </Card>
  );
};

export default RandomGif;