import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Factory, Users, LayoutGrid, FileText, FilePenLine, MessageSquareWarning, LandPlot, BadgePercent, Luggage } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        url: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Companies',
        url: '/companies',
        icon: Factory,
    },
    {
        title: 'Clients',
        url: '/clients',
        icon: Users,
    },
    {
        title: 'Contracts',
        url: '/contracts',
        icon: FileText,
    },
    {
        title: 'Shared Trips',
        url: '/shared-trips',
        icon: Luggage,
    },
    {
        title: 'Areas',
        url: '/areas',
        icon: LandPlot,
    },
    {
        title: 'Pricing',
        url: '/pricing',
        icon: BadgePercent,
    },
    {
        title: 'Complaints',
        url: '/complaints',
        icon: MessageSquareWarning,
    },
];

// const footerNavItems: NavItem[] = [
//     {
//         title: 'Repository',
//         url: 'https://github.com/laravel/react-starter-kit',
//         icon: Folder,
//     },
//     {
//         title: 'Documentation',
//         url: 'https://laravel.com/docs/starter-kits',
//         icon: BookOpen,
//     },
// ];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                {/* <NavFooter items={footerNavItems} className="mt-auto" /> */}
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
