import { FC, useState } from "react"
import { Button } from "../Buttons/Button"
import { Logo } from "../Logo/Logo"
import { Menu } from "./Menu"
import { Profile } from "./Profile"
import { SearchInput } from "../Search/SearchInput"
import { Links } from "./Links"

interface Props {
  token: string | null
  user: any
  toggle: () => void
  clearUser: () => void
}

export const Navbar: FC<Props> = ({ token, user, toggle, clearUser }) => {
  const [isMenuOpen, setMenuOpened] = useState(false)

  const isLogged = token ? true : false

  return (
    <nav className='flex gap-x-5 h-28 justify-between p-5'>
      <div className='h-full'>
        <Logo />
      </div>

      <div className='h-full flex items-center'>
        <SearchInput placeholder='Искать' />
      </div>

      <div className='h-full sm:flex items-center hidden'>
        <Links />
      </div>

      {isLogged ? (
        <div className='relative'>
          <Profile
            user={user}
            setMenuOpened={setMenuOpened}
            isMenuOpen={isMenuOpen}
          />
          {isMenuOpen && <Menu clearUser={clearUser} />}
        </div>
      ) : (
        <Button
          onClick={toggle}
          title='Войти'
          className='bg-darkGreen px-5 rounded-[20px]'
        />
      )}
    </nav>
  )
}
