import Image from "next/image";

export default function Introduction() {
  return (
    <div className="bg-black">
      <div className="flex flex-col lg:grid lg:grid-cols-7 h-[80vh] bg-black text-bg-text">
        <div className="lg:col-span-2 flex items-center justify-center">
          <h2 className="text-primary font-bold text-[42px] text-center">
            Embrace the Hustle, Unleash the Gigachad Tate!
          </h2>
        </div>
        <div className="lg:col-span-3 flex flex-col gap-4 items-center justify-center">
          <Image src="/primary.png" height={350} width={700} alt="primary" />
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
          <h2 className="text-primary font-bold text-[42px] text-center">
            Embrace the Hustle, Unleash the Gigachad Tate!
          </h2>
        </div>
      </div>
      <div className="relative max-lg:mt-8">
        <Image
          src="/fire.jpg"
          alt="cloud"
          width={0}
          height={120}
          sizes="100vw"
          className="w-full lg:h-[500px] h-[200px] absolute lg:top-[-200px] max-lg:top-[20px]"
        />
        <div className="lg:h-[48vh] xl:h-[40vh] 2xl:h-[36vh] 4xl:h-[28vh] 5xl:h-[21vh] flex justify-center items-center lg:px-48 px-4 z-50">
          <h2 className="text-white font-semibold lg:text-[35px] text-lg text-center lg:leading-10 z-50">
            {`Tate, known for his bold moves and lavish lifestyle, is seen as the "Giga Chad" of crypto. His high-risk strategies and huge profits attract young investors, making him a standout figure in the crypto world.`}
          </h2>
        </div>
      </div>
    </div>
  );
}
