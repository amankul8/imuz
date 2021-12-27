import React from "react";
import classes from "../homePage/HomePage.module.scss";
import HeaderUI from "../../uiConponents/headerUI/HeaderUI";
import TrackPlayer from "../../uiConponents/trackPlayerUI/TrackPlayer";
import MenuUI from "../../uiConponents/menuUI/MenuUI";
import Footer from "../../uiConponents/footerUI/Footer";
import UsersContent from "../../uiConponents/contentsUI/usersContent/UsersContent";
import Fon from "../fon/Fon";

class UserPage extends React.Component{
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
                    <UsersContent/>
                    <Footer/>
                </div>
            </Fon>
        )
    }
}

export default UserPage;