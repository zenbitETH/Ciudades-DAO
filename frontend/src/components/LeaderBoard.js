import Leader from './Leader';
import '../styles/Home.css';

const leaderArray = ['person A', 'person B', 'person C'];

const LeaderBoard = () => {
  const leaders = leaderArray.map((person, i) => {
    return (
      <Leader
        key={i}
        person={person}
      />
    );
  });

  return (
    <div>
      <div>
        The current leader board:
      </div>
      <div>
        {leaders}
      </div>
    </div>
  );
};

export default LeaderBoard;
