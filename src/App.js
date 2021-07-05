import React from "react";
import Navbar from "./Components/Navbar";
import SectionWays from "./Components/SectionWays";
import SectionPay from "./Components/SectionPay";
import StarcodeSection from "./Components/StarcodeSection";
import LowerSection from "./Components/LowerSection";
import NavOffSection from "./Components/NavOffSection";
import ExtrasSection from "./Components/ExtrasSection";
import Footer from "./Components/Footer";

export default function App() {
    return (
        <>
            <Navbar/>
            <NavOffSection/>
            <SectionWays/>
            <ExtrasSection/>
            <SectionPay/>
            <StarcodeSection/>
            <LowerSection/>
            <hr/>
            <Footer/>


            <hr/>
        </>
    );
}
