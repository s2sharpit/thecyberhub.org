import React, { useState } from "react";
import "./UserOptions.css";

import {
    BiLogOut,
    FaUserAstronaut,
    // FcSettings,
    IoLogInSharp,
    // MdDarkMode,
    MdDashboard,
    // MdNotifications,
    FaUserCircle,
} from "react-icons/all";

import { useDispatch, useSelector } from "react-redux";
import { RouterLink, UserOptionsContainer, UserOptionsDropdownContainer } from "./UserOptionsElements";
import { logout, reset } from "../../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
// import Streak from "../../Dashboard/Streak/Streak";

const NavItem = (props) => {
    const [open, setOpen] = useState(false);
    return (
        <li className={"nav-item"}>
            <a className={"icon-button"} onClick={() => setOpen(!open)}>
                {props.text} {props.icon}
            </a>
            {open && props.children}
        </li>
    );
};

const DropdownMenu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate("/");
    };

    const DropdownItem = (props) => {
        return (
            <RouterLink to={props.to} onClick={props.onClickLogout} className={"menu-item"}>
                <span className={"icon-button"}>{props.leftIcon}</span>
                {props.children}
                <span className={"icon-right"}>{props.rightIcon}</span>
            </RouterLink>
        );
    };
    return (
        <UserOptionsDropdownContainer className={"dropdown"}>
            <div className={"menu"}>
                {!user ? (
                    <>
                        <DropdownItem to={"/login"} leftIcon={<IoLogInSharp />}>
                            Login
                        </DropdownItem>
                        <DropdownItem to={"/register"} leftIcon={<IoLogInSharp />}>
                            Register
                        </DropdownItem>
                    </>
                ) : (
                    <>
                        <DropdownItem to={"/profile"} leftIcon={<FaUserCircle />}>
                            Profile
                        </DropdownItem>
                        <DropdownItem to={"/dashboard"} leftIcon={<MdDashboard />}>
                            Dashboard
                        </DropdownItem>
                        {/* <DropdownItem to={"/settings"} leftIcon={<FcSettings />}> */}
                        {/*    Settings */}
                        {/* </DropdownItem> */}
                        <DropdownItem onClickLogout={onLogout} leftIcon={<BiLogOut />}>
                            Logout
                        </DropdownItem>
                    </>
                )}
                {/* <DropdownItem leftIcon={<MdDarkMode />}> DarkMode </DropdownItem> */}
            </div>
        </UserOptionsDropdownContainer>
    );
};

const UserOptions = () => {
    return (
        <UserOptionsContainer className={"navbar-nav"}>
            {/* <NavItem icon={<MdNotifications/>}/> */}
            <NavItem icon={<FaUserAstronaut />}>
                <DropdownMenu></DropdownMenu>
            </NavItem>
        </UserOptionsContainer>
    );
};

export default UserOptions;
