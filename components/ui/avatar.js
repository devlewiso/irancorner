import React from 'react';
import { cn } from '@/lib/utils'; // Asegúrate de que esta función exista

const Avatar = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center justify-center overflow-hidden rounded-full", className)} {...props} />
));
Avatar.displayName = "Avatar";

const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
  <img ref={ref} className={cn("h-full w-full object-cover", className)} {...props} />
));
AvatarImage.displayName = "AvatarImage";

const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center justify-center h-full w-full text-gray-500", className)} {...props}>
    <span>Fallback</span> {/* Puedes personalizar el contenido aquí */}
  </div>
));
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarImage, AvatarFallback };
