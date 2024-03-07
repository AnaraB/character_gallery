import React from "react";
import characterData from "../data/characterData.json";
import Character from "./Character";

function CharacterGallery() {
  return characterData.map((data) => (
    <Character
      key={data._id}
      name={data.name}
      imgUrl={data.imgUrl}
      birth={data.birth}
      death={data.death}
      race={data.race}
      realm={data.realm}
      spouse={data.spouse}
    />
  ));
}

export default CharacterGallery;
