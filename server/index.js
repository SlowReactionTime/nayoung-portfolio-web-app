import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Container, Text, Group, MantineProvider, Card, Image, CardSection, Button, SimpleGrid } from "@mantine/core";
import { useState } from "react";
import { useLocation } from "react-router-dom";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const header = "_header_1sd0w_1";
const inner = "_inner_1sd0w_8";
const link = "_link_1sd0w_15";
const classes$1 = {
  header,
  inner,
  link
};
const topNavBarItems = [
  { link: "/portfolio", label: "Portfolio" },
  { link: "/resume", label: "Resume" },
  { link: "/about", label: "About" }
];
function TopNavigationBar() {
  const currentPath = useLocation().pathname;
  const [activeLink, setActive] = useState(currentPath);
  const items = topNavBarItems.map((item) => /* @__PURE__ */ jsx(
    "a",
    {
      href: item.link,
      className: classes$1.link,
      "data-active": activeLink === item.link || void 0,
      onClick: (_event) => {
        setActive(item.link);
      },
      children: item.label
    },
    item.label
  ));
  return /* @__PURE__ */ jsx("header", { className: classes$1.header, children: /* @__PURE__ */ jsxs(Container, { size: "md", className: classes$1.inner, children: [
    /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx(Text, { fz: "xl", fw: 700, children: 'Nayoung "Luna" Kim' }) }),
    /* @__PURE__ */ jsx(Group, { gap: 5, visibleFrom: "xs", children: items })
  ] }) });
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsxs(MantineProvider, {
    children: [/* @__PURE__ */ jsx(TopNavigationBar, {}), /* @__PURE__ */ jsx(Outlet, {})]
  });
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  return /* @__PURE__ */ jsx(Fragment, {
    children: "ErrorBoundary..."
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function meta({}) {
  return [{
    title: "New React Router App"
  }, {
    name: "description",
    content: "Welcome to React Router!"
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(Fragment, {
    children: "Home..."
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const about = UNSAFE_withComponentProps(function About() {
  return /* @__PURE__ */ jsx(Fragment, {
    children: "About..."
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: about
}, Symbol.toStringTag, { value: "Module" }));
const card = "_card_ayogw_1";
const section = "_section_ayogw_5";
const label = "_label_ayogw_12";
const fixedSizeImage = "_fixedSizeImage_ayogw_18";
const classes = {
  card,
  section,
  label,
  fixedSizeImage
};
const PortfolioItem = ({ data }) => {
  const { image, title, description, programUsed } = data;
  return /* @__PURE__ */ jsxs(Card, { withBorder: true, radius: "md", p: "md", className: classes.card, children: [
    /* @__PURE__ */ jsx(Card.Section, { children: /* @__PURE__ */ jsx(Image, { className: classes.fixedSizeImage, src: image, alt: title, height: 180 }) }),
    /* @__PURE__ */ jsxs(Card.Section, { className: classes.section, mt: "md", children: [
      /* @__PURE__ */ jsx(Group, { justify: "apart", children: /* @__PURE__ */ jsx(Text, { fz: "xl", fw: 500, children: title }) }),
      /* @__PURE__ */ jsx(Text, { fz: "md", children: description })
    ] }),
    /* @__PURE__ */ jsx(CardSection, { className: classes.section, mt: "md", c: "dimmed", children: /* @__PURE__ */ jsx(Text, { className: classes.label, children: programUsed }) }),
    /* @__PURE__ */ jsx(Group, { mt: "xs", children: /* @__PURE__ */ jsx(Button, { radius: "md", style: { flex: 1 }, children: "Show details" }) })
  ] });
};
const QuietNightImage = "/assets/portfolio-a-quiet-night-DF4MaTTE.png";
const FuturisticWorldImage = "/assets/portfolio-futuristic-world-CFcoGK5i.png";
const LostAndFoundImage = "/assets/portfolio-lost-and-found-CYWTHtVN.png";
const RocketLaunchingImage = "/assets/portfolio-rocket-launching-CGfRj4k0.png";
const UnexpectedlyImage = "/assets/portfolio-unexpectedly-DIqOohjF.png";
const WhisperOfEnchantedWorldImage = "/assets/portfolio-whisper-of-the-enchanted-world-CHiYHyVX.png";
function fetchPortfolioItemDataList() {
  return [
    {
      data: {
        image: UnexpectedlyImage,
        title: "Unexpectedly",
        description: "Created modeling, texturing, animating, rigging, lighting, and rendering.",
        programUsed: "MAYA, Premiere Pro, Arnold renderer"
      }
    },
    {
      data: {
        image: LostAndFoundImage,
        title: "Lost and Found",
        description: "Used motion capture in the green screen room for characters' movements.",
        programUsed: "Unreal Engine, MAYA, Xsens, Premiere Pro, Arnold renderer"
      }
    },
    {
      data: {
        image: WhisperOfEnchantedWorldImage,
        title: "Whispers of the Enchanted World",
        description: "Created the environment and designed the scene.",
        programUsed: "Unreal Engine 5 and Premiere Pro"
      }
    },
    {
      data: {
        image: FuturisticWorldImage,
        title: "Futuristic World",
        description: "Created modeling, texturing, lighting, and rendering.",
        programUsed: "MAYA"
      }
    },
    {
      data: {
        image: QuietNightImage,
        title: "A Quiet Night",
        description: "ADD DESCRIPTION",
        programUsed: "MAYA, Premiere Pro, Arnold renderer"
      }
    },
    {
      data: {
        image: RocketLaunchingImage,
        title: "Rocket Launching",
        description: "Fire, Smoke, Water & Ember VFX",
        programUsed: "Houdini, Deadline"
      }
    }
  ];
}
const portfolio = UNSAFE_withComponentProps(function Portfolio() {
  const items = fetchPortfolioItemDataList().map((wrapper) => /* @__PURE__ */ jsx(PortfolioItem, {
    data: wrapper.data
  }));
  return /* @__PURE__ */ jsx(SimpleGrid, {
    cols: 2,
    mt: "md",
    children: items
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: portfolio
}, Symbol.toStringTag, { value: "Module" }));
const contact = UNSAFE_withComponentProps(function Contact() {
  return /* @__PURE__ */ jsx(Fragment, {
    children: "Contact..."
  });
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: contact
}, Symbol.toStringTag, { value: "Module" }));
const resume = UNSAFE_withComponentProps(function Resume() {
  return /* @__PURE__ */ jsx(Fragment, {
    children: "Resume..."
  });
});
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: resume
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-CuXEtMfA.js", "imports": ["/assets/chunk-OIYGIGL5-Cu3wia-V.js", "/assets/index-CMwa3Jz1.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-D0dpqiiv.js", "imports": ["/assets/chunk-OIYGIGL5-Cu3wia-V.js", "/assets/index-CMwa3Jz1.js", "/assets/Text-BPclCLzt.js"], "css": ["/assets/root-CiY7bchH.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "/", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-Bxpz4QO3.js", "imports": ["/assets/chunk-OIYGIGL5-Cu3wia-V.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "/about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/about-gUqlecP8.js", "imports": ["/assets/chunk-OIYGIGL5-Cu3wia-V.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/portfolio": { "id": "routes/portfolio", "parentId": "root", "path": "/portfolio", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/portfolio-CC8N6ffk.js", "imports": ["/assets/chunk-OIYGIGL5-Cu3wia-V.js", "/assets/Text-BPclCLzt.js", "/assets/index-CMwa3Jz1.js"], "css": ["/assets/portfolio-CYOKPRc4.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "/contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/contact-BW_QelFA.js", "imports": ["/assets/chunk-OIYGIGL5-Cu3wia-V.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/resume": { "id": "routes/resume", "parentId": "root", "path": "/resume", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/resume-CDff8N0e.js", "imports": ["/assets/chunk-OIYGIGL5-Cu3wia-V.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-fc000c1e.js", "version": "fc000c1e", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v8_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "/",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "/about",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/portfolio": {
    id: "routes/portfolio",
    parentId: "root",
    path: "/portfolio",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "/contact",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/resume": {
    id: "routes/resume",
    parentId: "root",
    path: "/resume",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
