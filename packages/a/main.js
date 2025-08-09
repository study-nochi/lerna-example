const b = require("b")

async function main() {
  const result = await b();
  console.log(result.map(user => user.login).join(", "));
}

main();
