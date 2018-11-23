const withTS = require('@zeit/next-typescript');
// module.exports = withTS({
//   webpack(config) {
//     console.log(config.module.rules);

//     const entry = config.entry;
//     config.entry = async () => {
//       const entries = await entry();
//       const names = Object.keys(entries);
//       console.log('entries', entries);
//       console.log('names', names);
//     };

//     return config;
//   }
// });
module.exports = withTS({
  webpack(config) {
    console.log(config);

    return config;
  }
});