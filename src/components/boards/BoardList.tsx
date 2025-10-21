interface Props {
  children?: React.ReactNode;
}

const BoardList: React.FC<Props> = function ({ children }) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {children}
    </ul>
  );
};

export default BoardList;
