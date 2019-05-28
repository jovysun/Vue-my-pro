function form(method) {
  let res = null;
  switch (method) {
    case "POST":
      res = { message: "OK" };
      break;

    default:
      res = null;
      break;
  }
  return res;
}
// 因为node端使用，因此用CMD规范，而不是ES6
module.exports = form;
