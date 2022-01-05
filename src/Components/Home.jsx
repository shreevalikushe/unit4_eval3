import axios from "axios";
import { useState } from "react";

function Home() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const handleFetch = () => {
    axios
      .get(`https://api.github.com/search/repositories?q=${q}`)
      .then((res) => {
        setData(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(data, "data");
  return (
    <div>
      <h1 style={{ color: "red" }}>Welcome to Github </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "auto",
          justifyContent: "center",
          height: "20px",
          gap: "0.25rem"
        }}
      >
        <h4 style={{ padding: "0px", margin: "0px" }}>Search</h4>
        <input
          placeholder="Search Here"
          onChange={(e) => {
            setQ(e.target.value);
          }}
        />
        <button onClick={handleFetch}>Click</button>
      </div>
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            border: "1px solid black",
            padding: "1rem",
            margin: "1rem"
          }}
        >
          <h3>Name:{item.name}</h3>
          <h5>Full Name: {item.full_name}</h5>
          <p>{item.description}</p>
          <b>Language: {item.language}</b>
          <i>Score: {item.score}</i>
        </div>
      ))}
    </div>
  );
}
export default Home;
