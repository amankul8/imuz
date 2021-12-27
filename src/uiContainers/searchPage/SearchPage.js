import React from "react";
import HeaderUI from "../../uiConponents/headerUI/HeaderUI";
import classes from "./searchPage.module.scss";
import TrackPlayer from "../../uiConponents/trackPlayerUI/TrackPlayer";
import MenuUI from "../../uiConponents/menuUI/MenuUI";
import Footer from "../../uiConponents/footerUI/Footer";
import SearchContent from "../../uiConponents/contentsUI/searchContent/SearchContent";
import Fon from "../fon/Fon";


class SearchPage extends React.Component{
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
                    <SearchContent/>
                    <Footer/>
                </div>
            </Fon>
        )
    }
}

export default SearchPage;