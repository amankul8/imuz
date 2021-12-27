import React from "react";
import HeaderUI from "../../uiConponents/headerUI/HeaderUI";
import classes from "./friendsPage.module.scss";
import TrackPlayer from "../../uiConponents/trackPlayerUI/TrackPlayer";
import MenuUI from "../../uiConponents/menuUI/MenuUI";
import Footer from "../../uiConponents/footerUI/Footer";
import FriendsContent from "../../uiConponents/contentsUI/friendsContent/FriendsContent";
import Fon from "../fon/Fon";


class FriendsPage extends React.Component{
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
                    <FriendsContent/>
                    <Footer/>
                </div>
            </Fon>
        )
    }
}

export default FriendsPage;