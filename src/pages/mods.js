import TableSlice from "../app/components/tableSlice";
var data = require("../app/db.json");

export default function mods() {
  var dataMods = data.mods

  const thead = () => {
    return Object.keys(dataMods[0]);
  }

  return <TableSlice theadData={thead()} tbodyData={dataMods} />
}

