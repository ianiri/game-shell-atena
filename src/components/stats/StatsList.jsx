import { useSelector } from 'react-redux';

export const StatsList = () => {
  const stats = useSelector(({ auth }) => {
    return auth.stats;
  });
  const { gamesPlayed, gamesWon, gamesLost } = stats;

  return (
    <ul className="border rounded-md shadow">
      <li>{gamesPlayed}</li>
      <li>{gamesWon}</li>
      <li>{gamesLost}</li>
    </ul>
  );
};
