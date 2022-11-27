// // import React from "react";
// // let API_key = "f89466761449b5afaef84a8fb3c666f9";
// // let base_url = "https://api.themoviedb.org/3";
// // let url =
// //   base_url +
// //   "/search/movie?api_key=f89466761449b5afaef84a8fb3c666f9&language=ko-kr&query=" +
// //   API_key;
// // let arr = ["액션"];
// // const Main = () => {
// //   const [movieData, setData] = useState([]);

// //   const [url_set, setUrl] = useState(url);

// //   useEffect(() => {
// //     fetch(url_set)
// //       .then((res) => res.json())
// //       .then((data) => {
// //         //console.log (data.results);
// //         setData(data.results);
// //       });
// //   }, [url_set]);
// // };

// // const MovieTag = [
// //   { name: "" },
// //   { name: "" },
// //   { name: "" },
// //   { name: "" },
// //   { name: "" },
// //   { name: "" },
// //   { name: "" },
// // ];

// const MovieTag = ({ onSearch }) => {
//   function btnClick(e) {
//     onSearch(e.target.innerHTML);
//   }
//   return (
//     <>
//       <ul className="category__menu">
//         {arr.map((value) => {
//           return (
//             <li>
//               <a
//                 href="#"
//                 name={value}
//                 onClick={(e) => {
//                   getData(e.target.name);
//                 }}
//               >
//                 {value}
//               </a>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// };

// export default MovieTag;
