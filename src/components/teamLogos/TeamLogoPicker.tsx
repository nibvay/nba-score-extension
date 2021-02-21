import { TeamName } from '../../enums';
import ATL from './ATL';
import BKN from './BKN';
import BOS from './BOS';
import CHA from './CHA';
import CHI from './CHI';
import CLE from './CLE';
import DAL from './DAL';
import DEN from './DEN';
import DET from './DET';
import GSW from './GSW';
import HOU from './HOU';
import IND from './IND';
import LAC from './LAC';
import LAL from './LAL';
import MEM from './MEM';
import MIA from './MIA';
import MIL from './MIL';
import MIN from './MIN';
import NOP from './NOP';
import NYK from './NYK';
import OKC from './OKC';
import ORL from './ORL';
import PHI from './PHI';
import PHX from './PHX';
import POR from './POR';
import SAC from './SAC';
import SAS from './SAS';
import TOR from './TOR';
import UTA from './UTA';
import WAS from './WAS';

type TeamLogoPickerProps = {
  teamName: TeamName;
  height?: number;
  width?: number;
};

function TeamLogoPicker({ teamName, height = 50, width = 50 }: TeamLogoPickerProps): JSX.Element {
  switch (teamName) {
    case TeamName.ATL:
      return <ATL height={height} width={width} />;
    case TeamName.BKN:
      return <BKN height={height} width={width} />;
    case TeamName.BOS:
      return <BOS height={height} width={width} />;
    case TeamName.CHA:
      return <CHA height={height} width={width} />;
    case TeamName.CHI:
      return <CHI height={height} width={width} />;
    case TeamName.CLE:
      return <CLE height={height} width={width} />;
    case TeamName.DAL:
      return <DAL height={height} width={width} />;
    case TeamName.DEN:
      return <DEN height={height} width={width} />;
    case TeamName.DET:
      return <DET height={height} width={width} />;
    case TeamName.GSW:
      return <GSW height={height} width={width} />;
    case TeamName.HOU:
      return <HOU height={height} width={width} />;
    case TeamName.IND:
      return <IND height={height} width={width} />;
    case TeamName.LAC:
      return <LAC height={height} width={width} />;
    case TeamName.LAL:
      return <LAL height={height} width={width} />;
    case TeamName.MEM:
      return <MEM height={height} width={width} />;
    case TeamName.MIA:
      return <MIA height={height} width={width} />;
    case TeamName.MIL:
      return <MIL height={height} width={width} />;
    case TeamName.MIN:
      return <MIN height={height} width={width} />;
    case TeamName.NOP:
      return <NOP height={height} width={width} />;
    case TeamName.NYK:
      return <NYK height={height} width={width} />;
    case TeamName.OKC:
      return <OKC height={height} width={width} />;
    case TeamName.ORL:
      return <ORL height={height} width={width} />;
    case TeamName.PHI:
      return <PHI height={height} width={width} />;
    case TeamName.PHX:
      return <PHX height={height} width={width} />;
    case TeamName.POR:
      return <POR height={height} width={width} />;
    case TeamName.SAC:
      return <SAC height={height} width={width} />;
    case TeamName.SAS:
      return <SAS height={height} width={width} />;
    case TeamName.TOR:
      return <TOR height={height} width={width} />;
    case TeamName.UTA:
      return <UTA height={height} width={width} />;
    case TeamName.WAS:
      return <WAS height={height} width={width} />;
    default:
      throw new Error(`Invalid team name: ${teamName}`);
  }
}

export default TeamLogoPicker;

// ATL,
// BKN,
// BOS,
// CHA,
// CHI,
// CLE,
// DAL,
// DEN,
// GSW,
// HOU,
// IND,
// LAC,
// LAL,
// MEM,
// MIA,
// MIL,
// MIN,
// NOP,
// NYK,
// OKC,
// ORL,
// PHI,
// PHX,
// POR,
// SAC,
// SAS,
// TOR,
// UTA,
// WAS,
