import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Timothy",
  },
  {
    label: "Age",
    value: "21",
  },
  {
    label: "Address",
    value: "Kenya",
  },
  {
    label: "Email",
    value: "squimstech@gmail.com",
  },
  {
    label: "Contact No",
    value: "+254748143442",
  },
];

const jobSummary =
   'Im  Timothy Kaingati, Full stack developer/Mern. With two years of experience in web development, I have a strong command over both front-end and back-end technologies, allowing me to build complete and scalable applications.On the front-end side, I specialize in HTML, CSS, and JavaScript frameworks such as React,Tailwind css and Angular. I’m passionate about creating intuitive user interfaces that provide an exceptional user experience. I pay great attention to detail, ensuring that the websites or applications I develop are responsive, visually appealing, and accessible across different devices and browsers.Moving to the back end, I’m proficient in server-side languages like Node.js and PHP. I have extensive experience working with databases such as MySQL and MongoDB, and I can design efficient database structures and write optimized queries. I’m familiar with RESTful APIs and know how to integrate them into applications to enable seamless communication between the front end and back end.Additionally, I have expertise in version control systems like Git, and I’m comfortable working in collaborative environments using Agile methodologies.';

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Mern Stack Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var( --yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
