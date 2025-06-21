"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Wallet, Copy, ExternalLink, LogOut } from "lucide-react"

// TypeScript declarations for Ethereum provider
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any[] }) => Promise<any>
    }
  }
}

interface WalletConnectProps {
  onConnect: (address: string) => void
  onDisconnect: () => void
  connectedAddress?: string
}

export function WalletConnect({ onConnect, onDisconnect, connectedAddress }: WalletConnectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)

  const connectWallet = async () => {
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
        alert("No Ethereum wallet detected. Please install MetaMask or another Ethereum wallet.")
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
          <button className="wallet-option" onClick={connectWallet} disabled={isConnecting}>
            <div className="wallet-icon bg-orange-500 flex items-center justify-center">🦊</div>
            Connect Ethereum Wallet
          </button>
          <div className="px-4 py-2 text-xs text-gray-500 border-t">
            <p>Note: This demo connects to any Ethereum wallet injected in your browser</p>
          </div>
        </div>
      )}
    </div>
  )
} 