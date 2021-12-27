import React from "react";
import HeaderUI from "../../uiConponents/headerUI/HeaderUI";
import classes from "./musicsPage.module.scss";
import TrackPlayer from "../../uiConponents/trackPlayerUI/TrackPlayer";
import MenuUI from "../../uiConponents/menuUI/MenuUI";
import Footer from "../../uiConponents/footerUI/Footer";
import MusicsContent from "../../uiConponents/contentsUI/musicsContent/MusicsContent";
import Fon from "../fon/Fon";


class MusicsPage extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Fon styles={classes.backWrapper}>
                <div className={classes.mainPageWrapper}>
                    <HeaderUI />
                    <TrackPlayer/>
                    <MenuUI/>
                    <MusicsContent/>
                    <Footer/>
                </div>
            </Fon>
        )
    }
}

export default MusicsPage;