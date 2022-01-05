import React, {useEffect, useState} from "react";
import classes from "./menuUI.module.scss"
import MenuButton from "../buttonsUI/menuButtonUI/MenuButton";
import homeIcon from "../../images/menuIcons/home.png"
import usersIcon from "../../images/menuIcons/users.png"
import musicsIcon from "../../images/menuIcons/musics.png"
import playListIcon from "../../images/menuIcons/playList.png"
import friendsIcon from "../../images/menuIcons/friends.png"
import searchIcon from "../../images/menuIcons/search.png"
import {NavLink, useLocation} from "react-router-dom";

const MenuUI = (props)=>{

    let location = useLocation();

    let buttonList = [
        {image: homeIcon, text: 'Home', url: '/home'},
        {image: usersIcon, text: 'Users', url: '/users'},
        {image: musicsIcon, text: 'Musics', url: '/musics'},
        {image: playListIcon, text: 'My PlayList', url: '/play_list'},
        {image: friendsIcon, text: 'Friends', url: '/friends'},
        {image: searchIcon, text: 'Search', url: '/search'}
    ]

    return(
        <div className={classes.menuWrapper}>
            {
                buttonList.map((item, index)=>{
                    return(
                        <NavLink to={item.url} key={index}>
                            <MenuButton image={item.image} text={item.text} active={item.url===location.pathname ? true : false} key={index}/>
                        </NavLink>
                    )
                })
            }
        </div>
    )
}

export default MenuUI;