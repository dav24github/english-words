import { theme } from "@/utils";
import styled from "styled-components";

export const ChipWord = styled.div`
  width: max-content;
  background: ${theme.palette.grey[500]};
  border-radius: 12px;
  padding: 0.5rem 0.8rem;
  box-shadow: inset ${theme.palette.grey[600]} 0px 0px 8px -1px;
  min-width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
