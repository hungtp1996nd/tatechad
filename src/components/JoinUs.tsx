import Image from "next/image";

export default function JoinUs() {
  return (
    <div className="bg-[#002e66] mt-8 px-4 lg:px-32 3xl:px-80 lg:pt-24">
      <div className="flex max-lg:flex-col lg:gap-12">
        <Image
          src="https://i.imgur.com/Quvynvb.jpeg"
          width={519}
          height={590}
          alt="join us"
        />
        <div className="flex flex-col lg:gap-6 gap-2 lg:mt-16 max-lg:justify-center max-lg:items-center max-lg:mb-4">
          {/* <Image
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=545,h=171,fit=crop/dJo4J7gGL7F0bjlM/INDIPEPE-baner-logo-png-mxB7r3KVBzCaR444.png"
            width={545}
            height={172}
            alt="logo footer"
          /> */}
          <span className="text-white uppercase text-8xl font-londrina">{`Join us !`}</span>
          <div className="flex gap-12">
            <Image
              src="/tele.svg"
              width={92}
              height={92}
              alt="tele footer"
              className="text-white cursor-pointer"
            />
            <Image
              src="/x.svg"
              width={92}
              height={92}
              alt="x footer"
              className="text-white cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
