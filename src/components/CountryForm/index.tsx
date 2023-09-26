import { SubmitHandler, useForm } from "react-hook-form";

import useCountrys from "@/hooks/useCountrys";

interface CountryForm {
    country: string;
}

const CountryForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CountryForm>();

    const { addCountry } = useCountrys();

    const onSubmit: SubmitHandler<CountryForm> = (value) => {
        const { country } = value;
        console.log(country);
        addCountry(country);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="m-2"
        >
            <input
                className="p-2 rounded-lg bg-black-lg text-white-100"
                type="text"
                {...register("country", {
                    required: true,
                })}
            />
            <input
                className="p-2 rounded-lg bg-black-lg ml-2"
                type="submit"
                value="🚪"
            />
            <div className="text-red text-center">{errors.country?.type === "required" ? "필수 항목입니다." : ""}</div>
        </form>
    );
};

export default CountryForm;
