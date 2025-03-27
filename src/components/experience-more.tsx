import { Button } from "./ui/button";

export default function ExperienceMore() {
  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center gap-8 bg-[url('/assets/mobile/image-footer.jpg')] bg-cover bg-no-repeat px-4 py-20 text-center sm:px-6 md:gap-10 md:bg-[url('/assets/tablet/image-footer.jpg')] md:py-24 lg:flex-row lg:justify-between lg:bg-[url('/assets/desktop/image-footer.jpg')] lg:px-21 lg:py-24">
      <div className="absolute -top-8 right-0 left-0 z-50 mx-auto flex size-14 items-center justify-center rounded-full border border-[#87879D]/25 bg-white text-base leading-[1.625rem] font-black text-[#87879D] before:absolute before:bottom-14 before:mx-auto before:h-[5.25rem] before:w-[0.0625rem] before:bg-[#87879D]/25">
        02
      </div>
      <div className="absolute top-0 left-0 z-30 h-full w-full bg-[#4D96A9]/80"></div>
      <div className="z-50 flex flex-col items-center justify-center gap-6 text-center text-[#FAFAFA] sm:gap-8 lg:flex-row lg:justify-between lg:gap-[5.75rem] lg:text-left">
        <div className="flex flex-col items-center justify-center gap-8 text-center md:gap-10 lg:flex-row lg:justify-between lg:gap-[7.81rem] lg:text-left">
          <h2 className="w-[20.4375rem] text-[2rem] leading-9 font-black md:w-[28.5625rem] md:text-[2.5rem] md:leading-11 lg:w-[21.875rem]">
            Experience more together
          </h2>
          <p className="w-[20.4375rem] text-lg leading-[1.625rem] font-medium md:w-[35.8125rem] lg:w-[21.875rem]">
            Stay connected with reliable HD meetings and unlimited one-on-one
            and group video sessions.
          </p>
        </div>
        <Button className="h-[3.625rem] w-[12.0625rem] rounded-[1.8125rem] bg-[#855FB1] text-base leading-[1.625rem] font-black text-white transition-all duration-300 ease-in-out hover:bg-[#B18BDD]">
          Download <span className="text-[#D9B8FF]">v1.3</span>
        </Button>
      </div>
    </section>
  );
}
