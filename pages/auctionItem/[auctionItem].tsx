import { auth } from "@/config/firebase";
import { addToAuction, getDocInfo } from "@/firebase/firebaseService";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import Countdown from "react-countdown";

import React, { useEffect, useState } from "react";
import { generateUsername } from "unique-username-generator";
type Props = {};
const Item = (props: Props) => {
  const router = useRouter();
  const [objValue, setObjValue] = useState<any>();
  const [inputValue, setValue] = useState<any>();
  const [photoURL, setPhotoURL] = useState<any>();
  const [user, setUser] = useState<any>();
  const [sentReq, setReq] = useState(false);
  useEffect(() => {
    getData();
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        const userName = generateUsername();
        setUser(userName);
        setPhotoURL(user.photoURL);
        // console.log(user);
      } else {
        console.log("User Logged Out");
      }
    });
  }, []);

  async function getData() {
    const data = await getDocInfo(router.query.auctionItem);
    setObjValue(data);
  }

  async function pushToAuction() {
    const id = router.query.auctionItem;
    const data = { price: inputValue, name: user, photoURL: photoURL };
    addToAuction({ id, data });
  }
  console.log(objValue?.time.toDate());
  // console.log(objValue.photoURL);

  return (
    <div>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={objValue?.image}
              // src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Auction Item
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {objValue?.name}
              </h1>
              <div className="flex mb-4 text-gray-900 bg-black">
                <Countdown date={objValue?.time.toDate} />
              </div>
              <p className="leading-relaxed">{objValue?.desc}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Winner</span>
                  <div className="relative">
                    {/* <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>  */}
                    <div className="flex items-center space-x-4">
                      <img
                        className="w-10 h-10 rounded-full"
                        // src={objValue?.photoURL}
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt=""
                      />
                      <div className="font-medium dark:text-white">
                        <div>{objValue?.winnerName}</div>
                        {/* <div className="text-sm text-gray-500 dark:text-gray-400">
                          Joined in August 2014
                        </div> */}
                      </div>
                      <span className="title-font font-medium text-2xl text-gray-900">
                        ${objValue?.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                {/*  */}
                <div className="w-5">
                  <input
                    value={inputValue}
                    onChange={(e) => setValue(e.target.value)}
                    className="rounded border appearance-none w-20 border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10"
                  />
                </div>
                <button
                  onClick={() => {
                    pushToAuction(), setReq(!sentReq);
                  }}
                  className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                >
                  Button
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Item;
