import { PortfolioPage } from "~/components/PortfolioPage/PortfolioPage";
import { fetchPortfolioPageData } from "~/services/mockService";

export default function rocketLaunching() {
  const item = fetchPortfolioPageData('Rocket Launching');
  return (
    <PortfolioPage data={item} />
  )
}