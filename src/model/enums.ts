export enum WalletSource {
  VEWORLD = "veworld",
  SYNC2 = "sync2",
}

const logosUrl = process.env.PUBLIC_URL + "/images/logo"
export const WalletSourceInfo: Record<
  WalletSource,
  { name: string; logo?: string }
> = {
  [WalletSource.VEWORLD]: {
    name: "VeWorld",
    logo: `${logosUrl}/veWorld.png`,
  },
  [WalletSource.SYNC2]: {
    name: "Sync2",
    logo: `${logosUrl}/sync2.png`,
  },
}

export const DEFAULT_SOURCE = WalletSource.VEWORLD

export enum Network {
  MAIN = "main",
  TEST = "test",
}

export const NetworkInfo: Record<Network, { name: string; url: string }> = {
  [Network.MAIN]: {
    name: "Mainnet",
    url: "https://vethor-node.vechain.com",
  },
  [Network.TEST]: {
    name: "Testnet",
    url: "https://vethor-node-test.vechaindev.com",
  },
}

export const DEFAULT_NETWORK = Network.TEST
