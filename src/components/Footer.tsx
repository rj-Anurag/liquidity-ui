import { IconBrandDiscord, IconBrandGithub, IconBrandLinkedin, IconBrandSlack, IconBrandTwitter } from "@tabler/icons-react";
import { WobbleCard } from "./ui/wobble-card";

import { FloatingDock } from "./ui/floating-dock";

export const Footer = () => {
    const links = [
        {
          title: "Linkedin",
          icon: (
            <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
     
        
        {
          title: "Twitter",
          icon: (
            <IconBrandTwitter className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
        {
          title: "GitHub",
          icon: (
            <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
          ),
          href: "#",
        },
        
          {
            title: "Slack",
            icon: (
              <IconBrandSlack className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
          },
          {
            title: "Discord",
            icon: (
              <IconBrandDiscord className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
          },
      ];
  return (
    <footer className="w-full text-gray-400 border-t border-[#242424] px-6 py-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-20">
          {/* Left Section */}
          <div className="md:w-1/3 space-y-6">
            <h1 className="text-white text-5xl font-semibold">Flexibility is freedom</h1>
            <p className="text-sm leading-relaxed">
              "Turning static assets into fluid value—because NFTs shouldn't just be owned, they should move."
            </p>
            <FloatingDock
        mobileClassName="translate-y-20" 
        items={links}
      />
             
          </div>

          {/* Right Section */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <WobbleCard
              containerClassName="col-span-1 lg:col-span-2 bg-pink-800 min-h-[300px] lg:min-h-[300px] rounded-xl"
              className="p-6"
            >
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Liquify
                </h2>
                <p className="mt-4 text-left text-base/6 text-neutral-200">
                Empowering collectors to unlock 
                <br/> value instantly transform NFTs 
                <br /> into any token
                </p>
              </div>
              <img
                src="/images/nft1.jpeg"
                width={200}
                height={200}
                alt="linear image"
                className="absolute right-4 bottom-4 lg:right-8 lg:bottom-8 grayscale filter object-contain rounded-2xl"
              />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px] rounded-xl" className="p-6">
              <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Swap your NFTs for the tokens you choose, effortlessly.
              </h2>
             
            </WobbleCard>
          </div>
        </div>
      </div>
    </footer>
  );
};