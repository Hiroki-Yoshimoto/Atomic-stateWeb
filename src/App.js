import { BrowserRouter, Route, Router } from "react-router-dom";
import { PrimaryButton } from "./components/atom/button/PrimaryButton";
import { SeconButton } from "./components/atom/button/SeconButton";
import { Serch } from "./components/molecules/Serch";
import { UserCard } from "./components/organisms/user/UserCard";
import { DefaultLayoiut } from "./components/templates/DefaultLayoiut";
import { HederOnly } from "./components/templates/HederOnly";
import "./styles.css";
import { Routers } from "./router/Router";
import { UserProvider } from "./providers/UserProvider";
const user = {
  image:
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=r-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
  name: "田中",
  email: "abc@gmail.com",
  company: "abcCOmpany"
};
export default function App() {
  return (
    // <BrowserRouter>
    //   <DefaultLayoiut>
    //     <h1>Hello CodeSandbox</h1>
    //     <PrimaryButton>テスト </PrimaryButton>
    //     <PrimaryButton>テスト2 </PrimaryButton>
    //     <SeconButton>テスト３</SeconButton>
    //     <br />
    //     <Serch />
    //     <UserCard user={user} />
    //   </DefaultLayoiut>
    // </BrowserRouter>
    <UserProvider>
      <Routers />
    </UserProvider>
  );
}
