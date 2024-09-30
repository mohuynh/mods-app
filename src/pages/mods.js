import { useEffect, useState } from "react";
import TableMods from "../app/components/tableMods";
import { getModsList } from "@/app/services/api";
import { deleteMod } from "@/app/services/api";
import Link from 'next/link';

export default function mods() {

  const [dataMods, setDataMods] = useState([])

  var refreshModsList = () => {
    getModsList().then((result) => {
      setDataMods(result)
    })
  };

  useEffect(refreshModsList, [])

  const thead = ["name", "author"]
  return <TableMods theadData={thead} tbodyData={dataMods} onRowDelete={(row) => {
    deleteMod(row.id).then(refreshModsList);
  }} />
}

