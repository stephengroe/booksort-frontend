import { NavLink } from 'react-router-dom';

type MenuList = {
  name: string,
  quantity: number,
  link: string,
}

export default function NavItem(item: MenuList) {
  return (
    <NavLink className='nav-link flex items-center relative' to={item.link}>
      {item.name}
    <span className='ml-auto border rounded-lg border-gray-400 text-gray-400 text-sm px-2'>{item.quantity}</span>
  </NavLink>
  )
}