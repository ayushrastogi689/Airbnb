'use client'

import Container from "../../Container"
import CategoriesBox from "../../CategoriesBox/CategoriesBox"

import { TbBeach } from "react-icons/tb"
import { GiWindmill } from "react-icons/gi"
import {MdOutlineVilla} from "react-icons/md"
import { usePathname, useSearchParams } from "next/navigation"
export const categories = [
    {
        icon: TbBeach,
        label: "Beach",
        description: "This property is close to beach"
    },
    {
        icon: GiWindmill,
        label: "Windmills",
        description: "This property is close to beach"
    },
    {
        icon: MdOutlineVilla,
        label: "Modern",
        description: "This property is a Modern house"
    },
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathName = usePathname();
    return (
      <Container>
        <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto ">
                {categories.map((item) => (
                    <CategoriesBox
                        key={item.label}
                        label={item.label}
                        selected = {category === item.label}
                        icon={item.icon}
                    />   
        ))}
        </div>
     </Container>
  )
}

export default Categories
