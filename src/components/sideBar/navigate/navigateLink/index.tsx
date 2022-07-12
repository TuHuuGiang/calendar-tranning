import { CalendarOutlined, FundOutlined, InfoCircleOutlined, PieChartOutlined, ProfileOutlined, SettingOutlined } from "@ant-design/icons";
import { SITE_MAP } from "./site-map";

export const navLink = [
    {
        path: '/',
        title: 'Dashboard',
        icon: <PieChartOutlined />
    },
    {
        path: SITE_MAP.CALENDAR.path,
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