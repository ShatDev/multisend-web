const Suggestion = ({ item }: any) => (
  <div className="flex items-center bg-yellow-100 py-3 px-5">
    <img
      alt="content"
      className="object-contain object-center h-6 w-6 rounded-full mr-2"
      src={item.image}
    />
    <div className=""> {item.name}</div>
  </div>
);

export default Suggestion;
