import React, { useState } from "react";
import { Space, Table, Tag } from "antd";

function Details(props) {
  console.log(props.nobelPrizeDetailList);

  return (
    <div className="p-5">
      <div className="bg-gray-300 w-screen h-screen text-3xl">
        Details
        
        {props.nobelPrizeDetailList.map((nobelPrizeDetail, index) => {
          return (
            <div key={index}>
              {/* {nobelPrizeDetail.awardYear}////{nobelPrizeDetail.category.en} */}
              <table>
                <thead>
                  <tr>
                    <th>Month</th>
                    <th>Savings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>B</td>
                    <td>{nobelPrizeDetail.awardYear}</td>
                  </tr>
                  <tr>
                    <td>A</td>
                    <td>{nobelPrizeDetail.category.en}</td>
                  </tr>
                </tbody>
                
                </table>
            </div>
          );
        })}
        
      </div>
    </div>
  );
}

export default Details;
