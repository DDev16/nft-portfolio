import React from "react";
import "./DappVault.scss";

export default function Collection() {
  const collections = [
    {
      name: "Psycho-Chibi Mint Dapp",
      username: "15% revenue share to holders, staking rewards, and more!",
      profileImg: require("../images/chat.png"),
      image1: require("../images/pyshcologo.png"),
      website: "https://example.com/psycho-chibi-mint-dapp",
    },
    {
      name: "#Metaverse",
      username: "@By TheSalvare",
      profileImg: require("../images/19.jpg"),
      image1: require("../images/03.jpg"),
      website: "https://example.com/metaverse",
    },
    {
      name: "#Alec Art",
      username: "@Georgijevic",
      profileImg: require("../images/05.jpg"),
      image1: require("../images/05.jpg"),
      website: "https://example.com/alec-art",
    },
    {
      name: "Psycho-Chibi Mint Dapp",
      username: "15% revenue share to holders, staking rewards, and more!",
      profileImg: require("../images/chat.png"),
      image1: require("../images/pyshcologo.png"),
      website: "https://example.com/psycho-chibi-mint-dapp",
    },
    {
      name: "#Metaverse",
      username: "@By TheSalvare",
      profileImg: require("../images/19.jpg"),
      image1: require("../images/03.jpg"),
      website: "https://example.com/metaverse",
    },
    {
      name: "#Alec Art",
      username: "@Georgijevic",
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
