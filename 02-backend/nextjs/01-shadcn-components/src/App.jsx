import Otp from "./components/Otp";
import { Button } from "./components/ui/button";

const App = () => {
  return (
    <div className="w-full h-full bg-black text-white">
      <Button variant="outline">Click Me</Button>

      <Otp />
    </div>
  );
};

export default App;
