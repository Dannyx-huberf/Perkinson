import React from 'react';
import { Button } from '@/components/ui/button';

export default function Buttons({
  icon: Icon,
  label,
  href,
  onClick,
  type = 'button',
  className = '',
}) {
  const isLink = !!href;

  return (
    <Button
      asChild={isLink}
      type={isLink ? undefined : type}
      onClick={!isLink ? onClick : undefined}
      className={className}
    >
      {isLink ? (
        <a
          href={href}
          onClick={(e) => {
            e.preventDefault();
            onClick?.();
          }}
          className='flex items-center gap-2'
        >
          <span>{label}</span>
          {Icon && <Icon className='w-5 h-5' />}
        </a>
      ) : (
        <span className='flex items-center gap-1'>
          <span>{label}</span>
          {Icon && <Icon className='w-5 h-5' />}
        </span>
      )}
    </Button>
  );
}
