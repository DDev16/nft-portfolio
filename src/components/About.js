import React from 'react';
import './About.scss';
import collectionImage from '../images/111.png';

export default function About() {
  return (
    <section className="about">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6 about-image">
            <img src={collectionImage} className="img-fluid" alt="Collection" />
          </div>
          
          <div className="col-md-6 panel-content">
            <h3 className="about-title">ABOUT<br />
              <span>Chaos</span>
            </h3>
            <p className="about-content">Chaos signifies a creative journey that transcends boundaries, bringing together artists, collectors, and enthusiasts in a dynamic and vibrant community. We are dedicated to the pursuit of artistic excellence, innovation, and collaboration.</p>
            <p className="about-content">Our mission is to stay on the forefront of the evolving world of digital art with state of the art DApps, unlock the value of creativity, and foster a community who shares our passion for artistic expression and blockchain technology</p>
            <div className="row justify-content-around">
              <Card title="Dedication" value="100%" />
              <Card title="Growth" value="&infin;" />
              <Card title="Unlimited Potential" value="&infin;" />
            </div>
          </div>

          <div className="row justify-content-center boxs">
            <div className="col-md-3">
              <div className="box">
                <i className="bi bi-layers"></i>
                <h2>2</h2>
                <p>Collections</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <i className="bi bi-person-circle"></i>
                <h2>4</h2>
                <p>DApps</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <i className="bi bi-person-hearts"></i>
                <h2>0</h2>
                <p>Community members</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <i className="bi bi-rocket-takeoff-fill"></i>
                <h2>100%</h2>
                <p>Commitment to Building</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
