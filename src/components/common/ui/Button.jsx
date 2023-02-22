const skins = {
  primary:
    'bg-blue-500 inline-flex h-full text-center py-2 px-4 text-white rounded hover:bg-blue-700',
};

export const Button = ({ children, skin = 'primary', ...props }) => {
  const skinClasses = skins[skin];

  return (
    <button {...props} className={skinClasses}>
      {children}
    </button>
  );
};
