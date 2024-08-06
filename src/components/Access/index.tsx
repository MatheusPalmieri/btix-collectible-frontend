import Logo from '@/assets/images/logo/icon-white.png';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { useAuthStore } from '@/contexts/auth';
import QRCode from 'qrcode.react';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button';

export const Access = () => {
  const { t } = useTranslation();
  const { user } = useAuthStore();

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant='secondary' className='h-6 rounded-md'>
          {t('components.access.button_access')}
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader className='p-0'>
          <DrawerTitle>{user?.name}</DrawerTitle>
          <DrawerDescription> {t('components.access.description')}</DrawerDescription>
        </DrawerHeader>

        <div className='bg-secondary-200 rounded-lg p-4 mx-auto'>
          <QRCode
            value='access_personal_token'
            bgColor='#4c4c4c'
            fgColor='#fff'
            size={300}
            imageSettings={{
              src: Logo,
              width: 50,
              height: 50,
              excavate: true,
            }}
            style={{ borderRadius: 4 }}
          />
        </div>

        <DrawerFooter className='p-0'>
          <div className='flex gap-2'>
            <DrawerClose className='w-full'>
              <Button variant='ghost' className='w-full'>
                {t('components.access.button_close')}
              </Button>
            </DrawerClose>
            <Button className='w-full'> {t('components.access.button_save')}</Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
