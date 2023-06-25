import { styled } from "@mui/system";

export const Theme = styled("div")({
  ".LightMode":{
    backgroundColor:"white",
    p:{
      color:"dark",
    },
    button:{
      backgroundColor:"gray",
    }
  },
  ".LightDivMode":{
    
    div:{
      backgroundColor:"gray",
    },
  }
});