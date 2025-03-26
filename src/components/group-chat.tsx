import Image from "next/image";

import { Button } from "./ui/button";

export default function GroupChat() {
  return (
    <section className="flex flex-col items-center justify-center sm:gap-12 md:gap-[4.5rem] lg:flex-row lg:justify-between">
      <Image
        src="/assets/tablet/image-hero.png"
        alt="People using Meet app"
        width={820}
        height={303}
        className="lg:hidden"
      />
      <Image
        src="/assets/desktop/image-hero-left.png"
        alt="People using Meet app"
        width={394}
        height={303}
        className="hidden lg:flex"
      />
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center gap-6 text-center lg:gap-8.5">
          <h1 className="w-[20.4375rem] text-[2.5rem] leading-11 font-black text-[#28283D] md:w-[21.1875rem] md:text-5xl md:leading-12 lg:w-[27.8125rem] lg:text-[4rem] lg:leading-14">
            Group Chat for Everyone
          </h1>
          <p className="w-[20.4375rem] text-base leading-[1.625rem] font-medium text-[#87879D] md:w-[28.5625rem] lg:w-[33.75rem] lg:text-lg">
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <Button className="h-[3.625rem] w-[12.0625rem] rounded-[1.8125rem] bg-[#4D96A9] text-base leading-[1.625rem] font-black text-white transition-all duration-300 ease-in-out hover:bg-[#71C0D4]">
            Download <span className="text-[#8FE3F9]">v1.3</span>
          </Button>
          <Button className="h-[3.625rem] w-[8.6875rem] rounded-[1.8125rem] bg-[#855FB1] text-base leading-[1.625rem] font-black text-white transition-all duration-300 ease-in-out hover:bg-[#B18BDD]">
            What is it?
          </Button>
        </div>
      </div>
      <Image
        src="/assets/desktop/image-hero-right.png"
        alt="People using Meet app"
        width={394}
        height={303}
        className="hidden lg:flex"
      />
    </section>
  );
}
