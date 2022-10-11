import { useEffect, useState } from "react";

import logo from "./logo.svg";
import "./App.css";

import { config } from "./config";
import { useHash } from "./hooks";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const [hash, timestamp] = useHash();
  const limit = 20;
  const currentOffset = 0;
  const orderBy = "name";

  useEffect(() => {
    const url = `${config.marvel.url}/characters?limit=${limit}&ts=${timestamp}&offset=${currentOffset}&orderBy=${orderBy}&apikey=${config.marvel.publicKey}&hash=${hash}`;

    const fetchData = async () => {
      setLoading(true);

      const response = await fetch(url);
      const result = await response.json();

      setData(result);
      setLoading("fetched");
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {loading && <p>carregando...</p>}
      </header>
    </div>
  );
}

export default App;
