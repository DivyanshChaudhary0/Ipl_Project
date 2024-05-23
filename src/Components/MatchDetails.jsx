import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InPageNaviagtion from "./InPageNaviagtion";

const MatchDetails = () => {
  const [data, setData] = useState([]);
  let { id } = useParams();

  console.log(data.matchInfo);

  async function fetchDetails() {
    const url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${id}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "bea81b270amsh015cd53b9e30fc7p1fa1cbjsnae7cb984bf61",
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(function () {
    fetchDetails();
  }, []);

  return (
    <>
      <div></div>
      {data.length <= 0 ? (
        <div className="text-white">Loading...</div>
      ) : (
        <InPageNaviagtion teams={[data.matchInfo.team1.shortName,data.matchInfo.team2.shortName]}>
          {
            data.matchInfo.team1.playerDetails.map((value)=>(
              <p className="playerDetails">
                <h1 className="player">{value.fullName}</h1>
                <div className="role">{value.role}</div>
              </p>
            ))
          }
          {
            data.matchInfo.team2.playerDetails.map((value)=>(
              <p className="playerDetails">
                <h1 className="player">{value.fullName}</h1>
                <div className="role">{value.role}</div>
              </p>
            ))
          }
        </InPageNaviagtion>
      )}
    </>
  );
};

export default MatchDetails;
