

import { MdLocationOn } from "react-icons/md";


export const About = () => {
  return (
   <div id='main'>
    <h1>About</h1>
    <hr />
     <div id='about'>
      <div id='abt-left'>
        <div id='avtar'>
          <img src="\tk.jpeg" alt="" />
        </div>
      </div>
      <div id='abt-right'>
        <div id='right-cont'>
          <h2>ABOUT ME</h2>
          <br />
          <p>A dedicated Fullstack Developer with a B.Sc. degree from Gopalpur College. I am passionate about enhancing my coding and communication skills, with a particular focus on native application development. Actively engaged in building web applications, I am committed to crafting user-friendly and responsive interfaces, which are crucial for my personal growth and professional refinement in web development.









          </p>
          <br />
          <div id='right-location'><MdLocationOn  id='loc' style={{height:"20px",width:"20px",color:"aqua"}}/><h4>Bangalore,Karnataka</h4></div>
        </div>
      </div>
    </div>
   </div>
  )
}
