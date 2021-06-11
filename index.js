const { exec } = require("child_process"),
  ipRegex = require("ip-regex");

module.exports = () => {
  return new Promise((resolve, reject) => {
    exec("ip neigh show", (error, stdout, stderr) => {
      if (error) {
        return reject(error.message);
      }
      if (stderr) {
        return reject(stderr);
      }

      const table = stdout
        .split(/\n/)
        .filter((s) => s.trim().length > 0)
        .map(to_obj);

      resolve(table);

    });
  });

};

function to_obj(stdout) {
  let m,
    a,
    ip = (interface = mac = state = null);

  if (
    ipRegex().test(stdout) &&
    (a = stdout.split(" ")) &&
    ipRegex({ exact: true }).test(a[0])
  ) {
    ip = a[0];
  }

  if ((m = stdout.match(/dev\s+([^\s]+)/))) {
    interface = m[1];
  }

  if ((m = stdout.match(/lladdr\s+([^\s]+)/))) {
    mac = m[1];
  }

  if (
    (m = stdout.match(
      /(permanent|stale|noarp|none|reachable|delay|probe|failed|incomplete)$/i
    ))
  ) {
    state = m[0].toUpperCase();
  }

  let data = {
    ip,
    interface,
    mac,
    state,
  };

  return data;
}
