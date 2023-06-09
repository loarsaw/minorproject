import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getDocInfo } from "@/firebase/firebaseService";
type Props = {};

const Card = ({ product }: any) => {
  return (
    <div className="col-span-6 sm:col-span-3 md:col-span-4  lg:col-span-3 2xl:col-span-2 shadow-xl my-1 md:my-4 md:mx-6 bg-palette-card rounded-xl flex relative">
      <div className="flex md:items-center md:flex-col relative w-full">
        <div className="w-1/2 md:w-full relative px-1 md:px-6 py-2 rounded-bl-xl rounded-tl-xl md:rounded-bl-none flex flex-col justify-between items-center">
          <div className="flex items-center h-full">
            <Link href={`/auctionItem/${product.refId}`}>
              <img
                src={product.image}
                alt="image"
                // height={300}
                // width={280}
                className="drop-shadow-xl hover:scale-100 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-between flex-grow w-1/2 md:w-full mx-1 md:px-3 py-2 md:py-4">
          <div className="flex justify-center md:justify-start flex-col flex-grow overflow-hidden ">
            <h3 className="text-sm sm:text-[12px] md:text-sm text-center text-palette-mute ">
              {product.name}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
