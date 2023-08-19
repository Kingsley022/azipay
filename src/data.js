import {MdDashboard} from 'react-icons/md';
import { RiWallet3Line} from 'react-icons/ri';
import {HiOutlineUserPlus, HiOutlineClipboardDocumentCheck} from 'react-icons/hi2';
import {FiFileText} from 'react-icons/fi';
import {BsBook} from 'react-icons/bs';
import { BiPhone} from 'react-icons/bi';
import {VscSettingsGear} from 'react-icons/vsc';
import {LiaHandHoldingUsdSolid} from 'react-icons/lia';




export const menuList = [
    {id: 1, icon: MdDashboard, label: 'Dashbaord', isActive: true},
    {id: 2, icon: RiWallet3Line, label: 'Wallet'},
    {id: 3, icon: HiOutlineUserPlus, label: 'Employee Management', subMenu: ['SubMenu 1', 'SubMenu 2', 'SubMenu 3']},
    {id: 4, icon: FiFileText, label: 'Payroll', subMenu: ['SubMenu 1', 'SubMenu 2', 'SubMenu 3']},
    {id: 5, icon: HiOutlineClipboardDocumentCheck, label: 'Compliance', subMenu: ['SubMenu 1', 'SubMenu 2', 'SubMenu 3']},
    {id: 6, icon: LiaHandHoldingUsdSolid, label: 'Quick Loan', subMenu: ['SubMenu 1', 'SubMenu 2', 'SubMenu 3']},
    {id: 7, icon: BsBook, label: 'Book Keeping', subMenu: ['SubMenu 1', 'SubMenu 2', 'SubMenu 3']},
    {id: 8, icon: BiPhone, label: 'Support'},
    {id: 9, icon: VscSettingsGear, label: 'Settings', subMenu: ['SubMenu 1', 'SubMenu 2', 'SubMenu 3']},

];