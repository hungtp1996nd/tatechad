import Image from "next/image";

export default function Starter() {
  return (
    <div className="bg-secondary-bg px-4 lg:px-40 pt-12 min-h-screen 3xl:px-80">
      <div className="relative">
        <div className="absolute cursor-pointer hover:bg-btn-color hover:text-btn-bg hover:border-btn-bg text-[37px] font-londrina right-0 top-0 w-48 h-[70px] uppercase bg-btn-bg text-btn-color border-[4px] border-solid border-btn-color rounded-[10px] flex justify-center items-center">
          buy here
        </div>
        {/* ảnh avatar */}
        <div className="absolute lg:top-[70px] 3xl:top-[140px] lg:left-[calc(50%-340px)] z-[1] max-lg:top-[180px]">
          <Image
            src="https://i.imgur.com/XjkqPAz.png"
            width={680}
            height={680}
            alt="starter"
          />
        </div>
        <div className="absolute lg:left-[calc(50%-395px)] lg:bottom-[-400px] 3xl:top-[200px] max-lg:top-[100px] max-lg:left-2">
          {/* <Image
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=791,h=248,fit=crop/dJo4J7gGL7F0bjlM/INDIPEPE-baner-logo-png-mxB7r3KVBzCaR444.png"
            width={790}
            height={250}
            alt="logo"
            className="max-lg:max-w-[380px]"
          /> */}
        </div>
        <div className="absolute max-lg:bottom-[-620px] left-[60px] bottom-[-510px] max-lg:z-10">
          <Image
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=153,fit=crop/dJo4J7gGL7F0bjlM/cloud-icon1-m5KbvjZeOMHJ0WBw.png"
            width={277}
            height={130}
            alt="cloud"
            className="max-lg:max-w-[200px]"
          />
        </div>
        <div className="absolute right-[80px] top-[150px] max-lg:top-[530px] max-lg:z-10">
          <Image
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=153,fit=crop/dJo4J7gGL7F0bjlM/cloud-icon1-m5KbvjZeOMHJ0WBw.png"
            width={277}
            height={130}
            alt="cloud"
            className="max-lg:max-w-[200px]"
          />
        </div>
        <div className="uppercase text-[32px] lg:text-[44px] font-semibold text-home-bg absolute right-[300px] top-[60px] 3xl:top-[90px] max-lg:top-[820px] max-lg:right-[50px]">Sad Indian Pepe</div>
        <div className="absolute max-lg:right-[200px] right-[260px] top-[440px] max-lg:top-[720px] 3xl:top-[560px]">
          <Image
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=87,h=88,fit=crop/dJo4J7gGL7F0bjlM/teleb-mp89n0D8OyUo4My4.jpg"
            width={87}
            height={87}
            alt="tele"
            className="rounded-lg"
          />
        </div>
        <div className="absolute max-lg:right-[100px] right-[150px] top-[440px] max-lg:top-[720px] 3xl:top-[560px]">
          <Image
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=87,h=88,fit=crop/dJo4J7gGL7F0bjlM/twitter-x-logo-png-9-YBg4pBZMDNTaj8xz.png"
            width={87}
            height={87}
            alt="x"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
