import React from "react";
import Image from "next/image";
import StarRating from "react-svg-star-rating";
import Currency from "react-currency-formatter";
import { addToBasket, removeFromBasket} from "../slices/basketSlice";
import { useDispatch } from "react-redux";

function CheckoutProduct({
  id,
  title,
  description,
  category,
  image,
  price,
  rating,
  hasPrime,
}) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      description,
      category,
      image,
      price,
      rating,
      hasPrime,
    };

    dispatch(addToBasket(product));
  };

  const addItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />

      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          <StarRating
            unit="float"
            count="5"
            size="20"
            activeColor="#ffa41c"
            innerRadius="20"
            initialRating={rating.rate}
            isReadOnly="true"
            containerClassName="flex h-5 "
            className="border border-yellow-700 "
          />
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="USD" />

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img loading="lazy" className="w-12" src="https://links.papareact.com/fdw" />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button " onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className="button " onClick={addItemFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
