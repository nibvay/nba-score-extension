import { useState, useEffect } from 'react';
import axios from 'axios';
import GameList from './GameList';

const PREVIOUS_COUNT = 5;

function GameBoard(): JSX.Element {
  const currentDate = new Date();
  const previousDate = getPreviousDate({ today: currentDate, previousCount: PREVIOUS_COUNT });

  const [selectedDate, setSelectedDate] = useState<string>(previousDate[0]);
  const [gameData, setGameData] = useState<any>([]);
  const [url, setUrl] = useState(`https://www.balldontlie.io/api/v1/games?dates[]=${previousDate[0]}`);

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
      <label>date:</label>
      <select
        name="date"
        onChange={(e) => {
          setUrl(`https://www.balldontlie.io/api/v1/games?dates[]=${e.target.value}`);
          setSelectedDate(e.target.value);
        }}
      >
        {previousDate.map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select>
      <GameList gameData={gameData} selectedDate={selectedDate} />
    </>
  );
}

export default GameBoard;

function formatDate(date: Date) {
  const month = date.getMonth() + 1 < 10 ? 0 + `${date.getMonth() + 1}` : date.getMonth() + 1;
  return `${date.getFullYear()}-${month}-${date.getDate()}`;
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
