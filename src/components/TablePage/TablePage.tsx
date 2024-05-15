import { FC } from 'react';

export interface TablePageProps {
  title: string;
  subTitle: string;
  actions?: React.ReactElement;
  children?: React.ReactElement;
}

export const TablePage: FC<TablePageProps> = ({
  title, actions, subTitle, children,
}) => (
  <div className="space-y-6">
    <div className="grid grid-cols-2">
      <div className="col-span-1">
        <h1 className="text-text-primary text-3xl font-semibold">{title}</h1>
        <p className="text-cool-gray-700 text-sm">{subTitle}</p>
      </div>
      <div className="col-span-1">
        <div className="flex justify-end">
          {actions}
        </div>
      </div>
    </div>
    {children}
  </div>
);
