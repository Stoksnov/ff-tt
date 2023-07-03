export interface ITickerResponse {
    c: string
    ltp: number | null
    name: string
    chg: number | null
    pcp: number | null
    min_step: number | null
}

export interface ITicker {
    ticker: string
    price: number | null
    companyName: string
    changePriceInPoints: number | null
    changePriceInPercents: number | null
    minPriceStep: number | null
}

export interface ITickers {
    [key:string]: ITicker
}
