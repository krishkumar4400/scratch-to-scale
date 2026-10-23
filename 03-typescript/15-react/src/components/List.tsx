import type { Chai } from "../types.js";
import Card from "./Card.tsx";

interface ListProps {
    items: Chai[];
}

const List = ({ items }: ListProps) => {
    return (
        <div>
            {
                items.map((item: Chai) => {
                    return <Card key={item.id} name={item.name} price={item.price} isSpecial={true} />
                })
            }
        </div>
    )
}

export default List
