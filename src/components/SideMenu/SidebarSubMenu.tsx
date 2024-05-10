import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { cn } from '../../utils/cn';
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem,
} from '../DropDownMenu';
import { MenuItem } from './menu.data';

export const SidebarSubMenu = (
  { menu: { name, icon, subMenuItems }, isMenuOpen, isActive }
  : { menu: MenuItem; isMenuOpen: boolean, isActive?: boolean },
) => {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const { pathname } = useLocation();
  const isSubmenuOpen = openSubMenu;

  return (
    <DropdownMenu open={openSubMenu} onOpenChange={() => setOpenSubMenu((prev) => !prev)}>
      <DropdownMenuTrigger className={cn(
        'py-4 pl-4 text-cool-gray hover:text-primary hover:bg-primary-50 w-full text-left flex items-start',
        {
          'text-white bg-primary': isSubmenuOpen || isActive,
        },
      )}
      >
        {icon}
        <span className={cn('ml-2', {
          hidden: !isMenuOpen,
        })}
        >
          {name}
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="origin-top-right absolute -mt-14 ml-8 w-44 rounded-md shadow-lg bg-white focus:outline-none p-0"
      >
        {subMenuItems?.map((subMenuItem) => (
          <Link to={subMenuItem?.route ?? ''} onClick={() => setOpenSubMenu(false)} key={subMenuItem.route}>
            <DropdownMenuItem
              className={cn(
                'cursor-pointer block px-2 py-2 text-sm text-text-primary w-full text-left',
                {
                  'bg-primary text-white': pathname === subMenuItem.route,
                  'hover:bg-primary-50': pathname !== subMenuItem.route,
                },
              )}
            >
              {subMenuItem.icon}
              <span className="ml-4">
                {subMenuItem.name}
              </span>
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
