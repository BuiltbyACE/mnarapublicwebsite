import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: 'white' | 'offwhite' | 'dark' | 'primary';
  noPadding?: boolean;
}

const bgColors = {
  white: 'bg-white',
  offwhite: 'bg-off-white',
  dark: 'bg-secondary text-white',
  primary: 'bg-primary text-white',
};

export default function SectionWrapper({
  children,
  className = '',
  id,
  bg = 'white',
  noPadding = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`${bgColors[bg]} ${noPadding ? '' : 'py-16 md:py-24'} ${className}`}
    >
      <div className={noPadding ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>
        {children}
      </div>
    </section>
  );
}
