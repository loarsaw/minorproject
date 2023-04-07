import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { brandContent } from "@/mock/brand";
import Card from "../UI/Card/Card";

const Newest = ({ items }: any) => {
  console.log(items)
  return (
    <div className="mx-auto my-4 md:my-8 flex flex-col xl:max-w-[2130px]">
      <div className="grid gap-4 md:gap-2 grid-cols-6 md:grid-cols-12">
        {items.map((product: any) => {
          return (
            <Card key={product.id} product={product} refId={product.refId} />
          );
        })}
      </div>
    </div>
  );
};

export default Newest;
