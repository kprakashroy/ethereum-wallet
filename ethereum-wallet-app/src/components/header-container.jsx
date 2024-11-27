import React, { useState, useEffect } from 'react';
import { Web3Provider } from '@ethersproject/providers';
import { utils } from 'ethers';

export default function HeaderContainer(){

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


    return (
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
    )
}