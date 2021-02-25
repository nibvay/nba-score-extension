import { Box, HStack, Text, Center, Flex, Link, CircularProgress } from '@chakra-ui/react';
import { TeamName, ScoreLeadStatus } from '../enums';
import officialSchedule from '../officialSchedule/202102.json';
import TeamLogoPicker from './teamLogos/TeamLogoPicker';

type GameListProps = {
  isLoading: boolean;
  gameData: any;
  selectedDate: string;
};

function GameList({ isLoading, gameData, selectedDate }: GameListProps): JSX.Element {
  if (isLoading) return <CircularProgress m={150} alignItems={'center'} isIndeterminate color="orange.300" />;

  return (
    <>
      {gameData.map((game: any) => (
        <GameDetail key={game.id} game={game} selectedDate={selectedDate} />
        // {/* <TopPerformers key={game.id} game={game} /> */}
      ))}
    </>
  );
}

// Player record
// https://www.balldontlie.io/api/v1/stats?seasons[]=2020&game_ids[]=127893
// type TopPerformersProps = {
//   game: any;
// };
// function TopPerformers({ game }: TopPerformersProps): JSX.Element {
//   console.log({ game });
//   const season = game.season;

//   return <div></div>;
// }

export default GameList;

type GameDetailProps = {
  game: any;
  selectedDate: string;
};

function GameDetail({ game, selectedDate }: GameDetailProps): JSX.Element {
  const { status } = game;
  const visitorTeam = game.visitor_team.abbreviation as TeamName;
  const homeTeam = game.home_team.abbreviation;
  const visitorTeamScore = parseInt(game.visitor_team_score, 0);
  const homeTeamScore = parseInt(game.home_team_score, 0);
  const gameId = getGameId({ homeTeam, visitorTeam, dateString: selectedDate });
  const officialBoxScoreLink = getOfficialBoxScoreLink({ homeTeam, visitorTeam, gameId });
  const scoreLeadTeam = getScoreLeadTeam(visitorTeamScore, homeTeamScore);

  return (
    <Box ml="20px">
      <HStack align="center">
        <Flex>
          <Box align="center">
            <TeamLogoPicker teamName={visitorTeam} />
            <Text>{visitorTeam}</Text>
          </Box>
          <Center>
            <Flex textAlign={'center'}>
              <Box w="60px" fontWeight={scoreLeadTeam !== ScoreLeadStatus.visitor ? 350 : 900}>
                {visitorTeamScore}
              </Box>
              <Box w="60px">
                <Link href={officialBoxScoreLink} target="_blank" rel="noreferrer noopener" fontWeight={500}>
                  {status}
                </Link>
              </Box>
              <Box w="60px" fontWeight={scoreLeadTeam !== ScoreLeadStatus.home ? 350 : 900}>
                {homeTeamScore}
              </Box>
            </Flex>
          </Center>
          <Box align="center" alignItems={'right'}>
            <TeamLogoPicker teamName={homeTeam} />
            <Text>{homeTeam}</Text>
          </Box>
        </Flex>
        {/* <Box>1234</Box> */}
      </HStack>
    </Box>
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

function getScoreLeadTeam(visitor: number, home: number) {
  if (visitor > home) return ScoreLeadStatus.visitor;
  if (visitor < home) return ScoreLeadStatus.home;
  return ScoreLeadStatus.tie;
}
