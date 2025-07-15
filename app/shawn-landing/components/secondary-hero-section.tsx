import Image from "next/image";

export default function SecondaryHeroSection() {
  const imgWidth = 600;
  const imgHeight = imgWidth * 1.85;
  return (
    <div
      className="w-full overflow-hidden text-white"
      style={{
        background: `
          linear-gradient(to bottom, rgba(255,255,255,0) 0%, #FFF8EC 100%),
          linear-gradient(to right, #B949FD 0%, #0D61E4 100%)
        `,
      }}
    >
      {/* titles and subtitles */}
      <div className="ps-24 pt-24">
        <h1 className="text-6xl font-medium">
          Learn. Battle.
          <br />
          Evolve.
        </h1>
        <p>[Copy that goes a little more into the mechanics of FiPet]</p>
        <p className="text-center">
          [re-arrange this section when we figure out the copy]
        </p>
      </div>

      {/* images */}
      <div className="relative flex items-center justify-center py-12">
        {/* left */}
        <Image
          src="/assets/landing/pic-left.png"
          alt="app demo image left"
          width={imgWidth}
          height={imgHeight}
          style={{ objectFit: "cover" }}
          className="absolute transform -rotate-[15deg] -translate-x-[27%] z-10"
        />

        {/* right */}
        <Image
          src="/assets/landing/pic-right.png"
          alt="app demo image image"
          width={imgWidth}
          height={imgHeight}
          style={{ objectFit: "cover" }}
          className="absolute transform rotate-[15deg] translate-x-[27%] z-10"
        />

        {/* center */}
        <Image
          src="/assets/landing/pic-center.png"
          alt="app demo image image"
          width={imgWidth}
          height={imgHeight}
          style={{ objectFit: "cover" }}
          className="relative transform -translate-y-16 z-20"
        />
      </div>
    </div>
  );
}
