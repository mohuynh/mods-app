import Link from 'next/link';
import Table from 'react-bootstrap/Table';

export default function TableSlice({ theadData, tbodyData }) {
      return (
            <Table striped bordered hover>
                  <thead>
                        <tr>
                              {theadData.slice(0, 3).map(heading => {
                                    return <th key={heading}>{heading}</th>
                              })}
                        </tr>
                  </thead>
                  <tbody>
                        {tbodyData.map((row, index) => {
                              return <tr key={index}>
                                    {theadData.slice(0, 3).map((key) => {
                                          return <td key={row[key]}>{row[key]}</td>
                                    })}
                                    <td><Link href={"/mods/" + row.name}>voir</Link></td>
                              </tr>;
                        })}

                  </tbody>
            </Table>
      );
}