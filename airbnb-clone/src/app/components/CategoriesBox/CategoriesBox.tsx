'use client'

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons"
import queryStr from "query-string"

interface CategoriesBoxProps {
    icon: IconType;
    label: string;
    selected: boolean;
}

const CategoriesBox: React.FC<CategoriesBoxProps> = ({ icon: Icon, label, selected }) => {
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(() => {
        let currentQuery = {};

        if (params){
            currentQuery = queryStr.parse(params.toString())    
        }

        const updatedQuery: any = {
            ...currentQuery,
            category: label,
        }

        if (params?.get('category') === label) {
            delete updatedQuery.category;
        }
        const url = queryStr.stringifyUrl({
            url: "/",
            query: updatedQuery
        }, { skipNull: true })
        router.push(url);
    },[label, params, router])
    return (

        <div onClick={handleClick} className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:to-neutral-800 transition cursor-pointer ${selected ? 'border-b-neutral-800' : 'border-transparent'} ${selected ? 'text-neutral-800' : 'text-neutral-500'} `}>
            <Icon size={26} />
            <div className=" font-medium text-sm " >
                {label}
            </div>
    </div>
  )
}

export default CategoriesBox
