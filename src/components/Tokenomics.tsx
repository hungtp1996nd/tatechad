import Image from "next/image";

export default function Tokenomics() {
  return (
    <div className="lg:px-60 px-4 flex flex-col gap-4 justify-center items-center bg-black text-bg-text">
      {/* <div className="bg-primary lg:p-8 p-4 rounded-2xl font-semibold lg:text-2xl text-sm lg:mt-[-50px] mt-[-24px] lg:w-2/3 w-3/4 flex justify-center items-center rotate-3 text-white">CA: 5QQRAWNJSHGHNALFADNADJ6786</div> */}
      <h1 className="uppercase lg:text-[78px] text-[40px] font-semibold text-primary">
        tokenomics
      </h1>
      <div className="border-[2px] border-primary rounded-[20px] min-h-[600px] w-full shadow-2xl p-4 flex flex-col gap-4 justify-center items-center">
        <Image src="/web2.jpg" alt="tokenomics" height={500} width={500} className="rounded-2xl" />
        <div className="flex flex-col items-center gap-6 uppercase text-primary text-[20px] font-semibold">
          <span>Total supply: 1B</span>
          <span>Liquidity: 100%</span>
          <span>Burn: 100%</span>
        </div>
      </div>
    </div>
  );
}
