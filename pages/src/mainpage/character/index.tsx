import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ReactEventHandler, useEffect, useState } from "react";
import Layout from "../../components/layout";
import  CharacterCard  from "../../components/characterCard"
import Pagination from "../../components/pagination";
import {Search } from "../../components/search";
import { ICharacter, Iinfo } from "../../modals/modal"

export default function Character() {
  const [characters, setCharacters] = useState<ICharacter[]>();
  const [information, setInformation] = useState<Iinfo>(); 
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState<any>([]);
  let [search, setSearch] = useState("");

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
      setCharacters(data.results);
      setInformation(data.info);
    })();
  }, [pageNumber,search]);  

  return (
    <>
    <div className="container mx-auto">
      <div className="row mb-3">
      <Search setPageNumber = {setPageNumber} setSearch = {setSearch}/>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
        <div className="grid grid-cols-2 gap-5 p-4">
      {characters?.map((character: ICharacter) => (
        <CharacterCard key={character.id} char={character} />
      ))}
      </div>
        </div>
    </div> 
  </div>
      <Pagination
        info={information}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        //updatePageNumber={updatePageNumber}
      />
    </>
  );
}