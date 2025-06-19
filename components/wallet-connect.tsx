"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Wallet, Copy, ExternalLink, LogOut } from "lucide-react"

interface WalletConnectProps {
  onConnect: (address: string) => void
  onDisconnect: () => void
  connectedAddress?: string
}

export function WalletConnect({ onConnect, onDisconnect, connectedAddress }: WalletConnectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)

  const connectWallet = async (walletType: string) => {
    setIsConnecting(true)
    try {
      if (typeof window !== "undefined" && window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        })
        if (accounts.length > 0) {
          onConnect(accounts[0])
        }
      } else {
        // Simulate wallet connection for demo purposes
        const mockAddress = "0x" + Math.random().toString(16).substr(2, 40)
        onConnect(mockAddress)
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error)
    } finally {
      setIsConnecting(false)
      setIsOpen(false)
    }
  }

  const copyAddress = () => {
    if (connectedAddress) {
      navigator.clipboard.writeText(connectedAddress)
    }
  }

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  if (connectedAddress) {
    return (
      <div className="relative">
        <div className="connected-wallet">
          <Wallet className="w-4 h-4" />
          <span className="wallet-address">{formatAddress(connectedAddress)}</span>
          <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="p-1 h-auto">
            <ChevronDown className="w-3 h-3" />
          </Button>
        </div>

        {isOpen && (
          <div className="wallet-dropdown">
            <button className="wallet-option" onClick={copyAddress}>
              <Copy className="w-4 h-4" />
              Copy Address
            </button>
            <button
              className="wallet-option"
              onClick={() => window.open(`https://etherscan.io/address/${connectedAddress}`, "_blank")}
            >
              <ExternalLink className="w-4 h-4" />
              View on Etherscan
            </button>
            <button className="wallet-option" onClick={onDisconnect}>
              <LogOut className="w-4 h-4" />
              Disconnect
            </button>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="relative">
      <Button onClick={() => setIsOpen(!isOpen)} disabled={isConnecting} className="wallet-button">
        {isConnecting ? "Connecting..." : "Connect Wallet"}
        <ChevronDown className="w-4 h-4 ml-2" />
      </Button>

      {isOpen && (
        <div className="wallet-dropdown">
          <button className="wallet-option" onClick={() => connectWallet("metamask")} disabled={isConnecting}>
            <div className="wallet-icon bg-orange-500 flex items-center justify-center">🦊</div>
            MetaMask
          </button>
          <button className="wallet-option" onClick={() => connectWallet("walletconnect")} disabled={isConnecting}>
            <div className="wallet-icon bg-blue-500 flex items-center justify-center">🔗</div>
            WalletConnect
          </button>
          <button className="wallet-option" onClick={() => connectWallet("coinbase")} disabled={isConnecting}>
            <div className="wallet-icon bg-blue-600 flex items-center justify-center">💰</div>
            Coinbase Wallet
          </button>
        </div>
      )}
    </div>
  )
}
