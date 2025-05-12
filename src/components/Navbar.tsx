import { Button } from "@/components/ui/button"
import { WalletMinimal, Github } from "lucide-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
export function NavHeader() {
  const { setVisible } = useWalletModal();
  const { connected, publicKey, disconnect } = useWallet();
  return (
    <nav
      className="border-b border-dashed w-full p-3"
      style={{ borderColor:  "#242424" }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            NFT Swap
          </span>
        </a>

        <div className="hidden w-full md:flex md:w-auto items-center gap-x-2">
          <Button
            onClick={connected ? disconnect : () => setVisible(true)}
            className={`bg-white text-black hover:bg-gray-200 transition-colors rounded-2xl p-2 font-bold cursor-pointer flex items-center ${connected ? "bg-white text-black hover:bg-gray-200" : ""}`}
          >
            {connected ? (
              <>
                <WalletMinimal className="mr-2 h-4 w-4" /> Disconnect
                <span className="ml-2 text-black font-mono text-xs">
                  {publicKey?.toBase58().slice(0, 4)}...{publicKey?.toBase58().slice(-4)}
                </span>
              </>
            ) : (
              <>
                <WalletMinimal className="mr-2 h-4 w-4" /> Connect Wallet
              </>
            )}
          </Button>

          <Button className="bg-white p-2 rounded-full hover:bg-gray-300 cursor-pointer">
            <Github className="w-10 h-10  " />
          </Button>
        </div>
        
      </div>
    </nav>
  );
}
