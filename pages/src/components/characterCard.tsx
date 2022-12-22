
import Link from 'next/link';
import React from 'react';
import { ICharacter } from '../modals/modal';

type TProps = {
  char: ICharacter;
};

const CharacterCard = ({ char }: TProps) => {
  const {
    id,
    name,
    status,
    species,
    type,
    gender,
    image,
    location,
    episode,
    url,
    created
  } = char;

  return (
<div className="card lg:card-side bg-base-100 shadow-xl p-4">
  <figure><img src={image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <div>
    {status == 'Dead' ? ( <span className="inline-block w-2 h-2 mr-2 mb-1 bg-red-600 rounded-full"/>) 
    : status == 'Alive' ? (<span className="inline-block w-2 h-2 mr-2 mb-1 bg-green-600 rounded-full"/>) : 
    ( <span className="inline-block w-2 h-2 mr-2 mb-1 bg-indigo-600 rounded-full"></span>)}
    <span className="drop-shadow-xl">{status}</span>
    </div>
    <div>
    <label className="font-bold">Species:</label>
    <span className="drop-shadow-xl ml-3">{species}</span>
    </div>
    <div>
    <label className="font-bold">type:</label>
    <span className="drop-shadow-xl  ml-3">{type}</span>
    </div>
    <div>
    <label className="font-bold">gender:</label>
    <span className="drop-shadow-xl  ml-3">{gender}</span>
    </div>
    <div>
    <label className="font-bold">location:</label>
    <span className="drop-shadow-xl">{location?.name}</span>
    </div>
  </div>
</div>
  );
};

export default CharacterCard;
