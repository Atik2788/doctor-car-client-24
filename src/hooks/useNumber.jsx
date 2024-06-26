import { useState } from "react";

const useNumber = () => {
    const [number, setNumber] = useState(0)
    return number;
};

export default useNumber;