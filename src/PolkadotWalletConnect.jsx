import React, { useState } from "react";
import { web3Enable, web3Accounts } from "@polkadot/extension-dapp";

const PolkadotWalletConnect = ({ setSelectedAccount }) => {
  const [isWalletConnected, setWalletConnected] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to connect to wallet
  const connectWallet = async () => {
    setLoading(true);
    setError(null);
    try {
      const extensions = await web3Enable("Polkadot Wallet Connect");
      if (extensions.length === 0) {
        throw new Error(
          "No Polkadot wallet extension found. Please install one to continue."
        );
      }

      const allAccounts = await web3Accounts();
      if (allAccounts.length === 0) {
        throw new Error("No accounts found in your wallet.");
      }

      setAccounts(allAccounts);
      setSelectedAccount(allAccounts[0].address); // Update selected account in App
      setWalletConnected(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const disconnectWallet = () => {
    setWalletConnected(false);
    setAccounts([]);
    setSelectedAccount(null); // Reset the account in App
  };

  // Function to truncate the address
  const truncateAddress = (address) => {
    if (address.length <= 10) return address;
    const firstPart = address.slice(0, 8);
    const lastPart = address.slice(-8);
    return `${firstPart}...${lastPart}`;
  };

  return (
    <div className="wallet-connection-container">
      {!isWalletConnected ? (
        <div>
          <button
            onClick={connectWallet}
            className="connect-button"
            disabled={loading}
          >
            {loading ? "Connecting..." : "Connect Wallet"}
          </button>
          {error && <p className="error-message">{error}</p>}
        </div>
      ) : (
        <div className="account-info">
          <button onClick={disconnectWallet} className="account-info-btn">
            Log Out
          </button>
          <span className="account-tooltip" title={accounts[0].address}>
            {truncateAddress(accounts[0].address)}
          </span>
        </div>
      )}
    </div>
  );
};

export default PolkadotWalletConnect;
