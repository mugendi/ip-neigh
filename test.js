

let neigh = require(".");



neigh()
  .then((resp) => {
    console.log(resp);
  })
  .catch(console.error);
