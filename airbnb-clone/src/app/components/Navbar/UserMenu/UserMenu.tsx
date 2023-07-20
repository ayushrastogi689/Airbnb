'use client'
import {AiOutlineMenu} from "react-icons/ai"
import UserAvatar from "../../UserAvatar/UserAvatar"
import { useCallback, useState } from "react"
import MenuItem from "../MenuItem/MenuItem"

const UserMenu = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    }, [])

  return (
      <div className="relative">
          <div className="flex flex-row items-center gap-3">
              <div className="hidden md:block text-sm font-semibold px-4 py-3 rounded-full hover:bg-neutral-100 transition cursor-pointer "
               onClick={() => {}}
              >
                Airbnb your home                  
              </div>
              <div className="p-4 md:px-2 md:py-1 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition "
               onClick={ toggleOpen}
              >
                  <AiOutlineMenu />
                  <div className="hidden md:block">
                      <UserAvatar />
                  </div>
              </div>
          </div>
          {isOpen && (<div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
              <div className="flex flex-col cursor-pointer ">
                  <>
                      <MenuItem onClick={}
                      label = "Sign Up" />
                      <MenuItem onClick={}
                      label = "Login" />
                  </>
              </div>
        </div>)}      
    </div>
  )
}

export default UserMenu
