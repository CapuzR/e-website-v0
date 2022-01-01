const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

let localCanisters, prodCanisters, canisters;

function initCanisterIds() {
  try {
    localCanisters = require(path.resolve(".dfx", "local", "canister_ids.json"));
  } catch (error) {
    console.log("No local canister_ids.json found. Continuing production");
  }
  try {
    prodCanisters = require(path.resolve("canister_ids.json"));
  } catch (error) {
    console.log("No production canister_ids.json found. Continuing with local");
  }

  const network =
    process.env.DFX_NETWORK ||
    (process.env.NODE_ENV === "production" ? "ic" : "local");

  canisters = network === "local" ? localCanisters : prodCanisters;

  for (const canister in canisters) {
    process.env[canister.toUpperCase() + "_CANISTER_ID"] =
      canisters[canister][network];
  }
}
initCanisterIds();

const isDevelopment = process.env.NODE_ENV !== "production";
const asset_entry = path.join(
  "src",
  "a3capasUniverso_assets",
  "src",
  "index.html"
);

module.exports = {
  target: "web",
  mode: isDevelopment ? "development" : "production",
  entry: {
    // The frontend.entrypoint points to the HTML file for this build, so we need
    // to replace the extension to `.js`.
    index: path.join(__dirname, asset_entry).replace(/\.html$/, ".jsx"),
  },
  devtool: isDevelopment ? "source-map" : false,
  optimization: {
    minimize: !isDevelopment,
    minimizer: [new TerserPlugin()],
  },
  resolve: {
    modules: [
        path.join(__dirname, 'node_modules')
    ],
    extensions: [".js", ".ts", ".jsx", ".tsx"],
    fallback: {
      assert: require.resolve("assert/"),
      buffer: require.resolve("buffer/"),
      events: require.resolve("events/"),
      stream: require.resolve("stream-browserify/"),
      util: require.resolve("util/"),
    },
  },
  output: {
    filename: "index.js",
    path: path.join(__dirname, "dist", "a3capasUniverso_assets"),
  },

  // Depending in the language or framework you are using for
  // front-end development, add module loaders to the default
  // webpack configuration. For example, if you are using React
  // modules and CSS as described in the "Adding a stylesheet"
  // tutorial, uncomment the following lines:
  module: {
   rules: [
     { test: /\.ts|.js$|tsx|jsx/, loader: "ts-loader" },
     { test: /\.css$/, use: ['style-loader','css-loader'] },
     {
      test: /\.(png|jp(e*)g|svg|mp4|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'assets/[hash]-[name].[ext]',
          },
        },
      ],
    },
    {
      test: /\.(glb|gltf)$/,
      use:
      [
          {
              loader: 'file-loader',
              options:
              {
                  outputPath: 'assets/models/'
              }
          }
      ]
  },
   ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, asset_entry),
      cache: false
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, "src", "a3capasUniverso_assets", "assets"),
          to: path.join(__dirname, "dist", "a3capasUniverso_assets"),
        },
      ],
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      FM_CANISTER_ID: "k4qsa-4aaaa-aaaah-qbvnq-cai" // production FM canister
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      WP_CANISTER_ID: "wrcb3-5qaaa-aaaal-qaahq-cai" // production WP canister
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      A3CAPASUNIVERSO_ASSETS_CANISTER_ID: canisters["a3capasUniverso_assets"]
    }),
    new webpack.ProvidePlugin({
      Buffer: [require.resolve("buffer/"), "Buffer"],
      process: require.resolve("process/browser"),
    }),
  ],
  // proxy /api to port 8000 during development
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/api",
        },
      },
    },
    hot: true,
    static: {
      directory: path.join(__dirname, './dist')
    },
  },
};
