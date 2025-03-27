import Image from "next/image";

export default function SmarterMeetings() {
  return (
    <section className="mt-36 mb-48 flex flex-col items-center justify-center gap-14 px-4 sm:px-6 md:mt-40 lg:mt-[12.31rem] lg:px-8">
      <div className="relative flex size-14 items-center justify-center rounded-full border border-[#87879D]/25 text-base leading-[1.625rem] font-black text-[#87879D] before:absolute before:bottom-14 before:mx-auto before:h-[5.25rem] before:w-[0.0625rem] before:bg-[#87879D]/25">
        01
      </div>
      {/* Images */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4 lg:gap-8">
        <Image
          src={"/assets/desktop/image-woman-in-videocall.jpg"}
          alt="woman in videocall"
          width={151}
          height={238}
          className="rounded-md"
        />
        <Image
          src={"/assets/desktop/image-women-videochatting.jpg"}
          alt="woman in videochatting"
          width={151}
          height={238}
          className="rounded-md"
        />
        <Image
          src={"/assets/desktop/image-men-in-meeting.jpg"}
          alt="men in meeting"
          width={151}
          height={238}
          className="rounded-md"
        />
        <Image
          src={"/assets/desktop/image-man-texting.jpg"}
          alt="man texting"
          width={151}
          height={238}
          className="rounded-md"
        />
      </div>
      {/* Text */}
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <h2 className="text-base leading-[1.625rem] font-black tracking-[0.25rem] text-[#4D96A9] uppercase">
            Built for modern use
          </h2>
          <h3 className="w-[20.4375rem] text-[2rem] leading-9 font-black text-[#28283D] md:w-[27.8125rem] md:text-[2.5rem] md:leading-11">
            Smarter meetings, all in one place
          </h3>
        </div>
        <p className="w-[20.4375rem] text-base leading-[1.625rem] font-medium text-[#87879D] md:w-[36.8125rem] lg:w-[31.75rem]">
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </div>
    </section>
  );
}
