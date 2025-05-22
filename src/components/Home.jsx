import React, { useState, useEffect } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { useParallax } from "react-scroll-parallax";
import "./Home.css";
import { Link } from "react-router-dom";
import StarsBackground from "./StarsBackground";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const parallax1 = useParallax({
    rotate: isMobile ? [0, 0] : [-70, 10],
    translateX: isMobile ? [0, 50] : [250, 100],
  });
  const parallax2 = useParallax({
    rotate: isMobile ? [0, 0] : [90, 20],
    translateX: isMobile ? [0, -50] : [-130, 0],
  });
  const parallax3 = useParallax({
    rotate: isMobile ? [0, 0] : [-90, 20],
    translateY: isMobile ? [0, 50] : [-70, 250],
  });
  const parallax4 = useParallax({
    rotate: isMobile ? [0, 0] : [90, -20],
    translateY: isMobile ? [0, 75] : [70, -250],
  });
  const parallax5 = useParallax({
    rotate: isMobile ? [0, 0] : [60, -20],
    translateY: isMobile ? [0, 100] : [-70, 290],
  });

  return (
    <section>
      <section className="homebody">
        <StarsBackground />
        <div className="header">PORTFOLIO © 2025</div>
        <div className="container-body">
          <div className="imageposition">
            <img src="/images/1.jpg" alt="" className="myimage" />
          </div>
          <ParallaxBanner
            layers={[
              {
                translateX: [0, 30],
                scale: [1, 1.45, "easeOutCubic"],
                opacity: [1, -1],
                shouldAlwaysCompleteAnimation: true,
                children: (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl md:text-8xl text-white font-thin myname">
                      Harshin Mansoor
                    </div>
                  </div>
                ),
              },
              {
                translateX: [0, -30],
                scale: [1, 1.45, "easeOutCubic"],
                opacity: [1, -1],
                shouldAlwaysCompleteAnimation: true,
                children: (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl md:text-8xl text-white font-thin myprofile">
                      Software Developer
                    </div>
                  </div>
                ),
              },
            ]}
            className="bg-container"
          />
        </div>
        <div className="myintro">
          <span className="myintro1 sparkle-text">
            Welcome to the digital domain of Harshin Mansoor, a passionate MERN
            Stack developer and recent BTech graduate. With a strong foundation
            in web development and a drive for innovation, I am eager to apply
            my skills and contribute to impactful projects. Explore my portfolio
            to see my work and potential in action.
          </span>
        </div>
        <div className="workidone">
          <span className="workdonetitle">Projects I Have Done</span>
          <Link
            to={"https://github.com/harshinJJ/Doctor-appointment-Scheduling"}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <div ref={parallax1.ref} className="workdonebubble1">
              Healthcare Platform
            </div>
          </Link>
          <Link
            to={"https://github.com/harshinJJ/my-website"}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <div ref={parallax2.ref} className="workdonebubble2">
              Personal Portfolio{" "}
            </div>
          </Link>
          <Link
            to={"https://github.com/harshinJJ/Blood-Bank-project"}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <div ref={parallax3.ref} className="workdonebubble3">
              Blood Donor Project{" "}
            </div>
          </Link>
          <Link
            to={"https://weather-searching-app.vercel.app/"}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <div ref={parallax4.ref} className="workdonebubble4">
              Weather Searching App{" "}
            </div>
          </Link>
          <Link
            to={"https://skill-swap-flax.vercel.app/"}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <div ref={parallax5.ref} className="workdonebubble5">
              Skill Sharing Website{" "}
            </div>
          </Link>
        </div>
        <br />
        <br />
        <br />
        <div className="cvpart">
          <img src="/images/5.jpg" alt="" className="cvimage" />
        </div>
        <div className="download">
          <button className="ui-btn" style={{ textDecoration: "none" }}>
            <a
              href="/images/cv.pdf"
              download="HarshinMansoor_CV.pdf"
              className="download-btn"
              style={{ textDecoration: "none" }}
            >
              <span>DOWNLOAD MY CV</span>
            </a>
          </button>
        </div>

        <div class="cardsection">
          <div class="card">
            <a
              href="mailto:harshinmansoor918@gmail.com" 
              className="socialContainer containerOne"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="socialSvg mailSvg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="40"
                height="40"
                fill="currentColor"
              >
                <path d="M2 4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H2zm0 2h20v12H2V6zm2.85 1.5L12 12.75 19.15 7.5 21 9.1 12 15.25 3 9.1l1.85-1.6z"></path>
              </svg>
            </a>

            <a
              href="https://github.com/harshinJJ"
              class="socialContainer containerTwo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                class="socialSvg githubSvg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.385.6.11.82-.26.82-.577v-2.24c-3.338.725-4.042-1.415-4.042-1.415-.547-1.387-1.335-1.755-1.335-1.755-1.09-.745.083-.73.083-.73 1.204.085 1.837 1.237 1.837 1.237 1.07 1.834 2.805 1.304 3.49.997.11-.775.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.237-3.22-.124-.303-.535-1.523.117-3.175 0 0 1.01-.322 3.3 1.23a11.55 11.55 0 0 1 3-.403c1.02.005 2.04.137 3 .403 2.29-1.552 3.3-1.23 3.3-1.23.652 1.652.24 2.872.117 3.175.77.84 1.237 1.91 1.237 3.22 0 4.61-2.807 5.625-5.478 5.92.43.372.823 1.103.823 2.222v3.292c0 .32.22.693.825.577C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/harshin4057/"
              class="socialContainer containerThree"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg class="socialSvg linkdinSvg" viewBox="0 0 448 512">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </a>

            <a
              href="https://wa.me/966554218319"
              class="socialContainer containerFour"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg class="socialSvg whatsappSvg" viewBox="0 0 16 16">
                {" "}
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>{" "}
              </svg>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
