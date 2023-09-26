import { CategoryList } from "@/constants";
import { useCategoryCountrys } from "./useCategoryCountrys";

const CategoryItem = ({ name }: { name: string }) => {
    const { categoryItems, changeModifiers, deleteCountry } = useCategoryCountrys(name);

    return (
        <div className="w-[30%]">
            <h1 className="text-center font-bold">{name}</h1>
            <ul className="h-full">
                {categoryItems.map((country) => (
                    <li
                        className="bg-black-lg p-4 m-2 rounded-lg"
                        key={country.id}
                    >
                        <h1 className="text-center m-2">{country.name}</h1>
                        <div>
                            {changeModifiers.map(({ name, modifier }) => (
                                <button
                                    className="m-2 bg-black-sm p-2 rounded-lg"
                                    key={name}
                                    id={country.id}
                                    onClick={(e) => modifier(e.currentTarget.id)}
                                >
                                    {name}
                                </button>
                            ))}
                            {name === CategoryList.WANT && (
                                <button
                                    className="m-2 bg-black-sm p-2 rounded-lg"
                                    id={country.id}
                                    onClick={(e) => deleteCountry(e.currentTarget.id)}
                                >
                                    Delete
                                </button>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryItem;
