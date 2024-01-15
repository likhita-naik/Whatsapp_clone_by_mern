import { Dialog } from "@mui/material";

const chatBoxStyle={
    height:'95%',
    width:'100%',
    maxWidth:'100%',
    maxHeight:'100%',
    margin:'20px',
    borderRadius:0



}
 const ChatWindow=()=>{
    return (<Dialog open={true} PaperProps={{sx:chatBoxStyle}} hideBackdrop={true}>jhgj</Dialog>)
}
export  default ChatWindow;

