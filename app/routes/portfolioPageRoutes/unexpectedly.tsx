import { PortfolioPage } from "~/components/PortfolioPage/PortfolioPage";
import { fetchPortfolioPageData } from "~/services/mockService";

export default function unexpectedly() {
  const item = fetchPortfolioPageData('Unexpectedly');
  return (
    <PortfolioPage data={item} />
  )
}