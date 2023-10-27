import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <div className="hidden items-center gap-x-2 md:flex">
      <Image
        src="/logo.svg"
        width={40}
        height={40}
        className="dark:hidden"
        alt="Logo"
      />
      <Image
        src="/logo-dark.svg"
        width={40}
        height={40}
        className="hidden dark:block"
        alt="Logo"
      />
      <p className={cn("font-semibold", font.className)}>Fotion</p>
    </div>
  );
};

export default Logo;
