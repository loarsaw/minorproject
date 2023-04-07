import { getDocInfo } from "@/firebase/firebaseService";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

type Props = {};

const Item = (props: Props) => {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      getDocInfo(router.query.auctionItem);
      // console.log();
    }
  }, []);
  return <div>Item</div>;
};

export default Item;
