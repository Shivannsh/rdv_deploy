import SidebarNav from "../../../components/SidebarNav/SidebarNav";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import InformalCard from "./infogamecard";
import heroImage from "../../../assets/img/informal_hero_image.png";
const Informal = () => {
    React.useEffect(() => { document.title = "Informal games | RDV" }, []);

    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://orbit.rendezvousiitd.com/events/events/");
                const quizzingClubData = response.data.Competitive["Quizzing Club"];
                console.log(quizzingClubData)
                // Update data state with the raw data
                setData(quizzingClubData);

                // Process data and update data2
                const processedData = [];
                for (let i = 0; i < quizzingClubData.length; i += 2) {
                    processedData.push(quizzingClubData.slice(i, i + 2));
                }
                setData2(processedData);

                console.log(data2);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to trigger the effect only on component mount





    useEffect(() => {

        window.scrollTo(0, 0);
    }, []);

    // console.log(data.Quizzing);
    return (
        <>
            <SidebarNav />
            <div className="heroInformal" style={{ position: "relative" }}>
                <div></div> {/* <-- background image div */}
                <div style={{
                    paddingTop: "70px",
                    position: "absolute",
                    bottom: 0,
                    left: "0",
                    display: "flex",
                    height: "100%",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <p className='text-white p-0 m-0 fw-bold fs-1'>
                        <span style={{ color: "#efc36a" }}>INFORMAL</span> GAMES
                    </p>
                </div>
            </div>
            <div className="info-body d-flex justify-content-center text-center py-5">
                <div className="d-block">
                    <div className="info-container ">
                        {data.map((game: any) => (
                            <InformalCard game={game} />
                        ))}
                    </div>
                </div>

            </div>

        </>
    );


};

export default Informal;