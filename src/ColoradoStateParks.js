import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import { trees, Wildlife } from "./parks/RockyMountain";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  return (
    <div>
      <h1>Colorado State Parks!</h1>
      <MesaVerde />
      <Wildlife />
      {trees}
    </div>
  );
}

export default ColoradoStateParks;
