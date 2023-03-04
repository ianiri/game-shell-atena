import { useSelector } from 'react-redux';
import { BiEnvelope } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';


export const UserProfile = () => {
  const { name, avatar, email } = useSelector(({ auth }) => {
    const { user } = auth;
    const { name, avatar, email } = user;

    return {
      name,
      avatar,
      email,
    };
  });

  return (
    <>
      <h1 className="text-xl mb-8">User Info</h1>

      <div className="flex flex-col md:flex-row justify-between">
        <picture>
          <img src={avatar} alt={name} className="mr-8 inline-block w-16 rounded-full self-center overflow-hidden shadow mb-4 md:mb-0"></img>
        </picture>

        <ul className="border rounded-md shadow flex-grow">
          <li className="border-b p-1 flex items-center">
            <AiOutlineUser className="mr-1 text-zinc-500 fill-current"></AiOutlineUser>{email}
          </li>
          <li className="border-b p-1 flex items-center">
            <BiEnvelope className="mr-1 text-zinc-500 fill-current"></BiEnvelope>{name}
          </li>
        </ul>
      </div>
    </>
  );
};
