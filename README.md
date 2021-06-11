# What
Get the IPv4 neighbour table (also known as the ARP table) and display as json as shown below.

```json
[
  {
    "ip": "192.168.188.1",
    "interface": "wlp3s0",
    "mac": "74:f8:db:64:ca:a1",
    "state": "REACHABLE"
  }
]
```

## Usage

```javascript
// load module
let neigh = require("neighbour");

//async/await pattern
(async () => {
  let table = await neigh();
  console.log(table);
})();
[
  {
    ip: '192.168.188.1',
    interface: 'wlp3s0',
    mac: '74:f8:db:64:ca:a1',
    state: 'REACHABLE'
  }
]
//Or then/catch pattern
neigh()
  .then((table) => {
    console.log(table);
  })
  .catch(console.error);
```
