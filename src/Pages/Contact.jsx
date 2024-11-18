import React from "react";
import Swal from "sweetalert2";
import { IoCall } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

export const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e1701125-cfa0-453d-906d-673004ff43c0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Sucess!",
        text: "Message Sent!",
        icon: "success",
      });
    }
  };
  const handleLinkedin = (url) => {
    window.open(url, "_blank");
  };
  const handlegit = (url) => {
    window.open(url, "_blank");
  };
  const handlewp = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="contact">
      <br />
      <h1>Contact</h1>
      <br />

      <div id="c-inside">
        <section className="con">
          <form onSubmit={onSubmit}>
            <h2>Contact form</h2>
            <div className="input-box">
              <label>Fullname:</label>
              <input
                type="text"
                name="name"
                className="field"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="input-box">
              <label>Email:</label>
              <input
                type="email"
                className="field"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input-box">
              <label>Your Message:</label>
              <textarea
                name="message"
                placeholder="Enter your message"
                className="field mess"
              ></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </section>

        <div id="con-right">
          <div className="tk">
            <IoCall style={{ height: "40px", width: "50px" }} />
            <h1 style={{ fontSize: "25px", fontWeight: "700" }}>8599872592</h1>
          </div>

          <div className="tk">
            <MdAttachEmail style={{ height: "40px", width: "50px" }} />
            <h1>palaitapaskumar8@gmail.com</h1>
          </div>
          <div id="locha">
            <IoLogoLinkedin
              id="lnk"
              onClick={() =>
                handleLinkedin(
                  "https://www.linkedin.com/in/tapas-kumar-palai-1a343a281/"
                )
              }
              style={{ height: "40px", width: "50px" }}
            />
            <FaGithubSquare
              id="gts"
              onClick={() => {
                handlegit("https://github.com/Tapas-kp");
              }}
              style={{ height: "40px", width: "50px" }}
            />

            <FaSquareWhatsapp
              id="wps"
              onClick={() =>
                handlewp("https://api.whatsapp.com/send?phone=918599872592")
              }
              style={{ height: "40px", width: "50px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
