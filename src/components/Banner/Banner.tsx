import { useState, useMemo, useEffect } from 'react';
import toast, { useToasterStore } from 'react-hot-toast';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import { CheckCircleRounded, Close, Info } from '@mui/icons-material';
import { cn } from '../../utils/cn';

export enum BannerType {
  INFO = 'information',
  WARNING = 'warning',
  SUCCESS = 'success',
  ERROR = 'error',
}

export const showBanner = (Component: React.ReactElement): string => toast
  .custom(Component);

export type BannerProps = {
  type: BannerType;
  title: string;
  message?: string;
  duration?: number;
};

export const Banner = ({
  type, title, message, duration,
}: BannerProps) => {
  const [dismiss, setDismiss] = useState(false);
  const { toasts } = useToasterStore({ duration });
  const toastClass = useMemo(() => cn(
    'flex items-center justify-between w-2/3 min-w-md max-w-3xl p-6 shadow-lg rounded-md border-b-2',
    {
      'bg-blue-50 border-blue-500': type === 'information',
      'bg-warning-50 border-warning': type === 'warning',
      'bg-success-50 border-success': type === 'success',
      'bg-error-50 border-error': type === 'error',
    },
    { hidden: dismiss },
  ), [type, dismiss]);

  const getSvg = useMemo(() => {
    switch (type) {
      case 'warning':
        return <WarningIcon className="text-warning" />;
      case 'success':
        return <CheckCircleRounded className="text-success" />;
      case 'error':
        return <ErrorIcon className="text-error" />;
      default:
        return <Info className="text-blue-700" />;
    }
  }, [type]);

  const dismissAll = useMemo(() => toasts.filter((x) => x.visible)?.length > 1, [toasts]);

  // fix for https://github.com/timolins/react-hot-toast/issues/101
  useEffect(() => {
    toasts?.forEach((item) => {
      if (!item.visible) {
        toast.remove(item.id);
      }
    });
  }, [toasts]);

  return (
    <div className={toastClass}>
      <div className="flex gap-6 grow items-center justify-center">
        <div className="w-6 h-6">
          {getSvg}
        </div>
        <div className="grow text-gray-900">
          <h3 className="text-md leading-2xl font-semibold">{title}</h3>
          <p className="text-sm leading-lg">{message}</p>
          {dismissAll && (
            <button
              type="button"
              aria-label="Dismiss all"
              onClick={() => toast.dismiss()}
              className="focus:outline-none underline text-xs"
            >
              Dismiss all
            </button>
          )}
        </div>
      </div>
      <div className="grow-0">
        <button
          type="button"
          aria-label="Dismiss toast"
          onClick={() => setDismiss(true)}
          className="focus:outline-none text-gray w-6 h-6"
        >
          <Close />
        </button>
      </div>
    </div>
  );
};

Banner.defaultProps = {
  duration: 5000,
};
