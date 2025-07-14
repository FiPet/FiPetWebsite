import Image from "next/image";
import { TeamHead } from "../config/interfaces";
import styles from "../page.module.css";

const SocialIconLink = ({ href, src, alt }: { href: string; src: string; alt: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-8 h-8 rounded-full bg-gradient-to-r from-[#C779FD] via-[#7253F3] to-[#1666E6] flex items-center justify-center`}
  >
    <Image src={src} alt={alt} width={20} height={20} />
  </a>
);

export default function TeamHeadCard({ photo, name, title, linkedinLink, socialLink }: TeamHead) {
  const photoSizeSm = 192; // px
  const photoSizeLg = 256; // px
  return (
    <div className={`rounded-2xl flex flex-col items-start`}>
      {/* profile photo and gradient border */}
      <div className={`relative p-[2px] rounded-2xl mb-4 w-full bg-gradient-to-r from-[#C76AFD] to-[#387EE9]`}>
        <div className="aspect-square rounded-2xl overflow-hidden">
          {photo ? (
            <Image
              src={photo}
              alt={name}
              width={photoSizeLg}
              height={photoSizeLg}
              sizes={`(max-width: 768px) ${photoSizeSm}px, ${photoSizeLg}px`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className={`w-full h-full ${styles.customBg}`} />
          )}
        </div>
      </div>

      {/* name and title */}
      <div className="text-start mb-3">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm">{title}</p>
      </div>

      {/* social icons */}
      <div className="flex justify-start gap-1 hidden sm:flex">
        {linkedinLink && <SocialIconLink href={linkedinLink} src="/assets/linkedin/InBug-White.png" alt="LinkedIn" />}
        {socialLink && (
          <SocialIconLink href={socialLink} src="/assets/ig/02_White_Glyph/Instagram_Glyph_White.svg" alt="Instagram" />
        )}
      </div>
    </div>
  );
}
