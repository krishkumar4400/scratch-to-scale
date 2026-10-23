import React, { useState } from "react";


interface FormProps {
    onSubmit(order: { name: string; cups: number }): void
};

const Form = ({ onSubmit }: FormProps) => {

    const [name, setName] = useState<string>("Masala");
    const [cups, setCups] = useState<number>(1);

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            onSubmit({name, cups});
        } catch (error) {
            if(error instanceof Error) {
                console.log(error.message);
                return;
            }
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Chai Name</label>
            <input type="text" placeholder="Enter chai name" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value || "Masala")} />

            <label htmlFor="">Cups</label>
            <input type="number" placeholder="Enter Cups" value={cups} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCups(Number(e.target.value) || 0)} />
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default Form
