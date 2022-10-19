import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../providers/UserProvider";
import { SeconButton } from "../atom/button/SeconButton";
import { Serch } from "../molecules/Serch";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=r-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
    name: `田中${val}`,
    email: "abc@gmail.com",
    company: "abcCOmpany"
  };
});

export const Users = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  const onClickChange = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  return (
    <SContainer>
      <h2>ユーザ一覧</h2>
      <Serch />
      <SeconButton onClick={onClickChange}>切り替えボタン</SeconButton>
      <SArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SArea>
    </SContainer>
  );
};
const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1ft));
  grid-gap: 20px;
`;
