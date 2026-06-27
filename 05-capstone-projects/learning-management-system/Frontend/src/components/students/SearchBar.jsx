import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets.js';
import { useState } from 'react';

const Search = ({data}) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data ? data : "");
  const [error, setError] = useState(false);

  const onSearchHandler = async (e) => {
    e.preventDefault();
    try {
      if(!input) {
        setError(true);
        return;
      }
      navigate('/course-list/' + input);
    } catch (error) {
      console.log(error);
    }
    setError(false);
  }

  return (
    <div className="flex items-center justify-center">
      <div className={`w-full max-w-xl items-center bg-white border-2 ${error && !input ? 'border-red-500' : 'border-gray-300'} rounded py-2`}>
        <form
          onSubmit={onSearchHandler}
          className="flex items-center justify-between px-4 gap-3 font-medium"
        >
          <img src={assets.search_icon} className="w-8 md:w-auto " alt="" />
          <input
            onChange={(e) => { setInput(e.target.value); setError(false)}}
            value={input}
            type="text"
            placeholder="Search for courses"
            className="outline-0 text-gray-600 w-full h-full"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-md px-8 md:px-10 py-2 hover:scale-105 active:scale-95 transition-all duration-200 sm:ml-10"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search
