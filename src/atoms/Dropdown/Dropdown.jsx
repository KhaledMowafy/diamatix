import { childComponentPropTypes } from "./DropdownTypes";

function Dropdown({name, options, setCustomer}) {
  const handleDropdown = (e)=>{
    setCustomer(e.target.value);
  }
  return (
    <div className="flex flex-col w-full bg-primary rounded">
        <select className="bg-primary rounded p-2 cursor-pointer" onChange={handleDropdown}>
          <option hidden >{name}</option>
            {options.map((item,index)=>
                <option value={item.id} key={index}>{item.name}</option>
            )}
        </select>
    </div>
   
  )
}
Dropdown.propTypes = childComponentPropTypes;
export default Dropdown
