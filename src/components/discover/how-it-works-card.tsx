import Image from "next/image";

type HowItWorksCardProps = {
  src: string;
  alt?: string;
  text: string;
};

export default function HowItWorksCard({
  src,
  alt,
  text,
}: HowItWorksCardProps) {
  return (
    <div className="flex items-start space-x-4 flex-row-reverse sm:flex-row">
      <Image
        alt={alt || "icon"}
        src={src}
        width={40}
        height={40}
        className="w-12 h-12 rounded-full flex-shrink-0"
      />

      <p className="text-black text-xl font-medium">{text}</p>
    </div>
  );
}
