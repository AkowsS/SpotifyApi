import { styled } from "@mui/system";

export const Container = styled("div")(({theme})=>({
  height: "100vh",
  width: "100%",
  backgroundColor: "black",
  [theme.breakpoints.down(720)]: {
    height: "100%",
  },
}));

export const DivMain = styled("div")(({theme})=>({
  display: "flex",
  marginTop: "5px",
  justifyContent: "space-around",
  
  [theme.breakpoints.down(720)]: {
    alignItems: "center",
    flexDirection:"column",
  },
}));

export const DivResults = styled("div")(({theme})=>({
  borderRadius: "10px",
  padding: "10px",
  backgroundColor: "green",
  height: "70vh",
  width: "40vw",
  display: "flex",
  flexDirection: "column",
  h1: {
    color: "white",
    margin: 0,
  },
  ul: {
    paddingLeft:"5px",
    overflowY: "auto",
    margin: 0,
    listStyle: "none",
    "::-webkit-scrollbar": {
      width: 0,
    },
  },
  [theme.breakpoints.down(720)]: {
    width: "80vw",
  },
}));

export const DivPLaylist = styled("div")(({theme})=>({
  height:"70vh",
  overflowY: "auto",
  margin: 0,
  listStyle: "none",
  "::-webkit-scrollbar": {
    width: 0,
  },
  borderRadius: "10px",
  padding: "10px",
  backgroundColor: "blue",
  width: "30vw",
  display: "flex",
  flexDirection: "column",
  div:{
    display:"flex",
    justifyContent:"space-between",
    img:{
      width:"40px",
      height:"40px",
    },
    button:{
      background:"none",
      border:"none",
      ":hover":{
        cursor:"pointer",
      },
    },
    Div:{
      flexDirection:"column"
    },
    p:{
      margin:0,
    }
  },
  [theme.breakpoints.down(720)]: {
    width: "80vw",
    marginTop:"15px",
  },
}));

export const DivAddList = styled("div")(({theme})=>({
  marginBottom:"20px",
  input: {
    fontSize: "20px",
    outline: 0,
    border: 0,
    background: "none",
    width: "50%",
    color: "white",
    ":hover":{
      color: "gray",
    },
  },
  button:{
    width: "100px",
    height:"30px",
    cursor:"pointer",
    borderRadius:"10px",
    color: "purple",
    backgroundColor:"yellow!important",
    ":hover":{
      color:"white"
    },
    fontWeight:700,
    fontSize:"13px",
  },
  [theme.breakpoints.down(700)]: {
    flexDirection:"column",
    alignItems:"center",
    input: {
      textAlign:"center",
    },
  },
}));

export const DivList = styled("div")({
  flexDirection:"column",
  marginBottom:"25px",
  ":after": {
    display:"block",
    position:"relative",
    top:"13px",
    margin:0,
    content: '""',
    width: "100%",
    height:"2px",
    backgroundColor: "#5F30E6",
  },
  div:{
    display:"flex",
    justifyContent:"space-between",
  }
});

export const ChangeThemeButton = styled("div")({
  display:"flex",
  justifyContent:"end",
  alignItems:"center",
  button:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",

    borderRadius:"20px",
    border:"none",

    marginRight:"20px",
    marginTop:"10px",
    padding:0,

    cursor: "pointer",
    

    width:"35px",
    height:"35px"
  },
  img:{
    width:"25px",
    height:"25px"
  }
});