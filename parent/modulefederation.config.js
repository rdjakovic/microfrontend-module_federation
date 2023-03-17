const deps = require("./package.json").dependencies;

console.log(process.env.ROOT_PATH_MODE);
module.exports = {
  name: "prana-fe-app",
  exposes: {
  },
  remotes: {
    app1: `app1@${process.env.APP1_URL}/remoteEntry.js`,
    app2: `app2@${process.env.APP2_URL}/remoteEntry.js`,
  },
  filename: "remoteEntry.js",
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};
