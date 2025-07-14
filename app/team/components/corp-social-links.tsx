import Image from "next/image";

const socialLinksData = [
  {
    key: "linkedin",
    href: "https://www.linkedin.com/company/fipet/",
    img: "/assets/linkedin/InBug-White.png",
    alt: "LinkedIn icon",
  },
  {
    key: "instagram",
    href: "https://www.instagram.com/fipetapp/",
    img: "/assets/ig/02_White_Glyph/Instagram_Glyph_White.svg",
    alt: "Instagram icon",
  },
  {
    key: "tiktok",
    href: "https://www.instagram.com/fipetapp/",
    img: "/assets/tiktok/TIKTOK_SOCIAL_ICONS/TIKTOK_SOCIAL_ICONS_CIRCLE/SVG/TIKTOK_SOCIAL_ICON_CIRCLE_BLACK.svg",
    alt: "TikTok icon",
  },
];

export default function CorpSocialLinks() {
  return (
    <div className="bg-gradient-to-r from-[#C165FC] to-[#3579E9] text-white my-8 py-12 w-1/2 rounded-2xl mx-auto text-center shadow-lg">
      <p className="text-3xl font-medium pb-3">See what we&apos;ve been up to!</p>
      <div className="grid grid-cols-5 gap-0">
        <div></div>
        {socialLinksData.map(({ key, href, img, alt }) => (
          <a
            key={key}
            href={href}
            aria-label={`${key} social link`}
            className="flex justify-center items-center w-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={img} alt={alt} width={32} height={32} />
          </a>
        ))}
        <div></div>
      </div>
    </div>
  );
}
