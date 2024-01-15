import React, { Fragment, useContext } from "react";
import { AppBar, Toolbar, Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode"
import { AccountContext } from "../../Context/AccountContext";
export const qrCodeImage = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';

const Component=styled(Box)`
display:flex;
justify-content:space-around;
margin:20px 10px 20px 10px;`
const Container=styled(Box)`
padding:56px 0px 56px 56px;
`
const QrCode=styled('img')`
height:240,
width:240,
`

const Title=styled(Typography)`
font-size:26px;
color:#565656;
`

const StyledList=styled(List)`
& >l i{
    padding:0px;
    margin-top:15px;
    line-height:24px;
    font-size:18px;

}
`
const LoginDialoge = () => {
    const {setAccount}=useContext(AccountContext)
    const onLoginSuccess=(res)=>{
        console.log(res)
        const cred=jwt_decode(res?.credential)
        setAccount(cred)
        console.log(cred)

    }
    const onLoginError=(Err)=>{
        console.log(Err,'Err'
        )
 
    }
    const dialogeStyle = {
        height: '96%',
        top: '10%',
        width: '60%',
        minWidth: '60%',
        maxWidth: '60%',
        overflow: 'none',

    }
    return <Dialog open={true} hideBackdrop={true} PaperProps={{ sx: dialogeStyle }}>
        <Component>
            <Container>
                <Title> To use whatsapp in your laptop</Title>
                <StyledList>
                    <ListItem>1.Open whatsapp on  your  Device</ListItem>
                    <ListItem>2.Tap menu settings and   click linked devices.</ListItem>
                    <ListItem>3.Point your phone to the screen to this  code</ListItem>


                </StyledList>
            </Container>
            <Box style={{position:'relative'}}>
                <QrCode src={qrCodeImage}></QrCode>
                <Box styled={{position:'absolute',top:'50%',transform:'translateX(25%)'}}>
             <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError}></GoogleLogin></Box>
            </Box>
        </Component>
        <Box></Box>
    </Dialog>
}

export default LoginDialoge;
