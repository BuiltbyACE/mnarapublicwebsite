import Image from 'next/image';
import Link from 'next/link';

interface CardImageProps {
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
  href: string;
  className?: string;
}

export default function CardImage({ image, title, subtitle, description, href, className = '' }: CardImageProps) {
  return (
    <Link href={href} className={`group relative rounded-2xl overflow-hidden h-80 block ${className}`}>
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent group-hover:from-primary group-hover:via-primary/60 transition-colors duration-500" />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
        <h3 className="font-heading font-bold text-2xl text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">
          {title}
        </h3>
        {subtitle && (
          <p className="text-white/80 text-sm font-medium mb-2 group-hover:translate-y-[-2px] transition-transform duration-300">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="text-white/70 text-sm leading-relaxed max-w-md line-clamp-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
}
