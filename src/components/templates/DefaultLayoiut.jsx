import { Footer } from "../atom/layout/Footer";
import { Header } from "../atom/layout/Header";

export const DefaultLayoiut = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
