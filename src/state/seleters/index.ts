import { selectorFamily } from "recoil";

import { CountryState } from "../atoms";
import { ATOM_KEY } from "@/constants";

export const CategoryCountrys = selectorFamily({
    key: ATOM_KEY.CATEGORY,
    get:
        (params) =>
        ({ get }) =>
            get(CountryState).filter((country) => country.category === params),
});
