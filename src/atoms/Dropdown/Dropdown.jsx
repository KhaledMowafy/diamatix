import { childComponentPropTypes } from "./DropdownTypes";

function Dropdown({name, options}) {
    console.log(options);
  return (
    <div className="flex flex-col w-1/4">
        <select>
          <option hidden>{name}</option>
            {options.map((item,index)=>
                <option value={item.id} key={index}>{item.name}</option>
            )}
        </select>
    </div>
   
  )
}
Dropdown.propTypes = childComponentPropTypes;
export default Dropdown
