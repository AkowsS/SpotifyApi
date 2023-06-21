import { styled } from "@mui/system";

export const Container = styled("div")({
  marginBottom:"5px",
  div:{
    minHeight:"80px",
    maxHeight:"120px",
    margin:0,
    padding:0,
  },
  p:{
    margin:0,
  },
  h1:{
    margin:0,
    fontSize:"20px",
  },
  li:{
    borderRadius:"10px",
    ":hover":{
      backgroundColor: "#63A355",
    },
  }
});

export const DivCard = styled("div")({
  paddingLeft:"10px!important",
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center",
  img:{
    width:"40px",
    height:"40px",
  },
  button:{
    borderRadius:"10px",
    background:"none",
    border:"none",
    marginRight:"5px",
    ":hover":{
      cursor:"pointer",
      backgroundColor:"#00453D"
    },
  },
});
