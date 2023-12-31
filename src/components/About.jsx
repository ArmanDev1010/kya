import React from "react";
import { TopBox, Menu, Navbar, AboutScroll, Footer } from "./index";

const About = () => {
  return (
    <>
      <TopBox />
      <Menu about={true} />
      <Navbar about={true} />
      <AboutScroll />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.032914905432!2d44.52852287639423!3d40.2083307682963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa37cc08dd0b7%3A0x7c6f4bc122c4446f!2sKY%20Academy!5e0!3m2!1sen!2sam!4v1704294107563!5m2!1sen!2sam"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Footer about={true} />
    </>
  );
};

export default About;
