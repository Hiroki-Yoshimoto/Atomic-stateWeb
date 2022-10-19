import styled from "styled-components";

export const PrimaryButton = (props) => {
  const { children } = props;

  return <SButton>{children}</SButton>;
};

const SButton = styled.button`
  background-color: #40514e;
  color: #fff;
  outline: none;
  border-radius: 1000px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
