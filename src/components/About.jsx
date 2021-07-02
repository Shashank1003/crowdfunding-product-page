import React from "react";
import styled from "styled-components";

const Container = styled.div`
  h3 {
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  p {
    color: hsl(0, 0%, 48%);
    font-weight: 400;
    line-height: 1.5rem;
    margin-bottom: 2rem;
    font-size: 0.95rem;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`;

const About = () => {
  return (
    <Container id="about">
      <h3>About this project</h3>
      <p>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p>
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
    </Container>
  );
};

export default About;
