export interface PetEntity{
  name:string;
  age:number;
  specie:Specie;
}

export enum Specie{
  DOG="DOG",
  CAT="CAT",
  DUCK="DUCK",
  SNAKE="SNAKE",
  OTHER="OTHER"
}
