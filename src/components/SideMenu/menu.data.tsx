import {
  PersonOutlined,
  Home,
  Settings,
  BlenderOutlined,
} from '@mui/icons-material';

export interface MenuItem {
  name: string;
  route?: string;
  icon: React.ReactNode;
  subMenuItems?: MenuItem[];
  privileges?: string[]
}

export const menuItems: MenuItem[] = [
  {
    name: 'Home',
    route: '/',
    icon: <Home className="w-6 h-6" />,
  },
  {
    name: 'Settings',
    route: '/settings',
    icon: <Settings className="w-6 h-6" />,
    subMenuItems: [
      {
        name: 'User',
        icon: <PersonOutlined fontSize="small" className="ml-2" />,
        route: '/user',
      },
      {
        name: 'Mixer',
        icon: <BlenderOutlined fontSize="small" className="ml-2" />,
        route: '/mixer',
      },
    ],
  },
];
