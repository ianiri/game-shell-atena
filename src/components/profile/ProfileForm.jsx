import {useDispatch, useSelector} from "react-redux";
import {Button} from "../common/ui";
import {TbDeviceFloppy} from 'react-icons/tb';
import {setUserProfile, updateProfile} from "../../store/action/profile/profileActions";

export const ProfileForm = () => {
  const dispatch = useDispatch();
  const { mainColor, secondaryColor, eyeColor } = useSelector(({ profile }) => {
    return profile.colors;
  });

  const { id: userId } = useSelector(({ auth }) => {
    const { id } = auth.user;

    return {
      id,
    };
  });

  const onChange = (event) => {
    const element = event.currentTarget;
    const { id: targetKey, value: colorValue } = element;
    const payload = {
      mainColor,
      secondaryColor,
      eyeColor,
    };

    payload[targetKey] = colorValue;

    dispatch(
      setUserProfile({
        colors: payload,
      }),
    );
  };

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(
      updateProfile(userId, {
        colors: {
          mainColor,
          eyeColor,
          secondaryColor,
        },
      }),
    );
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <div className="flex justify-between">
        <label htmlFor="mainColor">Main Color</label>

        <input
          type="color"
          name="mainColor"
          id="mainColor"
          value={mainColor}
          onChange={onChange}
        ></input>
      </div>

      <div className="flex justify-between">
        <label htmlFor="secondaryColor">Secondary Color</label>

        <input
          type="color"
          name="secondaryColor"
          id="secondaryColor"
          value={secondaryColor}
          onChange={onChange}
        ></input>
      </div>

      <div className="flex justify-between">
        <label htmlFor="eyeColor">Eye Color</label>

        <input
          type="color"
          name="eyeColor"
          id="eyeColor"
          value={eyeColor}
          onChange={onChange}
        ></input>
      </div>

      <div className="text-center">
        <Button type="submit" title="Save" className="gap-2 items-center">
          <TbDeviceFloppy></TbDeviceFloppy>
          Save
        </Button>
      </div>
    </form>
  );
};
