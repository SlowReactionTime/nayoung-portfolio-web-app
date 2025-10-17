import { SimpleGrid } from "@mantine/core";
import { PortfolioItem } from "~/components/PortfolioItem/PortfolioItem";
import { fetchPortfolioItemDataList } from "~/services/mockService";

export default function Portfolio() {
  const items = fetchPortfolioItemDataList().map((wrapper) => (
    <PortfolioItem data={wrapper.data} />
  ));
  return (
    <SimpleGrid cols={2} mt="md">
      {items}
    </SimpleGrid>
  )
}