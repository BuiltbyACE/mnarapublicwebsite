import { ElementType, ReactNode } from 'react';

interface SectionHeaderProps {
  label: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  icon?: ElementType;
}

export default function SectionHeader({ label, title, description, align = 'center', className = '', icon: Icon }: SectionHeaderProps) {
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }[align];

  return (
    <div className={`mb-14 ${alignmentClass} ${className}`}>
      <span className="section-label inline-flex items-center gap-2">
        {Icon && <Icon size={14} />}
        {label}
      </span>
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-dark mt-2 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-text-muted text-lg max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
