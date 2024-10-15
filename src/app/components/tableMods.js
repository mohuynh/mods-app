import Link from 'next/link';


export default function TableMods({ theadData, tbodyData, onRowDelete, tableName }) {
      return (
            <div>
                  <table>
                        <thead>
                              <tr>
                                    {theadData.map(heading => {
                                          return <th key={heading["id"]}>{heading}</th>
                                    })}
                              </tr>
                        </thead>
                        <tbody>
                              {tbodyData.map((row, index) => {
                                    return <tr key={index}>
                                          {theadData.map((key) => {
                                                return <td key={row[key]}>{row[key]}</td>
                                          })}
                                          <td><Link href={`/${tableName}/${row.id}`}>voir</Link></td>
                                          <td><Link href={`/${tableName}/update/${row.id}`}>modfier</Link></td>
                                          <td><button onClick={() => onRowDelete(row)}>supprimer</button></td>
                                    </tr>
                              })}
                        </tbody>
                  </table>
                  <div><Link href={`/${tableName}/create/`}>Créer nouvelle entrée</Link></div>
            </div>
      );
}