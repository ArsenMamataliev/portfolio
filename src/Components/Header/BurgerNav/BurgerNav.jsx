import React, {useState} from 'react';

import style from './BurgerNav.module.scss';
import {navLinksItems} from "./../constants";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";
import {Link} from "react-scroll";

export const BurgerNav = () => {

    let [open, setOpen] = useState(false);

    let openHandler = () => {
        setOpen(!open)
    };

    return (
        <div className={style.container}>
            <div onClick={openHandler} className={open === false ? style.openButton : style.closeButton}>
                <FontAwesomeIcon icon={faBars} className={style.icon}/>
                </div>
            <div className={open === true ? style.menu : style.closeButton}>
                <Fade left>
                    <div onClick={openHandler} className={style.buttonToClose} >
                        <FontAwesomeIcon icon={faTimesCircle} className={style.iconClose}/>
                        </div>
                    {navLinksItems.map(item=> <div className={style.linkContainer} >
                        <Link
            activeClass={style.link}
            to={item.link}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={openHandler}
        >{item.icon} {item.title}</Link>
        </div>)
        }
                </Fade>
            </div>
        </div>
    )
}
