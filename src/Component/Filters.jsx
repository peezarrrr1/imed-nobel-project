import React, { useRef, useState } from "react";
import { Select } from "antd";
import { Button } from "antd";
import axios from "axios";

function Filters(props) {
  const [sumAmount, setsum] = useState(0);
  const [currentyear, setCurrentYear] = useState(new Date().getFullYear());
  let years = [];
  for (let i = new Date().getFullYear(); i >= 1901; i--) {
    years.push(i);
  }

  let awardYearSorted = years.map((result, index) => {
    return { value: result, label: result };
  });

  // const [yearSelect, take] = useState([]);
  const getData = async (currentyear) => {
    const response = await axios.get(
      `https://api.nobelprize.org/2.1/nobelPrizes?nobelPrizeYear=${currentyear}`
    );

    props.setDetailList(response.data.nobelPrizes);
    const prizeCollect = response.data.nobelPrizes;
    let sum = prizeCollect.reduce((prev, curr) => prev + curr.prizeAmount, 0);

    props.setYear(currentyear);
    setsum(sum);
  };

  // let sum = prizeCollect.reduce((prev, curr) => prev + curr, 0);

  return (
    <div className="p-5">
      <div className="bg-blue-400 w-96 h-screen flex justify-center items-center">
        <Select
          defaultValue={currentyear}
          style={{
            width: 120,
          }}
          onChange={(result) => setCurrentYear(result)}
          options={awardYearSorted}
        />
        <Button className="bg-green-500" onClick={() => getData(currentyear)}>
          Apply
        </Button>
        <div>Prize Amount {sumAmount}</div>
      </div>
    </div>
  );
}

export default Filters;
