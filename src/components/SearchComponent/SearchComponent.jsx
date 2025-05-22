import { useState } from "react";
import axios from "axios";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const response = await axios.post("http://localhost:5000/search", { query });
    setResults(response.data);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Введите запрос..."
        className="border p-2"
      />
      <button onClick={handleSearch} className="ml-2 bg-blue-500 text-white px-4 py-2">
        Поиск
      </button>
      <ul>
        {results.map((item, index) => (
          <li key={index} className="mt-2">{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
