import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-[130px] bg-black lg:px-60 px-4 py-5 flex justify-between">
      <Image
        src="/logo.png"
        width={90}
        height={90}
        alt="logo"
        className="rounded-full"
      />
      <div className="flex items-center lg:gap-6 gap-2">
        <Link href="https://t.me/gigachadincryptotatechad" target="_blank">
          <Image
            src="https://poolsplash.fun/wp-content/uploads/2024/09/Untitled-design-44.png"
            height={80}
            width={80}
            alt="tele"
          />
        </Link>
        <Link href="https://x.com/tatechadonsol" target="_blank">
          <Image
            src="https://poolsplash.fun/wp-content/uploads/2024/09/1.png"
            height={80}
            width={80}
            alt="tele"
          />
        </Link>
      </div>
    </header>
  );
}
