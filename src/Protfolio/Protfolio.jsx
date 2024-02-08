import React from "react";
import img1 from "../../src/tasty-top-view-sliced-pizza-italian-traditional-round-pizza.jpg";
import img2 from "../../src/top-view-tasty-cheese-pizza-with-sausages-tomatoes-dark-table.jpg";
import img3 from "../../src/crispy-mixed-pizza-with-olives-sausage.jpg";
import img4 from "../../src/34f48f5c56c938642b80b0555e5adf82.jpg";
import img5 from "../../src/c3e50f79a3518b11cf448ad1795839f9.jpg";
import img6 from "../../src/25a85ebb1d8b76f9f8dff325cdcdb852.jpg";

export default function Protfolio() {
  return (
    <div className="bg-black">
      <div className="container ">
        <div className="row pt-4">
          <div className="col-xxl-4">
            <img src={img1} className="w-100" alt="Pizza 1" />
            <p className="text-light">
              You won't miss the pepperoni! This Veggie Deluxe Pizza is topped
              with stretchy mozzarella and a medley of crisp veggies that bring
              on a ton of flavor.
            </p>
          </div>
          <div className="col-xxl-4">
            <img src={img2} className="w-100 mb-4 " alt="Pizza 2" />
          </div>
          <div className="col-xxl-4">
            <img src={img3} className="w-100" alt="Pizza 3" />
            <p className="text-light">
              Pizza Hut is constantly outdoing itself when it comes to its
              stuffed-crust creations, but the newest Grilled Cheese Stuffed
              Crust Pizza has potential to be the
            </p>
          </div>
          <div className="col-xxl-4">
            <img src={img4} className="w-100" alt="Pizza 2" />
          </div>
          <div className="col-xxl-4">
            <img src={img6} className="w-100 h-75 " alt="Pizza 2" />
            <p className="text-light">
              You won't miss the pepperoni! This Veggie Deluxe Pizza is topped
              with stretchy mozzarella and a medley of crisp veggies that bring
              on a ton of flavor.
            </p>
          </div>
          <div className="col-xxl-4">
            <img src={img5} className="w-100" alt="Pizza 2" />
          </div>
        </div>
      </div>
    </div>
  );
}
