import Link from "next/link";

export default function LearnMoreButton() {
  return (
    <Link
      href="/team"
      className="mt-5 rounded-full border border-white px-5 py-2 text-sm cursor-pointer"
    >
      Learn more about us
    </Link>
  );
}
