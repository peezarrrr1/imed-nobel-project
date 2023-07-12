import React, { useState } from "react";
import { Space, Table, Tag } from "antd";

function Details(props) {
  console.log(props.nobelPrizeDetailList);

  const columns = [
    {
      title: "ชื่อรางวัล",
      dataIndex: "awardName",
      key: "awardName",
    },
    {
      title: "ปีที่ได้รับรางวัล",
      dataIndex: "awardYear",
      key: "awardYear",
    },
    {
      title: "ผู้ที่ได้รับรางวัล",
      dataIndex: "laureates",
      key: "laureates",
    },
    {
      title: "แรงบันดาลใจ",
      dataIndex: "motivation",
      key: "motivation",
    },
  ];
  let data = [];
 

//   data = [
//     props.nobelPrizeDetailList.map((nobelPrizeDetail) => {
//       return(
//         {
//         awardName: nobelPrizeDetail.category.en,
//         awardYear: nobelPrizeDetail.awardYear,
//         laureates: nobelPrizeDetail.awardYear,
//         motivation: nobelPrizeDetail.category.en,
//         }
//       )
//     })
//  ,]

  props.nobelPrizeDetailList.map((nobelPrizeDetail, index) => {
     return (data = [
      {
        key:index,
        awardName: nobelPrizeDetail.category.en,
        awardYear: nobelPrizeDetail.awardYear,
        laureates: nobelPrizeDetail.awardYear,
        motivation: nobelPrizeDetail.category.en,
      },
   
   
     
     ]
    
    )
  })

  console.log(data);

  return (
    <div className="p-5">
      <div className="bg-gray-300 w-screen h-screen text-3xl">
        Details
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
}

export default Details;
