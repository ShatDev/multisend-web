/* eslint-disable jsx-a11y/click-events-have-key-events */
const Suggestion = ({ item, onClick }: any) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <div className="flex items-center bg-yellow-100 py-3 px-5 cursor-pointer" onClick={onClick}>
    <img
      alt="content"
      className="object-contain object-center h-6 w-6 rounded-full mr-2"
      src={item.image}
    />
    <div className=""> {item.name}</div>
  </div>
);

export default Suggestion;
