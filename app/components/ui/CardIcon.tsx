import Link from 'next/link';
import { ElementType } from 'react';

interface CardIconProps {
  icon: ElementType;
  title: string;
  description: string;
  href?: string;
  color?: string;
  className?: string;
}

export default function CardIcon({ icon: Icon, title, description, href, color = 'text-primary', className = '' }: CardIconProps) {
  const content = (
    <>
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
        <Icon size={28} className={`${color} group-hover:text-white transition-colors duration-300`} />
      </div>
      <h3 className="font-heading font-bold text-xl text-text-dark mb-4 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-text-muted leading-relaxed text-[0.95rem] line-clamp-3">
        {description}
      </p>
      {href && (
        <span className="inline-block mt-4 text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
          Learn more →
        </span>
      )}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full group-hover:bg-primary/10 transition-colors duration-300" />
      </div>
    </>
  );

  const containerClasses = `group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-400 border border-gray-100 hover:border-primary/20 block ${className}`;

  if (href) {
    return (
      <Link href={href} className={containerClasses}>
        {content}
      </Link>
    );
  }

  return (
    <div className={containerClasses}>
      {content}
    </div>
  );
}
