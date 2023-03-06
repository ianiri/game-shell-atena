import {useDispatch} from "react-redux";
import {resolveGame} from "../../store/action/game/gameActions";
import {Button} from "../common/ui";

export const Game = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-4">
      <Button
        skin="danger"
        title="Loose game"
        onClick={() => {
          dispatch(resolveGame(false));
        }}
      >
        Loose game
      </Button>

      <Button
        sking="success"
        title="Win game"
        onClick={() => {
          dispatch(resolveGame(true));
        }}
      >
        Win game
      </Button>
    </div>
  );
};
