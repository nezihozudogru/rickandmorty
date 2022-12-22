import React, { useState, useEffect } from "react";

type TProps = {
setSearch?:any,
setPageNumber?:any,
}
export const Search = ({ setPageNumber,setSearch }:TProps) => {
  return (
    <form className="flex justify-center p-5">
        <input type="text" 
        placeholder="Ara" 
        className="input input-bordered input-primary w-full max-w-xs"
        onChange={(e) => {
        setPageNumber(1) ; 
        setSearch(e.target.value)}} />
        <button onClick={(e)=> {e.preventDefault();}} className="ml-5">Ara</button>
    </form>
  )
}
