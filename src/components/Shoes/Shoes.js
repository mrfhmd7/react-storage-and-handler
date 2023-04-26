import React from 'react';
import { add, multiply } from '../../utilities/calculate';

const Shoes = () => {
     const first = 15;
     const second = 26;
     const result = multiply(first, second);
     const sum = add(first, second);
     return (
          <div>
               <h2>This is shoes compo</h2>
               <p>Result: {result}</p>
               <p>Total: {sum}</p>
          </div>
     );
};

export default Shoes;