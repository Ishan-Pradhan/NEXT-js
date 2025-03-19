import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* Note : need to specify height and width here */}
      {/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> */}

      {/* if we use import then we don't need to specify height it won't give error */}
      {/* NOTE: quality changes the file size of the image */}
      <Image
        src={logo}
        height="60"
        width="60"
        quality={100}
        alt="The Wild Oasis logo"
      />
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
