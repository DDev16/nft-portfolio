import React, { useState } from 'react';
import MetamaskLogo from '../images/1683020860metamask-logo-white.png';
import BitgoLogo from '../images/reactjs-ar21.png';
import CoinbaseLogo from '../images/banner_trans.png';
import TrustWalletLogo from '../images/blender_logo_socket.png';
import ExodusLogo from '../images/6315e510ede28c3c656a27a5_solidity + check (black).webp';
import './Roadmap.scss';

export default function Roadmap() {
  const [activeItem, setActiveItem] = useState('NEW NFTS');

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <section className="roadmap">
      <div className="container-fluid">
        <h1 className="roadmap-title">Nirvanis <span>ROADMAP</span></h1>
        <div className="row">
          <div className="col-md-4">
            <div className="text-column">
              <ul>
                <li
                  className={activeItem === 'NEW NFTS' ? 'active' : ''}
                  onClick={() => handleClick('NEW NFTS')}
                >
                  <span>01</span> PLANNING
                </li>
                <li
                  className={activeItem === 'WHITELIST MINTING' ? 'active' : ''}
                  onClick={() => handleClick('WHITELIST MINTING')}
                >
                  <span>02</span> MINTING
                </li>
                <li
                  className={activeItem === 'Soft Staking' ? 'active' : ''}
                  onClick={() => handleClick('Soft Staking')}
                >
                  <span>03</span> ECOSYSTEM DApps
                </li>
                <li
                  className={activeItem === 'METAVERSE' ? 'active' : ''}
                  onClick={() => handleClick('METAVERSE')}
                >
                  <span>04</span> DApps Continued
                </li>
                <li
                  className={activeItem === 'LAUNCH' ? 'active' : ''}
                  onClick={() => handleClick('LAUNCH')}
                >
                  <span>05</span> PreSale
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                {activeItem === 'NEW NFTS' && (
                  <>
                    <p className="card-phase">Phase 1</p>
                    <h3 className="card-title">PLANNING</h3>
                    <p className="card-text">Quality comes first. We took our time to plan out everything and build our production pipeline for high-quality artworks and production ready Dapps.</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i> Release website and logo</li>
                      <li><i className="bi bi-check-circle"></i> Grow community</li>
                      <li><i className="bi bi-check-circle"></i> Launch the project</li>
                    </ul>
                  </>
                )}
                {activeItem === 'WHITELIST MINTING' && (
                  <>
                    <p className="card-phase">Phase 3</p>
                    <h3 className="card-title">PreSale Minting</h3>
                    <p className="card-text">Per-Sale Minting is opened for our members. The price for whitelist minting will be $5 in SGB.</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i> Initial PreSale to Active followers</li>
                      <li><i className="bi bi-check-circle"></i> Ensure Smooth Launch</li>
                      <li><i className="bi bi-check-circle"></i> Activate Dapp</li>
                    </ul>
                  </>
                )}
                {activeItem === 'Soft Staking' && (
                  <>
                    <p className="card-phase">Phase 5</p>
                    <h3 className="card-title">Staking</h3>
                    <p className="card-text">Build the Soft Staking Dapp, to be used to stake nfts trustlessly and earn Psycho Gems.</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i> Activate Staking</li>
                      <li><i className="bi bi-check-circle"></i> Market Staking</li>
                      <li><i className="bi bi-check-circle"></i> Ensure Staking runs smooth</li>
                    </ul>
                  </>
                )}
                {activeItem === 'METAVERSE' && (
                  <>                    
                    <p className="card-phase">Phase 7</p>
                    <h3 className="card-title">Token Bound NFTs</h3>
                    <p className="card-text"> Token Bound NFTs offer a game changing standard called ERC6551, this standard allows us to turn regular NFTs into their own wallets, thus allowing those nfts to store ERC20, ERC721, ERC1155 tokens within the NFT itself. Allowing more value to be held and trasnferred within one NFT.</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i> Release website and logo</li>
                      <li><i className="bi bi-check-circle"></i> Grow community</li>
                      <li><i className="bi bi-check-circle"></i> Launch the project</li>
                    </ul>                  
                  </>
                )}
                {activeItem === 'LAUNCH' && (
                  <>
                    <p className="card-phase">Phase 9</p>
                    <h3 className="card-title">PROJECT</h3>
                    <p className="card-text">Quality comes first. We took our time to plan out everything and build our production pipeline for high-quality artworks.</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i> Release website and logo</li>
                      <li><i className="bi bi-check-circle"></i> Grow community</li>
                      <li><i className="bi bi-check-circle"></i> Launch the project</li>
                    </ul>                  
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                {activeItem === 'NEW NFTS' && (
                  <>
                    <p className="card-phase">Phase 2</p>
                    <h3 className="card-title">DEVELOPMENT</h3>
                    <p className="card-text">Starting the production on the Psycho Chibi art, 3D animate models, the smart contract for minting dapp.</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i> Design Pyshco Chibis art, and 3d models </li>
                      <li><i className="bi bi-check-circle"></i> Write Smart contracts & deploy</li>
                      <li><i className="bi bi-check-circle"></i> Build Front end and connect Smart Contracts</li>
                    </ul>
                  </>
                )}
                {activeItem === 'WHITELIST MINTING' && (
                  <>
                    <p className="card-phase">Phase 4</p>
                    <h3 className="card-title">Public MINTING</h3>
                    <p className="card-text">Per-Sale Minting is opened for our members. The price for whitelist minting will be $10 in SGB.</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i> Release to the Public</li>
                      <li><i className="bi bi-check-circle"></i> Ensure Smooth Minting</li>
                      <li><i className="bi bi-check-circle"></i> Market & Grow Community</li>
                    </ul>
                  </>
                )}
                {activeItem === 'Soft Staking' && (
                  <>
                    <p className="card-phase">Phase 6</p>
                    <h3 className="card-title">Evolution Dapp</h3>
                    <p className="card-text">DApp to Evolve Pyshco Chibis into Zombie Psycho Chibis, users will need Psycho gems to evolve.</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i> Activate Evolution Dapp</li>
                      <li><i className="bi bi-check-circle"></i> Market Evolution Dapp</li>
                      <li><i className="bi bi-check-circle"></i> Zombie Giveaway </li>
                    </ul>
                  </>
                )}
                {activeItem === 'METAVERSE' && (
                  <>                    
                    <p className="card-phase">Phase 8</p>
                    <h3 className="card-title">PRODUCTION</h3>
                    <p className="card-text">Starting the production on the procedurally generated planets and the smart contract for minting.</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i> Release website and logo</li>
                      <li><i className="bi bi-check-circle"></i> Grow community</li>
                      <li><i className="bi bi-check-circle"></i> Launch the project</li>
                    </ul>                  
                  </>
                )}
                {activeItem === 'LAUNCH' && (
                  <>
                    <p className="card-phase">Phase 10</p>
                    <h3 className="card-title">SECURITY</h3>
                    <p className="card-text">Starting the production on the procedurally generated planets and the smart contract for minting.</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i> Release website and logo</li>
                      <li><i className="bi bi-check-circle"></i> Grow community</li>
                      <li><i className="bi bi-check-circle"></i> Launch the project</li>
                    </ul>                  
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="row sponsors-row">
          <div className="col-12">
            <div className="sponsors">
              <img src={MetamaskLogo} alt="Metamask Logo" className="sponsor-logo" />
              <img src={BitgoLogo} alt="BitGO Logo" className="sponsor-logo" />
              <img src={CoinbaseLogo} alt="Coinbase Logo" className="sponsor-logo" />
              <img src={TrustWalletLogo} alt="Trust Wallet Logo" className="sponsor-logo" />
              <img src={ExodusLogo} alt="Exodus Logo" className="sponsor-logo" />
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
