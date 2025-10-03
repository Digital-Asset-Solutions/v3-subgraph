import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const FACTORY_ADDRESS = '0x0666f679a54ee1ae97e32e980223d9ba1ced6d65'

export const REFERENCE_TOKEN = '0x28BEc7E30E6faee657a03e19Bf1128AaD7632A00'
export const STABLE_TOKEN_POOL = '0xF79a7600134805e5b63Da1C639c70e1004cE1721'

export const TVL_MULTIPLIER_THRESHOLD = '2'
export const MATURE_MARKET = '1000000'
export const MINIMUM_NATIVE_LOCKED = BigDecimal.fromString('1')

export const ROLL_DELETE_HOUR = 768
export const ROLL_DELETE_MINUTE = 1680

export const ROLL_DELETE_HOUR_LIMITER = BigInt.fromI32(500)
export const ROLL_DELETE_MINUTE_LIMITER = BigInt.fromI32(1000)

// token where amounts should contribute to tracked volume and liquidity
// usually tokens that many tokens are paired with s
export const WHITELIST_TOKENS: string[] = [
  '0x046EDe9564A72571df6F5e44d0405360c0f4dCab', // WETH9
  '0x28BEc7E30E6faee657a03e19Bf1128AaD7632A00', // USDC
]

export const STABLE_COINS: string[] = [
  '0x28BEc7E30E6faee657a03e19Bf1128AaD7632A00', // USDC
]

export const SKIP_POOLS: string[] = []

export const POOL_MAPINGS: Array<Address[]> = []

export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const STATIC_TOKEN_DEFINITIONS: TokenDefinition[] = []
