"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src-ssr/middlewares/render.ts
var render_exports = {};
__export(render_exports, {
  default: () => render_default
});
var import_wrappers2, render_default;
var init_render = __esm({
  "src-ssr/middlewares/render.ts"() {
    "use strict";
    import_wrappers2 = require("quasar/wrappers");
    render_default = (0, import_wrappers2.ssrMiddleware)(({ app, resolve, render, serve }) => {
      app.get(resolve.urlPath("*"), (req, res) => {
        res.setHeader("Content-Type", "text/html");
        render({ req, res }).then((html) => {
          res.send(html);
        }).catch((err) => {
          if (err.url) {
            if (err.code) {
              res.redirect(err.code, err.url);
            } else {
              res.redirect(err.url);
            }
          } else if (err.code === 404) {
            res.status(404).send("404 | Page Not Found");
          } else if (true) {
            serve.error({ err, req, res });
          } else {
            res.status(500).send("500 | Internal Server Error");
            if (true) {
              console.error(err.stack);
            }
          }
        });
      });
    });
  }
});

// .quasar/ssr-dev-webserver.js
var ssr_dev_webserver_exports = {};
__export(ssr_dev_webserver_exports, {
  close: () => close,
  create: () => create,
  injectMiddlewares: () => injectMiddlewares,
  listen: () => listen,
  serveStaticContent: () => serveStaticContent
});
module.exports = __toCommonJS(ssr_dev_webserver_exports);

// src-ssr/server.ts
var import_express = __toESM(require("express"));
var import_compression = require("compression");
var import_wrappers = require("quasar/wrappers");
var create = (0, import_wrappers.ssrCreate)(() => {
  const app = (0, import_express.default)();
  app.disable("x-powered-by");
  if (false) {
    app.use(compression());
  }
  return app;
});
var listen = (0, import_wrappers.ssrListen)(async ({ app, port, isReady }) => {
  await isReady();
  return app.listen(port, () => {
    if (false) {
      console.log("Server listening at port " + port);
    }
  });
});
var close = (0, import_wrappers.ssrClose)(({ listenResult }) => {
  return listenResult.close();
});
var maxAge = true ? 0 : 1e3 * 60 * 60 * 24 * 30;
var serveStaticContent = (0, import_wrappers.ssrServeStaticContent)((path, opts) => {
  return import_express.default.static(path, {
    maxAge,
    ...opts
  });
});
var jsRE = /\.js$/;
var cssRE = /\.css$/;
var woffRE = /\.woff$/;
var woff2RE = /\.woff2$/;
var gifRE = /\.gif$/;
var jpgRE = /\.jpe?g$/;
var pngRE = /\.png$/;
var renderPreloadTag = (0, import_wrappers.ssrRenderPreloadTag)((file) => {
  if (jsRE.test(file) === true) {
    return `<link rel="modulepreload" href="${file}" crossorigin>`;
  }
  if (cssRE.test(file) === true) {
    return `<link rel="stylesheet" href="${file}">`;
  }
  if (woffRE.test(file) === true) {
    return `<link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`;
  }
  if (woff2RE.test(file) === true) {
    return `<link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`;
  }
  if (gifRE.test(file) === true) {
    return `<link rel="preload" href="${file}" as="image" type="image/gif">`;
  }
  if (jpgRE.test(file) === true) {
    return `<link rel="preload" href="${file}" as="image" type="image/jpeg">`;
  }
  if (pngRE.test(file) === true) {
    return `<link rel="preload" href="${file}" as="image" type="image/png">`;
  }
  return "";
});

// .quasar/ssr-middlewares.js
function injectMiddlewares(opts) {
  return Promise.all([
    Promise.resolve().then(() => (init_render(), render_exports))
  ]).then(async (rawMiddlewares) => {
    const middlewares = rawMiddlewares.map((entry) => entry.default);
    for (let i = 0; i < middlewares.length; i++) {
      try {
        await middlewares[i](opts);
      } catch (err) {
        console.error("[Quasar SSR] middleware error:", err);
        return;
      }
    }
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  close,
  create,
  injectMiddlewares,
  listen,
  serveStaticContent
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjLXNzci9taWRkbGV3YXJlcy9yZW5kZXIudHMiLCAiLi4vc3NyLWRldi13ZWJzZXJ2ZXIuanMiLCAiLi4vLi4vc3JjLXNzci9zZXJ2ZXIudHMiLCAiLi4vc3NyLW1pZGRsZXdhcmVzLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBSZW5kZXJFcnJvciB9IGZyb20gJ0BxdWFzYXIvYXBwLXZpdGUnO1xuaW1wb3J0IHsgc3NyTWlkZGxld2FyZSB9IGZyb20gJ3F1YXNhci93cmFwcGVycyc7XG5cbi8vIFRoaXMgbWlkZGxld2FyZSBzaG91bGQgZXhlY3V0ZSBhcyBsYXN0IG9uZVxuLy8gc2luY2UgaXQgY2FwdHVyZXMgZXZlcnl0aGluZyBhbmQgdHJpZXMgdG9cbi8vIHJlbmRlciB0aGUgcGFnZSB3aXRoIFZ1ZVxuXG5leHBvcnQgZGVmYXVsdCBzc3JNaWRkbGV3YXJlKCh7IGFwcCwgcmVzb2x2ZSwgcmVuZGVyLCBzZXJ2ZSB9KSA9PiB7XG4gIC8vIHdlIGNhcHR1cmUgYW55IG90aGVyIEV4cHJlc3Mgcm91dGUgYW5kIGhhbmQgaXRcbiAgLy8gb3ZlciB0byBWdWUgYW5kIFZ1ZSBSb3V0ZXIgdG8gcmVuZGVyIG91ciBwYWdlXG4gIGFwcC5nZXQocmVzb2x2ZS51cmxQYXRoKCcqJyksIChyZXEsIHJlcykgPT4ge1xuICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcblxuICAgIHJlbmRlcigvKiB0aGUgc3NyQ29udGV4dDogKi8geyByZXEsIHJlcyB9KVxuICAgICAgLnRoZW4oKGh0bWwpID0+IHtcbiAgICAgICAgLy8gbm93IGxldCdzIHNlbmQgdGhlIHJlbmRlcmVkIGh0bWwgdG8gdGhlIGNsaWVudFxuICAgICAgICByZXMuc2VuZChodG1sKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycjogUmVuZGVyRXJyb3IpID0+IHtcbiAgICAgICAgLy8gb29wcywgd2UgaGFkIGFuIGVycm9yIHdoaWxlIHJlbmRlcmluZyB0aGUgcGFnZVxuXG4gICAgICAgIC8vIHdlIHdlcmUgdG9sZCB0byByZWRpcmVjdCB0byBhbm90aGVyIFVSTFxuICAgICAgICBpZiAoZXJyLnVybCkge1xuICAgICAgICAgIGlmIChlcnIuY29kZSkge1xuICAgICAgICAgICAgcmVzLnJlZGlyZWN0KGVyci5jb2RlLCBlcnIudXJsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzLnJlZGlyZWN0KGVyci51cmwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChlcnIuY29kZSA9PT0gNDA0KSB7XG4gICAgICAgICAgLy8gaG1tLCBWdWUgUm91dGVyIGNvdWxkIG5vdCBmaW5kIHRoZSByZXF1ZXN0ZWQgcm91dGVcblxuICAgICAgICAgIC8vIFNob3VsZCByZWFjaCBoZXJlIG9ubHkgaWYgbm8gXCJjYXRjaC1hbGxcIiByb3V0ZVxuICAgICAgICAgIC8vIGlzIGRlZmluZWQgaW4gL3NyYy9yb3V0ZXNcbiAgICAgICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCgnNDA0IHwgUGFnZSBOb3QgRm91bmQnKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5ERVYpIHtcbiAgICAgICAgICAvLyB3ZWxsLCB3ZSB0cmVhdCBhbnkgb3RoZXIgY29kZSBhcyBlcnJvcjtcbiAgICAgICAgICAvLyBpZiB3ZSdyZSBpbiBkZXYgbW9kZSwgdGhlbiB3ZSBjYW4gdXNlIFF1YXNhciBDTElcbiAgICAgICAgICAvLyB0byBkaXNwbGF5IGEgbmljZSBlcnJvciBwYWdlIHRoYXQgY29udGFpbnMgdGhlIHN0YWNrXG4gICAgICAgICAgLy8gYW5kIG90aGVyIHVzZWZ1bCBpbmZvcm1hdGlvblxuXG4gICAgICAgICAgLy8gc2VydmUuZXJyb3IgaXMgYXZhaWxhYmxlIG9uIGRldiBvbmx5XG4gICAgICAgICAgc2VydmUuZXJyb3IoeyBlcnIsIHJlcSwgcmVzIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHdlJ3JlIGluIHByb2R1Y3Rpb24sIHNvIHdlIHNob3VsZCBoYXZlIGFub3RoZXIgbWV0aG9kXG4gICAgICAgICAgLy8gdG8gZGlzcGxheSBzb21ldGhpbmcgdG8gdGhlIGNsaWVudCB3aGVuIHdlIGVuY291bnRlciBhbiBlcnJvclxuICAgICAgICAgIC8vIChmb3Igc2VjdXJpdHkgcmVhc29ucywgaXQncyBub3Qgb2sgdG8gZGlzcGxheSB0aGUgc2FtZSB3ZWFsdGhcbiAgICAgICAgICAvLyBvZiBpbmZvcm1hdGlvbiBhcyB3ZSBkbyBpbiBkZXZlbG9wbWVudClcblxuICAgICAgICAgIC8vIFJlbmRlciBFcnJvciBQYWdlIG9uIHByb2R1Y3Rpb24gb3JcbiAgICAgICAgICAvLyBjcmVhdGUgYSByb3V0ZSAoL3NyYy9yb3V0ZXMpIGZvciBhbiBlcnJvciBwYWdlIGFuZCByZWRpcmVjdCB0byBpdFxuICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCc1MDAgfCBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InKTtcblxuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5ERUJVR0dJTkcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLnN0YWNrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9KTtcbn0pO1xuIiwgIi8qIGVzbGludC1kaXNhYmxlICovXG4vKipcbiAqIFRISVMgRklMRSBJUyBHRU5FUkFURUQgQVVUT01BVElDQUxMWS5cbiAqIERPIE5PVCBFRElULlxuICoqL1xuXG5pbXBvcnQgeyBjcmVhdGUsIGxpc3RlbiwgY2xvc2UsIHNlcnZlU3RhdGljQ29udGVudCB9IGZyb20gJy4uL3NyYy1zc3Ivc2VydmVyJ1xuaW1wb3J0IGluamVjdE1pZGRsZXdhcmVzIGZyb20gJy4vc3NyLW1pZGRsZXdhcmVzJ1xuXG5leHBvcnQge1xuICBjcmVhdGUsXG4gIGxpc3RlbixcbiAgY2xvc2UsXG4gIHNlcnZlU3RhdGljQ29udGVudCxcbiAgaW5qZWN0TWlkZGxld2FyZXNcbn1cbiIsICIvKipcbiAqIE1vcmUgaW5mbyBhYm91dCB0aGlzIGZpbGU6XG4gKiBodHRwczovL3YyLnF1YXNhci5kZXYvcXVhc2FyLWNsaS12aXRlL2RldmVsb3Bpbmctc3NyL3Nzci13ZWJzZXJ2ZXJcbiAqXG4gKiBSdW5zIGluIE5vZGUgY29udGV4dC5cbiAqL1xuXG4vKipcbiAqIE1ha2Ugc3VyZSB0byB5YXJuIGFkZCAvIG5wbSBpbnN0YWxsIChpbiB5b3VyIHByb2plY3Qgcm9vdClcbiAqIGFueXRoaW5nIHlvdSBpbXBvcnQgaGVyZSAoZXhjZXB0IGZvciBleHByZXNzIGFuZCBjb21wcmVzc2lvbikuXG4gKi9cbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcbmltcG9ydCB7XG4gIHNzckNsb3NlLFxuICBzc3JDcmVhdGUsXG4gIHNzckxpc3RlbixcbiAgc3NyUmVuZGVyUHJlbG9hZFRhZyxcbiAgc3NyU2VydmVTdGF0aWNDb250ZW50LFxufSBmcm9tICdxdWFzYXIvd3JhcHBlcnMnO1xuXG4vKipcbiAqIENyZWF0ZSB5b3VyIHdlYnNlcnZlciBhbmQgcmV0dXJuIGl0cyBpbnN0YW5jZS5cbiAqIElmIG5lZWRlZCwgcHJlcGFyZSB5b3VyIHdlYnNlcnZlciB0byByZWNlaXZlXG4gKiBjb25uZWN0LWxpa2UgbWlkZGxld2FyZXMuXG4gKlxuICogU2hvdWxkIE5PVCBiZSBhc3luYyFcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZSA9IHNzckNyZWF0ZSgoLyogeyAuLi4gfSAqLykgPT4ge1xuICBjb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbiAgLy8gYXR0YWNrZXJzIGNhbiB1c2UgdGhpcyBoZWFkZXIgdG8gZGV0ZWN0IGFwcHMgcnVubmluZyBFeHByZXNzXG4gIC8vIGFuZCB0aGVuIGxhdW5jaCBzcGVjaWZpY2FsbHktdGFyZ2V0ZWQgYXR0YWNrc1xuICBhcHAuZGlzYWJsZSgneC1wb3dlcmVkLWJ5Jyk7XG5cbiAgLy8gcGxhY2UgaGVyZSBhbnkgbWlkZGxld2FyZXMgdGhhdFxuICAvLyBhYnNvbHV0ZWx5IG5lZWQgdG8gcnVuIGJlZm9yZSBhbnl0aGluZyBlbHNlXG4gIGlmIChwcm9jZXNzLmVudi5QUk9EKSB7XG4gICAgYXBwLnVzZShjb21wcmVzc2lvbigpKTtcbiAgfVxuXG4gIHJldHVybiBhcHA7XG59KTtcblxuLyoqXG4gKiBZb3UgbmVlZCB0byBtYWtlIHRoZSBzZXJ2ZXIgbGlzdGVuIHRvIHRoZSBpbmRpY2F0ZWQgcG9ydFxuICogYW5kIHJldHVybiB0aGUgbGlzdGVuaW5nIGluc3RhbmNlIG9yIHdoYXRldmVyIHlvdSBuZWVkIHRvXG4gKiBjbG9zZSB0aGUgc2VydmVyIHdpdGguXG4gKlxuICogVGhlIFwibGlzdGVuUmVzdWx0XCIgcGFyYW0gZm9yIHRoZSBcImNsb3NlKClcIiBkZWZpbml0aW9uIGJlbG93XG4gKiBpcyB3aGF0IHlvdSByZXR1cm4gaGVyZS5cbiAqXG4gKiBGb3IgcHJvZHVjdGlvbiwgeW91IGNhbiBpbnN0ZWFkIGV4cG9ydCB5b3VyXG4gKiBoYW5kbGVyIGZvciBzZXJ2ZXJsZXNzIHVzZSBvciB3aGF0ZXZlciBlbHNlIGZpdHMgeW91ciBuZWVkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGxpc3RlbiA9IHNzckxpc3Rlbihhc3luYyAoeyBhcHAsIHBvcnQsIGlzUmVhZHkgfSkgPT4ge1xuICBhd2FpdCBpc1JlYWR5KCk7XG4gIHJldHVybiBhcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuUFJPRCkge1xuICAgICAgY29uc29sZS5sb2coJ1NlcnZlciBsaXN0ZW5pbmcgYXQgcG9ydCAnICsgcG9ydCk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG4vKipcbiAqIFNob3VsZCBjbG9zZSB0aGUgc2VydmVyIGFuZCBmcmVlIHVwIGFueSByZXNvdXJjZXMuXG4gKiBXaWxsIGJlIHVzZWQgb24gZGV2ZWxvcG1lbnQgb25seSB3aGVuIHRoZSBzZXJ2ZXIgbmVlZHNcbiAqIHRvIGJlIHJlYm9vdGVkLlxuICpcbiAqIFNob3VsZCB5b3UgbmVlZCB0aGUgcmVzdWx0IG9mIHRoZSBcImxpc3RlbigpXCIgY2FsbCBhYm92ZSxcbiAqIHlvdSBjYW4gdXNlIHRoZSBcImxpc3RlblJlc3VsdFwiIHBhcmFtLlxuICpcbiAqIENhbiBiZSBhc3luYy5cbiAqL1xuZXhwb3J0IGNvbnN0IGNsb3NlID0gc3NyQ2xvc2UoKHsgbGlzdGVuUmVzdWx0IH0pID0+IHtcbiAgcmV0dXJuIGxpc3RlblJlc3VsdC5jbG9zZSgpO1xufSk7XG5cbmNvbnN0IG1heEFnZSA9IHByb2Nlc3MuZW52LkRFViA/IDAgOiAxMDAwICogNjAgKiA2MCAqIDI0ICogMzA7XG5cbi8qKlxuICogU2hvdWxkIHJldHVybiBtaWRkbGV3YXJlIHRoYXQgc2VydmVzIHRoZSBpbmRpY2F0ZWQgcGF0aFxuICogd2l0aCBzdGF0aWMgY29udGVudC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlcnZlU3RhdGljQ29udGVudCA9IHNzclNlcnZlU3RhdGljQ29udGVudCgocGF0aCwgb3B0cykgPT4ge1xuICByZXR1cm4gZXhwcmVzcy5zdGF0aWMocGF0aCwge1xuICAgIG1heEFnZSxcbiAgICAuLi5vcHRzLFxuICB9KTtcbn0pO1xuXG5jb25zdCBqc1JFID0gL1xcLmpzJC87XG5jb25zdCBjc3NSRSA9IC9cXC5jc3MkLztcbmNvbnN0IHdvZmZSRSA9IC9cXC53b2ZmJC87XG5jb25zdCB3b2ZmMlJFID0gL1xcLndvZmYyJC87XG5jb25zdCBnaWZSRSA9IC9cXC5naWYkLztcbmNvbnN0IGpwZ1JFID0gL1xcLmpwZT9nJC87XG5jb25zdCBwbmdSRSA9IC9cXC5wbmckLztcblxuLyoqXG4gKiBTaG91bGQgcmV0dXJuIGEgU3RyaW5nIHdpdGggSFRNTCBvdXRwdXRcbiAqIChpZiBhbnkpIGZvciBwcmVsb2FkaW5nIGluZGljYXRlZCBmaWxlXG4gKi9cbmV4cG9ydCBjb25zdCByZW5kZXJQcmVsb2FkVGFnID0gc3NyUmVuZGVyUHJlbG9hZFRhZygoZmlsZSkgPT4ge1xuICBpZiAoanNSRS50ZXN0KGZpbGUpID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGA8bGluayByZWw9XCJtb2R1bGVwcmVsb2FkXCIgaHJlZj1cIiR7ZmlsZX1cIiBjcm9zc29yaWdpbj5gO1xuICB9XG5cbiAgaWYgKGNzc1JFLnRlc3QoZmlsZSkgPT09IHRydWUpIHtcbiAgICByZXR1cm4gYDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiJHtmaWxlfVwiPmA7XG4gIH1cblxuICBpZiAod29mZlJFLnRlc3QoZmlsZSkgPT09IHRydWUpIHtcbiAgICByZXR1cm4gYDxsaW5rIHJlbD1cInByZWxvYWRcIiBocmVmPVwiJHtmaWxlfVwiIGFzPVwiZm9udFwiIHR5cGU9XCJmb250L3dvZmZcIiBjcm9zc29yaWdpbj5gO1xuICB9XG5cbiAgaWYgKHdvZmYyUkUudGVzdChmaWxlKSA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBgPGxpbmsgcmVsPVwicHJlbG9hZFwiIGhyZWY9XCIke2ZpbGV9XCIgYXM9XCJmb250XCIgdHlwZT1cImZvbnQvd29mZjJcIiBjcm9zc29yaWdpbj5gO1xuICB9XG5cbiAgaWYgKGdpZlJFLnRlc3QoZmlsZSkgPT09IHRydWUpIHtcbiAgICByZXR1cm4gYDxsaW5rIHJlbD1cInByZWxvYWRcIiBocmVmPVwiJHtmaWxlfVwiIGFzPVwiaW1hZ2VcIiB0eXBlPVwiaW1hZ2UvZ2lmXCI+YDtcbiAgfVxuXG4gIGlmIChqcGdSRS50ZXN0KGZpbGUpID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGA8bGluayByZWw9XCJwcmVsb2FkXCIgaHJlZj1cIiR7ZmlsZX1cIiBhcz1cImltYWdlXCIgdHlwZT1cImltYWdlL2pwZWdcIj5gO1xuICB9XG5cbiAgaWYgKHBuZ1JFLnRlc3QoZmlsZSkgPT09IHRydWUpIHtcbiAgICByZXR1cm4gYDxsaW5rIHJlbD1cInByZWxvYWRcIiBocmVmPVwiJHtmaWxlfVwiIGFzPVwiaW1hZ2VcIiB0eXBlPVwiaW1hZ2UvcG5nXCI+YDtcbiAgfVxuXG4gIHJldHVybiAnJztcbn0pO1xuIiwgIi8qIGVzbGludC1kaXNhYmxlICovXG4vKipcbiAqIFRISVMgRklMRSBJUyBHRU5FUkFURUQgQVVUT01BVElDQUxMWS5cbiAqIERPIE5PVCBFRElULlxuICoqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmplY3RNaWRkbGV3YXJlcyAob3B0cykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgIFxuICAgIGltcG9ydCgnc3JjLXNzci9taWRkbGV3YXJlcy9yZW5kZXInKVxuICAgIFxuICBdKS50aGVuKGFzeW5jIHJhd01pZGRsZXdhcmVzID0+IHtcbiAgICBjb25zdCBtaWRkbGV3YXJlcyA9IHJhd01pZGRsZXdhcmVzXG4gICAgICAubWFwKGVudHJ5ID0+IGVudHJ5LmRlZmF1bHQpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1pZGRsZXdhcmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBtaWRkbGV3YXJlc1tpXShvcHRzKVxuICAgICAgfVxuICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdbUXVhc2FyIFNTUl0gbWlkZGxld2FyZSBlcnJvcjonLCBlcnIpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUNBQSxrQkFNTztBQVBQO0FBQUE7QUFBQTtBQUNBLElBQUFBLG1CQUE4QjtBQU05QixJQUFPLHFCQUFRLGdDQUFjLENBQUMsRUFBRSxLQUFLLFNBQVMsUUFBUSxNQUFNLE1BQU07QUFHaEUsVUFBSSxJQUFJLFFBQVEsUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLFFBQVE7QUFDMUMsWUFBSSxVQUFVLGdCQUFnQixXQUFXO0FBRXpDLGVBQTZCLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFDdEMsS0FBSyxDQUFDLFNBQVM7QUFFZCxjQUFJLEtBQUssSUFBSTtBQUFBLFFBQ2YsQ0FBQyxFQUNBLE1BQU0sQ0FBQyxRQUFxQjtBQUkzQixjQUFJLElBQUksS0FBSztBQUNYLGdCQUFJLElBQUksTUFBTTtBQUNaLGtCQUFJLFNBQVMsSUFBSSxNQUFNLElBQUksR0FBRztBQUFBLFlBQ2hDLE9BQU87QUFDTCxrQkFBSSxTQUFTLElBQUksR0FBRztBQUFBLFlBQ3RCO0FBQUEsVUFDRixXQUFXLElBQUksU0FBUyxLQUFLO0FBSzNCLGdCQUFJLE9BQU8sR0FBRyxFQUFFLEtBQUssc0JBQXNCO0FBQUEsVUFDN0MsV0FBVyxNQUFpQjtBQU8xQixrQkFBTSxNQUFNLEVBQUUsS0FBSyxLQUFLLElBQUksQ0FBQztBQUFBLFVBQy9CLE9BQU87QUFRTCxnQkFBSSxPQUFPLEdBQUcsRUFBRSxLQUFLLDZCQUE2QjtBQUVsRCxnQkFBSSxNQUF1QjtBQUN6QixzQkFBUSxNQUFNLElBQUksS0FBSztBQUFBLFlBQ3pCO0FBQUEsVUFDRjtBQUFBLFFBQ0YsQ0FBQztBQUFBLE1BQ0wsQ0FBQztBQUFBLElBQ0gsQ0FBQztBQUFBO0FBQUE7OztBQzFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ1dBLHFCQUFvQjtBQUNwQix5QkFBd0I7QUFDeEIsc0JBTU87QUFTQSxJQUFNLGFBQVMsMkJBQVUsTUFBbUI7QUFDakQsUUFBTSxVQUFNLGVBQUFDLFNBQVE7QUFJcEIsTUFBSSxRQUFRLGNBQWM7QUFJMUIsTUFBSSxPQUFrQjtBQUNwQixRQUFJLElBQUksWUFBWSxDQUFDO0FBQUEsRUFDdkI7QUFFQSxTQUFPO0FBQ1QsQ0FBQztBQWFNLElBQU0sYUFBUywyQkFBVSxPQUFPLEVBQUUsS0FBSyxNQUFNLFFBQVEsTUFBTTtBQUNoRSxRQUFNLFFBQVE7QUFDZCxTQUFPLElBQUksT0FBTyxNQUFNLE1BQU07QUFDNUIsUUFBSSxPQUFrQjtBQUNwQixjQUFRLElBQUksOEJBQThCLElBQUk7QUFBQSxJQUNoRDtBQUFBLEVBQ0YsQ0FBQztBQUNILENBQUM7QUFZTSxJQUFNLFlBQVEsMEJBQVMsQ0FBQyxFQUFFLGFBQWEsTUFBTTtBQUNsRCxTQUFPLGFBQWEsTUFBTTtBQUM1QixDQUFDO0FBRUQsSUFBTSxTQUFTLE9BQWtCLElBQUksTUFBTyxLQUFLLEtBQUssS0FBSztBQU1wRCxJQUFNLHlCQUFxQix1Q0FBc0IsQ0FBQyxNQUFNLFNBQVM7QUFDdEUsU0FBTyxlQUFBQSxRQUFRLE9BQU8sTUFBTTtBQUFBLElBQzFCO0FBQUEsSUFDQSxHQUFHO0FBQUEsRUFDTCxDQUFDO0FBQ0gsQ0FBQztBQUVELElBQU0sT0FBTztBQUNiLElBQU0sUUFBUTtBQUNkLElBQU0sU0FBUztBQUNmLElBQU0sVUFBVTtBQUNoQixJQUFNLFFBQVE7QUFDZCxJQUFNLFFBQVE7QUFDZCxJQUFNLFFBQVE7QUFNUCxJQUFNLHVCQUFtQixxQ0FBb0IsQ0FBQyxTQUFTO0FBQzVELE1BQUksS0FBSyxLQUFLLElBQUksTUFBTSxNQUFNO0FBQzVCLFdBQU8sbUNBQW1DO0FBQUEsRUFDNUM7QUFFQSxNQUFJLE1BQU0sS0FBSyxJQUFJLE1BQU0sTUFBTTtBQUM3QixXQUFPLGdDQUFnQztBQUFBLEVBQ3pDO0FBRUEsTUFBSSxPQUFPLEtBQUssSUFBSSxNQUFNLE1BQU07QUFDOUIsV0FBTyw2QkFBNkI7QUFBQSxFQUN0QztBQUVBLE1BQUksUUFBUSxLQUFLLElBQUksTUFBTSxNQUFNO0FBQy9CLFdBQU8sNkJBQTZCO0FBQUEsRUFDdEM7QUFFQSxNQUFJLE1BQU0sS0FBSyxJQUFJLE1BQU0sTUFBTTtBQUM3QixXQUFPLDZCQUE2QjtBQUFBLEVBQ3RDO0FBRUEsTUFBSSxNQUFNLEtBQUssSUFBSSxNQUFNLE1BQU07QUFDN0IsV0FBTyw2QkFBNkI7QUFBQSxFQUN0QztBQUVBLE1BQUksTUFBTSxLQUFLLElBQUksTUFBTSxNQUFNO0FBQzdCLFdBQU8sNkJBQTZCO0FBQUEsRUFDdEM7QUFFQSxTQUFPO0FBQ1QsQ0FBQzs7O0FDL0hjLFNBQVIsa0JBQW9DLE1BQU07QUFDL0MsU0FBTyxRQUFRLElBQUk7QUFBQSxJQUVqQjtBQUFBLEVBRUYsQ0FBQyxFQUFFLEtBQUssT0FBTSxtQkFBa0I7QUFDOUIsVUFBTSxjQUFjLGVBQ2pCLElBQUksV0FBUyxNQUFNLE9BQU87QUFFN0IsYUFBUyxJQUFJLEdBQUcsSUFBSSxZQUFZLFFBQVEsS0FBSztBQUMzQyxVQUFJO0FBQ0YsY0FBTSxZQUFZLEdBQUcsSUFBSTtBQUFBLE1BQzNCLFNBQ08sS0FBUDtBQUNFLGdCQUFRLE1BQU0sa0NBQWtDLEdBQUc7QUFDbkQ7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0YsQ0FBQztBQUNIOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfd3JhcHBlcnMiLCAiZXhwcmVzcyJdCn0K
