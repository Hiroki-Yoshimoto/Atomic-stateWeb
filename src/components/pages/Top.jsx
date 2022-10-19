import { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../providers/UserProvider";
import { SeconButton } from "../atom/button/SeconButton";

export const Top = () => {
  const history = useHistory();
  const { setUserInfo } = useContext(UserContext);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };

  const onClickUser = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };
  return (
    <SContainer>
      <h2>トップページです。</h2>
      <SeconButton onClick={onClickAdmin}>管理者ボタン</SeconButton>
      <br />
      <br />
      <SeconButton onClick={onClickUser}>一般ボタン</SeconButton>
    </SContainer>
  );
};
const SContainer = styled.div`
  text-align: center;
`;
