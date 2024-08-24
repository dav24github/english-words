import { theme } from "@/utils";
import styled from "styled-components";

const border = "2px";
export const Card = styled.div`
  position: relative;
  background-color: ${theme.palette.grey[500]};
  width: max-content;
  max-width: 400px;
  height: max-content;
  padding: 1.2rem 2rem;
  background-clip: padding-box; /* !importanté */
  border: solid ${border} transparent; /* !importanté */
  border-radius: 12px;
  display: flex;
  gap: 2rem;
  align-items: center;
  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    background-color: ${theme.palette.grey[400]};

    &:before {
      background: linear-gradient(to right, #ac9688, #3a82a0);
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -${border}; /* !importanté */
    border-radius: inherit; /* !importanté */
    background: linear-gradient(to right, #3a82a0, #ac9688);
  }
`;
