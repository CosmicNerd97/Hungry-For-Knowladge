import Image from "next/image";
export default function HeroSection() {
  return (
    <section>
      <Image
        alt=""
        src={"https://placehold.co/1400x400/png"}
        width={1400}
        height={200}
        style={{ width: "100%" }}
      />
    </section>
  );
}
