import Counter from "./Counter";

interface CardProp {
  name: string;
  price: number;
  isSpecial?: boolean;
}

const Card = ({ name, price, isSpecial }: CardProp) => {
  return (
    <div>
      <article>
        <h2>
          {name} {isSpecial && (<span>⭐</span>)}
        </h2>
        <p>{price}</p>
      </article>
      <br />

      <div>
        <Counter/>
      </div>
    </div>
  )
}

export default Card
