import { SimpleGrid } from "@mantine/core";
import { PortfolioCard } from "~/components/PortfolioCard/PortfolioCard";
import { fetchPortfolioCardDataList } from "~/services/mockService";

export default function Portfolio() {
  const items = fetchPortfolioCardDataList().map((wrapper) => (
    <PortfolioCard data={wrapper.data} />
  ));
  return (
    <SimpleGrid cols={2} mt="md">
      {items}
    </SimpleGrid>
  )
}