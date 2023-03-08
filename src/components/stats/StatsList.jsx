import { GiConsoleController } from 'react-icons/gi';
import { CgSmile } from 'react-icons/cg';
import { CgSmileSad } from 'react-icons/cg';

export const StatsList = ({ played = 0, won = 0, lost = 0 }) => {
  return (
    <ul className="border rounded-md shadow mt-4">
      <li className="border-b p-3 flex items-center">
        <GiConsoleController size={28} className="mr-2 text-indigo-700 fill-current"></GiConsoleController>{played} games played.
        </li>
      <li className="border-b p-3 flex items-center">
        <CgSmile size={25} className="mr-2 text-green-700 fill-current"></CgSmile>{won} games won.
      </li>
      <li className="p-3 flex items-center">
        <CgSmileSad size={25} className="mr-2 text-red-700 fill-current"></CgSmileSad>{lost} games lost.
      </li>
    </ul>
  );
};
