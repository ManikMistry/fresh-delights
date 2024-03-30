import React, { useEffect, useRef, useState } from "react";
import { StateProvider, useStateValue } from "../context/StateProvider";
import RowContainer from "./RowContainer";
import MenuData from "./MenuData";

function Menu() {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setscrollValue] = useState(0);
  useEffect(() => {}, [scrollValue]);
  console.log(foodItems)
  return (
    <>
      {/* <section className="h-[350px] bg-gray-500 flex flex-col items-center justify-center px-[20rem] border-b">
        <h1 className=" font-bold text-[3rem] space-x-1 pb-4">
          Authentic Dishes
        </h1>
        <p className=" pb-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit Authentic
          Dishes Lorem ipsum dolor sit amet consectetur adipisicing elit
          Authentic Dishe
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit Authentic
          Dishe
        </p>
        <button className="text-black bg-white font-bold rounded-md px-8 py-3 mt-16">
          View our menu
        </button>
      </section>
      <div className=" bg-slate-400 h-[1px] w-full mt-10"></div> */}
      {/* <section>
        <div className=" flex flex-col justify-center items-center mt-16 mx-[20rem]">
          <p className="">testy and crunchy</p>
          <h1 className=" text-4xl font-bold text-gray-900 pb-4">
            Our Starters
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            praesentium
          </p>
          <p>officiis consequatur hic, ipsum aut laudantium itaque</p>
          <p>Unde praesentium vel iure fugiat </p>
        </div>
      </section> */}
      {/* LIST OF STATERS */}
      
        
      

      <section className="px-10 pt-10 border-b pb-20">
        <div className="">
          <h1>Fruits</h1>
        <MenuData
          data={foodItems?.filter((n) => n.category === "fruits")}
        />
        </div>
          <div className="">
            <h1>Chciken</h1>
          <MenuData
          // scrollValue={scrollValue}
          // flag={true}
          data={foodItems?.filter((n) => n.category === "chicken")}
        />
        </div>
        <div>
          <h1>Drinks</h1>
          <MenuData
          // scrollValue={scrollValue}
          // flag={true}
          data={foodItems?.filter((n) => n.category === "drinks")}
        />
        </div>
      </section>
      {/* MENU FOOTER */}
      {/* <section className="h-[350px] bg-yellow-500 flex flex-col items-center justify-center px-[20rem] border-b"> */}
        {/* <h1 className=" font-bold text-[3rem] space-x-1 pb-4">
          Book A Table
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            praesentium
          </p>
          <p>officiis consequatur hic, ipsum aut laudantium itaque</p>
          <p>Unde praesentium vel iure fugiat </p> */}
        {/* <button className="text-black bg-white font-bold rounded-md px-8 py-3 mt-16">
          Book Now
        </button> */}
      {/* </section> */}
    </>
  );
}

export default Menu;