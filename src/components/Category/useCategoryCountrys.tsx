import { CategoryList } from "@/constants";

import { CategoryCountrys } from "@/state";
import { useRecoilValue } from "recoil";

import useCountrys from "@/hooks/useCountrys";

export const useCategoryCountrys = (categoryName: string) => {
    const categoryItems = useRecoilValue(CategoryCountrys(categoryName));

    const { addCountry, deleteCountry, changeCategory } = useCountrys();

    const changeModifiers = Object.values(CategoryList)
        .filter((name) => name !== categoryName)
        .map((name) => ({ name, modifier: (id: string) => changeCategory(id, name) }));

    return { categoryItems, deleteCountry, addCountry, changeCategory, changeModifiers };
};
