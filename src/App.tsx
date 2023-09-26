import { CountryForm, Category } from "./components";

import { CategoryList } from "./constants";

const App = () => {
    return (
        <main className="max-w-[1000px] bg-black-sm text-white-200 my-[10%] mx-auto p-10 flex flex-col items-center">
            <h1 className="font-bold text-3xl mb-5">Travel List</h1>
            <CountryForm />
            <Category categorys={Object.values(CategoryList)} />
        </main>
    );
};

export default App;
