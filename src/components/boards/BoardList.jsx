export default function BoardList({ children }) {
  return <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">{children}</ul>;
}
