import { PrimaryButton } from "../atom/button/PrimaryButton";
import { Input } from "../atom/input/Input";
import styled from "styled-components";
import { memo } from "react";

export const Serch = memo(() => {
  console.log("Serch");
  return (
    <div>
      <SContainer>
        <Input placeholder="検索条件を入力" />
        <SButtonWrape>
          <PrimaryButton>検索</PrimaryButton>
        </SButtonWrape>
      </SContainer>
    </div>
  );
});

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrape = styled.div`
  padding-left: 8px;
`;
