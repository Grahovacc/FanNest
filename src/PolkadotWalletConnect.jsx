import React, { useState } from 'react';
import { web3Enable, web3Accounts } from '@polkadot/extension-dapp';

const PolkadotWalletConnect = () => {
  const [isWalletConnected, setWalletConnected] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to connect to wallet
  const connectWallet = async () => {
    setLoading(true);
    setError(null); // Clear any previous errors
    try {
      const extensions = await web3Enable('Polkadot Wallet Connect');
      if (extensions.length === 0) {
        throw new Error('No Polkadot wallet extension found. Please install one to continue.');
      }

      const allAccounts = await web3Accounts();
      if (allAccounts.length === 0) {
        throw new Error('No accounts found in your wallet.');
      }

      setAccounts(allAccounts);
      setSelectedAccount(allAccounts[0].address); // Default to the first account
      setWalletConnected(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to disconnect the wallet
  const disconnectWallet = () => {
    setWalletConnected(false);
    setAccounts([]);
    setSelectedAccount(null);
  };

  return (
    <div className="wallet-connection-container">
      {!isWalletConnected ? (
        <div>
          <button onClick={connectWallet} className="connect-button" disabled={loading}>
            {loading ? 'Connecting...' : 'Connect Wallet'}
          </button>
          {error && <p className="error-message">{error}</p>}
        </div>
      ) : (
        <div className="account-info">
          <button onClick={disconnectWallet} className="account-info-btn">
            Log Out
          </button>
          <span className="account-tooltip">{selectedAccount}</span>
        </div>
      )}
      <div className='accAdress'>
      </div>
    </div>
  );
};

export default PolkadotWalletConnect;