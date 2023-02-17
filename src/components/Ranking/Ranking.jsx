import "./Ranking.css";

export const Ranking = () => {
  return (
    <div className="ranking__wrapper">
      <div className="puns__wrapper">
        <h2 className="puns__title">Best Puns</h2>
        <table className="puns__table">
          <thead className="puns_table__head">
            <tr>
              <th className="table__data">Ranking</th>
              <th className="table__data">Votes</th>
              <th className="table__data">Author</th>
              <th className="table__data">Context</th>
              <th className="table__data">Pun</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="table__data table__data--place-1">1°</td>
              <td className="table__data">10</td>
              <td className="table__data">joao</td>
              <td className="table__data">puns puns</td>
              <td className="table__data">pun</td>
            </tr>
            <tr>
              <td className="table__data table__data--place-2">2°</td>
              <td className="table__data">5</td>
              <td className="table__data">maria</td>
              <td className="table__data">puns puns</td>
              <td className="table__data">pun</td>
            </tr>
            <tr>
              <td className="table__data table__data--place-3">3°</td>
              <td className="table__data">4</td>
              <td className="table__data">jose</td>
              <td className="table__data">puns puns</td>
              <td className="table__data">pun</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="dev__wrapper">
        <h2 className="dev__title">Creative Dev</h2>
        <table>
          <thead className="puns_table__head">
            <tr>
              <th className="table__data">Ranking</th>
              <th className="table__data">Total Puns</th>
              <th className="table__data">Dev</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="table__data table__data--place-1">1°</td>
              <td className="table__data">20</td>
              <td className="table__data">maria</td>
            </tr>
            <tr>
              <td className="table__data table__data--place-2">2°</td>
              <td className="table__data">10</td>
              <td className="table__data">joao</td>
            </tr>
            <tr>
              <td className="table__data table__data--place-3">3°</td>
              <td className="table__data">3</td>
              <td className="table__data">jose</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};