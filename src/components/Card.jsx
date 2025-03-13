import { useState } from "react";
import starFilled from '/images/star-filled.png';
import starEmpty from '/images/star-empty.png';


export default function Card(props) {
  const [image, setImage] = useState(true);

  function toggleImage() {
    setImage((prevImageState) => !prevImageState);
  }

  const img = image ? starFilled : starEmpty;

  return (
    <>
      <div className="card--component p-4 bg-white rounded-lg shadow-md">
        <div className="relative">
          <img
            src={props.coffee.image}
            alt="Coffee"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute top-0 left-14 p-4">
            {props.coffee.popular && (
              <div className="rounded-full bg-orange-500 p-2">
                <p className="text-white">Popular</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-left text-gray-800 font-semibold">
            {props.coffee.name}
          </p>
          <p className="text-right p-2 rounded-lg bg-green-500 text-white">
            {props.coffee.price}
          </p>
        </div>
        <div className="flex justify-start mt-2">
          <button onClick={toggleImage}>
            <img
              src={img}
              alt="Rating"
              className="w-5 h-5"
            />
          </button>
          <p className="ml-2 text-gray-800">
            {props.coffee.rating}
            <span className="text-gray-600">({props.coffee.votes})</span>
          </p>
        </div>
      </div>
    </>
  );
}