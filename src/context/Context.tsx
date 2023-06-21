import { API_KEY } from "@/config/apiKey";
import { generateCodeChallenge, generateRandomString } from "@/utils/functions";
import React, { useEffect, useState } from "react";

interface Track {
  id: string;
  name: string;
  uri: string;
  album: {
    name: string;
  };
  artists: {
    name: string;
  }[];
}

interface User {
  id: string;
  display_name: string;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
}

interface FindApiProps {
  createNewPlaylist: (PlayListName: string) => void;
  addList: (track: Track) => void;
  removeList: (track: Track) => void;
  list: Track[];
  setTerm: (term: string) => void;
  onLogButtonClick: () => void;
  onSearch: () => void;
  getProfile: (accessToken: string) => void;
  tracks: Track[];
  user: User | null;
  setUser: (user: User | null) => void;
}

interface ValueChildrenProps {
  children: React.ReactNode;
}

export const FindContext = React.createContext({} as FindApiProps);

export const FindProvider: React.FC<ValueChildrenProps> = ({ children }) => {
  const [accessToken, setAccessToken] = useState();
  const [user, setUser] = useState<User | null>(null);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [term, setTerm] = useState("");
  const [list, setList] = useState<Track[]>([]);

  const addList = (value: Track) => {
    const alreadyExistVerify = list.some((track) => track.id === value.id);
    if (!alreadyExistVerify) setList([...list, value]);
    console.log(list);
  };

  const removeList = (value: Track) => {
    setList([...list, value]);
    const newList = list.filter((item) => item.id !== value.id);
    setList(newList);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get("code");
    let codeVerifier = localStorage.getItem("code_verifier");
    if (!code || !codeVerifier) return;
    const redirectUri = "http://localhost:5173/";
    let body = new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: redirectUri,
      client_id: API_KEY.CLIENT_ID,
      code_verifier: codeVerifier,
    });
    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP status " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("access_token", data.access_token);
        setAccessToken(data.access_token);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    const getUserData = async () => {
      if (!accessToken) return;
      const result = await getProfile(accessToken);
      console.log(result);
    };
    getUserData();
  }, [accessToken]);

  const onLogButtonClick = () => {
    const clientId = API_KEY.CLIENT_ID;
    const redirectUri = "http://localhost:5173/";
    let codeVerifier = generateRandomString(128);
    generateCodeChallenge(codeVerifier).then((codeChallenge) => {
      let state = generateRandomString(16);
      let scope = "user-read-private playlist-modify-public";
      localStorage.setItem("code_verifier", codeVerifier);
      let args = new URLSearchParams({
        response_type: "code",
        client_id: clientId,
        scope: scope,
        redirect_uri: redirectUri,
        state: state,
        code_challenge_method: "S256",
        code_challenge: codeChallenge,
      });
      window.location.href =
        "https://accounts.spotify.com/authorize?" + args.toString();
    });
  };

  const onSearch = async () => {
    if (term === "" || !accessToken) return;
    const requestParams = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const result = await fetch(
      `https://api.spotify.com/v1/search?type=track&q=${term}`,
      requestParams
    ).then((response) => response.json());
    setTracks(result.tracks.items);
  };

  async function getProfile(accessToken: string) {
    const response = await fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });
    return setUser(await response.json());
  }

  async function createNewPlaylist(PlayListName: string) {
    let accessToken = localStorage.getItem("access_token");
    const uriTracks = list.map((track) => track.uri);
    const response = await fetch(
      `https://api.spotify.com/v1/users/${user?.id}/playlists`,
      {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
        method: "POST",
        body: JSON.stringify({
          name: PlayListName,
          public: true,
        }),
      }
    ).then((response) => {
      console.log("response ", response);
      if (!response.ok) {
        throw new Error("HTTP status " + response.status);
      }
      return response.json();
    });
    setList([]);
    await fetch(`https://api.spotify.com/v1/playlists/${response.id}/tracks`, {
      headers: { Authorization: "Bearer " + accessToken },
      method: "POST",
      body: JSON.stringify({
        uris: uriTracks,
        position: 0,
      }),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("HTTP status " + response.status);
      }
      return response.json();
    });
  }

  return (
    <FindContext.Provider
      value={{
        createNewPlaylist,
        removeList,
        list,
        addList,
        setTerm,
        onLogButtonClick,
        onSearch,
        getProfile,
        tracks,
        user,
        setUser,
      }}
    >
      {children}
    </FindContext.Provider>
  );
};
