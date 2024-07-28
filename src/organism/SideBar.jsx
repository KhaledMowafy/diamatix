import Dropdown from '../atoms/Dropdown/Dropdown';
import logo from '../assets/diam.png'
import profile from '../assets/prof.jpg';
import { sideBarType } from "./SideBarType";

function SideBar({setCustomer}) {
    const data = [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
      ];
  return (
    <div className="h-screen flex grow flex-col gap-y-5 overflow-y-auto bg-secondary px-6">
    <div className="flex h-16 shrink-0 items-center">
      <img className="h-8 w-auto" src={logo} alt="Your Company"/>
    </div>
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            <li>
                <Dropdown name="Customers" options={data} setCustomer={setCustomer}/>
            </li>
          </ul>
        </li>
       
        <li className="-mx-6 mt-auto">
          <a href="#" className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-indigo-700">
            <img className="h-8 w-8 rounded-full bg-indigo-700" src={profile} alt=""/>
            <span className="sr-only">Your profile</span>
            <span aria-hidden="true">Khaled Mowafy</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  )
}
SideBar.propTypes = sideBarType;
export default SideBar
