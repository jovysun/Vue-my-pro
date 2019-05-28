function chart(method) {
  let res = null;
  switch (method) {
    case "GET":
      res = [120, 30, 40, 60, 20, 45];
      break;

    default:
      res = null;
      break;
  }
  return res;
}
// 因为node端使用，因此用CMD规范，而不是ES6
module.exports = chart;
