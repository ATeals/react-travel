import CategoryItem from "./CategoryItem";

const Category = ({ categorys }: { categorys: string[] }) => {
    return (
        <section className="flex w-full justify-around m-4">
            {categorys.map((category) => (
                <CategoryItem
                    key={category}
                    name={category}
                />
            ))}
        </section>
    );
};

export default Category;
