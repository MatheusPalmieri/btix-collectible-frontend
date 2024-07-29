import Logo from '@/assets/images/logo/logo.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuthStore } from '@/contexts/auth';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';

interface Props {
  back?: string;
}

export const Navbar = ({ back }: Props) => {
  const { user, signOut } = useAuthStore();
  const navigate = useNavigate();

  const handleBack = () => back && navigate(`/${back === '/' ? '' : back}`);
  const handleRedirect = (path: string) => navigate(`/${path}`);

  const fallback = user?.id
    ? user?.name
        .split(' ')
        .map((name) => name[0])
        .join('')
    : '';

  const handleSignOut = () => {
    signOut();
    navigate('/sign-in');
  };

  return (
    <header className='w-full border-b border-secondary-300/80 shadow-xl shadow-secondary-500/20'>
      <div className='md:max-w-[800px] h-20 md:mx-auto p-4 md:p-0 flex justify-between items-center'>
        <div className='w-[25%]'>
          {back && (
            <Button
              className='h-6 gap-1.5 bg-transparent text-gray-50 p-0 hover:bg-transparent hover:text-primary'
              onClick={handleBack}
            >
              <div className='w-6 h-6 bg-primary rounded-lg flex items-center justify-center'>
                <ChevronLeft size='16px' strokeWidth='2px' className='text-gray-50' />
              </div>
              <span className='text-sm hidden lg:block'>Back</span>
            </Button>
          )}
        </div>

        <div className='w-[50%]'>
          <img src={Logo} alt='Logo Btix' className='h-10 mx-auto' />
        </div>

        <div className='w-[25%] flex items-center justify-end'>
          {user?.id && (
            <DropdownMenu>
              <DropdownMenuTrigger className='bg-secondary-100/50 flex items-center gap-2 pl-2 rounded-l-lg rounded-r-xl outline-none'>
                <p className='text-sm font-bold'>{user?.name?.split(' ')[0]}</p>
                <Avatar className='size-6'>
                  <AvatarImage src={user?.avatar} />
                  <AvatarFallback>{fallback}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuItem onClick={() => handleRedirect('')}>Home</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleRedirect('profile')}>
                  Profile
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  );
};
