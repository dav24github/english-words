import { theme } from "@/utils";
import styled from "styled-components";

export const IconButton = styled.div`
  background: transparent;
  border-radius: 50%;
  width: 4.2rem;
  height: 4.2rem;
  cursor: pointer;
  transition: 0.3s all;
  position: relative;

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    background: ${theme.palette.grey[400]};

    span {
      color: inherit;
    }
  }

  &:active {
    background: ${theme.palette.grey[200]};
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    color: ${theme.palette.grey[200]};
  }
`;
