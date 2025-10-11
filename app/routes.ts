import { type RouteConfig, index, route } from "@react-router/dev/routes";

// TODO: defult code.
// export default [index("routes/home.tsx")] satisfies RouteConfig;

export default [
    route("/", "./routes/home.tsx"),
    route("/about", "./routes/about.tsx"),
    route("/portfolio", "./routes/portfolio.tsx"),
    route("/contact", "./routes/contact.tsx"),
    route("/resume", "./routes/resume.tsx")
] satisfies RouteConfig;