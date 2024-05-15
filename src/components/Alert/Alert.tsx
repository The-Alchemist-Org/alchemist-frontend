import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { Warning, Info } from '@mui/icons-material';
import { cn } from 'utils/cn';

export const AlertDialogRoot = AlertDialog.Root;
export const AlertDialogTrigger = AlertDialog.Trigger;
export const AlertDialogCancel = AlertDialog.Cancel;
export const AlertDialogConfirm = AlertDialog.Action;

export enum AlertDialogType {
  INFO = 'info',
  WARNING = 'warning',
}

interface AlertDialogContentTypeProps {
  type?: AlertDialogType;
  children: React.ReactNode;
}

export const AlertDialogContentType: React.FC<AlertDialogContentTypeProps> = ({
  type,
  children,
}) => {
  const DialogIcon = {
    [AlertDialogType.INFO]: <Info className="text-secondary" fontSize="large" />,
    [AlertDialogType.WARNING]: <Warning className="text-warning" fontSize="large" />,
  };
  return (
    <div className="flex flex-row gap-6 p-8">
      {type && DialogIcon[type]}
      <div className="flex flex-col gap-4">
        {children}
      </div>
    </div>
  );
};

export const AlertDialogContent = React.forwardRef<
React.ElementRef<typeof AlertDialog.Content>,
React.ComponentPropsWithoutRef<typeof AlertDialog.Content>
>(({
  children,
  className,
  ...props
}, forwardedRef) => (
  <AlertDialog.Portal>
    <AlertDialog.Overlay className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
    <AlertDialog.Content
      className={cn('fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]', className)}
      ref={forwardedRef}
      {...props}
    >
      {children}
    </AlertDialog.Content>
  </AlertDialog.Portal>
));

export const AlertDialogTitle = React.forwardRef<
React.ElementRef<typeof AlertDialog.Title>,
React.ComponentPropsWithoutRef<typeof AlertDialog.Title>
>(({ className, ...props }, ref) => (
  <AlertDialog.Title
    ref={ref}
    className={cn(
      'text-xl font-semibold text-gray-900 leading-none tracking-tight',
      className,
    )}
    {...props}
  />
));

export const AlertDialogDescription = React.forwardRef<
React.ElementRef<typeof AlertDialog.Description>,
React.ComponentPropsWithoutRef<typeof AlertDialog.Description>
>(({ className, ...props }, ref) => (
  <AlertDialog.Description
    ref={ref}
    className={cn(
      'text-sm text-gray leading-lg',
      className,
    )}
    {...props}
  />
));

export const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 bg-cool-gray-50 px-6 py-4',
      className,
    )}
    {...props}
  />
);
