interface Props {
  children?: React.ReactNode;
}

export const AuthenticationContainer = ({ children }: Props) => (
  <main className='max-w-96 min-h-dvh h-max mx-auto flex flex-col justify-end md:justify-center p-4 md:px-0 space-y-4'>
    {children}
  </main>
);
