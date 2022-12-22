import React, { useEffect, useState } from "react";
import CharacterCard from "../../components/characterCard";
import { ICharacter } from "../../modals/modal";
import InputGroup from "../../components/filter/Inputgroup";

export default function Location() {
  const [location, setLocation] = useState<ILocation>();
  const [characters, setCharacters] = useState<ICharacter[]>();
  let [id, setID] = useState(1);

  interface ILocation {
    results?: object;
    name?: string;
    type?: string;
    dimension?: string;
    residents?: string[];
    created?: string;
  }

  let api = `https://rickandmortyapi.com/api/location/${id}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setLocation(data);

      let a = await Promise.all(
        data.residents.map((x: any) => {
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
            <span className="text-primary">
              {" "}
              {location?.name === "" ? "Unknown" : location?.name}
            </span>
          </h1>
          <h5 className="text-center">
            Dimension:{" "}
            {location?.dimension === "" ? "Unknown" : location?.dimension}
          </h5>
          <h6 className="text-center">
            Type: {location?.type === "" ? "Unknown" : location?.type}
          </h6>
        </div>
        <div className="row">
          <div className="col-lg-3 col-12 mb-4">
            <h4 className="text mb-4">Pick Location</h4>
            <InputGroup key={id} name="location" changeID={setID} total={51} />
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
