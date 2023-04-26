// import React from 'react';
// import { add } from '../../utilities/calculate';
// // import add from '../../utilities/calculate';

import Cosmetic from "../Cosmetic/Cosmetic";

const Cosmetics = () => {
     // const first = 55;
     // const second = 66;
     // const total = add(first, second)

     const cosmetics = [
          {id:1, name:'Alta', price:100},
          {id:2, name:'Malta', price:200},
          {id:3, name:'Palta', price:300},
          {id:4, name:'Galta', price:400},
          {id:5, name:'Falta', price:500},
     ];
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