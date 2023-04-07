import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link href="/">
      <div>
        <Image
          src="/images/logo.png"
          alt="zishop-logo"
          width={120}
          height={25}
          objectFit="contain"
          className="cursor-pointer md:ltr:-mr-3"
        />
      </div>
    </Link>
  );
};

export default Logo;
