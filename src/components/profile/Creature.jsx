import { css } from '@emotion/css';
import { useSelector } from 'react-redux';

export const Creature = () => {
  const { mainColor, secondaryColor, eyeColor } = useSelector(({ profile }) => {
    return profile.colors;
  });

  const cat = css`
    position: relative;
    border-radius: 50%;
    height: 4em;
    width: 6em;
    box-shadow: 0px 1px 5px -1px #000000;

    &:hover {
      transform: scale(1.8);
    }

    .face {
      position: relative;
      background-color: ${mainColor};
      border-radius: 50%;
      height: 100%;
      width: 100%;
    }

    .pattern {
      background-color: ${secondaryColor};
      position: absolute;

      &:before,
      &:after {
        background-color: ${secondaryColor};
        content: '';
        position: absolute;
      }
    }

    .patternTop{
      border-radius: 0 0 50% 50%;
      height: 1em;
      margin-left: -0.1em;
      top: 0;
      left: 50%;
      width: 0.2em;

      &:before {
        border-radius: 0 0 50% 50%;
        height: 0.6em;
        margin-left: -0.6em;
        top: 0;
        left: 50%;
        width: 0.2em;
      }

      &:after {
        border-radius: 0 0 50% 50%;
        height: 0.6em;
        margin-right: -0.6em;
        top: 0;
        right: 50%;
        width: 0.2em;
      }
    }

    .patternLeft {
      border-radius: 0 50% 50% 0;
      height: 0.2em;
      margin-top: -0.1em;
      top: 50%;
      left: 0;
      width: 1em;

      &:before {
        border-radius: 0 50% 50% 0;
        height: 0.2em;
        margin-top: -0.6em;
        top: 50%;
        left: 0.1em;
        width: 0.6em;
      }

      &:after {
        border-radius: 0 50% 50% 0;
        height: 0.2em;
        margin-bottom: -0.6em;
        bottom: 50%;
        left: 0.1em;
        width: 0.6em;
      }
    }

    .patternRight {
      border-radius: 50% 0 0 50%;
      height: 0.2em;
      margin-top: -0.1em;
      top: 50%;
      right: 0;
      width: 1em;

      &:before {
        border-radius: 50% 0 0 50%;
        height: 0.2em;
        margin-top: -0.6em;
        top: 50%;
        right: 0.1em;
        width: 0.6em;
      }

      &:after {
        border-radius: 50% 0 0 50%;
        height: 0.2em;
        margin-bottom: -0.6em;
        bottom: 50%;
        right: 0.1em;
        width: 0.6em;
      }
    }

    .ears {
      height: 1em;
      position: absolute;
      top: -0.4em;
      left: 0;
      width: 100%;
      z-index: -1;
    }

    .ear {
      background-color: ${mainColor};
      border-radius: 25%;
      height: 1.8em;
      position: absolute;
      top: 0.2em;
      width: 1.8em;

      &:before {
        content: '';
        background: #f4e8da;
        border-radius: 25%;
        height: 1.4em;
        margin-top: -0.7em;
        margin-left: -0.7em;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 1.4em;
      }
    }

    .earLeft {
      left: 0.5em;
      transform: rotate(20deg);
    }

    .earRight {
      right: 0.5em;
      transform: rotate(-20deg);
    }

    .eyes {
      height: 1em;
      position: absolute;
      top: 1em;
      width: 100%;
    }

    .eye {
      background: #000;
      border: 0.06em solid #000;
      border-top: 0.12em solid #000;
      height: 1em;
      overflow: hidden;
      position: absolute;
      bottom: 0;
      width: 1.3em;

      &:before {
        background-color: ${eyeColor};
        content: '';
        height: 1em;
        position: absolute;
        top: 0;
        width: 1.2em;
      }

      &:after {
        background: #000;
        border-radius: 50%;
        content: '';
        height: 1em;
        margin-top: -0.25em;
        position: absolute;
        top: 0em;
        width: 1em;
      }
    }

    .eyeLeft {
      border-radius: 0 70% 0 70%;
      left: 1.1em;

      &:before {
        border-radius: 0 50% 50% 50%;
        left: 0;
      }

      &:after {
        margin-left: -0.45em;
        left: 50%;
      }
    }

    .eyeRight {
      border-radius: 70% 0 70% 0;
      right: 1.1em;

      &:before {
        border-radius: 50% 0 50% 50%;
        right: 0;
      }

      &:after {
        margin-right: -0.45em;
        right: 50%;
      }
    }

    .eyeLight {
      background: #fff;
      border-radius: 50%;
      height: 0.2em;
      margin-left: -0.1em;
      margin-top: -0.2em;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0.2em;
      z-index: 1;
    }

    .nose {
      border-top: 0.5em solid #F26752;
      border-left: 0.5em solid transparent;
      border-right: 0.5em solid transparent;
      height: 0.5em;
      margin-left: -0.5em;
      position: absolute;
      top: 2.5em;
      left: 50%;
      width: 1em;
    }

    .mouth {
      margin-left: -1em;
      overflow: hidden;
      position: absolute;
      top: 3em;
      left: 50%;
      height: 1em;
      width: 2em;

      &:before,
      &:after {
        border: 0.01em solid #333;
        border-radius: 50%;
        content: '';
        display: block;
        height: 0.8em;
        position: absolute;
        top: -0.4em;
        width: 50%;
      }

      &:before {
        margin-left: -0.04em;
        left: 0;
      }

      &:after {
        margin-right: -0.04em;
        right: 0;
      }
    }

    .whiskers {
      height: 1em;
      position: absolute;
      top: 2.5em;
      left: 0;
      width: 100%;
      z-index: 8;
    }

    .whisker {
      height: 1em;
      position: absolute;
      top: 0;
      width: 2.5em;

      &:before,
      &:after {
        border-top: 0.03em solid #eee;
        height: 0.03em;
        position: absolute;
        left: 0;
        width: 2.5em;
      }
    }

    .whiskerLeft {
      margin-left: -0.5em;
      left: 0;

      &:before {
        content: '';
        top: 0;
        -webkit-transform: rotate(10deg);
        transform: rotate(10deg);
      }

      &:after {
        content: '';
        margin-top: -0.005em;
        top: 0.5em;
      }
    }

    .whiskerRight {
      margin-right: -0.5em;
      right: 0;
      &:before {
        content: '';
        top: 0;
        -webkit-transform: rotate(-10deg);
        transform: rotate(-10deg);
      }
      &:after {
        content: '';
        margin-top: -0.005em;
        top: 0.5em;
      }
    }
  `;

  return (
    <div className={cat}>
      <div className="face">
        <div className="ears">
          <div className="ear earLeft"></div>
          <div className="ear earRight">
          </div>
        </div>
        <div className="whiskers">
          <div className="whisker whiskerLeft"></div>
          <div className="whisker whiskerRight"></div>
        </div>
          <div className="pattern patternTop"></div>
          <div className="pattern patternLeft"></div>
          <div className="pattern patternRight"></div>
          <div className="eyes">
            <div className="eye eyeLeft">
              <div className="eyeLight"></div>
            </div>
            <div className="eye eyeRight">
              <div className="eyeLight"></div>
            </div>
          </div>
          <div className="nose"></div>
          <div className="mouth"></div>
      </div>
    </div>
  );
};
