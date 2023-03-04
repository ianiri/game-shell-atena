import { useSelector } from 'react-redux';
import { GiConsoleController } from 'react-icons/gi';
import { CgSmile } from 'react-icons/cg';
import { CgSmileSad } from 'react-icons/cg';

export const StatsList = () => {
  const stats = useSelector(({ auth }) => {
    return auth.stats;
  });
  const { gamesPlayed, gamesWon, gamesLost } = stats;

  return (
    <ul className="border rounded-md shadow mt-4">
      <li className="border-b p-3 flex items-center">
        <GiConsoleController size={28} className="mr-2 text-indigo-700 fill-current"></GiConsoleController>{gamesPlayed} games played.
        </li>
      <li className="border-b p-3 flex items-center">
        <CgSmile size={25} className="mr-2 text-green-700 fill-current"></CgSmile>{gamesWon} games won.
      </li>
      <li className="p-3 flex items-center">
        <CgSmileSad size={25} className="mr-2 text-red-700 fill-current"></CgSmileSad>{gamesLost} games lost.
      </li>
    </ul>
  );
};
