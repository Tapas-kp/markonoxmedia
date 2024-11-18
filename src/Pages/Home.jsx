import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { WordTransition } from "../Components/WordTransition";

export const Home = () => {
  const resumeDownload = () => {
    window.open("/TapasKumarPalai-FullStackWebDeveloper.pdf");
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/TapasKumarPalai-FullStackWebDeveloper.pdf";
      link.download = "TapasKumarPalai-FullStackWebDeveloper.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000);
  };

  const handlegit = (url) => {
    window.open(url, "_blank");
  };

  const handleIconClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const handleLinkedin = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="home" id="home">
      <div id="left-home">
        <WordTransition
          wordsArray={[
            `MERN Stack Developer`,
            "Full Stack Developer",
            "Frontend Developer",
            "Backend Developer",
          ]}
        />

        <br />
        <p>
          Newcomer to web development,{" "}
          <span style={{ color: "aqua" }}>Full stack developer</span> proficient
          in data retrieval and processing, creating dynamic.
        </p>

        <div id="logo">
          <div id="linku">
            <IoLogoLinkedin
              onClick={() =>
                handleLinkedin(
                  "https://www.linkedin.com/in/tapas-kumar-palai-1a343a281/"
                )
              }
              style={{ height: "40px", width: "50px" }}
            />
          </div>
          <div id="gitu">
            <FaGithubSquare
              onClick={() => {
                handlegit("https://github.com/Tapas-kp");
              }}
              style={{ height: "40px", width: "50px" }}
            />
          </div>
          <div id="emu">
            <MdOutlineAttachEmail
              id="em"
              onClick={() =>
                handleIconClick("mailto:palaitapaskumar8@gmail.com")
              }
              style={{ height: "40px", width: "50px" }}
            />
          </div>
        </div>
        <div id="btn">
          <button
            onClick={() => {
              resumeDownload();
            }}
          >
            Download Resume
          </button>

          <a href="#contact">
            <button id="scbtn"> Hire Me</button>
          </a>
        </div>
      </div>

      <div id="right-home">
        <img src="/gif.gif" alt="" />
      </div>
    </div>
  );
};
