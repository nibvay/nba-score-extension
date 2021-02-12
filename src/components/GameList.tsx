import officialSchedule from '../officialSchedule/202102.json';

type GameListProps = {
  gameData: any;
  selectedDate: string;
};

function GameList({ gameData, selectedDate }: GameListProps): JSX.Element {
  if (gameData.length === 0) return <div>loading</div>;

  return (
    <>
      {gameData.map((game: any) => (
        <GameDetail key={game.id} game={game} selectedDate={selectedDate} />
      ))}
    </>
  );
}

export default GameList;

type GameDetailProps = {
  game: any;
  selectedDate: string;
};

function GameDetail({ game, selectedDate }: GameDetailProps): JSX.Element {
  const visitorTeam = game.visitor_team.abbreviation;
  const homeTeam = game.home_team.abbreviation;
  const visitorTeamScore = game.visitor_team_score;
  const homeTeamScore = game.home_team_score;
  const gameId = getGameId({ homeTeam, visitorTeam, dateString: selectedDate });
  const officialBoxScoreLink = getOfficialBoxScoreLink({ homeTeam, visitorTeam, gameId });

  return (
    <div>
      {visitorTeam} {visitorTeamScore} v.s. {homeTeam} {homeTeamScore}
      <span style={{ marginLeft: 30 }}>
        <a href={officialBoxScoreLink} target="_blank" rel="noreferrer noopener" style={{ color: 'blue' }}>
          BoxScore
        </a>
      </span>
    </div>
  );
}

type GetOfficialBoxScoreLink = {
  homeTeam: string;
  visitorTeam: string;
  gameId: string;
};

function getOfficialBoxScoreLink({ homeTeam, visitorTeam, gameId }: GetOfficialBoxScoreLink) {
  return `https://www.nba.com/game/${visitorTeam.toLowerCase()}-vs-${homeTeam.toLowerCase()}-${gameId}/box-score#box-score`;
}

type GetGameId = {
  homeTeam: string;
  visitorTeam: string;
  dateString: string;
};

export function getGameId({ homeTeam, visitorTeam, dateString }: GetGameId): string {
  // e.g. 20210211/ORLGSW
  const targetGameCode = `${dateString.replaceAll('-', '')}/${visitorTeam}${homeTeam}`;
  const targetGameDate = parseDateFormatToOfficial(dateString);

  const targetOfficialGames = officialSchedule.leagueSchedule.gameDates.find(
    ({ gameDate }) => gameDate.split(' ')[0] === targetGameDate,
  );
  const targetOfficialGame = targetOfficialGames?.games?.find(({ gameCode }) => gameCode === targetGameCode);

  return targetOfficialGame?.gameId || '';
}

// 2021-02-11 --> 11/2/2021
function parseDateFormatToOfficial(date: string) {
  const splitDate = date.split('-');
  const year = splitDate[0];
  const month = parseInt(splitDate[1], 10);
  const day = parseInt(splitDate[2], 10);
  return `${month}/${day}/${year}`;
}
