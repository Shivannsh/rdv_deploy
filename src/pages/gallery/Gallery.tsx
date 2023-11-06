import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import Header from "./header";
import "./gallery.css";
import data from "./data"; // Import your data from data.ts
import { get } from "http";
import SidebarNav from "../../components/SidebarNav/SidebarNav";

interface CardData {
  url: string;
  // Add any other properties you expect in your data here
}

const Gallery: React.FC = () => {
  const [card, setCard] = useState<CardData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [given, setGiven] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  React.useEffect(() => { document.title = "Gallery | RDV" }, []);
  const getCardData = () => {
    // Simulate fetching data from the imported 'data' array
    const startIndex = (page - 1) * 6;
    const endIndex = startIndex + 6;

    const newData = data.slice(startIndex, endIndex);

    setCard((prev) => [...prev, ...newData]);
  };

  //getCardData();

  useEffect(() => {
    if (given) {
      setGiven(false);
      return;
    }

    getCardData();
  }, [page, given]);

  const handleInfiniteScroll = () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <div className="gallery">
      <Header />
      <SidebarNav />
      <div className="gallery-content">
        {card.map((curElem, id) => {
          return <ImageCard key={id} image={curElem.url} />;
        })}
      </div>
    </div>
  );
};

export default Gallery;

// import React, { useState, useEffect } from "react";
// import ImageCard from "./ImageCard";
// import Header from "./header";
// import "./gallery.css";
// import data from "./data"

// interface CardData {
//   url: string;
//   // Add any other properties you expect in your data here
// }

// const Gallery: React.FC = () => {
//   const [card, setCard] = useState<CardData[]>([]);
//   const [page, setPage] = useState<number>(1);
//   const [loading, setLoading] = useState<boolean>(true);

//   const getCardData = async () => {
//     const res = await fetch(
//       `API_LINK${page}`
//     );
//     const data: CardData[] = await res.json();
//     setCard((prev) => [...prev, ...data]);
//     setLoading(false);
//   };

//   useEffect(() => {
//     getCardData();
//   }, [page]);

//   const handleInfiniteScroll = () => {
//     try {
//       if (
//         window.innerHeight + document.documentElement.scrollTop + 1 >=
//         document.documentElement.scrollHeight
//       ) {
//         setLoading(true);
//         setPage((prev) => prev + 1);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleInfiniteScroll);
//     return () => window.removeEventListener("scroll", handleInfiniteScroll);
//   }, []);

//   return (
//     <>
//       <div className="gallery">
//         <Header />
//         <div className="gallery-content">
//           {card.map((curElem, id) => {
//             return <ImageCard key={id} image={curElem.url} />;
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Gallery;
