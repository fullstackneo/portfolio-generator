const profileDataArr = process.argv.slice(2, process.argv.length);

profileDataArr.forEach((el, index, arr) => {
  console.log(el);
});
