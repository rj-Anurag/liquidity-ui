
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

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
  className="border-b border-dashed w-full h-[700px] p-3  mx-auto border-l border-r max-w-screen-2xl"
  style={{ borderColor: "#242424" }}
>
    
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip " >
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
      Mint it. Hold it. Flex it
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover rounded-2xl"
          />

        </DraggableCardBody>
      ))}
    </DraggableCardContainer> 
    </section>
  );
}
