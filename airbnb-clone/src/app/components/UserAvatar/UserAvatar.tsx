'use client'

import Image from "next/image"

const UserAvatar = () => {
  return (
    <Image className="rounded-full" width="30" height="30" src="/images/avatar.jpg" alt="user" />
  )
}

export default UserAvatar
