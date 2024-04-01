import { NavLink } from 'react-router-dom';

type MenuList = {
  name: string,
  quantity: number,
  link: string,
}

export default function NavItem(item: MenuList) {
  return (
    <li className='transition-all duration-75 cursor-pointer justify-start items-center hover:bg-slate-1 rounded-lg px-4'>
      <NavLink className='nav-link flex items-center relative transition-all duration-75' to={item.link}>
        {item.name}
        <span className='ml-auto border rounded-lg border-gray-4 text-gray-9 text-sm px-2'>{item.quantity}</span>
      </NavLink>
  </li>
  )
}