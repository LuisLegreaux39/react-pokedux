import React from 'react';
import { useEffectOnce } from "react-use";

import { dispatcher } from "@/state/store";
import { getAbilities } from "@/state/Pokemons/thunks/getAllAbilities";


const index = () => {

    useEffectOnce(() => {
        dispatcher(getAbilities())
    })
    return (
        <div>abilites</div>
    )
}

export default index