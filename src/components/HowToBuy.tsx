import Image from "next/image";

export default function HowToBuy() {
  const data = [
    {
      title: "1. CREATE A WALLET",
      content:
        "Create a wallet with Phantom. You can follow the easy steps when given the option to create a new account.",
    },
    {
      title: "2. BUY SOME TRX",
      content:
        "You can deposit $TRX into your phantom wallet using any crypto exchange of your choice.",
    },
    {
      title: "3. CONNECT TO SUNSWAP",
      content:
        "Connect your wallet, paste the $INDIPEPE token address into SUNSWAP. Now swap your TRX to buy $INDIPEPE.",
    },
    {
      title: "4. HOLD",
      content: "Hold $INDIPEPE and INDIPEPEING later.",
    },
  ];

  return (
    <div className="bg-secondary-bg max-lg:px-4 px-24 3xl:px-60 mt-8 min-h-screen 3xl:min-h-[80vh]">
      <h1 className="uppercase text-btn-color text-4xl max-lg:ml-8 lg:text-8xl font-semibold lg:text-center pt-8 relative">
        how to buy
      </h1>
      <div className="flex justify-start mt-[-40px] ml-[120px]">
        <Image
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=153,fit=crop/dJo4J7gGL7F0bjlM/cloud-icon1-m5KbvjZeOMHJ0WBw.png"
          width={164}
          height={76}
          alt="cloud"
        />
      </div>
      <div className="flex justify-end mt-[-80px] mr-[96px]">
        <Image
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=153,fit=crop/dJo4J7gGL7F0bjlM/cloud-icon1-m5KbvjZeOMHJ0WBw.png"
          width={277}
          height={130}
          alt="cloud"
          className="max-lg:max-w-[200px]"
        />
      </div>
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:pr-32 lg:pl-40 lg:gap-16 gap-4 max-lg:px-2 lg:ml-8">
          {data.map((d) => (
            <div key={d.title} className="flex flex-col lg:gap-4 gap-1 font-londrina lg:text-2xl text-[14px]">
              <span className="text-[#f9b700]">{d.title}</span>
              <span className="text-[#1a1a1a]">{d.content}</span>
            </div>
          ))}
        </div>
        <div className="absolute top-[300px] lg:top-[120px]">
          {/* thay cái này */}
          {/* <Image
            src="https://i.imgur.com/C1jmiaq.png"
            width={289}
            height={424}
            alt="teacher"
            className="max-lg:max-h-[390px]"
          /> */}
        </div>
        <div className="absolute top-[600px] left-[25%] lg:top-[40%] lg:left-[35%]">
          <Image
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=153,fit=crop/dJo4J7gGL7F0bjlM/cloud-icon1-m5KbvjZeOMHJ0WBw.png"
            width={240}
            height={110}
            alt="cloud"
            className="max-lg:max-w-[180px]"
          />
        </div>
      </div>
    </div>
  );
}
