import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { Button } from "@radix-ui/themes";
import { WalletMinimal } from "lucide-react";
import { PointerHighlight } from "./ui/pointer-highlight";

export function Home() {
  const items = [
    {
      title: "NFT1",
      image:
        "/images/nft1.jpeg",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "NFT2",
      image:
        "/images/nft2.jpeg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "NFT3",
      image:
        "/images/nft3.jpeg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "NFT4",
      image:
        "/images/nft4.jpeg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "NFT5",
      image:
        "/images/nft5.jpeg",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "NFT6",
      image:
        "/images/nft6.png",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "NFT7",
      image:
        "/images/nft7.jpeg",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];

  return (
    <section
      className="relative flex h-[800px] w-full flex-col items-center border border-dashed border-[#242424] max-w-screen-2xl mx-auto"
    >
      <div className="max-w-full py-10 text-3xl md:text-6xl font-bold tracking-tight text-white text-left pr-40">
      Instant Liquidity, Real  <PointerHighlight>Utility</PointerHighlight>
      </div>
      <div className="relative w-full max-w-screen-2xl">
        <DraggableCardContainer className="relative flex h-[500px] w-full items-center justify-center overflow-clip">
          <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
            Mint it. Hold it. Flex it
          </p>
          {items.map((item, index) => (
            <DraggableCardBody key={index} className={item.className}>
              <img
                src={item.image}
                alt={item.title}
                className="pointer-events-none relative z-10 h-80 w-80 object-cover rounded-2xl"
              />
            </DraggableCardBody>
          ))}
        </DraggableCardContainer>

        <div className="flex justify-center">
          <Button className="flex items-center bg-white text-black hover:bg-gray-200 transition-colors rounded-2xl p-3 font-bold cursor-pointer">
            <WalletMinimal className="mr-2 h-4 w-4" /> Connect Wallet
          </Button>
        </div>
      </div>
    </section>
  );
}
