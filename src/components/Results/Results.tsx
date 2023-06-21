import { FindContext } from "@/context/Context";
import { Container, DivCard } from "./Results.styles";
import AddList from "@/public/icons/adicionar-a-playlist.png";
import { useContext } from "react";

export const Results: React.FC = ({}) => {
  const { addList, tracks } = useContext(FindContext);

  return (
    <Container>
      {tracks.map((items: any) => (
        <li>
          <DivCard>
            <div>
              <h1>{items?.name}</h1>
              <div>
                <span>{items?.artists[0]?.name}</span>
                <p>{items?.album?.name}</p>
              </div>
            </div>
            <button onClick={() => addList(items)}>
              <img src={AddList} alt="addList" />
            </button>
          </DivCard>
        </li>
      ))}
    </Container>
  );
};
