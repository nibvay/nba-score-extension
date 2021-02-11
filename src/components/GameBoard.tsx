import { useState, useEffect } from "react";
import axios from "axios";

function formatDate(date: Date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

type GetPreviousDate = {
  today: Date;
  previousCount: number;
};

function getPreviousDate({ today, previousCount }: GetPreviousDate) {
  const result = [];
  const offset = 1;
  for (let count = 0; count <= previousCount; count++) {
    today.setDate(today.getDate() - (count === 0 ? 0 : offset));
    result.push(formatDate(today));
  }
  return result;
}

function GameBoard() {
  const currentDate = new Date();
  const previousDate = getPreviousDate({
    today: currentDate,
    previousCount: 5,
  });
  console.log(previousDate);

  const [gameData, setGameData] = useState<any>([]);
  const [url, setUrl] = useState(
    `https://www.balldontlie.io/api/v1/games?dates[]=${previousDate[0]}`
  );

  useEffect(() => {
    const fetchBallData = async () => {
      try {
        const data = await axios(url);
        setGameData(data.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBallData();
  }, [url]);

  return (
    <>
      <label>choose the date:</label>
      <select
        name="date"
        id="datePicker"
        onChange={(e) => {
          setUrl(
            `https://www.balldontlie.io/api/v1/games?dates[]=${e.target.value}`
          );
        }}
      >
        {previousDate.map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select>
      {gameData.map((game: any) => (
        <div key={game.id}>
          {game.visitor_team.abbreviation} {game.visitor_team_score} v.s.
          {game.home_team.abbreviation} {game.home_team_score}
        </div>
      ))}
    </>
  );
}

export default GameBoard;
