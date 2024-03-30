import React, { useState, useEffect } from "react";
import AddressCard from "./AddressCard";
import { Button, Divider } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import CartItem from "../CartItem";
import { useStateValue } from "../../context/StateProvider";

function OrderSummary() {
  const [{ cartShow, cartItems, user }, dispatch] = useStateValue();
  const [tot, setTot] = useState(0);
  const [flag, setFlag] = useState(1);

  useEffect(() => {
    let totalPrice = cartItems.reduce(function (acc, item) {
      return acc + item.qty * item.price;
    }, 0);
    setTot(totalPrice);
  }, [tot, flag]);

  console.log("cartItems", cartItems);
  const navigate = useNavigate();
  const location = useLocation();
  const { address } = location.state || {};

  const handleCheckOut = () => {
    navigate("/PlacedOrder");
  };
  if (!address) {
    return <div>Loading...</div>;
  }
  console.log(address);

  return (
    <div>
      <div className="p-5 shadow-lg rounded-md border">
        <AddressCard address={address} />
      </div>
      <div className="lg:grid grid-cols-2 relative mt-10">
        <div className="col-span-2"></div>
        <div className="flex justify-start pt-20">
          <div className=" p-10">
            <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
              Thank you for
              <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
                Your Purchase
              </span>
            </p>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae vel explicabo consectetur officiis! Nesciunt,
              architecto perferendis. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Repudiandae vel explicabo consectetur officiis!
              Nesciunt, architecto perferendis.
            </p>
          </div>
        </div>
        <div className="">
          <div className="w-full bg-cartBg rounded-t-[2rem] flex flex-col">
            <div className=" w-full h-20 bg bg-cartBg border-b rounded-t-lg text-white flex justify-around">
              <div className=" p-3 border-r pr-20">
                <h1 className=" font-semibold text-lg">Date</h1>
                <p className=" text-xs font-bold text-lighttextGray">
                  1st May 2024
                </p>
              </div>
              <div className="p-3">
                <h1 className="font-semibold text-md">Payment Method</h1>
                <p className="text-xs font-bold pl-1 text-lighttextGray">
                  Cash On Delivery
                </p>
              </div>
            </div>
            <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
              {cartItems &&
                cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    setFlag={setFlag}
                    flag={flag}
                  />
                ))}
            </div>
          </div>
          <div className="px-5 mt-5 lg:mt-0 w-full bg-cartBg rounded-b-lg pb-6">
            <div className="p-6 rounded-md w-full">
              <p className="uppercase font-bold text-white opacity-50 pb-4">
                Price Details
              </p>
              <Divider />
              <div className="space-y-3 font-semibold mb-10">
                <div className="flex justify-between pt-3 text-black">
                  <span className="text-white">Price</span>
                  <span className="text-white">₹{tot + 2.5}</span>
                </div>
                {/* Other price details */}
              </div>
              <Button
                onClick={handleCheckOut}
                color="secondary"
                variant="contained"
                className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
                sx={{ px: "2.5rem", py: ".7rem", mt: "1rem" }}
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
