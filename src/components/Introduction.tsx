import Image from "next/image";

export default function Introduction() {
  return (
    <div>
      <div className="flex flex-col lg:grid lg:grid-cols-7 h-[80vh] bg-black text-bg-text">
        <div className="lg:col-span-2 flex items-center justify-center">
          <h2 className="text-primary font-bold text-[22px] text-center">
            I'm Diddy and ya are my son. Call me Daddy mfers!
          </h2>
        </div>
        <div className="lg:col-span-3 flex flex-col gap-4 items-center justify-center">
          <Image src="/primary.png" height={150} width={360} alt="primary" />
          <Image
            src="/logo.png"
            width={480}
            height={480}
            alt="introduction"
            className="rounded-full z-50"
          />
        </div>
        <div className="lg:col-span-2 flex items-center justify-center">
          <h2 className="text-primary font-bold text-[22px] text-center">
            I'm Diddy and ya are my son. Call me Daddy mfers!
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
          className="w-full lg:h-[500px] h-[300px] absolute lg:top-[-200px] max-lg:top-[-70px]"
        />
        <div className="lg:h-[40vh] flex justify-center items-center lg:px-48 px-4 z-50">
          <h2 className="text-white font-semibold lg:text-[35px] text-lg text-center lg:leading-10 z-50">
            {" "}
            Introducing DIDDY, the memecoin that's all about fun and community!
            With the playful spirit of "I'm Diddy and ya are my son," we're here
            to create a vibrant ecosystem where everyone feels like family. Join
            us on this exciting journey and let's build a thriving community
            together—call me Daddy, mfers!
          </h2>
        </div>
      </div>
    </div>
  );
}
