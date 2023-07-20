'use client'
import {AiOutlineMenu} from "react-icons/ai"
import UserAvatar from "../../UserAvatar/UserAvatar"

const UserMenu = () => {
  return (
      <div className="relative">
          <div className="flex flex-row items-center gap-3">
              <div className="hidden md:block text-sm font-semibold px-4 py-3 rounded-full hover:bg-neutral-100 transition cursor-pointer "
               onClick={() => {}}
              >
                Airbnb your home                  
              </div>
              <div className="p-4 md:px-2 md:py-1 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition " >
                  <AiOutlineMenu />
                  <div className="hidden md:block">
                      <UserAvatar />
                  </div>
              </div>
          </div>
      
    </div>
  )
}

export default UserMenu
