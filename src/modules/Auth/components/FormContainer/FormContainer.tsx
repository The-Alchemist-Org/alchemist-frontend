import { FC } from 'react';

type Props = {
  children: React.ReactNode;
};

export const FormContainer: FC<Props> = ({ children }) => (
  <div className="flex bg-cool-gray-50 min-h-screen p-10">
    <div className="flex justify-between">
      <div className="flex flex-col w-full lg:max-w-[50%] justify-between items-center pr-6">
        <img
          src="/vite.svg"
          alt="logo"
          className="max-h-[15vh] self-start max-w-[250px]"
        />
        <div className="w-full flex flex-grow items-center justify-center">
          <div className="w-full md:w-10/12 xl:w-6/12">
            {children}
          </div>
        </div>
        <div className="text-cool-gray text-xs">
          <h2 className="font-semibold text-gray-900">
            Disclaimer
          </h2>
          <p className="text-left">
            This site generates alcholism. Please drink responsibly.
          </p>
        </div>
      </div>
      <div className="hidden lg:flex flex-grow justify-end">
        <img
          src="https://thatsup.website/storage/265/18680/responsive-images/FUJI4919___media_library_original_4000_2667.jpg"
          alt="some ship"
          className="rounded-md object-cover max-h-[100vh]"
        />
      </div>
    </div>
  </div>
);
