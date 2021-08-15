import React from 'react';
import { Helmet } from "react-helmet";

import RandomGif from './components/gif';
import Button from './components/Button';
import GifSearch from './components/Search';
import RandomText from './components/textBlock';

function App() {
  return (
    <div>
      <Helmet>
        <title>Swapneel's Random APIs</title>
        <meta name="description" content="Using APIs to generate random stuff - Swapneel" />
      </Helmet>
      <RandomText />
      <RandomGif />
      <GifSearch />
      <Button>
        <a href="https://developers.giphy.com/">GIPHY</a>
      </Button>
      <Button>
        <a href="https://swapi.dev/">SWAPI</a>
      </Button>
    </div>
  );
}

export default App;
