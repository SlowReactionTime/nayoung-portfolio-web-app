import { PortfolioPage } from "~/components/PortfolioPage/PortfolioPage";
import { fetchPortfolioPageData } from "~/services/mockService";

export default function whispersOfTheEnchantedWorld() {
  const item = fetchPortfolioPageData('Whispers of the Enchanted World');
  return (
    <PortfolioPage data={item} />
  )
}