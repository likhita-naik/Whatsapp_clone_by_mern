import React, { Fragment, useContext, useState } from "react"
import { AppBar, Toolbar, styled, Box } from "@mui/material"
import LoginDialoge from "./Authentication/loginDialoge";
import { AccountContext } from "../Context/AccountContext";
import ChatWindow from "./ChatWindow";
const Header = styled(AppBar)`height:200px;
background-color:#00bfa5;`
const LoginHeader = styled(AppBar)`height:200px;
background-color:#00bfa5;`
const Component = styled(Box)`
background-color:#DCDCDC;
`

const Messenger = () => {
    const { account } = useContext(AccountContext)

    return <Component>{

        account ? <Fragment><Header> <ChatWindow></ChatWindow></Header> </Fragment>
            : <Fragment>
                <LoginHeader>
                    <Toolbar></Toolbar>
                </LoginHeader>

                <LoginDialoge></LoginDialoge>
            </Fragment>
    }
    </Component>

}

export default Messenger;