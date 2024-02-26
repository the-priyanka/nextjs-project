import React from "react";
import { itemsDetails } from "@/data";
// import { useRouter } from "next/router";
interface itemsDetailsType {
  id: number;
  title: string;
  des: string;
  image: string;
  oldPrice: number;
  price: number;
  discount: string;
}
const Items = () => {


  return (
    <div className="col-span-9 grid grid-cols-5 justify-between mx-7 gap-5 shadow-lg">
      {itemsDetails.map((item: itemsDetailsType) => {
        return (
          <div key={item.id}>
            <div>
              <img src={item.image} alt="" width={200} height={200} />
              <div className="p-4">
                <h3 className="text-[16px] font-semibold">
                  {item.title}
                </h3>
                <p className="text-[14px] text-gray-400">
                  {item.des}
                </p>
                <p className="font-medium text-[12px] mt-2">
                  Rs.
                  <span className="">{item.price}</span>
                  <span className=" text-gray-400  line-through">
                    {item.oldPrice}
                  </span>
                  <span className="text-orange-400 font-light">
                    ( {item.discount} OFF)
                  </span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
