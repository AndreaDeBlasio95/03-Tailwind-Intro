import { useState } from "react";
export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-white">
        <nav className="grid grid-cols-10 px-6 py-4">
          <img
            src="/icon-tailwind.png"
            alt="Example"
            className="w-[42px] h-[42px]"
          />
          <span className=" col-span-2"></span>
          <span className=" font-mono font-semibold text-slate-800">
            Product
          </span>
          <span className=" font-mono font-semibold text-slate-800">
            Features
          </span>
          <span className=" font-mono font-semibold text-slate-800">
            Marketplace
          </span>
          <span className=" font-mono font-semibold text-slate-800">
            Company
          </span>
          <span className=" col-span-2"></span>
          <span className=" font-mono font-semibold text-slate-800">
            Log in
          </span>
        </nav>
        <div className="h-[200px]"></div>
        <div className="flex">
          <div className="basis-1/3"></div>
          <div className="basis-1/3 flex flex-col">
            <span className=" text-3xl font-extrabold">
              Data to enrich your
            </span>
            <span className=" text-3xl font-extrabold"> online business </span>
          </div>
        </div>
      </div>
    </>
  );
}
