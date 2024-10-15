import { useEffect, useState } from "react";
import TableMods from "../app/components/tableMods";
import { getModsList } from "@/app/services/api";
import { deleteMod } from "@/app/services/api";


export default function mods() {

  const [dataMods, setDataMods] = useState([])

  var refreshModsList = () => {
    getModsList().then((result) => {
      setDataMods(result)
    })
  };

  useEffect(refreshModsList, [])

  const thead = ["name", "expansion"]
  return <TableMods theadData={thead} tbodyData={dataMods} tableName={"mods"} onRowDelete={(row) => {
    deleteMod(row.id).then(refreshModsList);
  }} />
}

