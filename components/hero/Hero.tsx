import React, { useEffect } from "react";
import Section from "../main/Section";
import { useTrail, a, config } from "@react-spring/web";

interface heroProps {
  heroRef?: React.MutableRefObject<null>;
}

const Hero: React.FC<heroProps> = ({ heroRef }) => {
  const [springs, api] = useTrail(4, () => ({
    from: {
      y: 50,
      opacity: 0,
    },
    config: {
      tension: 235,
      friction: 28,
    },
  }));

  // Start hero animation after a second
  useEffect(() => {
    setTimeout(() => {
      api.start({
        y: 0,
        opacity: 1,
      });
    }, 1000);
  }, []);

  return (
    <Section label="hero" id="content" sectionRef={heroRef}>
      <a.h1 style={springs[0]}>Hi, my name is</a.h1>
      <a.h2 style={springs[0]}>Brian Nyachae.</a.h2>
      <a.h3 style={springs[1]}>I embrace the digital world.</a.h3>
      <a.p style={springs[2]}>
        I am a Full-stack Software Engineer with a focus on constructing and
        occasionally designing high-caliber digital experiences. My technical
        acumen encompasses a broad spectrum of technologies, allowing me to
        transform complex ideas into robust and scalable software applications.
      </a.p>
      <a.a href="#featured" style={springs[3]}>
        <button tabIndex={-1}>Check out my work!</button>
      </a.a>
    </Section>
  );
};

export default Hero;
