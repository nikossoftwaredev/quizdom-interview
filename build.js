const esbuild = require("esbuild");
const plugin = require("node-stdlib-browser/helpers/esbuild/plugin");
const manifestPlugin = require("esbuild-plugin-manifest");
const stdLibBrowser = require("node-stdlib-browser");

(async () => {
  try {
    await esbuild.build({
      logLevel: "error",
      // plugins: [envFilePlugin],
      // entryPoints: ['src/App.jsx', '/rappid', '/public'],
      entryPoints: ["src/index.js"],
      plugins: [plugin(stdLibBrowser), manifestPlugin({ hash: false })],
      bundle: true,
      minify: true,
      sourcemap: true,
      loader: {
        ".html": "text",
        ".js": "jsx",
        ".png": "dataurl",
        ".gif": "dataurl",
        ".woff": "dataurl",
        ".woff2": "dataurl",
        ".eot": "dataurl",
        ".ttf": "dataurl",
        ".svg": "text",
        ".css": "text",
        ".scss": "text",
      },
      inject: [require.resolve("node-stdlib-browser/helpers/esbuild/shim")],
      define: {
        "process.env.NODE_ENV": '"production"',
        global: "window",
        process: "process",
        Buffer: "Buffer",
      },
      outfile: "public/index.js",
    });
  } catch (e) {
    console.log(e);
  }
})();
