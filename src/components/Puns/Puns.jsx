import { useState } from "react";
import "./Puns.css";

export const Puns = ({ pun }) => {
  const { author, date, context, message, votes } = pun;

  const [vote, setVote] = useState(votes);

  return (
    <tr>
      <td className="table__data">{date}</td>
      <td className="table__data">
        {vote}
      </td>
      <td className="table__data">{author}</td>
      <td className="table__data">{context}</td>
      <td className="table__data">{message}</td>
      <td className="table__data">
        <button className="button" onClick={() => setVote(vote + 1)}>
          VOTE
        </button>
      </td>
    </tr>
  );
};
