import { Button } from "@/components/ui/button"
import { WalletMinimal, Github } from "lucide-react";

export function NavHeader() {
  return (
    <nav
      className="border-b border-dashed w-full p-3"
      style={{ borderColor:  "#242424" }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <a href="https://flowbite.com/" className="flex space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            NFT Swap
          </span>
        </a>

        <div className="hidden w-full md:flex md:w-auto items-center gap-x-2">
          <Button className="bg-white cursor-pointer hover:bg-gray-300">
            <WalletMinimal /> Connect Wallet
          </Button>

          <Button className="bg-white p-2 rounded-full hover:bg-gray-300 cursor-pointer">
            <Github className="w-10 h-10  " />
          </Button>
        </div>
        
      </div>
    </nav>
  );
}
