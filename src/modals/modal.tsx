export interface ICharacter {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  location?:{name?:string,url?:string};
  image?: string;
  episode?: string[];
  url?: string;
  created?:string;
  }
  export interface Iinfo {
    count?:number,
    next?:string,
    pages?:number,
    prev?:string,
  }
