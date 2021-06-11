# Usage

```javascript
// load module
let neigh = require("neighbour");

//async/await pattern
(async () => {
  let table = await neigh();
  console.log(table);
})();

//Or then/catch pattern
neigh()
  .then((table) => {
    console.log(table);
  })
  .catch(console.error);
```
