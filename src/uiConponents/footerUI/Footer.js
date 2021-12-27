import React from "react";
import classes from "./footer.module.scss";
import tiktok from "../../images/footerIcons/TikTok.png";
import instagram from "../../images/footerIcons/Instagram.png";
import whatsapp from "../../images/footerIcons/WhatsApp.png";
import telegram from "../../images/footerIcons/Telegram.png";
import facebook from "../../images/footerIcons/Facebook.png";


const Footer=()=>{

    let iconList = [
        {url: 'https://google.com', image: tiktok},
        {url: 'https://google.com', image: instagram},
        {url: 'https://google.com', image: whatsapp},
        {url: 'https://google.com', image: telegram},
        {url: 'https://google.com', image: facebook}
    ];

    return(
        <div className={classes.footerWrapper}>
            <div className={classes.iconWrapper}>
                {
                    iconList.map((item, index)=>{
                        return(
                            <a href={item.url}  key={index}>
                                <img src={item.image} alt=""/>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Footer;