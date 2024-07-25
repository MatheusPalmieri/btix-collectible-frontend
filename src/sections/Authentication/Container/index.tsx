import { Navbar } from '@/components/Navbar';
import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<'main'> {
  children?: React.ReactNode;
  back?: string;
}

export const AuthenticationContainer = ({ children, back, className, ...props }: Props) => (
  <div>
    <Navbar back={back} />

    <main
      className={cn(
        'max-w-96 min-h-screen-minus-80 h-max mx-auto flex flex-col justify-end md:justify-center p-4 md:px-0 space-y-4',
        className,
      )}
      {...props}
    >
      {children}
    </main>
  </div>
);
