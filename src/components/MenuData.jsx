import React, { useEffect, useRef, useState } from "react";
import { GiShoppingBag } from "react-icons/gi";
import { motion } from "framer-motion";
import Rating from "@mui/material/Rating";
import NotFound from "../img/NotFound.svg";
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { getAllFoodItems } from "../utils/firebaseFunctions";
import { actionType } from "../context/reducer";

const RowContainer = ({ flag, data, scrollValue }) => {
  const [{ cartItems, user }, dispatch] = useStateValue();
  const [items, setItems] = useState([]);

  const rowContainer = useRef();

  const handleStar = async (id, newValue) => {
    await updateDoc(
      doc(firestore, "foodItems", `${id}`),
      {
        star: newValue,
      },
      { merge: true }
    );
    fetchData();
  };
  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);
  useEffect(() => {
    addtoCart();
  }, [items]);

  const addtoCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };
  return (
    <div
      ref={rowContainer}
      className={`w-full my-6 md:my-12 flex items-center gap-3 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : " items-center justify-center flex-wrap"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
            <div
              key={item.id}
              className="w-225 min-w-[225px] md:w-300 md:min-w-[300px] h-auto bg-cardOverlay rounded-lg my-3 md:my-12 p-2 backdrop-filter backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-between"
            >
              <div className="h-30 flex items-center gap-3 px-2">
                <div className="bg-red border overflow-hidden rounded-3xl">
                  <img src={item?.imageURL} alt="" className="h-10" />
                </div>
                <div className="w-full">
                  <p className="border-b relative w-full text-sm font-bold">
                    {item?.title}
                  </p>
                  <p className=" text-sm pt-2">Description</p>
                </div>
                <div>
                  <p>${item?.price}</p>
                </div>
              </div>
            </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} className="w-300" />
          <p className="text-xl text-headingColor font-semibold my-2">
            Items not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
