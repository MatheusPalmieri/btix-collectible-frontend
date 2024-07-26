import { Navbar } from '@/components/Navbar';
import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<'main'> {
  children?: React.ReactNode;
  back?: string;
  type?: 'small' | 'medium' | 'large';
  flex?: boolean;
}

export const Container = ({
  children,
  back,
  type = 'small',
  flex = false,
  className,
  ...props
}: Props) => {
  const size = {
    small: 'max-w-96',
    medium: 'max-w-[800px]',
    large: 'max-w-[1280px]',
  };

  return (
    <div>
      <Navbar back={back} />

      <main
        className={cn(
          'min-h-screen-minus-80 h-max mx-auto p-4 md:px-0 space-y-4',
          size[type],
          flex && 'flex flex-col justify-end md:justify-center',
          className,
        )}
        {...props}
      >
        {children}
      </main>
    </div>
  );
};
