import React from "react";
import HeaderUI from "../../uiConponents/headerUI/HeaderUI";
import classes from "./playListPage.module.scss";
import TrackPlayer from "../../uiConponents/trackPlayerUI/TrackPlayer";
import MenuUI from "../../uiConponents/menuUI/MenuUI";
import Footer from "../../uiConponents/footerUI/Footer";
import PlayListContent from "../../uiConponents/contentsUI/playListContent/PlayListContent";
import Fon from "../fon/Fon";


class PlayListPage extends React.Component{
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
                    <PlayListContent/>
                    <Footer/>
                </div>
            </Fon>
        )
    }
}

export default PlayListPage;