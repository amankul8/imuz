import React from "react";
import HeaderUI from "../../uiConponents/headerUI/HeaderUI";
import classes from "./HomePage.module.scss";
import TrackPlayer from "../../uiConponents/trackPlayerUI/TrackPlayer";
import MenuUI from "../../uiConponents/menuUI/MenuUI";
import Footer from "../../uiConponents/footerUI/Footer";
import HomeContent from "../../uiConponents/contentsUI/homeContent/HomeContent";
import Fon from "../fon/Fon";
import axios from "axios";

class HomePage extends React.Component{
    constructor(props) {
        super(props);
    }

    // componentWillUnmount() {
    //     console.log("HI");
    //     axios.get("http://localhost:8000/imuz").then((res)=>{
    //         console.log(res.data);
    //     }).catch()
    // }


    render() {
        return(
            <Fon styles={classes.backWrapper}>
                <div className={classes.mainPageWrapper}>
                    <HeaderUI />
                    <TrackPlayer/>
                    <MenuUI/>
                    <HomeContent/>
                    <Footer/>
                </div>

            </Fon>
        )
    }
}

export default HomePage;