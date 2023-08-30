import { genesisBlocks } from "@vechain/connex/esm/config"
import { CoreTypes } from "@walletconnect/types/dist/types/core/core"

if (!process.env.REACT_APP_PUBLIC_PROJECT_ID)
  throw new Error("`REACT_APP_PUBLIC_PROJECT_ID` env variable is missing.")

console.log(
  "process.env.REACT_APP_PUBLIC_PROJECT_ID",
  process.env.REACT_APP_PUBLIC_PROJECT_ID
)

export const DEFAULT_PROJECT_ID = "1c1c20862a46fb1cd4322d403385fea2"
// If undefined will use the Wallet Connect default
export const DEFAULT_RELAY_URL = process.env.REACT_APP_RELAY_URL

export const DEFAULT_LOGGER =
  process.env.REACT_APP_WALLET_CONNECT_DEBUGGER === "true" ? "debug" : ""

export const DEFAULT_APP_METADATA: CoreTypes.Metadata = {
  name: "Official VeWorld Demo Dapp",
  description:
    "You can use this dapp to familiarize and know more about creation on VeChain",
  url: "https://veworld-dapp-vecha.in/",
  icons: ["https://i.ibb.co/zb85hsL/vechain-vet-logo512.png"],
}

export const SUPPORTED_CHAINS = [
  `vechain:${genesisBlocks.main.id.slice(-32)}`,
  `vechain:${genesisBlocks.test.id.slice(-32)}`,
]

export enum DEFAULT_METHODS {
  REQUEST_TRANSACTION = "thor_sendTransaction",
  SIGN_CERTIFICATE = "thor_signCertificate",
}

export enum DEFAULT_EVENTS {}