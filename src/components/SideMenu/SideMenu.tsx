import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../utils/cn';
import { SidebarSubMenu } from './SidebarSubMenu';
import { menuItems } from './menu.data';

const settingsRoutes = menuItems.find((item) => item.route === '/settings')?.subMenuItems?.map((item) => item.route);

const isRouteMatch = (pathname: string, itemRoute: string) => {
  if (pathname.includes('home') && itemRoute === '/') {
    return true;
  }
  if (settingsRoutes?.some((route) => pathname.startsWith(route!)) && itemRoute === '/settings') {
    return true;
  }

  return pathname === itemRoute;
};

export const SideMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    <div className={`relative h-full transition-width duration-300 ease-in-out ${isMenuOpen ? 'w-64' : 'w-14'}`}>

      {menuItems.map((item) => {
        const routeMatch = isRouteMatch(pathname, item.route || '');
        let linkEl;
        if (item?.subMenuItems) {
          linkEl = (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- Tooltip workaround
            <span tabIndex={0} key={item.route}>
              <SidebarSubMenu menu={item} isMenuOpen={isMenuOpen} isActive={routeMatch} />
            </span>
          );
        } else {
          linkEl = (
            <Link
              className={cn('block py-4 pl-4 text-cool-gray group hover:text-primary hover:bg-primary-50', {
                'bg-primary text-white': routeMatch,
              })}
              to={item?.route ?? ''}
              key={item.route}
            >
              {item.icon}
              <span className={cn('ml-2 group-hover:text-text-primary', {
                hidden: !isMenuOpen,
              })}
              >
                {item.name}
              </span>
            </Link>
          );
        }

        return <div key={item.route}>{linkEl}</div>;
      })}

      <button
        type="button"
        onClick={() => setMenuOpen(!isMenuOpen)}
        className="p-1 rounded-full border border-solid border-cool-gray bg-white shadow-sm text-cool-gray absolute bottom-20 right-[-1.1rem] duration-300 ease-in-out"
      >
        {isMenuOpen ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </button>
    </div>

  );
};
