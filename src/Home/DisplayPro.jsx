import React, { useState, useEffect } from "react";
import axios from "axios";
import Img from "../assets/imgs.js";
import heart from "../imgs/heart.png";
import redHeart from "../imgs/red-heart.png";
import { useDispatch, useSelector } from "react-redux";

export default function DisplayPro() {
  const [userData, setUserData] = useState([]);
  // const [currentImage, setCurrentImage] = useState(Img.kalaDil);

  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setUserData(response.data);
      } catch (error) {
        // console.log(error);
      }
    };
    fetchProduct();
  }, []);

  const toggleWishlist = (item) => {
    dispatch({
      type: "TOOGLE_WISHLIST_ITEM",
      payload: item,
    });
  };

  return (
    <>
      <div>
        <div className="flex justify-center py-14">
          <p className="text-2xl font-bold">Hot Deals 🔥</p>
        </div>
        <div className="grid grid-cols-4 gap-4 justify-center">
          {userData.map((product) => (
            <div className="bg-slate-500 w-full" key={product.id}>
              <div className=" items-center  relative h-96 p-2 grid grid-cols-1 gap-4 max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
                <img
                  onClick={()=>toggleWishlist(product)}
                  className="h-6 absolute top-2 right-2 cursor-pointer"
                  src={wishlist.some((w)=> w.id===product.id)?redHeart:heart}
                  alt="like"
                />
                <img className="h-36" src={product.image} alt={product.title} />
                <p className="mt-2">{product.title}</p>
                <p className="mt-2 uppercase">{product.category}</p>
                <div className="flex items-center gap-2">
                  <p className="">${product.price}</p>
                  <p className="line-through">
                    ${Math.round(product.price * 1.66)}
                  </p>
                  <p className="font-bold text-red-600 ">(60% Off)</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
