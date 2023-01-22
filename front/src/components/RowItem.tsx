import { FC, memo } from "react";

interface IProps {
  user: {
    id: string;
    name: string;
    address: string;
    phone: string;
  };
  number: number;
}

const RowItem: FC<IProps> = ({
  user: { id, name, address, phone },
  number
}) => {
  return (
    <div className="h-12 flex justify-around divide-x">
      <div className="h-full w-16 flex justify-center items-center">
        {number}
      </div>
      <div className="h-full w-3/12 flex justify-center items-center px-2">
        {id}
      </div>
      <div className="h-full w-2/6 flex justify-center items-center px-2">
        {name}
      </div>
      <div className="h-full w-4/6 flex justify-center items-center px-2 text-center">
        {address}
      </div>
      <div className="h-full w-3/12 flex justify-center items-center px-2">
        {phone}
      </div>
    </div>
  );
};

export default memo(RowItem)
