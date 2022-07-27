import React from "react";
import { Stack, Image, Divider, Flex, Box } from "@chakra-ui/react";
import "./Style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import InformationArea from "./Components/InformationArea";
import MultiplePix from "./Components/MultiplePix";
import InformationAreaLast from "./Components/InformationAreaLast";
import FooterWithTable from "./Components/FooterWithTable";
import BackgroundImage from "./Components/BackgroundImage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={App}></Route>
        </Routes>
      </BrowserRouter>

      <Stack className="mainStack">
        <Header />
       <BackgroundImage/>
        <Divider></Divider>
        {/* Text area */}
        <InformationArea />
        <Divider h={10} ></Divider>
        {/* multiple image  */}
        <MultiplePix />
        
        {/* Last Text Area With Pic */}
        <InformationAreaLast />
        {/* Footer with two table */}
        <FooterWithTable />
      </Stack>
    </>
  );
};

export default App;
