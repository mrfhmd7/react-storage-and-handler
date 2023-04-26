// import React from 'react';
// import { add } from '../../utilities/calculate';
// // import add from '../../utilities/calculate';

import { useEffect, useState } from "react";
import Cosmetic from "../Cosmetic/Cosmetic";

const Cosmetics = () => {
     // const first = 55;
     // const second = 66;
     // const total = add(first, second)

     const [cosmetics, setCosmetic] = useState([]);
     useEffect(() => {
          fetch('data.json')
               .then(res => res.json())
               .then(data => setCosmetic(data));
     }, []);
     return (
          <div>
               <h1>Welcome to my Cosmetics Shop</h1>
               {/* <p>Total= {total}</p> */}
               {
                    cosmetics.map(cosmetic => <Cosmetic
                         key={cosmetic.id}
                         cosmetic={cosmetic}
                    ></Cosmetic>)
               }
          </div>
     );
};

export default Cosmetics;