import Image from "next/image";

type HowItWorksCardProps = {
  src: string;
  alt?: string;
  text: string;
  numOfBold: number;
};

export default function HowItWorksCard({
  src,
  alt,
  text,
  numOfBold,
}: HowItWorksCardProps) {
  const textArray: string[] = text.split(" ");
  const boldPart = textArray.slice(0, numOfBold).join(" ");
  const regularPart = textArray.slice(numOfBold).join(" ");

  return (
    <div className="flex items-start space-x-4 flex-row-reverse sm:flex-row my-3">
      <Image
        alt={alt || "icon"}
        src={src}
        width={40}
        height={40}
        className="w-12 h-12 rounded-full flex-shrink-0"
      />
      <p className="text-gray-700 text-xl">
        <strong>{boldPart}</strong> {regularPart}
      </p>
    </div>
  );
}
