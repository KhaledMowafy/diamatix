
function Table() {
    const TABLE_HEAD = ["Service", "Status"];
 
const TABLE_ROWS = [
  {
    name: "Service 1",
    job: "Up",
  },
  {
    name: "Service 2",
    job: "Up",
  },
  {
    name: "Service 3",
    job: "Down",
  },
  {
    name: "Service 4",
    job: "Up",
  },
  {
    name: "Service 5",
    job: "Down",
  },
];
  return (
    <table className="table-auto w-3/4">
    <thead className="bg-tableHeader">
      <tr >
        {TABLE_HEAD.map((item, index)=>(
            <td className=" pt-5 pb-5" key={index}>{item}</td>
          ))}
      </tr>
    </thead>
    <tbody>
        {TABLE_ROWS.map((item, index)=>(
             <tr key={index}>
            <td>{item.name}</td>
            <td>{item.job}</td>
            <td>{item.date}</td>
            </tr>
        ))}
    
    </tbody>
  </table>
  )
}

export default Table
