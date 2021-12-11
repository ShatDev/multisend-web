const Suggestion = ({ item }: any) => (
  <div>
    <img src={item.image} className="w-4 h-4 object-contain rounded-full" alt="collection" />
    <div className=" bg-yellow-100 py-3 px-5"> {item.name}</div>
  </div>
);

export default Suggestion;
