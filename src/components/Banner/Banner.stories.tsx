/* eslint-disable import/no-extraneous-dependencies */
import { Meta, StoryFn } from '@storybook/react';
import { Toaster as ToastProvider } from 'react-hot-toast';
import { Button } from '../Button';
import {
  Banner, showBanner, BannerType, BannerProps,
} from './Banner';

export default {
  title: 'Components/Banner',
  component: Banner,
} as Meta;

const Template: StoryFn<BannerProps> = (args: BannerProps) => {
  const BannerMessageInfo = <Banner {...args} />;
  const BannerMessageWarning = <Banner {...args} type={BannerType.WARNING} />;
  const BannerMessageError = <Banner {...args} type={BannerType.ERROR} />;
  const BannerMessageSuccess = <Banner {...args} type={BannerType.SUCCESS} />;
  showBanner(BannerMessageError);
  showBanner(BannerMessageSuccess);
  showBanner(BannerMessageWarning);
  showBanner(BannerMessageInfo);
  return (
    <div className="max-w-xs">
      <ToastProvider position="top-center" />
      <p>
        Hover banner
        <br />
        to see the
        <br />
        different variations.
      </p>
      <Button onClick={() => showBanner(BannerMessageInfo)}>Add new banner</Button>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  type: BannerType.INFO,
  title: 'A banner or toast',
  message: 'Served with a message',
};
