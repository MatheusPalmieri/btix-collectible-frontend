import Logo from '@/assets/images/logo/logo.png';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';

interface Props {
  back?: string;
}

export const Navbar = ({ back }: Props) => {
  const navigate = useNavigate();
  const handleBack = () => back && navigate(`/${back}`);

  return (
    <header className='w-full h-20 p-4 flex justify-between items-center border-b border-secondary-300/80 shadow-xl shadow-secondary-500/20'>
      <div className='w-[25%]'>
        {back && (
          <Button
            className='h-6 gap-1.5 bg-transparent text-gray-50 hover:bg-transparent hover:text-primary'
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

      <div className='w-[25%]'></div>
    </header>
  );
};
