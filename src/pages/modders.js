import { useEffect, useState } from "react";
import TableMods from "../app/components/tableMods";
import { deleteModder, getModdersList } from "@/app/services/api";



export default function modders() {

      const [dataModders, setDataModders] = useState([])

      var refreshModdersList = () => {
            getModdersList().then((result) => {
                  setDataModders(result)
            })
      };

      useEffect(refreshModdersList, [])

      const thead = ["name", "creation_date"]
      return <TableMods theadData={thead} tbodyData={dataModders} tableName={"modders"} onRowDelete={(row) => {
            var accessToken = localStorage.getItem("jwt-token")
            deleteModder(accessToken, row.id).then(refreshModdersList);
      }} />
}