import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { brandContent } from "@/mock/brand";
import Card from "../UI/Card/Card";
import { useRouter } from "next/router";

const Newest = (products: any) => {
  const router = useRouter();
  // console.log(items)
  console.log(products);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {products.items.map((product: any) => (
        <div key={product.refId}>
          <img
            className="h-auto max-w-full rounded-lg hover:cursor-pointer"
            src={product.image}
            onClick={() => router.push(`/auctionItem/${product.refId}`)}
            // src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            alt=""
          />
        </div>
      ))}
    </div>
    // <div className="mx-auto my-4 md:my-8 flex flex-col xl:max-w-[2130px]">
    //   <div className="grid gap-4 md:gap-2 grid-cols-6 md:grid-cols-12">
    //     {products.items.map((product: any) => {
    //       return <Card key={product.id} product={product} refId={product.ref} />;
    //     })}
    //   </div>
    // </div>
  );
};

export default Newest;
