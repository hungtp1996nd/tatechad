import Image from "next/image";

export default function About() {
  return (
    <div className="bg-secondary-bg max-lg:px-4 px-32 mt-8 min-h-screen 3xl:px-80 3xl:min-h-[90vh]">
      <div className="relative">
        <h1 className="uppercase text-btn-color text-8xl max-lg:text-5xl font-semibold max-lg:ml-12 lg:text-center pt-8">
          about
        </h1>
        <div className="absolute bottom-[-32px] right-[15%]">
          <Image
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=153,fit=crop/dJo4J7gGL7F0bjlM/cloud-icon1-m5KbvjZeOMHJ0WBw.png"
            width={277}
            height={130}
            alt="cloud"
            className="max-lg:hidden"
          />
        </div>
        <div className="absolute bottom-[-120px] right-[48%] max-lg:right-[28%] max-lg:bottom-[-320px]">
          <Image
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=153,fit=crop/dJo4J7gGL7F0bjlM/cloud-icon1-m5KbvjZeOMHJ0WBw.png"
            width={164}
            height={76}
            alt="cloud"
            className="max-lg:max-w-[90px]"
          />
        </div>
      </div>
      <div className="flex max-lg:flex-col justify-between">
        <div className="flex flex-col gap-4">
          <Image
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=153,fit=crop/dJo4J7gGL7F0bjlM/cloud-icon1-m5KbvjZeOMHJ0WBw.png"
            width={277}
            height={130}
            alt="cloud"
            className="ml-4 max-lg:hidden"
          />
          {/* thay ảnh này */}
          <Image
            src="https://i.imgur.com/jbC1AfQ.png"
            width={509}
            height={535}
            alt="about meme"
            className="max-h-[535px] max-lg:max-w-[300px]"
          />
        </div>

        <div className="relative">
          <Image
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=885,fit=crop/dJo4J7gGL7F0bjlM/monkey-bed-YX4bP8v0z1T5RLv0.png"
            width={509}
            height={688}
            alt="about text"
            className="max-lg:max-w-[300px]"
          />
          <div className="absolute max-lg:top-[100px] top-[190px] max-lg:left-4 left-[50px] max-w-[220px] text-center text-[21px] max-lg:text-[13px]">
            <span className="font-londrina text-white text-center">{`Indian Pepe, after being banned from Sunpump, decided to move to Sunswap. With renewed determination, he’s set on restructuring the playground, bringing in fresh strategies and shaking up the scene in ways no one expected. His next chapter is just beginning!`}</span>
            {/* <span className="font-londrina text-btn-color">{`$INDIPEPE`}</span>
            <span className="font-londrina text-white text-center">{`, the world's first meme token that enables holders to earn profits from businesses and services developed under the INDIPEPE brand. Our mission is to make INDIPEPE a household name, fostering a community that amplifies our brand's influence. It's INDIPEPE's world; you're just living in it.`}</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}
