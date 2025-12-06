import { PortfolioPage } from "~/components/PortfolioPage/PortfolioPage";
import { fetchPortfolioPageData } from "~/services/mockService";

export default function aQuietNight() {
  const item = fetchPortfolioPageData('A Quiet Night');
  return (
    <PortfolioPage data={item} />
  )
}