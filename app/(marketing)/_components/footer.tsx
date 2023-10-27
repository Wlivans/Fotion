import { Button } from "@/components/ui/button";
import Logo from "./logo";

const Footer = () => {
  return (
    <div className="dark:bg-[#1F1F1F z-50 flex w-full items-center bg-background p-6">
      <Logo />
      <div className="flex w-full items-center justify-between gap-x-4 md:ml-auto md:justify-end">
        <Button variant={"ghost"} size={"sm"}>
          Privacy Policy
        </Button>
        <Button variant={"ghost"} size={"sm"}>
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
};

export default Footer;
