import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nayoung \"Luna\" Kim" },
    { name: "description", content: "Nayoung Kim's portfolio website" },
  ];
}

export default function Home() {
  return (
    <>
      Home...
    </>
  )
}
