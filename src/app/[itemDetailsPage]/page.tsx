import React from "react";

const ItemDetailsPage = () => {
  return (
    <div className="grid grid-cols-12 mx-[100px] py-[50px] gap-10">
      <div className="col-span-4 w-[100%]  ">
        <img
          src="https://randomuser.me/api/portraits/men/83.jpg"
          alt=""
          width="100%"
          height="100%"
          className="shadow-xl"
        />
        <div className="flex justify-between items-center mt-3 gap-4">
          <button className="px-10 py-5 text-[20px] border flex-1 text-gray-500">
            ADD TO CART
          </button>
          <button className="px-10 py-5 text-[20px] shadow-xl bg-gray-500 text-white flex-1">
            BUY NOW
          </button>
        </div>
      </div>
      <div className="col-span-8">
        <h1>
          brother DCP-B7535DW Multi-function WiFi Monochrome Laser
          Printer (Toner Cartridge)
        </h1>
        <p className="mt-3 text-gray-500 text-[14px]">
          <span className="bg-green-700 text-white px-1 py-1 rounded">
            4.3 ✶
          </span>
          &nbsp; 4.33,850 Ratings & 495 Reviews
        </p>
        <p className="text-green-700 mt-3 text-[14px] font-semibold">
          Special Price
        </p>
        <h2 className="mt-3 text-[25px] bold">
          ₹21,149 &nbsp;
          <span className="text-[14px] line-through">₹26,490</span>
          <span className="text-[14px] text-green-700">
            {" "}
            &nbsp;&nbsp;20% off
          </span>
        </h2>

        <div className="leading-7">
          <h1 className="text-[20px] bold mt-4">Available offers</h1>
          <p className="text-[13px]">
            <span className="font-bold">Bank Offer </span> 10% off on
            BOBCARD EMI Transactions, up to ₹2,000 on orders of
            ₹10,000 and aboveT&C
          </p>
          <p className="text-[13px]">
            <span className="font-bold">Bank OfferFlat </span> ₹1,000
            off on OneCard Credit Card EMI Transactions on orders of
            ₹10,000 and aboveT&C
          </p>
          <p className="text-[13px]">
          <span className="font-bold"> Bank OfferExtra </span> ₹1000
            off on BOBCARD EMI Txns of 9 months and above tenure, Min
            Product Value ₹29,990T&C
          </p>
          <p className="text-[13px]">
          <span className="font-bold"> Special Price </span>Get extra 12% off (price inclusive of
            cashback/coupon)T&C
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsPage;
