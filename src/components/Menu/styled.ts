import { motion } from "framer-motion";
import styled from "styled-components";
import { Media } from "ui";

const StyledMenu = styled(motion.nav)`
  display: none;
  ${Media.LAPTOP_M} {
    position: absolute;
    top: 100px;
    left: 0;
    z-index: 4;
    display: grid;
    justify-items: center;
    align-content: center;
    gap: 40px;
    width: 100vw;
    height: calc(100vh - 100px);
    background-color: inherit;
    opacity: 0;
    transform: translateX(-100%);
  }
`;

export { StyledMenu };
