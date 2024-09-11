import React from 'react';
import { cn } from '@/lib/utils'; // Asegúrate de tener esta función utilitaria en tu proyecto

// Componente principal del diálogo
const Dialog = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50',
        className
      )}
      {...props}
    />
  )
);
Dialog.displayName = 'Dialog';

// Componente del encabezado del diálogo
const DialogHeader = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('p-4 border-b border-gray-200', className)}
      {...props}
    />
  )
);
DialogHeader.displayName = 'DialogHeader';

// Componente del título del diálogo
const DialogTitle = React.forwardRef(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-lg font-semibold', className)}
      {...props}
    />
  )
);
DialogTitle.displayName = 'DialogTitle';

// Componente del contenido del diálogo
const DialogContent = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('p-4', className)}
      {...props}
    />
  )
);
DialogContent.displayName = 'DialogContent';

export { Dialog, DialogHeader, DialogTitle, DialogContent };
