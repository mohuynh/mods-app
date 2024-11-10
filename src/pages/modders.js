import { useEffect, useState } from "react";
import Link from "next/link";
import { getModdersList } from "@/app/services/api";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Modders() {

      const [dataModders, setDataModders] = useState([])

      var refreshModdersList = () => {
            getModdersList().then((result) => {
                  setDataModders(result)
            })
      };

      useEffect(refreshModdersList, [])

      const thead = ["name", "creation_date"]
      return (
            <div>
                  <table>
                        <thead>
                              <tr>
                                    {thead.map(heading => {
                                          return <th key={heading}>{heading}</th>
                                    })}
                              </tr>
                        </thead>
                        <tbody>
                              {dataModders.map((row, index) => {
                                    return <tr key={index}>
                                          {thead.map((key) => {
                                                return <td key={row[key]}>{row[key]}</td>
                                          })}
                                          <td key="voir"><Link href={`/modders/${row.id}`}>voir</Link></td>
                                          <td key="modifier"><Link href={`/modders/update/${row.id}`}>modfier</Link></td>
                                          <td key="supprimer"><button onClick={() => onRowDelete(row)}>supprimer</button></td>
                                    </tr>
                              })}
                        </tbody>
                  </table>
            </div>
      );
}