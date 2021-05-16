import React, { useState } from "react";
import Card from "../../Card";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "./index.css";
import "./mobile.css";
import Technology from "../../Technology";

function About() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);

  const toggleOpen = (e, index) => {
    e.preventDefault();
    if (
      document
        .getElementsByClassName("about__container__services__cards")[0]
        .classList.contains("close")
    ) {
      document
        .getElementsByClassName("about__container__services__cards")[0]
        .classList.remove("close");
      setIsOpen(!isOpen);
    } else {
      document
        .getElementsByClassName("about__container__services__cards")[0]
        .classList.add("close");
      setCurrentCard(index);
      setIsOpen(!isOpen);
    }
  };
  const Cards = [
    {
      name: "Design",
      content: `I design responsive modern websites that take priority in user experience. These designs create the look, layout, and features that best fits the needs of my client. My process includes: building and improving websites, conceptualizing creative ideas with clients, testing and improving the design on a website, designing sample pages including colors and fonts, preparing design plans and presenting website structure, and much more. Depending on the project it takes me 2-3 weeks to create a hi fidelity web design. If you’re interested in improving your current design or starting from scratch please feel free to`,
      imgs: ["./images/icons/design.png", "./images/icons/xd.png"],
    },
    {
      name: "Development",
      content:
        "I am a full stack developer meaning I can develop both client and server software. To bring your site to life I develop front-end website architecture while designing user interactions. I develop using ReactJS, this brings me the most efficient way to accomplish back-end security, render speed, high SEO score, and overall productivity. Any needs can be met such as eCommerce, portfolio, marketing, and blogging. Using my technologies I can make strong, secure, swift and responsive web applications that meet technical and consumer needs. Depending on the scope of the project, it takes me 2-3 weeks to push a web application live. If you’re interested in building a site or recreating your current site, please feel free to",
      imgs: ["./images/icons/web.png", "./images/icons/reactjspic.png"],
    },
    {
      name: "Analytics",
      content:
        "Being certified in google analytics, I have a strong grasp on current marketing tools and strategies. I am able to research audience preferences and discover new trends, measure web traffic and monitor SEO, suggest new ways to attract prospective customers, and many more opportunities for you to take advantage of. Connecting your website to google analytics and presenting consumer information for your site, I can give you valuable information on how to bring in more traffic to your website. If you’re interested in having a bigger presence, please feel free to",
      imgs: ["./images/icons/analytics.png", "./images/icons/google.png"],
    },
  ];

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8,
  };
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-10vw",
      scale: 0.8,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 1.5,
    },
  };
  return (
    <motion.div
      className="page about__container"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="about__container__about-me">
        <h2>About Me</h2>
        <p>
          Hello my name is Britton Smith, I am a Full Stack Web
          Developer/Designer from Fullsail University partnered with
          DigitalByte.io. I make beautiful modern websites that are optimized
          for all devices. Working with many technologies, I to bring my clients
          the most efficient product for their needs. I am specialized in using
          the ReactJS framework, it's the best tool to bring my clients fast,
          secure, and optimized web applications. Being certified in Google
          Analytics I can track and make reports of web traffic to develop and
          execute strategies for digital marketing efforts. These efforts will
          create revenue-driving programs that build relationships with clients,
          as well as online audiences through the various digital and social
          media platforms. If you're interested in building a new site,
          redesigning your current website, or growing your customer market
          don't be afraid to contact me!
        </p>
      </div>
      <div className="about__container__services">
        <h2>Services</h2>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="card__container__more"
            >
              <img
                onClick={toggleOpen}
                src="./images/icons/close.png"
                alt="x"
                className="card__container__more-close"
              />
              <div className="card__container__more__info">
                <h2>{Cards[currentCard].name}</h2>
                <p>
                  {Cards[currentCard].content} <a href="/">contact me!</a>
                </p>
              </div>
              <div className="card__container__more__imgs">
                <img
                  className="card__container__more-img"
                  src={`${Cards[currentCard].imgs[0]}`}
                  alt={`${Cards[currentCard].name} icon`}
                />
                <img
                  className="card__container__more-img"
                  src={`${Cards[currentCard].imgs[1]}`}
                  alt={`${Cards[currentCard].name} icon`}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="about__container__services__cards">
          <AnimateSharedLayout>
            {Cards.map((card, index) => {
              return (
                <Card
                  name={card.name}
                  key={index}
                  content={card.content}
                  image={card.imgs[0]}
                  animate={(e) => toggleOpen(e, index)}
                />
              );
            })}
          </AnimateSharedLayout>
        </div>
      </div>
      <div className="about__container__technologies">
        <h2>Technologies</h2>
        <div className="about__container__technologies-items">
          <Technology name="Reactjs" img="./images/icons/reactjs.png" />
          <Technology name="JavaScript" img="./images/ja.png" />
          <Technology name="CSS" img="./images/icons/css.webp" />
          <Technology name="HTML" img="./images/icons/html.webp" />
          <Technology name="MySQL" img="./images/icons/mysql.png" />
          <Technology name="Adobe XD" img="./images/icons/xd.png" />
          <Technology name="Bootstrap" img="./images/icons/bs.jpg" />
          <Technology name="GitHub" img="./images/icons/git.png" />
          <Technology name="NodeJS" img="./images/icons/node.jpg" />
          <Technology name="MongoDB" img="./images/icons/mongodb.png" />
          <Technology name="Google Analytics" img="./images/icons/google.png" />
        </div>
      </div>
    </motion.div>
  );
}

export default About;
