import { CalendarOutlined, FundOutlined, InfoCircleOutlined, PieChartOutlined, ProfileOutlined, SettingOutlined } from "@ant-design/icons";

export const navLink = [
    {
        path: '/',
        title: 'Dashboard',
        icon: <PieChartOutlined />
    },
    {
        path: '/calendar',
        title: 'Calendar',
        icon: <CalendarOutlined />
    },
    {
        path: '/analytics',
        title: 'Analytics',
        icon: <FundOutlined />
    },
    {
        path: '/ads',
        title: 'Ads',
        icon: <InfoCircleOutlined />
    },
    {
        path: '/campaigns',
        title: 'Campaigns',
        icon: <ProfileOutlined />
    },
    {
        path: '/settings',
        title: 'Settings',
        icon: <SettingOutlined />
    },
];