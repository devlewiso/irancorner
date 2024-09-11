import React from 'react';
import { cn } from '@/lib/utils'; // Asegúrate de que esta función exista

const Badge = React.forwardRef(({ className, ...props }, ref) => (
  <span ref={ref} className={cn("inline-flex items-center px-2.5 py-0.5 rounded text-sm font-medium bg-blue-100 text-blue-800", className)} {...props} />
));
Badge.displayName = "Badge";

export { Badge };
