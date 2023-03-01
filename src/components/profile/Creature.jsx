import { css } from '@emotion/css';
import { useSelector } from 'react-redux';

export const Creature = () => {
  const { mainColor, secondaryColor, eyeColor } = useSelector(({ profile }) => {
    return profile.colors;
  });

  const cssClass = css`
    border: 1px solid red;

    div {
      padding: 6px;
    }

    & :first-child {
      background-color: ${mainColor};
    }

    & :nth-child(2) {
      background-color: ${secondaryColor};
    }

    & :last-child {
      background-color: ${eyeColor};
    }
  `;

  return (
    <div className={cssClass}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
