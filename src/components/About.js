import React from 'react';
import './About.css';
import collectionImage from '../images/collection.png';
import BreakSVG from '../images/break.svg';

export default function About() {
  return (
    <section className="about">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6 panel-image">
            <img src={collectionImage} className="img-fluid" alt="Collection" />
          </div>
          <div className="col-md-6 panel-content">
            <div>
              <h3 className="about-title">
                ABOUT<br />
                <span>COLLECTION</span>
              </h3>
              <p className="about-content">Content creation optimized for social media engagement and tangible results.</p>
              <p className="about-content">Social media marketing through turnkey influencer marketing campaigns and social media account management to grow your digital art and drive your collection.</p>
              <div className="row justify-content-center">
                <Card title="Sync & track" value="93%" />
                <Card title="Up value" value="2.5X" />
                <Card title="Of members" value="50K+" />
              </div>
            </div>
          </div>

          <div className="row justify-content-center boxs">
            <div className="col-md-3">
              <div className="box">
                <i className="bi bi-layers"></i>
                <h2>400+</h2>
                <p>Collections</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <i className="bi bi-person-circle"></i>
                <h2>200+</h2>
                <p>Artists</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <i className="bi bi-person-hearts"></i>
                <h2>1860+</h2>
                <p>Community members</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <i className="bi bi-rocket-takeoff-fill"></i>
                <h2>2.5x</h2>
                <p>Estimated value</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BreakSVGComponent />
    </section>
  );
}

const Card = ({ title, value }) => {
  return (
    <div className="col-md-3 about-card">
      <h2>{value}</h2>
      <p>{title}</p>
    </div>
  );
};

const BreakSVGComponent = () => {
  return (
    <div className="break">
      <img src={BreakSVG} alt="break" />
    </div>
  );
};