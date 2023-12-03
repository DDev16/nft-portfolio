import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './Why.scss';

export default function Why() {
  const cardControls = useAnimation();
  const [cardRef, inView] = useInView({ triggerOnce: true });
  const [title, setTitle] = useState(""); // State to store the animated title

  useEffect(() => {
    // Trigger card animations when the cards come into view
    if (inView) {
      cardControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 },
      });
    }

    // Animate the title "Why Choose Us?"
    const titleText = "Why Choose Us?";
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex <= titleText.length) {
        setTitle(titleText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the typing speed by changing the interval duration
  }, [inView, cardControls]);


  const cardsData = [
    {
      title: "Experience",
      text: "Our team boasts extensive experience in blockchain development, delivering innovative solutions tailored to your needs.",
      icon: "bi-wallet2",
    },
    {
      title: "Dedication",
      text: "Our unwavering dedication to blockchain technology keeps us at the forefront of industry advancements, ensuring cutting-edge solutions.",
      icon: "bi-check2-square",
    },
    {
      title: "Animation & Graphics",
      text: "Expertise in professional graphic design, 3D modeling, and animation, delivering visually stunning and engaging content.",
      icon: "bi-lightning",
    },
    {
      title: "Manage Your Own NFTs",
      text: "Efficiently manage your NFT portfolio with our user-friendly platform, offering comprehensive tools and insights.",
      icon: "bi-brush",
    },
    {
      title: "Dapp Vault",
      text: "Our commitment to innovation is reflected in our Dapp Vault, a repository of diverse decentralized applications.",
      icon: "bi-coin",
    },
    {
      title: "Metaverse",
      text: "Explore our Metaverse with 3D Model NFT Characters, offering an immersive and interactive digital experience.",
      icon: "bi-boxes",
    },
  ];

  return (
    <section className="why">
      <div className="container-fluid">
        <div className="content">
        <h2>
            <span className="gradient-text">{title}</span>
          </h2>    
          
             <div className="row">
            {/* Left Side Cards */}
            <div className="col-md-4">
              {cardsData.slice(0, 3).map((card, index) => (
                <motion.div
                  className="mb-3"
                  key={index}
                  ref={cardRef} // Assign the ref to the card element
                  initial={{ opacity: 0, x: -50 }}
                  animate={cardControls}
                >
                  <div className="card">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <div className="card-icon">
                          <i className={`bi ${card.icon}`}></i>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{card.title}</h5>
                          <p className="card-text">{card.text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Center Image */}
            <div className="col-md-4">
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <img className="img-fluid center-img" src={require('../images/newlogo.png')} alt="Central Illustrative Image" />
                </div>
              </div>
            </div>

            {/* Right Side Cards */}
            <div className="col-md-4">
              {cardsData.slice(3).map((card, index) => (
                <motion.div
                  className="mb-3"
                  key={index}
                  ref={cardRef} // Assign the ref to the card element
                  initial={{ opacity: 0, x: 50 }}
                  animate={cardControls}
                >
                  <div className="card">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <div className="card-icon">
                          <i className={`bi ${card.icon}`}></i>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{card.title}</h5>
                          <p className="card-text">{card.text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
