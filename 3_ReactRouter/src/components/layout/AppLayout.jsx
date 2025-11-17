import React from "react";
import {   Header } from "./Header";
import {  Footers } from "./Footer";
import {Outlet, useNavigation} from "react-router-dom"
import { Loading } from "./Loading";

const AppLayout = () => {

  const navigation = useNavigation();
  console.log(navigation);
  if(navigation.state === "loading") return 
<Loading/>
  
  return (

    <>
      <Header />
    {/* <main className="main-content"> */}
    <Outlet />
  {/* </main> */}
      <Footers />
    </>
  );
};

export default AppLayout;
 