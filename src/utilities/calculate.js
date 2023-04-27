const add = (first, second) => {
  return first + second;
};

// export default add;

const multiply = (first, second) => {
  return first * second;
};

// const numbers = [12, 43, 54, 75, 64, 61, 44];
// const sumReducer = (previous, current) => previous + current;
// const sum = numbers.reduce(sumReducer, 0);

// const items = [
//   {id: 1, name: 'a', price: 100},
//   {id: 2, name: 'b', price: 200},
//   {id: 3, name: 'c', price: 300},
//   {id: 4, name: 'd', price: 400},
//   {id: 5, name: 'e', price: 500}
// ];

// const itemReducer = (previous, current) => previous + current.price;
// const itemTotal = items.reduce(itemReducer, 0);

const getTotalPrice = products => {
  const reducer = (previous, current) => previous + current.price;
  const total = products.reduce(reducer, 0);
  return total;
}

export {
  add,
  multiply,
  getTotalPrice as getTotal
};