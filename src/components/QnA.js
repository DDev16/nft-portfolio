import React, { useState } from "react";
import "./QnA.scss";

export default function QnA() {
  // Separate states for each card's active question
  const [activeQuestionLeft, setActiveQuestionLeft] = useState(null);
  const [activeQuestionRight, setActiveQuestionRight] = useState(null);

  const questionsLeft = [
    {
      id: 1,
      question: "What is Pyscho Chibis NFT Collection?",
      answer:
        "Introducing the Psycho Chibis NFT Collection where the whimsical meets the surreal in a mesmerizing fusion of chibi artistry and mind-bending illusions. Prepare to embark on a visual journey like no other as you explore this one of a kind collection featuring a diverse array of chibi characters, each adorned with hypnotic, trippy illusion eyes, set against a backdrop of enchanting and surreal landscapes. Our Psycho Chibis NFT Collection is not just a captivating visual experience its an investment opportunity that rewards early adopters. With a unique revenue sharing mechanism, we give back 15% of the minting proceeds directly to our dedicated holders. But heres the twist: the earlier you become a part of our community, the greater your return potential. Holding multiple NFTs will magnify your share of the revenue, making your investment all the more rewarding. At Psycho Chibis were not just offering NFTs; were crafting an immersive, evolving ecosystem where art, innovation, and community thrive. As a holder, youre not merely a spectator; youre an integral part of our collective journey. Your support empowers us to continue pushing the boundaries of chibi art and illusion, creating new and exciting experiences for our community. Dont miss your chance to own a piece of this groundbreaking NFT collection. Join us today, secure your place in the Psycho Chibis universe, and watch as your investment grows, rewarding your early commitment and loyalty. Invest in Psycho Chibis NFTs — Where Art Meets Illusion, and Community Thrives.", 
      },
    
    {
      id: 2,
      question: "How can we mint NFTs?",
      answer:
           "Download Metamask and purchase SGB. Connect your Metamask wallet to our website and purchase NFTs.",
    },
    {
      id: 3,
      question: "Why should we choose Chaotic Creations NFTs?",
      answer:
        "Becoming apart of the Psycho Chibi community is more than just owning an NFT. We are a community that is dedicated to the growth of our project and the growth of our community. We are dedicated to bringing you the best NFTs and the best Dapps. We are dedicated to bringing you the best experience possible. We are dedicated to bringing you the best community possible. We are dedicated to bringing you the best rewards possible. We are dedicated to bringing you the best experience possible. WE ARE DEDICATED TO YOU!",
    },
    {
      id: 4,
      question: "How secure is this token?",
      answer:
        "We have taken exhaustive measures to ensure the utmost security of our token through rigorous testing and auditing. Our website, community, NFTs, and Dapps have also been subjected to rigorous security measures to ensure their safety. We have prioritized security in every aspect of our operations, including our community and rewards, to provide the highest level of protection possible.",
    },
    {
      id: 5,
      question: "What is your contract address?",
      answer:
        "Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
    }
  ];

  const questionsRight = [
    {
      id: 1,
      question: "What makes Psycho Chibis unique in the NFT space?",
      answer: "Psycho Chibis stands out in the NFT space with its unique blend of chibi art style and psychedelic themes. Each NFT in our collection is a digital masterpiece, combining vivid colors, intricate designs, and captivating illusionary effects. Our NFTs are not just digital assets but works of art that push the boundaries of creativity and digital expression."
    },
    {
      id: 2,
      question: "Can Psycho Chibis NFTs be used in virtual worlds?",
      answer: "Absolutely! Our Psycho Chibis NFTs are designed to be versatile and interactive, making them perfect for integration into various virtual worlds and metaverse platforms. Holders can use their NFTs as avatars or digital collectibles, enhancing their virtual experience with unique and artistic representations."
    },
    {
      id: 3,
      question: "What future developments are planned for Psycho Chibis?",
      answer: "We're constantly innovating and expanding the Psycho Chibis universe. Future developments include interactive gaming experiences, exclusive holder events, and collaborations with other NFT projects and artists. We're committed to evolving our ecosystem to provide continuous value and engagement for our community."
    },
    {
      id: 4,
      question: "How can I participate in Psycho Chibis' community events?",
      answer: "Joining our community on platforms like Discord and Twitter is the best way to stay informed and participate in our events. We host various community activities, including AMAs, contests, and exclusive previews, where members can engage, contribute ideas, and connect with fellow NFT enthusiasts."
    },
    // Add more new questions for the right card as needed
  ];

  const toggleAnswerLeft = (questionId) => {
    setActiveQuestionLeft((prevQuestionId) =>
      prevQuestionId === questionId ? null : questionId
    );
  };

  const toggleAnswerRight = (questionId) => {
    setActiveQuestionRight((prevQuestionId) =>
      prevQuestionId === questionId ? null : questionId
    );
  };

  return (
    <section className="QnA">
      <div className="container-fluid">
        <div className="row">
          <h2>ASKED <span>QUESTIONS</span></h2>
        </div>
        <div className="row">
          <div className="col-md-6 card">
            {questionsLeft.map((q, index) => (
              <div className="question" key={q.id}>
                <h5 onClick={() => toggleAnswerLeft(q.id)} data-active={activeQuestionLeft === q.id}>
                  {q.question}
                  {activeQuestionLeft === q.id ? (
                    <i className="bi bi-dash-lg"></i>
                  ) : (
                    <i className="bi bi-plus-lg"></i>
                  )}
                </h5>
                {activeQuestionLeft === q.id && (
                  <p>{q.answer}</p>
                )}
                {index !== questionsLeft.length - 1 && <hr />}
              </div>
            ))}
          </div>

          <div className="col-md-6 card">
            {questionsRight.map((q, index) => (
              <div className="question" key={q.id}>
                <h5 onClick={() => toggleAnswerRight(q.id)} data-active={activeQuestionRight === q.id}>
                  {q.question}
                  {activeQuestionRight === q.id ? (
                    <i className="bi bi-dash-lg"></i>
                  ) : (
                    <i className="bi bi-plus-lg"></i>
                  )}
                </h5>
                {activeQuestionRight === q.id && (
                  <p>{q.answer}</p>
                )}
                {index !== questionsRight.length - 1 && <hr />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
