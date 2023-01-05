module.exports = function generator() {
  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  console.log(makeid(10));

  let obj = {};
  obj.table = [];
  obj.table.push({ id: makeid(10), name: makeid(5) });
  console.log(JSON.stringify(obj, null, "  "));

  let fs = require("fs");
  fs.writeFileSync("./hash.json", JSON.stringify(obj, null, 4), (err) => {
    if (err) console.error(err);
  });
}

// setInterval(function(){
//   generator()
// }, 1000)

