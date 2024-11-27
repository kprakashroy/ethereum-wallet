import React, { useState, useEffect } from 'react';

export default function Deposit(){
const [deposit, setDeposit] = useState(0); 
  const [receive, setReceive] = useState(0); 

  const handleDepositChange = (event) => {
    const value = parseFloat(event.target.value);
    setDeposit(value);
    
    setReceive((value * (1/1.01)).toFixed(2));
  };
    return(
        <div className="commonSpace">
                <div className="tabs_tabsModules__7mi0K flex flex-wrap">
                    <div className="w-full">
                        <div
                        className="tabs_tabsList__ZJui8 flex flex-wrap flex-row gap-[20px]"
                        role="tablist"
                        >
                        <div className="tabs_tabCta__4Tzf8">
                            <a
                            className="tabs_activeTab__290gf"
                            data-toggle="tab"
                            href="#deposit"
                            role="tablist"
                            >
                            Deposit
                            </a>
                        </div>
                        
                        </div>
                        <div className="relative flex flex-col break-words w-full">
                        <div className="flex-auto">
                            <div className="tab-content tab-space">
                            <div className="block" id="deposit">
                                <div className="mt-[20px] bg-[#fff] p-[28px] rounded-[4px] tracking-[-.32px] text-[.75rem] text-[#929292] font-light gap-[48px] flex flex-col sm:p-[28px_15px]">
                                <div>
                                    <div>
                                    <label className="mb-[12px] block">
                                        You Deposit
                                    </label>
                                    <div className="bg-[#F6F6F6] rounded-[4px] flex justify-between">
                                        <div className="p-[8px_12px]">
                                        <input
                                            id="value"
                                            className="text-[1.75rem] text-[#000] font-medium w-full placeholder-[#929292] focus:outline-none bg-[#F6F6F6]"
                                            placeholder={0}
                                            type="number"
                                            value={deposit} 
                                            onChange={handleDepositChange}
                                        />
                                        <h6 className="text-[#5B5B5B]">$0</h6>
                                        </div>
                                        <div className="bg-[#E3E3E3] rounded-tr-[4px] rounded-br-[4px] commonDropdown">
                                        <div
                                            className="flex align-items-center h-full p-[8px_12px] gap-[12px] cursor-pointer"
                                            style={{ minWidth: 89 }}
                                        >
                                            <div className="flex align-items-center">
                                            <img
                                                alt="BtcIcon"
                                                loading="lazy"
                                                width={16}
                                                height={16}
                                                decoding="async"
                                                data-nimg={1}
                                                src="https://cdn.yield.fi/yfi/usdtIcon.svg"
                                                style={{
                                                color: "transparent",
                                                minWidth: 16
                                                }}
                                            />
                                            <p className="text-[1.125rem] text-[#000] pl-[4px] font-medium">
                                                USDT
                                            </p>
                                            </div>
                                            <div>
                                            <img
                                                alt="circleDownArrorIcon"
                                                loading="lazy"
                                                width={16}
                                                height={16}
                                                decoding="async"
                                                data-nimg={1}
                                                src="https://cdn.yield.fi/yfi/circleDownArrorIcon.svg"
                                                style={{
                                                color: "transparent",
                                                minWidth: 16
                                                }}
                                            />
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <img
                                    alt="expandArrow"
                                    loading="lazy"
                                    width={32}
                                    height={32}
                                    decoding="async"
                                    data-nimg={1}
                                    className="m-[12px_auto_0] cursor-pointer"
                                    src="https://cdn.yield.fi/yfi/expandArrow.svg"
                                    style={{ color: "transparent" }}
                                    />
                                    <div>
                                    <label className="mb-[12px] block">
                                        You receive
                                    </label>
                                    <div className="bg-[#F6F6F6] rounded-[4px] flex justify-between">
                                        <div className="p-[8px_12px]">
                                        <input
                                            id="value"
                                            className="text-[1.75rem] text-[#000] font-medium w-full placeholder-[#929292] focus:outline-none bg-[#F6F6F6]"
                                            placeholder={0.0}
                                            disabled=""
                                            type="number"
                                            defaultValue=""
                                            value={receive} 
                                        />
                                        <h6 className="text-[#5B5B5B]">$0 </h6>
                                        </div>
                                        <div className="bg-[#E3E3E3] rounded-tr-[4px] rounded-br-[4px]">
                                        <div className="flex align-items-center h-full p-[8px_12px] xsm:min-w-[90px]">
                                            <img
                                            alt="stUSDIcon"
                                            loading="lazy"
                                            width={16}
                                            height={16}
                                            decoding="async"
                                            data-nimg={1}
                                            src="https://cdn.yield.fi/yfi/stUSDIcon.svg"
                                            style={{ color: "transparent" }}
                                            />
                                            <p className="text-[1.125rem] text-[#000] pl-[4px] font-medium">
                                            yUSD
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="bg-[#FFECE1] p-[12px] rounded-[5px] flex align-items-center justify-between text-[#000] mb-[12px]">
                                    <p className="flex alignCenter">
                                        yUSD APY <span className="ml-[4px]"> </span>
                                    <img
                                        src="https://cdn.yield.fi/yfi/tooltipInfoIcon.svg"
                                        alt="tooltipInfoIcon"
                                        width={16}
                                        height={16}
                                        />
                                    </p>
                                    <div className="tooltip_tooltipApp__h8OwG disableCase">
                                        
                                        <div className=" tooltip_topBar__9BQ6t undefined disableAction">
                                        <p>
                                            Moving average of APY before fees over last
                                            3 days.
                                        </p>
                                        <i />
                                        </div>
                                    </div>{" "}
                                    <p />
                                    <div className="font-medium flex align-items-center gap-[4px]">
                                        {" "}
                                        24.79%
                                    </div>
                                    </div>
                                    <div>
                                    <div className="flex justify-between">
                                        <p className="flex alignCenter">
                                        Exchange Rate{"   "}
                                        
                                        <span className="sm-[4px]"> </span>
                                        <img
                                            src="https://cdn.yield.fi/yfi/tooltipInfoIcon.svg"
                                            alt="tooltipInfoIcon"
                                            width={16}
                                            height={16}
                                        />
                                        </p>
                                        <div className="tooltip_tooltipApp__h8OwG disableCase">
                                        <div className=" tooltip_topBar__9BQ6t undefined disableAction">
                                            <p>
                                            Exchange rate for yUSD conversion to sUSD
                                            and vice-versa. yUSD continuously accrues
                                            value as it’s a yield bearing address.
                                            When you withdraw your yUSD, it will be
                                            worth more sUSD (or USDT as sUSD is 1:1 to
                                            USDT) than before.
                                            </p>
                                            <i />
                                        </div>
                                        </div>{" "}
                                        <p />
                                        <p> 1 yUSD = 1.01 USDT</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="flex alignCenter">
                                        Fees <span className="ml-[4px]"> </span>
                                        <img
                                            src="https://cdn.yield.fi/yfi/tooltipInfoIcon.svg"
                                            alt="tooltipInfoIcon"
                                            width={16}
                                            height={16}
                                        />
                                        </p>
                                        <div className="tooltip_tooltipApp__h8OwG disableCase">
                                        
                                        <div className=" tooltip_topBar__9BQ6t undefined disableAction">
                                            <p>
                                            This fees applies to yield generated.
                                            There is no fees on any partnership
                                            points. 100% of partnership points are
                                            pass through.
                                            </p>
                                            <i />
                                        </div>
                                        </div>{" "}
                                        <p />
                                        <p>10%</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="flex alignCenter">
                                        Rewards (YieldFi Crumbs / Day / $100):{" "}
                                        <span className="ml-[4px]"> </span>
                                        <img
                                            src="https://cdn.yield.fi/yfi/tooltipInfoIcon.svg"
                                            alt="tooltipInfoIcon"
                                            width={16}
                                            height={16}
                                        />
                                        </p>
                                        <div className="tooltip_tooltipApp__h8OwG disableCase">
                                        
                                        <div className=" tooltip_topBar__9BQ6t undefined disableAction">
                                            <p>
                                            You will earn 1x YieldFi Crumbs per yUSD
                                            per Day.
                                            </p>
                                            <i />
                                        </div>
                                        </div>{" "}
                                        <p />
                                        <p> 1</p>
                                    </div>
                                    </div>
                                    <div className="tabConnectCta mt-[24px]">
                                    <button type="button">Connect Wallet</button>
                                    </div>
                                    <div className="text-[#CC814B] tracking-[-.32px] text-[0.75rem] leading-[129%] bg-[#FFF2EB] rounded-[4px] flex align-items-start p-[8px] mt-[24px] font-normal">
                                    <img
                                        alt="infoIcon"
                                        loading="lazy"
                                        width={16}
                                        height={16}
                                        decoding="async"
                                        data-nimg={1}
                                        className="mr-[5px]"
                                        src="https://cdn.yield.fi/yfi/infoIcon.svg"
                                        style={{ color: "transparent" }}
                                    />
                                    Lend yUSD and borrow against it to leverage loop
                                    and earn higher APYs &amp; 2x YieldFi Crumbs. See
                                    DeFi section for such opportunities.
                                    </div>
                                    <div className="text-[#CC814B] tracking-[-.32px] text-[0.75rem] leading-[129%] bg-[#FFF2EB] rounded-[4px] flex align-items-start p-[8px] mt-[12px] font-normal">
                                    <img
                                        alt="infoIcon"
                                        loading="lazy"
                                        width={16}
                                        height={16}
                                        decoding="async"
                                        data-nimg={1}
                                        className="mr-[5px]"
                                        src="https://cdn.yield.fi/yfi/infoIcon.svg"
                                        style={{ color: "transparent" }}
                                    />
                                    Bridge yUSD without slippage and earn exciting
                                    rewards on partner chains / dApps.
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="hidden" id="withdraw">
                                <div className="mt-[20px] bg-[#fff] p-[28px] rounded-[4px] tracking-[-.32px] text-[.75rem] text-[#929292] font-light gap-[48px] flex flex-col sm:p-[28px_15px]">
                                <div>
                                    <div>
                                    <label className="mb-[12px] block">
                                        You withdraw
                                    </label>
                                    <div className="bg-[#F6F6F6] rounded-[4px] flex justify-between">
                                        <div className="p-[8px_12px]">
                                        <input
                                            className="text-[1.75rem] text-[#000] font-medium w-full placeholder-[#929292] focus:outline-none bg-[#F6F6F6]"
                                            placeholder={0}
                                            type="number"
                                        />{" "}
                                        <h6 className="text-[#5B5B5B]">$0.00</h6>
                                        </div>
                                        <div className="bg-[#E3E3E3] rounded-tr-[4px] rounded-br-[4px] commonDropdown">
                                        <div
                                            className="flex align-items-center h-full p-[8px_12px] "
                                            style={{ minWidth: 89 }}
                                        >
                                            <div className="flex align-items-center">
                                            <img
                                                alt="stUSDIcon"
                                                loading="lazy"
                                                width={16}
                                                height={16}
                                                decoding="async"
                                                data-nimg={1}
                                                src="https://cdn.yield.fi/yfi/stUSDIcon.svg"
                                                style={{ color: "transparent" }}
                                            />
                                            <p className="text-[1.125rem] text-[#000] pl-[4px] font-medium">
                                                yUSD
                                            </p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <img
                                    alt="expandArrow"
                                    loading="lazy"
                                    width={32}
                                    height={32}
                                    decoding="async"
                                    data-nimg={1}
                                    className="m-[12px_auto_0] cursor-pointer"
                                    src="https://cdn.yield.fi/yfi/expandArrow.svg"
                                    style={{ color: "transparent" }}
                                    />
                                    <div>
                                    <label className="mb-[12px] block">
                                        You receive
                                    </label>
                                    <div className="bg-[#F6F6F6] rounded-[4px] flex justify-between">
                                        <div className="p-[8px_12px]">
                                        <input
                                            id="value"
                                            className="text-[1.75rem] text-[#000] font-medium w-full placeholder-[#929292] focus:outline-none bg-[#F6F6F6]"
                                            placeholder={0.0}
                                            disabled=""
                                            type="number"
                                            defaultValue=""
                                        />
                                        <h6 className="text-[#5B5B5B]">$0.00</h6>
                                        </div>
                                        <div className="bg-[#E3E3E3] rounded-tr-[4px] rounded-br-[4px]">
                                        <div className="flex align-items-center h-full p-[8px_12px] xsm:min-w-[90px]">
                                            <img
                                            alt="BtcIcon"
                                            loading="lazy"
                                            width={16}
                                            height={16}
                                            decoding="async"
                                            data-nimg={1}
                                            src="https://cdn.yield.fi/yfi/stUSDIcon.svg"
                                            style={{ color: "transparent" }}
                                            />
                                            <p className="text-[1.125rem] text-[#000] pl-[4px] font-medium">
                                            sUSD
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                    <div className="flex justify-between">
                                        <p className="flex alignCenter">
                                        Exchange Rate <span className="ml-[4px]" />
                                        </p>
                                        <div className="tooltip_tooltipApp__h8OwG disableCase">
                                        <img
                                            src="https://cdn.yield.fi/yfi/tooltipInfoIcon.svg"
                                            alt="tooltipInfoIcon"
                                            width={16}
                                            height={16}
                                        />
                                        <div className=" tooltip_topBar__9BQ6t undefined disableAction">
                                            <p>
                                            Exchange rate for yUSD conversion to sUSD
                                            and vice-versa. yUSD continuously accrues
                                            value as it’s a yield bearing token. When
                                            you withdraw your yUSD, it will be worth
                                            more sUSD (or USDT as sUSD is 1:1 to USDT)
                                            than before.
                                            </p>
                                            <i />
                                        </div>
                                        </div>{" "}
                                        <p />
                                        <p>1 yUSD = 1.01 sUSD </p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="flex alignCenter">
                                        Withdrawal Limits{" "}
                                        <span className="ml-[4px]" />
                                        </p>
                                        <div className="tooltip_tooltipApp__h8OwG disableCase">
                                        <img
                                            src="https://cdn.yield.fi/yfi/tooltipInfoIcon.svg"
                                            alt="tooltipInfoIcon"
                                            width={16}
                                            height={16}
                                        />
                                        <div className=" tooltip_topBar__9BQ6t undefined disableAction">
                                            <p>
                                            Amount you can withdraw in a single
                                            transaction.
                                            </p>
                                            <i />
                                        </div>
                                        </div>{" "}
                                        <p />
                                        <p>No Limits</p>
                                    </div>
                                    </div>
                                    <div className="tabConnectCta mt-[24px]">
                                    <button type="button">Connect Wallet</button>
                                    </div>
                                    <div className="text-[#CC814B] tracking-[-.32px] text-[0.75rem] leading-[129%] bg-[#FFF2EB] rounded-[4px] flex align-items-start p-[8px] mt-[24px] font-normal">
                                    <img
                                        alt="infoIcon"
                                        loading="lazy"
                                        width={16}
                                        height={16}
                                        decoding="async"
                                        data-nimg={1}
                                        className="mr-[5px]"
                                        src="https://cdn.yield.fi/yfi/infoIcon.svg"
                                        style={{ color: "transparent" }}
                                    />
                                    You are earning 1x YieldFi Crumbs per yUSD per
                                    Day. Withdrawing to sUSD will earn 3x YieldFi
                                    Crumbs per sUSD per Day.
                                    </div>
                                    <div className="text-[#CC814B] tracking-[-.32px] text-[0.75rem] leading-[129%] bg-[#FFF2EB] rounded-[4px] flex align-items-start p-[8px] mt-[12px] font-normal">
                                    <img
                                        alt="infoIcon"
                                        loading="lazy"
                                        width={16}
                                        height={16}
                                        decoding="async"
                                        data-nimg={1}
                                        className="mr-[5px]"
                                        src="https://cdn.yield.fi/yfi/infoIcon.svg"
                                        style={{ color: "transparent" }}
                                    />
                                    <div>
                                        Change of Mind? Lend yUSD and borrow against it
                                        to leverage loop and earn higher APYs &amp; 2x
                                        YieldFi Crumbs. See DeFi section for such
                                        opportunities.
                                    </div>
                                    </div>
                                    <div className="text-[#CC814B] tracking-[-.32px] text-[0.75rem] leading-[129%] bg-[#FFF2EB] rounded-[4px] flex align-items-start p-[8px] mt-[12px] font-normal">
                                    <img
                                        alt="infoIcon"
                                        loading="lazy"
                                        width={16}
                                        height={16}
                                        decoding="async"
                                        data-nimg={1}
                                        className="mr-[5px]"
                                        src="https://cdn.yield.fi/yfi/infoIcon.svg"
                                        style={{ color: "transparent" }}
                                    />
                                    <div>
                                        Bridge yUSD without slippage and earn exciting
                                        rewards on partner chains / dApps.
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}