import { Header } from "@/components/Header";
import { Container, DivMain, DivResults, DivPLaylist,DivAddList,DivList } from "./Homepage.styles";
import { useContext, useState } from "react";
import { Results } from "@/components/Results";
import { FindContext } from "@/context/Context";
import RemoveItemImg from "@/public/icons/icons8-excluir-bate-papo-80-removebg-preview.png";

export const HomePage: React.FC = () => {
  const [playListName, setPlayListName] = useState("newplaylist");

  const { list, removeList, createNewPlaylist } = useContext(FindContext);

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPlayListName(evt.target.value);
  };

  return (
    <Container>
      <Header />
      <DivMain>
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
              Add Play List
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
  );
};
