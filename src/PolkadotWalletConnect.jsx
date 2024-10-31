import React, { useState, useEffect } from 'react';
import { web3Enable, web3Accounts } from '@polkadot/extension-dapp';

const PolkadotWalletConnect = () => {
  const [isWalletConnected, setWalletConnected] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);

  // Function to connect to wallet
  const connectWallet = async () => {
    try {
      const extensions = await web3Enable('Polkadot Wallet Connect');
      if (extensions.length === 0) {
        throw new Error('No wallet extension installed');
      }

      const allAccounts = await web3Accounts();
      if (allAccounts.length > 0) {
        setAccounts(allAccounts);
        setSelectedAccount(allAccounts[0].address);
        setWalletConnected(true);
      }
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  // Render the wallet information
  return (
    <div className="wallet-connection-container">
      {!isWalletConnected ? (
        <button onClick={connectWallet} className="connect-button">
          Connect Polkadot Wallet
        </button>
      ) : (
        <div className="account-info">
          <button className="account-info-btn">CONNECTED</button>
          <span className="account-tooltip">{selectedAccount}</span>
        </div>
      )}
    </div>
  );
};

export default PolkadotWalletConnect;
