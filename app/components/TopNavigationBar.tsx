import { Menu } from "@mantine/core";
import { BASE_URL } from "~/global.types"

const topNavBarItems = [
  { link: '/portfolio', label: 'Portfolio' },
  { link: '/resume', label: 'Resume' },
  { link: '/about', label: 'About' },
];

export default function TopNavigationBar() {
    // TODO: complete the usage of the items to display in the top nav bar
    const menuItems = topNavBarItems.map((item) => {
        <Menu.Item key={item.link}>{item.label}</Menu.Item>
    })
    if (menuItems) {
        return (
            <>
                TopNavigationBar...
            </>
        )
    }
}