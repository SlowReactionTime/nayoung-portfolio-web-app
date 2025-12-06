import { PortfolioPage } from "~/components/PortfolioPage/PortfolioPage";
import { fetchPortfolioPageData } from "~/services/mockService";

export default function lostAndFound() {
  const item = fetchPortfolioPageData('Lost and Found');
  return (
    <PortfolioPage data={item} />
  )
}