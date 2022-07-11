import Pagination from "../Components/Pagination";
import { useEffect, useState } from "react";

function Dashboard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?page=${3}&_limit=20`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  // console.log(data)
  return (
    <div>
      <h3>Dashboard</h3>
      <h4 data-testid="token">TOKEN</h4>
      <button data-testid="logout-btn">Logout</button>
      <ul data-testid="item-container">
        {data.map((item) => {
          return <li data-testid="item">{item.title}</li>;
        })}
      </ul>
      <div data-testid="pagination-container">
        <Pagination />
      </div>
    </div>
  );
}

export default Dashboard;
