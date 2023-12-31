'use client'

import Container from "../../Container"
import CategoriesBox from "../../CategoriesBox/CategoriesBox"

import { TbBeach, TbMountain, TbPool } from "react-icons/tb"
import { GiWindmill, GiIsland, GiBoatFishing, GiCastle, GiForestCamp, GiCaveEntrance, GiBarn, GiCactus } from "react-icons/gi"
import {MdOutlineVilla} from "react-icons/md"
import { FaSkiing } from "react-icons/fa"
import { BsSnow } from "react-icons/bs"
import {IoDiamond} from "react-icons/io5"

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
        description: "This property is close to Windmill"
    },
    {
        icon: MdOutlineVilla,
        label: "Modern",
        description: "This property is a Modern house"
    },
    {
        icon: TbMountain,
        label: "Countryside",
        description: "This property is in the countryside"
    },
    {
        icon: TbPool,
        label: "Pools",
        description: "This property has a pool inside"
    },
    {
        icon: GiIsland,
        label: "Islands",
        description: "This property is on a Island"
    },
    {
        icon: GiBoatFishing,
        label: "Lake",
        description: "This property is close to lake"
    },
    {
        icon: FaSkiing,
        label: "Skiing",
        description: "This property has skiing activities"
    },
    {
        icon: GiCastle,
        label: "Castle",
        description: "This property is in a castle "
    },
    {
        icon: GiForestCamp,
        label: "Camp",
        description: "This property has camping activities"
    },
    {
        icon: BsSnow,
        label: "Arctic",
        description: "This property is at Arctic"
    },
    {
        icon: GiCaveEntrance,
        label: "Cave",
        description: "This property is located near Caves"
    },
    {
        icon: GiCactus,
        label: "Desert",
        description: "This property is in the desert"
    },
    {
        icon: GiBarn,
        label: "Barns",
        description: "This property is in the barn"
    },
    {
        icon: IoDiamond,
        label: "Lux",
        description: "This property is in the barn"
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
