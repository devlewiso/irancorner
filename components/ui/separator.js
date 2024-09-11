import React from 'react';
import { cn } from '@/lib/utils'; // Asegúrate de que esta función exista

const Separator = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("w-full h-px bg-gray-200", className)} {...props} />
));
Separator.displayName = "Separator";

export { Separator };
