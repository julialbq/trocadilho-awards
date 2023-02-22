import { useState } from "react";
import "./Puns.css";

export const Puns = ({ pun }) => {
  const { dev, date, context, message, votes } = pun;

  const splitDate = date.split("-");
  const modifiedDate = `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;

  const [vote, setVote] = useState(votes);

  return (
    <tr>
      <td className="table__data">{modifiedDate}</td>
      <td className="table__data">{vote}</td>
      <td className="table__data">{dev}</td>
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
