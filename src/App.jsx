import React, { useState } from "react";
import Header from "./Component/Header";
import Filters from "./Component/Filters";
import Details from "./Component/Details";

function App() {
  const [year, setYear] = useState(0);
  const [nobelPrizeDetailList, setNobelPrizeDetailList] = useState([]);

  return (
    <div>
      <Header year={year} />
      <div className="flex flex-row">
        <Filters setYear={setYear} setDetailList={setNobelPrizeDetailList} />
        <Details nobelPrizeDetailList={nobelPrizeDetailList} />
      </div>
    </div>
  );
}

export default App;
