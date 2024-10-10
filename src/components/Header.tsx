import Image from "next/image";

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
        <Image
          src="https://poolsplash.fun/wp-content/uploads/2024/09/Untitled-design-44.png"
          height={80}
          width={80}
          alt="tele"
        />
        <Image
          src="https://poolsplash.fun/wp-content/uploads/2024/09/1.png"
          height={80}
          width={80}
          alt="tele"
        />
      </div>
    </header>
  );
}
