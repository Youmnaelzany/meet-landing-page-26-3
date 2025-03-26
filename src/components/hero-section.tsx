import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="">
      <Image
        src="/assets/tablet/image-hero.png"
        alt="People using Meet app"
        width={820}
        height={303}
        className="lg:hidden"
      />
      <div className=""></div>
    </section>
  );
}
