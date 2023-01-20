import { FC } from "react";

interface IProps {
  user: {
    id: string;
    name: string;
    address: string;
    phone: string;
  };
  number: number;
}

export const RowItem: FC<IProps> = ({
  user: { id, name, address, phone },
  number
}) => {
  return (
    <div className="h-12 flex justify-around divide-x">
      <div className="h-full w-16 flex justify-center items-center">
        {number}
      </div>
      <div className="h-full w-1/6 flex justify-center items-center px-2">
        {id}
      </div>
      <div className="h-full w-2/6 flex justify-center items-center px-2">
        {name}
      </div>
      <div className="h-full w-3/6 flex justify-center items-center px-2">
        {address}
      </div>
      <div className="h-full w-1/6 flex justify-center items-center px-2">
        {phone}
      </div>
    </div>
  );
};
