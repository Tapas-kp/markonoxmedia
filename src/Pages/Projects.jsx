import React from "react";

export const Projects = () => {
  const handleGit = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const handleLive = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="main-proj">
      <h1 >Projects</h1>

      <div id="inside">
        <div id="p-left">
          <img src="/sugarscreenshot.png" alt="" />
          <br />
          <p>
          Developed a clone of Sugar Cosmetics, which deals with beauty products for women and accessories. Implemented features such as an image slider, hover effects, simple animations, dropdown menus, and radio buttons.







          </p>
          <br />

          <div id="p-last">
            <button
              onClick={() =>
                handleGit("https://github.com/Tapas-kp/sugarnew_proj")
              }
            >
              GIT
            </button>
            <button
              onClick={() =>
                handleLive("https://genuine-souffle-3aff32.netlify.app/")
              }
            >
              LIVE
            </button>
          </div>
        </div>

        <div id="p-right">
          <img src="/sephorascreenshot.png" alt="" />
          <br />
          <p>
          Implemented a dynamic image slider, enhancing the visual appeal and user experience. Engineered robust product browsing and cart functionality, ensuring seamless navigation and a streamlined checkout process.
          </p>
          <br />

          <div id="p-last">
            <button
              onClick={() => handleGit("https://github.com/Tapas-kp/sephora")}
            >
              GIT
            </button>
            <button
              onClick={() => handleLive("https://sephora-delta.vercel.app/")}
            >
              LIVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
