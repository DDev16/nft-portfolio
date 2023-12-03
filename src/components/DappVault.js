import React from "react";
import "./DappVault.scss";

export default function Collection() {

  
  const collections = [
    {
      name: "Psycho-Chibi Mint Dapp",
      username: "20% revenue share, rewards will accrue as the mint goes on, every NFT minted the Rewards are disperesed to holders! Holders who hold multiple NFTs will receive a higher percentage of the rewards!",
      profileImg: require("../images/chat.png"),
      image1: require("../images/onesie (8).png"),
      website: "https://example.com/psycho-chibi-mint-dapp",
    },
    {
      name: "Soft Staking Dapp",
      username: "Here you can stake your NFTs and earn Psycho Gem Rewards! Psycho gems will be used to mint future NFTs, evolve nfts,  open loot boxes, and will be used in our upcoming game!",
      profileImg: require("../images/erc20.png"),
      image1: require("../images/gems (2).png"),
      website: "https://example.com/metaverse",
    },
    {
      name: "3D Animated NFTs Dapp",
      username: "Here you can mint 3D animated NFTs! Each NFT will be animated and will have a unique animation. Each NFT will be a 3D model and will be able to be used in the metaverse/game!",
      profileImg: require("../images/chat.png"),
      image1: require("../images/cecf92e4cb66_RGB.gif"),
      website: "https://example.com/psycho-chibi-mint-dapp",
    },
    {
      name: "Evolution Dapp",
      username: "Here you can evolve your NFTs to the next level! Each NFT is evolved using psycho gems. Each level will have a different rarity and will be more valuable than the previous level.",
      profileImg: require("../images/05.jpg"),
      image1: require("../images/evomp4 (1).gif"),
      website: "https://example.com/alec-art",
    },
    {
      name: "#Metaverse",
      username: "Our Metaverse is build using react.js, javascript, and three.js. We are currently working on building our metaverse and will be releasing it soon! Our metaverse will be a 3D world where you can interact with other holders, play games, and explore!",
      profileImg: require("../images/19.jpg"),
      image1: require("../images/03.jpg"),
      website: "https://example.com/metaverse",
    },
    {
      name: "Governor Dapp",
      username: "Here you can vote on proposals and help shape the future of Psycho Chibis!",
      profileImg: require("../images/05.jpg"),
      image1: require("../images/05.jpg"),
      website: "https://example.com/alec-art",
    },
    // Add website URLs for other collections here
  ];

  return (
    <section className="collection">
      <div className="container-fluid">
        <div className="row">
          <h1>
            Dapp<br></br>
            <span>VAULT</span>
          </h1>
        </div>
        <div className="row">
          {collections.map((collection, index) => (
            <div className="col-md-4" key={index}>
              <div className="collection-card">
                <div className="collection-card-header">
                  <img src={collection.profileImg} alt="Profile" />
                  <div className="collection-card-header-info">
                    <h3>{collection.name}</h3>
                    <p>{collection.username}</p>
                  </div>
                </div>
                <div className="collection-card-images">
                  <div className="collection-card-left-image">
                    <img src={collection.image1} alt="Image1" />
                  </div>
                </div>
                <div className="collection-card-button">
                  <a href={collection.website} target="_blank" rel="noopener noreferrer">
                    <button className="website-button">Visit Website</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
