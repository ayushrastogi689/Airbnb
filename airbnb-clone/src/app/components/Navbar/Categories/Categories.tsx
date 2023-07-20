'use client'

import Container from "../../Container"
import CategoriesBox from "../../CategoriesBox/CategoriesBox"

import { TbBeach } from "react-icons/tb"
import { GiWindmill } from "react-icons/gi"
import {MdOutlineVilla} from "react-icons/md"
export const categories = [
    {
        label: "Beach",
        icon: TbBeach,
        description: "This property is close to beach"
    },
    {
        label: "Windmills",
        icon: GiWindmill,
        description: "This property is close to beach"
    },
    {
        label: "Modern",
        icon: MdOutlineVilla,
        description: "This property is a Modern house"
    },
]

const Categories = () => {
    return (
      <Container>
        <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto ">
                {categories.map((item) => (
                    <CategoriesBox
                        key={item.label}
                        label={item.label}
                        description={item.description}
                        icon={item.icon}
                    />   
        ))}
        </div>
     </Container>
  )
}

export default Categories