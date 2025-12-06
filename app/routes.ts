import { type RouteConfig, index, route } from "@react-router/dev/routes";

// TODO: defult code.
// export default [index("routes/home.tsx")] satisfies RouteConfig;

export default [
    route("/", "./routes/home.tsx"),
    route("/portfolio", "./routes/portfolio.tsx"),
    route("/portfolio/unexpectedly", "./routes/portfolioPageRoutes/unexpectedly.tsx"),
    route("/portfolio/lost-and-found", "./routes/portfolioPageRoutes/lostAndFound.tsx"),
    route("/portfolio/whispers-of-the-enchanted-world", "./routes/portfolioPageRoutes/whispersOfTheEnchantedWorld.tsx"),
    route("/portfolio/futuristic-world", "./routes/portfolioPageRoutes/futuristicWorld.tsx"),
    route("/portfolio/a-quiet-night", "./routes/portfolioPageRoutes/aQuietNight.tsx"),
    route("/portfolio/rocket-launching", "./routes/portfolioPageRoutes/rocketLaunching.tsx"),
    route("/contact", "./routes/contact.tsx"),
    route("/resume", "./routes/resume.tsx")
] satisfies RouteConfig;