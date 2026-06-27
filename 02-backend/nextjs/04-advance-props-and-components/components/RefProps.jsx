import { useRef, forwardRef } from "react";

// Input component that accept a ref prop
const CustomInput = forwardRef(({ label, placeholder, className }, ref) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${className}`}
      />
    </div>
  );
});

CustomInput.displayName = "CustomInput";

const RefProps = () => {
  const inputRef = useRef(null);
  const secondInputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const getInputValue = () => {
    if (inputRef.current) {
      alert(`Input Value: ${inputRef.current.value}`);
    }
  };

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const focusSecondInput = () => {
    secondInputRef.current?.focus();
  };

  return (
    <section className="p-8 bg-white rounded-xl shadow-lg">
      <h2>Ref Props</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
        quisquam commodi labore accusamus voluptatem eligendi!
      </p>

      <div>
        <div>
          <h3>Try it out</h3>
          <CustomInput
            ref={inputRef}
            label="First Input With Ref"
            placeholder="Write something here"
          />

          <CustomInput
            ref={secondInputRef}
            label="Second Input With Ref"
            placeholder="Type Something"
          />

          <div className="flex flex-wrap gap-3 mt-4">
            <button
              onClick={focusInput}
              className="px-6 py-2 bg-sky-400 text-white rounded-md"
            >
              Focus First Input
            </button>
            <button
              onClick={getInputValue}
              className="px-6 py-2 bg-sky-400 text-white rounded-md"
            >
              Get First Input Value
            </button>
            <button
              onClick={clearInput}
              className="px-6 py-2 bg-sky-400 text-white rounded-md"
            >
              Clear First Input
            </button>
            <button
              onClick={focusSecondInput}
              className="px-6 py-2 bg-sky-400 text-white rounded-md"
            >
              Focus Second Input
            </button>
          </div>
        </div>
      </div>

      <div className="bg-amber-200 p-4 text-black mt-4 rounded-xl border-l-4 border-amber-600">
        <h2 className="font-semibold pb-2 text-lg">When to use Refs: </h2>
        <ul className="pl-4 list-disc">
          <li className="pb-2">
            Managing focus, text selection, or media playback
          </li>
          <li className="pb-2">Triggering imperative animations</li>
          <li className="pb-2">Integrating with third-party DOM libraries</li>
          <li className="pb-2">
            Accessing DOM measurements {"Scroll position, element size"}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default RefProps;
