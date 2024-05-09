import { Link, Outlet } from 'react-router-dom';
import { useAuthContext } from 'context';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Avatar, AvatarFallback, AvatarImage } from '../Avatar';
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from '../DropDownMenu';
import { SideMenu } from '../SideMenu';

export const DashboardLayout = () => {
  const { user, logOut } = useAuthContext();
  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-between items-center bg-white text-text-primary p-4 shadow-md border-b border-cool-gray-100 z-10 sticky top-0">
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src="/logo.svg" alt="logo" className="h-9" />
          </Link>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage alt={user?.firstName ?? 'user avatar'} />
              <AvatarFallback>
                {user?.firstName?.charAt(0).toUpperCase()}
                {user?.lastName?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="hover:bg-transparent cursor-default" asChild>
              <div className="flex flex-col justify-start items-start w-full border-b-1 border-cool-gray-100 mb-2">
                <p className="self-start font-normal text-sm leading-lg">{`${user?.firstName} ${user?.lastName}`}</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-primary hover:text-white" asChild>
              <div className="flex flex-row gap-2">
                <LogoutOutlinedIcon style={{ width: '1.2rem', height: '1.2rem' }} />
                <button className="w-full text-left cursor-pointer" type="button" onClick={logOut}>
                  Logout
                </button>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex flex-grow overflow-hidden">
        <SideMenu />
        <div className="flex-grow bg-gray-50 px-10 py-8 overflow-auto h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
