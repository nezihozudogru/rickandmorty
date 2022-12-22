import Head from "next/head";
import Image from "next/image";
import { useRouter } from 'next/router';
import styles from "../styles/Home.module.css";
import  React, { useEffect, useState } from "react";
import CharacterCard from "../../components/characterCard";
import { ICharacter, Iinfo } from "../../modals/modal"
import InputGroup from "../../components/filter/Inputgroup";

export default function Episode() {

  const [episodes, setEpisodes] = useState<IEpisode[]>();
  const [characters, setCharacters] = useState<ICharacter[]>();
  let [id, setID] = useState(1);

  interface IEpisode {
    results?: object;
    name?: string;
    air_date?: string;
    episode: string;
    characters: string[];
  }

  let api = `https://rickandmortyapi.com/api/episode/${id}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setEpisodes(data);

      let a = await Promise.all(
         data.characters.map((x : any) => {
           return fetch(x).then((res) => res.json());
         })
       );
       setCharacters(a);
    })();
  }, [id]);

  return (
    <>
     <div className="container mx-auto">
      <div className="row  mt-5">
        <h1 className="text-center mb-3">
          Episode name :{" "}
          <span className="text-primary">{episodes?.name}</span>
        </h1>
        <h5 className="text-center">
          Air Date: {episodes?.air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text mb-4">Pick Episode</h4>
          <InputGroup key={id} name="Episode" changeID={setID} total={51} />
        </div>
      <div className="row">
        <div className="grid grid-cols-2 gap-5 p-4">
        {characters?.map((character: ICharacter) => (
        <CharacterCard key={character.id} char={character} />
      ))}
        </div>
      </div> 
    </div> 
  </div>
    
    </>

  );
}