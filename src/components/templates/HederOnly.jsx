import { Header } from "../atom/layout/Header";

export const HederOnly = (props) => {
  const { children } = props;
  return (
    <>
      <Header />

      {children}
    </>
  );
};
