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
      image1: require("../images/AICHIBI  (79).png"),
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
      profileImg: require("../images/DALL·E 2023-12-10 21.28.38 - A logo design for a Green Zombie Chibi concept, focusing solely on imagery with no text. The logo is a stylized, image-only representation of a green .png"),
      image1: require("../images/DALL·E 2023-12-10 21.24.56 - A hyper-realistic, front-facing profile picture of a Green Zombie Chibi. This chibi character, depicted as a green zombie, is situated in a cave full .png"),
      website: "https://example.com/alec-art",
    },
    {
      name: "Nirvanis",
      username: "Our Metaverse is build using react.js, javascript, and three.js. We are currently working on building our metaverse! Our metaverse will be a 3D world where you can interact with other holders, play games, and explore!",
      profileImg: require("../images/newlogo.png"),
      image1: require("../images/untitled (5).mp4"),
      website: "https://example.com/metaverse",
    },
    {
      name: "Token Bound Dapp",
      username: "Here you can turn your NFTs into Token Bound NFTs! Token Bound NFTS are NFTs that act as a wallet, meaning you can store tokens in your NFTs! You can also send tokens to other NFTs!",
      profileImg: require("../images/DALL·E 2023-12-10 22.08.07 - A logo design for 'Token Bound NFTs', focusing on the concept of blockchain and digital art. The logo should visually represent the idea of NFTs (Non-.png"),
      image1: require("../images/1_6JDKigoMhAtzdDfDl_eJ2Q.jpg"),
      website: "https://example.com/alec-art",
    },
    // Add website URLs for other collections here
  ];

  const renderMedia = (media) => {
    if (media.endsWith('.mp4')) {
      return (
        <video width="320" height="240" autoPlay loop muted>
          <source src={media} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return <img src={media} alt="Image1" />;
    }
  };
  

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
                    {renderMedia(collection.image1)}
                  </div>
                </div>
                <div className="collection-card-button">
                  <a href={collection.website} target="_blank" rel="noopener noreferrer">
                    <button className="website-button">Visit DApp</button>
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