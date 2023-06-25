import { Header } from "@/components/Header";
import { Container, DivMain, DivResults, DivPLaylist,DivAddList,DivList,ChangeThemeButton } from "./Homepage.styles";
import { useContext, useState } from "react";
import { Results } from "@/components/Results";
import { FindContext } from "@/context/Context";
import RemoveItemImg from "@/public/icons/icons8-excluir-bate-papo-80-removebg-preview.png";
import { Theme } from "@/theme/ThemeMode.styles";
import SunIcon from "@/public/icons/sun.png"
import MoonIcon from "@/public/icons/moon.png"

export const HomePage: React.FC = () => {
  const [playListName, setPlayListName] = useState("newplaylist");
  const [themeMode,setThemeMode] = useState("dark")

  const { list, removeList, createNewPlaylist } = useContext(FindContext);

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPlayListName(evt.target.value);
  };
  const buttonThemeMode = () =>{
    setThemeMode(themeMode=="dark"?"light":"dark")
  };  
  return (
    <Theme>
    <Container className={themeMode=="light"?"LightMode":""}>
      <div className={themeMode=="light"?"LightDivMode":""}>
        <Header/>
      </div>
      <ChangeThemeButton>
        <button onClick={buttonThemeMode}>
          <img src={themeMode=="dark"?SunIcon:MoonIcon} alt="" />
        </button>
      </ChangeThemeButton>
      <DivMain className={themeMode=="light"?"LightDivMode":""}>
        <DivResults>
          <h1 style={{ marginBottom: "10px" }}>Results</h1>
          <ul>
            <Results />
          </ul>
        </DivResults>
        <DivPLaylist>
          <DivAddList>
            <input type="text" value={playListName} onChange={onInputChange} />
            <button onClick={() => createNewPlaylist(playListName)}>
              Save Playlist
            </button>
          </DivAddList>
            {list.map((item: any) => (
              <DivList>
                <div style={{flexDirection:"row"}}>
                  <div>
                  <p>{item.name}</p>
                  <p>{item?.artists[0]?.name}</p>
                </div>
                <button onClick={() => removeList(item)}>
                  <img src={RemoveItemImg} alt="remove Item" />
                </button>
                </div>
              </DivList>
            ))}
        </DivPLaylist>
      </DivMain>
    </Container>
    </Theme>
  );
};
