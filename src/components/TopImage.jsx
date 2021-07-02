import React, { useState, useEffect } from "react";
import styled from "styled-components";
import desktopImg from "../images/image-hero-desktop.jpg";
import mobileImg from "../images/image-hero-mobile.jpg";

const Image = styled.img`
  position: absolute;
  top: 0px;
  width: 1400px;
  z-index: -1;
  width: 100vw;
  height: 400px;
`;

const TopImage = (props) => {
  const initialBgImage = () => {
    if (window.innerWidth > 768) {
      return desktopImg;
    } else {
      return mobileImg;
    }
  };

  const [bgImage, setBgImage] = useState(initialBgImage);

  const resizeHandler = () => {
    if (window.innerWidth > 768) {
      return setBgImage(desktopImg);
    } else {
      return setBgImage(mobileImg);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  });

  return <Image src={bgImage} alt="top" />;
};

export default TopImage;
