export type Size = 'sm' | 'md' | 'lg';

export interface AvatarProps {
    src?: string;
    alt?: string;
    size?: Size;
    className?: string;
  }

export const Avatar: React.FC<AvatarProps> = ({ 
    src, 
    alt = '', 
    size = 'md', 
    className = '' 
  }) => {
    const sizeClasses = {
      sm: 'w-8 h-8',
      md: 'w-12 h-12',
      lg: 'w-16 h-16'
    };
  
    return (
      <div className={`rounded-full shadow-md bg-white overflow-hidden ${sizeClasses[size]} ${className}`}>
        {src && <img src={src} alt={alt} className="w-full h-full object-cover" />}
      </div>
    );
  };