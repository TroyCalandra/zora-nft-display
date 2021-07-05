import React from 'react';
import { NFTPreview } from "@zoralabs/nft-components";
import './TokenDash.css';

const TokenDash = () => {

  return (
    <div className="card max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <NFTPreview id="0" />
    </div>
  )

}

export default TokenDash;