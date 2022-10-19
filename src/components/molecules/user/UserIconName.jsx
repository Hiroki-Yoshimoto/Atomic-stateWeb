import React, { memo, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";

export const UserIconName = memo((props) => {
  const { image, name } = props;
  const { userInfo } = useContext(UserContext);
  console.log("aaaa");
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  return (
    <SContainer>
      <SImg src={image} height={160} width={160} alt="プロフィール" />
      <SName>{name}</SName>
      {isAdmin && <Sedit>編集 </Sedit>}
    </SContainer>
  );
});
const SContainer = styled.div`
  text-align: center;
`;
const SImg = styled.img`
  border-radius: 100px;
`;
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
const Sedit = styled.p`
  text-decoration: underline;
`;
