const {
  promiseTheaterIXX,
  promiseTheaterVGC
} = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  const ixx = await promiseTheaterIXX(emosi);
  const vgc = await promiseTheaterVGC(emosi);
  const DataneDigabung= ixx.concat(vgc);
  const hasile = DataneDigabung.filter(data => data.hasil === emosi);
  return hasile.length;
};

module.exports = {
  promiseOutput,
};