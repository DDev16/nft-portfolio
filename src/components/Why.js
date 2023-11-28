import React from "react";
import './Why.scss';

export default function Why() {
  return (
    <section className="why">
      <div className="container-fluid">
        <div className="content">
          <h2>Why <span>Choose Us?</span></h2>
          <div className="row">
            {/* Experience Card */}
            <div className="col-md-4">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="card-icon">
                      <i className="bi bi-wallet2"></i>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Experience</h5>
                      <p className="card-text">Our team boasts extensive experience in blockchain development, delivering innovative solutions tailored to your needs.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dedication Card */}
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="card-icon">
                      <i className="bi bi-check2-square"></i>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Dedication</h5>
                      <p className="card-text">Our unwavering dedication to blockchain technology keeps us at the forefront of industry advancements, ensuring cutting-edge solutions.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animation and Graphics Card */}
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="card-icon">
                      <i className="bi bi-lightning"></i>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Animation & Graphics</h5>
                      <p className="card-text">Expertise in professional graphic design, 3D modeling, and animation, delivering visually stunning and engaging content.</p>
                      <img className="img-fluid center-gif" src={require('../images/graphics.png')} alt="Central Illustrative Image" />

                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Center Image */}
            <div className="col-md-4">
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <img className="img-fluid center-img" src={require('../images/4.png')} alt="Central Illustrative Image" />

                </div>
              </div>
            </div>
            

            {/* NFT Management Card */}
            <div className="col-md-4">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="card-icon">
                      <i className="bi bi-brush"></i>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Manage Your Own NFTs</h5>
                      <p className="card-text">Efficiently manage your NFT portfolio with our user-friendly platform, offering comprehensive tools and insights.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dapp Vault Card */}
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="card-icon">
                      <i className="bi bi-coin"></i>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Dapp Vault</h5>
                      <p className="card-text">Our commitment to innovation is reflected in our Dapp Vault, a repository of diverse decentralized applications.</p>
                      <img className="img-fluid center-gif" src={require('../images/vault.png')} alt="Central Illustrative Image" />

                    </div>
                  </div>
                </div>
              </div>

              {/* Metaverse Card */}
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="card-icon">
                      <i className="bi bi-boxes"></i>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Metaverse</h5>
                      <p className="card-text">Explore our Metaverse with 3D Model NFT Characters, offering an immersive and interactive digital experience.</p>
                      <img className="img-fluid center-gif" src={require('../images/cecf92e4cb66_RGB.gif')} alt="Central Illustrative Image" />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
