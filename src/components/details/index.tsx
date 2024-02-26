import React from "react";
import { detailsList } from "@/data";

interface DetailsListType {
  id: number;
  title: string;
  innerFields: any;
}

const Details = () => {
  return (
    <div className="col-span-3 ">
      {detailsList.map((item: DetailsListType) => {
        return (
          <div key={item.id} className="shadow-md p-5">
            <h2 className="text-[25px]">{item.title}</h2>
            <ul>
              {item.innerFields.map(
                (innerItem: string, index: number) => {
                  return <li key={index} className="mt-1">{innerItem}</li>;
                }
              )}
            </ul> 
          </div>
        );
      })}
    </div>
  );
};

export default Details;
