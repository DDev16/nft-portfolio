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
        <h1 className="roadmap-title">Chaotic <span>ROADMAP</span></h1>
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
                  <span>02</span> PreSale MINTING
                </li>
                <li
                  className={activeItem === 'WIRELAND NFT' ? 'active' : ''}
                  onClick={() => handleClick('WIRELAND NFT')}
                >
                  <span>03</span> WIRELAND NFT
                </li>
                <li
                  className={activeItem === 'METAVERSE' ? 'active' : ''}
                  onClick={() => handleClick('METAVERSE')}
                >
                  <span>04</span> METAVERSE
                </li>
                <li
                  className={activeItem === 'LAUNCH' ? 'active' : ''}
                  onClick={() => handleClick('LAUNCH')}
                >
                  <span>05</span> LAUNCH
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
                    <h3 className="card-title">LAUNCH</h3>
                    <p className="card-text">Our most active community members will be able to join the whitelist so they can discover, collect and sell their NFTs.</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i> Release website and logo</li>
                      <li><i className="bi bi-check-circle"></i> Grow community</li>
                      <li><i className="bi bi-check-circle"></i> Launch the project</li>
                    </ul>
                  </>
                )}
                {activeItem === 'WIRELAND NFT' && (
                  <>
                    <p className="card-phase">Phase 5</p>
                    <h3 className="card-title">TARGET</h3>
                    <p className="card-text">Typesetting industry when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i> Release website and logo</li>
                      <li><i className="bi bi-check-circle"></i> Grow community</li>
                      <li><i className="bi bi-check-circle"></i> Launch the project</li>
                    </ul>
                  </>
                )}
                {activeItem === 'METAVERSE' && (
                  <>                    
                    <p className="card-phase">Phase 7</p>
                    <h3 className="card-title">COMMUNITY</h3>
                    <p className="card-text">Quality comes first. We took our time to plan out everything and build our production pipeline for high-quality artworks.</p>
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
                    <h3 className="card-title">MINTING</h3>
                    <p className="card-text">Per-Sale Minting is opened for our members. The price for whitelist minting will be $5 in SGB.</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i> Release website and logo</li>
                      <li><i className="bi bi-check-circle"></i> Grow community</li>
                      <li><i className="bi bi-check-circle"></i> Launch the project</li>
                    </ul>
                  </>
                )}
                {activeItem === 'WIRELAND NFT' && (
                  <>
                    <p className="card-phase">Phase 6</p>
                    <h3 className="card-title">RESEARCH</h3>
                    <p className="card-text">A complete account of the system, and expound the actual teachings of the great explorer of the truth.</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i> Release website and logo</li>
                      <li><i className="bi bi-check-circle"></i> Grow community</li>
                      <li><i className="bi bi-check-circle"></i> Launch the project</li>
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
