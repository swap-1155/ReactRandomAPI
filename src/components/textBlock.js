import React, { useEffect, useState } from "react";

import Card from "./Card";
import Button from "./Button";

function RandomText() {
  const [boot, setBoot] = useState(true);
  const [character, setCharacter] = useState("");
  const [planet, setPlanet] = useState("");
  const [ship, setShip] = useState("");

  const characterChangeHandler = (event) => {
    /* API stats People: 82 / Math.floor(Math.random() * (maximum - minimum + 1)) + minimum */
    var randomnumber = Math.floor(Math.random() * 81) + 1;
    let url = "https://swapi.dev/api/people/" + randomnumber + "/";
    fetch(url)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((result) => {
        console.log(result);
        setCharacter(result);
        console.log(character);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const planetChangeHandler = (event) => {
    /* API stats Planets: 60 / Math.floor(Math.random() * (maximum - minimum + 1)) + minimum */
    var randomnumber = Math.floor(Math.random() * 59) + 1;
    let url = "https://swapi.dev/api/planets/" + randomnumber + "/";
    fetch(url)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((result) => {
        console.log(result);
        setPlanet(result);
        console.log(planet);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const shipChangeHandler = (event) => {
    /* API stats Starships: 36 / Math.floor(Math.random() * (maximum - minimum + 1)) + minimum */
    var randomnumber = Math.floor(Math.random() * 36) + 1;
    let url = "https://swapi.dev/api/starships/" + randomnumber + "/";
    fetch(url)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((result) => {
        console.log(result);
        setShip(result);
        console.log(ship);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const allChangeHandler = (event) => {
    characterChangeHandler();
    planetChangeHandler();
    shipChangeHandler();
    setBoot(false);
  };

  return (
    <Card className="card card2">
      {boot && allChangeHandler()}
      <p>
        {`${character.name}`}, born in {`${character.birth_year}`} year, is a young{" "}
        {`${character.gender}`} on his way to {`${planet.name}`} a planet well{" "}
        known for its {`${planet.climate}`} and {`${planet.terrain}`} lands on{" "}
        the {`${ship.name}`}, the finnest machine created by{" "}
        {`${ship.manufacturer}`}
      </p>
      <Button type="submit" onClick={characterChangeHandler}>
        Character
      </Button>
      <Button type="submit" onClick={planetChangeHandler}>
        Planet
      </Button>
      <Button type="submit" onClick={shipChangeHandler}>
        Starship
      </Button>
      <Button type="submit" onClick={allChangeHandler}>
        Shuffle All
      </Button>
    </Card>
  );
}

export default RandomText;