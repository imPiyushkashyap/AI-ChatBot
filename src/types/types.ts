interface NavItem {
    label: string;
    href: string;
}

export const navItems: NavItem = {
    label: "Label",
    href: "/dashboard",
}

export const dashboardLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/roomListing", label: "Add Your Room" },
    { href: "#", label: "Explore" },
    { href: "#", label: "Favorites" },
    { href: "#", label: "Profile" },
];

