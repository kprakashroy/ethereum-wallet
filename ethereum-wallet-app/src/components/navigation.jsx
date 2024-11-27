import React from 'react'

export default function Navigation(){
    return(
        <nav>
            <div>
            <div className="text-divider">
                <label>sUSD</label>
                <div className="divider" />
            </div>
            <a aria-current="page" href="/mint">
                <li>
                <img
                    alt="reedemIcon"
                    loading="lazy"
                    width={16}
                    height={16}
                    decoding="async"
                    data-nimg={1}
                    src="https://cdn.yield.fi/yfi/reedemIcon.svg"
                />
                <span>Mint</span>
                </li>
            </a>
            </div>
            <div>
            <div className="text-divider">
                <label>yUSD</label>
                <div className="divider" />
            </div>
            <a aria-current="page" href="/earn">
                <li className="header_activeHeaderMenu__xZn1S">
                <img
                    alt="coinsIcon"
                    loading="lazy"
                    width={16}
                    height={16}
                    decoding="async"
                    data-nimg={1}
                    src="https://cdn.yield.fi/yfi/coinsIcon.svg"
                />
                <span>Earn</span>
                </li>
            </a>
            <a aria-current="page" href="/portfolio">
                <li>
                <img
                    alt="portfolioIcon"
                    loading="lazy"
                    width={16}
                    height={16}
                    decoding="async"
                    data-nimg={1}
                    src="https://cdn.yield.fi/yfi/portfolioIcon.svg"
                />
                <span>Portfolio</span>
                </li>
            </a>
            </div>
            <div>
            <div className="text-divider">
                <label>Campaigns</label>
                <div className="divider" />
            </div>
            <a aria-current="page" href="/referral">
                <li>
                <img
                    alt="referralIcon"
                    loading="lazy"
                    width={16}
                    height={16}
                    decoding="async"
                    data-nimg={1}
                    src="https://cdn.yield.fi/yfi/referralIcon.svg"
                />
                <span>Referral</span>
                </li>
            </a>
            </div>
            <div>
            <div className="text-divider">
                <label>Ecosystem</label>
                <div className="divider" />
            </div>
            <a aria-current="page" className="pointer-events-none" href="/defi">
                <li>
                <img
                    alt="defiIcon"
                    loading="lazy"
                    width={16}
                    height={16}
                    decoding="async"
                    data-nimg={1}
                    src="https://cdn.yield.fi/yfi/defiIcon.svg"
                />
                <span>Defi</span>
                <span>Coming Soon</span>
                </li>
            </a>
            </div>
        </nav>
    )
}