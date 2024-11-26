import './App.css';
import React, { useState, useEffect } from 'react';
import { Web3Provider } from '@ethersproject/providers';
import { utils } from 'ethers';



export default function Main(){
    const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      
      const newProvider = new Web3Provider(window.ethereum);
      setProvider(newProvider);
    } else {
      console.log("MetaMask is not installed");
    }
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask is not installed. Please install MetaMask to connect your wallet.");
      return;
    }

    try {
      
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
      setIsConnected(true);
      fetchBalance(accounts[0]);
    } catch (error) {
      console.error("Error connecting wallet:", error);
      alert("Failed to connect wallet. Please try again.");
    }
  };

  const fetchBalance = async (account) => {
    if (!provider) {
      console.error("Provider is not initialized.");
      return;
    }

    try {
      const balance = await provider.getBalance(account);
      setBalance(utils.formatEther(balance));
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setAccount(null);
    setBalance(null);
  };

  const [deposit, setDeposit] = useState(0); 
  const [receive, setReceive] = useState(0); 

  const handleDepositChange = (event) => {
    const value = parseFloat(event.target.value);
    setDeposit(value);
    
    setReceive((value * (1/1.01)).toFixed(2));
  };
    return(
        <>
  <div >
    <div className="Toastify" />
    <header className="header">
        <a href="/">
            <img
            alt="yieldfiLogo"
            loading="lazy"
            width={97}
            height={28}
            decoding="async"
            className="header-logo"
            src="https://cdn.yield.fi/yfi/yieldfiLogo.svg"
            />
        </a>
        <div className="header-actions">
            <a className="header-link" href="/faucet">
            <li className="header-item">
                <img
                alt="faucetIcon"
                loading="lazy"
                width={18}
                height={18}
                decoding="async"
                className="icon"
                src="https://cdn.yield.fi/yfi/faucetIcon.svg"
                />
                <span>Faucet</span>
            </li>
            </a>
            <div aria-label="Toggle Sidebar" className="menu-toggle">
            <img
                alt="hamburgerMenu"
                loading="lazy"
                width={24}
                height={24}
                decoding="async"
                className="icon"
                src="https://cdn.yield.fi/yfi/hamburgerMenu.png"
            />
            </div>
        </div>
    </header>
    <div className="flex min-h-screen">
      <aside className="emd">
      <div>
        <a aria-current="page" href="/">
          <img
            alt="yieldfiLogo"
            loading="lazy"
            width={97}
            height={28}
            decoding="async"
            data-nimg={1}
            src="https://cdn.yield.fi/yfi/yieldfiLogo.svg"
          />
        </a>
      </div>
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
      <footer>
        <div className="divider" />
        <ul>
          <li>
            <a href="https://x.com/getyieldfi" target="_blank" rel="noopener noreferrer">
              <img
                alt="twitterLogo"
                loading="lazy"
                width={16}
                height={16}
                decoding="async"
                data-nimg={1}
                src="https://cdn.yield.fi/yfi/twitterLogo.svg"
              />
            </a>
          </li>
          <li>
            <a href="https://t.me/getyieldfi" target="_blank" rel="noopener noreferrer">
              <img
                alt="telegramLogo"
                loading="lazy"
                width={16}
                height={16}
                decoding="async"
                data-nimg={1}
                src="https://cdn.yield.fi/yfi/telegramLogo.svg"
              />
            </a>
          </li>
          <li>
            <a href="https://discord.gg/hkhXWr9gN9" target="_blank" rel="noopener noreferrer">
              <img
                alt="discordLogo"
                loading="lazy"
                width={16}
                height={16}
                decoding="async"
                data-nimg={1}
                src="https://cdn.yield.fi/yfi/discordLogo.svg"
              />
            </a>
          </li>
          <li>
            <a href="https://medium.com/@YieldFi" target="_blank" rel="noopener noreferrer">
              <img
                alt="mediumLogo"
                loading="lazy"
                width={16}
                height={16}
                decoding="async"
                data-nimg={1}
                src="https://cdn.yield.fi/yfi/mediumLogo.svg"
              />
            </a>
          </li>
          <li>
            <a href="https://docs.yield.fi/" target="_blank" rel="noopener noreferrer">
              <img
                alt="docsLogo"
                loading="lazy"
                width={16}
                height={16}
                decoding="async"
                data-nimg={1}
                src="https://cdn.yield.fi/yfi/docsLogo.svg"
              />
            </a>
          </li>
        </ul>
      </footer>
      </aside>
      <main className="w-full sm:ml-[0px] ml-[11.25rem]  bg-[#f4f4f4]">
        <div>
          <div className="header-container">
            <div className="stats-container">
            <div className="stats-item">
            <label className="label">TVL</label>
            <div className="stats-value">
                <p className="value">$462K</p>
            </div>
            </div>
            <div className="stats-item">
            <label className="label">APY</label>
            <div className="stats-value">
                <p className="value">24.79%</p>
            </div>
            </div>
            </div>
            <div className="wallet-container">
                <div className="chain-icon">
                <img
                    alt="ethChainIcon"
                    loading="lazy"
                    width={42}
                    height={42}
                    decoding="async"
                    className="chain-image"
                    src="https://cdn.yield.fi/yfi/ethChainIcon.svg"
                />
                </div>
               
                <div>
                
                {!isConnected ? (
                    <button onClick={connectWallet}>Connect Wallet</button>
                ) : (
                    <div>
                    <p>Account: {account}</p>
                    <p>Balance: {balance ? `${balance} ETH` : "Loading..."}</p>
                    <button onClick={disconnectWallet}>Disconnect</button>
                    </div>
                )}
                </div>
            </div>
        </div>
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
                                  Exchange Rate{" "}
                                  <span className="ml-[4px]"> </span>
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
        </div>
      </main>
    </div>
  </div>

</>





    )
}