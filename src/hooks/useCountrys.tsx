import { CategoryList } from "@/constants";
import { CountryState } from "@/state";
import { useRecoilState } from "recoil";

const useCountrys = () => {
    const [country, setCountry] = useRecoilState(CountryState);

    const addCountry = (country: string) => setCountry((countrys) => [...countrys, { id: String(Date.now()), name: country, category: CategoryList.WANT }]);

    const deleteCountry = (id: string) => setCountry((countrys) => countrys.filter((country) => country.id !== id));

    const changeCategory = (id: string, category: string) =>
        setCountry((countrys) => {
            const copy = [...countrys];
            const [target] = copy.splice(
                copy.findIndex((i) => i.id === id),
                1
            );
            return [...copy, { ...target, category }];
        });

    return { country, addCountry, deleteCountry, changeCategory };
};

export default useCountrys;
