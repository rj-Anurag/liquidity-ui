"use client";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function NFTAnimated() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
            Unlock the real value of your NFTs <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              Digital art into liquid asset
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`/images/nft8.jpg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
