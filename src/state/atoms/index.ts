import { ATOM_KEY } from "@/constants";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

interface Country {
    id: string;
    name: string;
    category: string;
}

const { persistAtom } = recoilPersist({
    key: ATOM_KEY.LOCALCOUNTRY,
    storage: localStorage,
});

export const CountryState = atom<Country[]>({
    key: ATOM_KEY.COUNTRY,
    default: [],
    effects_UNSTABLE: [persistAtom],
});
