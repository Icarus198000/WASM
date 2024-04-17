'use client';

import Image from "next/image";
import DarkModeButton from './ThemeSwitcher'
import PolkadotWalletButton from "./wallet-button/polkadot-wallet-button";
import MetamaskWalletButton from './wallet-button/metamask-wallet-button'
import "@rainbow-me/rainbowkit/styles.css";
import {
  RainbowKitProvider,
  darkTheme,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import {
  rainbowWallet,
  walletConnectWallet,
  trustWallet,
  okxWallet,
  ledgerWallet,
  metaMaskWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig, sepolia, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
  goerli,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { ALCHEMY_API_KEY, PROJECT_ID } from "../utils/env";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora, sepolia, goerli],
  [alchemyProvider({ apiKey: ALCHEMY_API_KEY }), publicProvider()]
);
console.log(PROJECT_ID);

const projectId = PROJECT_ID;

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      metaMaskWallet({ projectId, chains }), // Metamask
      ...(projectId ? [walletConnectWallet({ projectId, chains })] : []),
      ...(projectId ? [trustWallet({ projectId, chains })] : []),
      // walletConnectWallet({ projectId, chains }),
      // trustWallet({ projectId, chains }),
      // Add more recommended wallets as needed
    ],
  },
  {
    groupName: "Other",
    wallets: [
      ...(projectId ? [rainbowWallet({ projectId, chains })] : []),
      ...(projectId ? [okxWallet({ projectId, chains })] : []),
      ...(projectId ? [ledgerWallet({ projectId, chains })] : []),

      // rainbowWallet({ projectId, chains }),
      // coinbaseWallet({ projectId, chains }),
      // okxWallet({ projectId, chains }),
      // ledgerWallet({ projectId, chains }),
      // Add other wallets to the "Other" group
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function ImportModelPage() {
  return (
    <div className=" w-full">
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains} coolMode theme={darkTheme()}>
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <div className="flex gap-3 justify-center items-center">
              <Image
                src="/commune.gif"
                alt="commune Logo"
                width={100}
                height={100}
                priority
              />
              <p className="fixed left-0 top-0 dark:text-gray-300 flex w-full justify-center pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:p-4 text-[35px]">
                Commune-WASM
              </p>
            </div>

            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
              <div className="flex justify-center items-center gap-[20px] mr-[20px]">
                <div>
                  <PolkadotWalletButton />
                </div>
                <div>
                  <MetamaskWalletButton />
                </div>
              </div>
              <DarkModeButton />
              <span
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 ml-[20px] dark:text-white"
              >
                By{" "}
                <span className=" text-[30px] font-bold uppercase dark:text-gray-300">Icarus</span>
              </span>
            </div>
          </div>
        </RainbowKitProvider>
      </WagmiConfig >
    </div>
  );
}
