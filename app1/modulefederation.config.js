const deps = require("./package.json").dependencies;

module.exports = {
  name: "app1",
  exposes: {
    "./App1": "./src/App",
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
