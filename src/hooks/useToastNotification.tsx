import { useCallback } from 'react';
import { Banner, showBanner, BannerType } from 'components/Banner';

export const useToastNotification = () => {
  const showBannerDefault = useCallback((type: BannerType, title: string, message?: string) => {
    showBanner((
      <Banner
        type={type}
        title={title}
        message={message}
      />
    ));
  }, []);

  const success = useCallback((title: string, message?: string) => {
    showBannerDefault(BannerType.SUCCESS, title, message);
  }, [showBannerDefault]);

  const warning = useCallback((title: string, message?: string) => {
    showBannerDefault(BannerType.WARNING, title, message);
  }, [showBannerDefault]);

  const info = useCallback((title: string, message?: string) => {
    showBannerDefault(BannerType.INFO, title, message);
  }, [showBannerDefault]);

  const error = useCallback((title: string, message?: string) => {
    showBannerDefault(BannerType.ERROR, title, message);
  }, [showBannerDefault]);

  return {
    success,
    warning,
    info,
    error,
  };
};
