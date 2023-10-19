import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/slices/appSlice";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { youtube_search_api } from "../utils/YoutubeApi";
import { searchCache } from "../utils/slices/cacheSlice";
//  import Logo from "../utils/image/youtubenewlogo.png";
const Header = () => {
  const [searchQueary, setSearchQueary] = useState("");
  const [getQueryData, setGetQueryData] = useState([]);
  const [showSuggesation, setShowSuggesation] = useState(false);
  const cacheData=useSelector((store)=>store.cache);
  const dispatch = useDispatch();

  const MenuOpen = () => {
    dispatch(toggleMenu());
  };
  useEffect(() => {
    const Timmer = setTimeout(() => {
      if(cacheData[searchQueary]){
        setGetQueryData(cacheData[searchQueary])
      }else{
      getSearchParameter();
       
      }
    }, 200);
    return () => {
      clearTimeout(Timmer);
    };
  }, [searchQueary]);
  const getSearchParameter = async () => {
    const Data = await fetch(youtube_search_api + searchQueary);
    const json = await Data.json();
    setGetQueryData(json[1]);
    // console.log(getQueryData);
    // if api call is not present please update
    dispatch(searchCache({
      [searchQueary]:json[1],
    }))
  };
  return (
    <div className="grid grid-flow-col p-1 m-1 shadow-lg align-middle">
      <div className="flex col-span-1 ">
        <img
          className="h-10"
          src={
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADPz89LS0uWlpb5+fmFhYXHx8eSkpJnZ2ezs7Oqqqp3d3cWFhbk5OT19fU/Pz9aWlra2tqkpKTu7u4PDw+9vb1gYGB9fX0zMzMkJCQaGhqbm5s4ODjLy8tQUFACQSuFAAACZ0lEQVR4nO3d7VLCMBCF4VipfKMiAorI/d+lVmHQP7spyczObt/nCs4Za7RhSVICAAAAAAAAAAAAAAAAgAEYT6b3fkwn4371Nvs7f/ab/IIT67A3mmT2a4/WSW92bLMKLq1zFljmVHyzTlnkTS/4YJ2x0INWcGWdsNhKaTi1DlhsKhd8tM5XwaPYcGYdr4KZ2HBhHa+ChdjwyTpeBU9iw1freBW8ig2t01UhNny3TlfBu9jw2TpeBc9iw5F1vApGYsPGOl4FjdgwwGIqL6Upza0DFpsrDdPBOmGhg1Ywra0jFlqrDZ0/p+oz2nmxTlngJadgSmPrnDfL3hZufb5ELbL2Es82H942TY8fPba8z1aNH9r2EwAAAAAAAAAA8Kz9nI/8mH/2+dypsz1Zf5bU22nbo1/jc1zhoEzSXPkdZlfH2H/trHMW2OUU9PkJ94U8IPzD+6S3POX9rbVOWEz7s+F3lbnQVhvrfBXIBf0OC13JY0P+H1LtMb23jlfBSWzo+duVF0uxoXW6Kgb+M4z/exh/LY3/9zDCUiMXDPCYav+Xxn+3iP9+OIB3/AHs03hebTL32lJqfH5ZNn+/NMXf8+5E/9wCAAAAAAAAAAB4EvucqOhnfYU/r83v2FDmmXvhz00Mf/Zl/PNLfX6p60o9g9b3M9rRntPwZ0HHP8/b611Wf8lnssc/V9/nuNd/8t0I1umqEBv6X0q1xTT+PTM+X5v+k8eEvU95d+RJ7/h3dsW/d20Ad+c5HmP/lTHMHv4OywHcQxr/Ltnk9x0q9z7gNIA7nTvB7+UGAAAAAAAAAAAAAAAAAJ++ACLpVB+zWmM6AAAAAElFTkSuQmCC"
          }
          onClick={MenuOpen}
          alt="humbuger"
        />
        <Link to="/">
          <img
            className="h-10 mx-2"
            src={
              "https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
            }
            alt="logo"
          />
        </Link>
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2  border border-grey-400 p-2 rounded-l-full"
          type="text"
          placeholder="search"
          value={searchQueary}
          onChange={(e) => setSearchQueary(e.target.value)}
          onFocus={() => setShowSuggesation(true)}
          onBlur={() => setShowSuggesation(false)}
        />
        <button className="border border-grey-400 p-2 rounded-r-full bg-gray-100">
          🔍
        </button>
        {showSuggesation && (
          <div className="absolute z-10 mt-2 w-96 border border-gray-300 bg-white rounded-b-lg shadow-lg">
            {getQueryData?.map((getValue, index) => (
              <div
                key={index}
                className="p-2 m-2 flex gap-3  hover:bg-gray-300 cursor-pointer "
              >
                <span>🔍</span>
                {getValue}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="col-span-1 flex">
        <img
          className="h-8"
          src={"https://cdn-icons-png.flaticon.com/512/3177/3177440.png"}
          alt="profile"
        />
        <span>🚨</span>
      </div>
    </div>
  );
};

export default Header;
