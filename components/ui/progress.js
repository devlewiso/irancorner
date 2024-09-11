import React from 'react';
import { cn } from '@/lib/utils'; // Asegúrate de que esta función existe

const Progress = React.forwardRef(
  ({ className, value, max = 100, ...props }, ref) => {
    const percentage = (value / max) * 100;

    return (
      <div
        ref={ref}
        className={cn('relative w-full h-4 bg-gray-200 rounded', className)}
        {...props}
      >
        <div
          className="absolute top-0 left-0 h-full bg-blue-500 rounded"
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  }
);
Progress.displayName = 'Progress';

export { Progress };
