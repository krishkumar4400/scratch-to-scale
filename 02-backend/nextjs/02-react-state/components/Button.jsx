export default function Button({buttonPlaceholder}) {
    return (
      <button className="border-1 px-8 py-2 font-light rounded-md bg-slate-950">
        {buttonPlaceholder}
      </button>
    );
}