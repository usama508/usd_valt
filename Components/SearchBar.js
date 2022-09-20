/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
import { useRef,useEffect,useState } from "react";
import Link from "next/link";

const SearchBar = () => {
    
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [hide, setHide] = useState('hidden')
  
  const ref = useRef();
    const clickPoint = useRef();
    const handleFocus = () => {
        clickPoint.current.style.display = "none";
    };

    const handleBlur = () => {
        clickPoint.current.style.display = "block";
    };

    const fetchUrl = () => {
        fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false"
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setUser(data);
          });
      };
    
      useEffect(() => {
        fetchUrl();
      }, []);

      const getValue = () => {
        setSearch(ref.current.value);
        if (ref.current.value != "") {
          setHide("block");
        } else {
          setHide("hidden");
        }
        
        
      };

    return (
        <>
        <form>
        <div className="items-center px-4 flex justify-center" >
            <div className="relative mr-3">
                <div className="absolute top-3 left-3 items-center" ref={clickPoint}>
                    <svg className="w-5 h-5 text-sky-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input
                    type="text"
                    className="block p-2 pl-10 w-70 text-sky-900 bg-sky-50 rounded-lg border border-sky-300 focus:pl-3"
                    placeholder="Search Coin..."
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    ref={ref}
            onChange={getValue}
                />
            </div>
        </div>
         <div
         className={`${hide} absolute top-30 mt-1 drop-shadow bg-sky-300 w-96 px-10 py-3 rounded-md`}
       >
         {user
           .filter((val) => {
             if (search == "") {
               return val;
             } else if (
               val.name.toLowerCase().includes(search.toLowerCase())
             ) {
               return val;
             }
           })
           .map((value,key) => {
             return (
               <div key={value.id}>
                 <span className="hover:text-sky-600">
                   <Link href={`/coins/${value.id}`}>
                     <a>
                       <div className="flex">
                         <img className="mr-2 mb-2" width="25" src={value.image} />
                         {value.name}
                       </div>
                     </a>
                   </Link>
                 </span>
               </div>
             );
           })}
       </div></form></>
    );
}

export default SearchBar