import React, { useState } from "react";
import { Table } from "antd";

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
  data = props.nobelPrizeDetailList.flatMap((nobel, index) => {
    const { categoryFullName, awardYear } = nobel;
    if (nobel.laureates === undefined)
      return {
        index: index + 1,
        awardName: categoryFullName.en,
        awardYear: awardYear,
        laureates: " - ",
        motivation: nobel.topMotivation?.en,
      };
    else
      return nobel.laureates.map((authorNobel) => ({
        index: index + 1,
        awardName: categoryFullName.en,
        awardYear: awardYear,
        laureates: authorNobel.knownName?.en || authorNobel.orgName?.en,
        motivation: authorNobel.motivation.en,
      }));
  });
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
