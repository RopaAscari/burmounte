export type Platform = "android" | "ios";

export interface ServiceResult<T, X> {
  data?: T;
  error?: X;
  success?: boolean;
  statusCode?: number;
}

export interface ActiveSymbolLandingResponse {
  displayName: string;
  description: string;
  symbols: ActiveSymbol[];
}

export interface ActiveSymbol {
  id: number;
  allowForwardStarting?: boolean | null;
  delayAmount?: number | null;
  displayName?: string | null;
  exchangeIsOpen?: boolean | null;
  exchangeName?: string | null;
  intradayIntervalMinutes?: number | null;
  isTradingSuspended?: boolean | null;
  market: string;
  marketDisplayName: string;
  pip?: number | null;
  quotedCurrencySymbol?: string | null;
  displayPhoto?: string | null;
  spot?: number | null;
  spotAge?: string | null;
  spotTime?: string | null;
  submarket?: string | null;
  submarketDisplayName?: string | null;
  readableName?: string | null;
  description?: string | null;
  symbol: string;
  symbolType?: string | null;
  createdAt: Date;
  updatedAt: Date;
  // watchlistSymbols: WatchlistSymbol[];
  // trendingSymbols: TrendingSymbol[];
}

interface WatchlistSymbol {
  // Define the structure of WatchlistSymbol if needed
}

interface TrendingSymbol {
  // Define the structure of TrendingSymbol if needed
}
