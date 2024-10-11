import Image from "next/image";

export default function Introduction() {
  return (
    <div className="bg-black">
      <div className="flex flex-col lg:grid lg:grid-cols-7 h-[80vh] bg-black text-bg-text">
        <div className="lg:col-span-2 flex items-center justify-center">
          <h2 className="text-primary font-regular text-[32px] text-center">
          Vitalik Buterin has emerged as a surprising candidate for the 2024 Nobel Prize in Economics.
          </h2>
        </div>
        <div className="lg:col-span-3 flex flex-col gap-4 items-center justify-center">
          <Image src="/primary.gif" height={350} width={700} alt="primary" />
          <Image
            src="/logo.png"
            width={480}
            height={480}
            alt="introduction"
            className="rounded-full z-50 hidden lg:block"
          />
          <Image
            src="/logo.png"
            width={360}
            height={360}
            alt="introduction"
            className="rounded-full z-50 block lg:hidden"
          />
        </div>
        <div className="lg:col-span-2 flex items-center justify-center">
          <h2 className="text-primary font-regular text-[32px] text-center">
          Vitalik Buterin has emerged as a surprising candidate for the 2024 Nobel Prize in Economics.
          </h2>
        </div>
      </div>
      <div className="relative max-lg:mt-8">
        <Image
          src="/fire2.png"
          alt="cloud"
          width={0}
          height={120}
          sizes="100vw"
          className="w-full lg:h-[550px] h-[250px] absolute lg:top-[-300px] max-lg:top-[20px]"
        />
        <div className="lg:h-[48vh] xl:h-[40vh] 2xl:h-[36vh] 4xl:h-[28vh] 5xl:h-[21vh] flex justify-center items-center lg:px-48 px-4 z-50">
          <h2 className="font-semibold lg:text-[35px] text-lg text-center lg:leading-10 z-50" style={{ color: '#ecf0f1' }}>
            {`Vitalik built a platform, created a currency, you could say, disproved Mises' regression theorem in the process, clearly following in Satoshi's footsteps. He deserves to be honored with a nobel prize.`}
          </h2>
        </div>
      </div>
    </div>
  );
}
