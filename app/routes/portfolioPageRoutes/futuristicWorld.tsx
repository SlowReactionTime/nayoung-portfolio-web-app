import { PortfolioPage } from "~/components/PortfolioPage/PortfolioPage";
import { fetchPortfolioPageData } from "~/services/mockService";

export default function futuristicWorld() {
  const item = fetchPortfolioPageData('Futuristic World');
  return (
    <PortfolioPage data={item} />
  )
}