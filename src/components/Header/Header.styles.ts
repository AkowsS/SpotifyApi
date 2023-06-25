import { styled } from "@mui/system";
import LogOutIcon from "@/public/icons/logout.png"

export const Container = styled("div")(({theme})=>({
  height: "80px",
  width: "100vw",
  backgroundColor: "purple",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  button: {
    height:"35px",
    borderRadius: "10px",
    cursor:"pointer",
  },
  p:{
    margin:0,
  },
  [theme.breakpoints.down(720)]: {
    width: "100%",
    p:{
      display:"none",
    },
  },
}));

export const Logo = styled("img")({
  height: "50px",
  width: "50px",
});
export const LoginButton = styled("button")({
  backgroundColor:"white!important",
})

export const ProfileImg = styled("img")({
  position:"relative",
  height:"60px",
  width:"60px",
  borderRadius:"30px",
});

export const ProfileDiv = styled("button")({
  background:`url(${LogOutIcon}) no-repeat center`,
  backgroundSize:"40px",
  backgroundColor:"purple",
  borderRadius:"30px",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  padding:0,
  width:"60px", 
  height:"60px !important",
  border:"none",

  ":hover":{
    img:{
      display:"none"
    }
  }
});

export const InputDiv = styled("div")(({theme})=>({
  height: "35px",
  width: "250px",
  display: "flex",
  justifyContent: "end",
  img:{
      display:"none",
      width:"15px",
      height:"15px",
    },
  input: {
    padding: "5px",
    borderRadius: "10px 0px 0px 10px",
  },
  button: {
    backgroundColor:"white!important",
    borderRadius: "0px 10px 10px 0px !important",
  },
  [theme.breakpoints.down(720)]: {
    width:"30vw",
    input:{
      width:"20vw",
    },
    img:{
      display:"block",
    },
  },
}));

export const DivLogo = styled("div")({
  display:"flex",
  alignItems:"center",
  p:{
    margin:"0",
    marginLeft:"5px",
    fontSize:"25px",
    color:"white",
    fontWeight:500,
  },
});