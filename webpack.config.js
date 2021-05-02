const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Entries
const commonEntry = "common";
const globalEntry = "global";
const entryNames = [globalEntry, "a", "b", "c"];

// Replace L7 with the following for desired output:
// const entryNames = ["a", "b", "c", globalEntry];

const entries = {
  [commonEntry]: ["react", "react-dom"],
};

entryNames.forEach((entry) => {
  entries[entry] = {
    import: path.join(__dirname, "src/entries", entry, "entry.js"),
    dependOn: entry === globalEntry ? commonEntry : [commonEntry, globalEntry],
  };
});

// Markup Generation
const htmlPlugins = Object.keys(entries).map(
  (entry) =>
    new HtmlWebpackPlugin({
      chunks: [entry],
      inject: false, // important for custom template below
      minify: {
        preserveLineBreaks: true,
        collapseWhitespace: false,
      },
      template: path.join(__dirname, "webpack/templates/js.html"),
      filename: `${entry}/js.html`,
    })
);

module.exports = {
  mode: "production",
  entry: entries,
  output: {
    filename: "[name]/[name]-[contenthash]-bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    runtimeChunk: "single",
  },
  plugins: [...htmlPlugins],
};
