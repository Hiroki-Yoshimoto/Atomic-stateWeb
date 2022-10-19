import { memo } from "react";
import styled from "styled-components";
import { Card } from "../../atom/card/card";
import { UserIconName } from "../../molecules/user/UserIconName";

export const UserCard = memo((props) => {
  console.log("UserCard");
  const { user } = props;
  return (
    <Card>
      <UserIconName image={user.image} name={user.name} />
      <SDL>
        <dl>
          <dt> メール</dt>
          <dd> {user.email}</dd>
          <dt> TEL</dt>
          <dd> 0120-117-177</dd>
          <dt> 会社名</dt>
          <dd> {user.company}会社</dd>
        </dl>
      </SDL>
    </Card>
  );
});
const SDL = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
