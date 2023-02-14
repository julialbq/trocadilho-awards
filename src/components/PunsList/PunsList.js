import "./PunsList.css";
import { puns } from "../../puns/puns";
import { Puns } from "../Puns/Puns";

export const PunsList = () => {
  return (
    <div>
      <h2 className="title">List of Puns</h2>
      {puns.length > 0 ? (
        <table className="table">
          <thead className="table__head">
            <tr>
              <th className="table__data">Date</th>
              <th className="table__data">Votes</th>
              <th className="table__data">Author</th>
              <th className="table__data">Context</th>
              <th className="table__data">Pun</th>
              <th className="table__data">Vote for your favorite</th>
            </tr>
          </thead>
          <tbody>
            {puns.map((pun) => (
              <Puns key={pun.id} pun={pun} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="info">No puns available</p>
      )}
    </div>
  );
};
