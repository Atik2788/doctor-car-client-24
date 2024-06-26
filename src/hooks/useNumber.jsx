import { useState } from "react";

const useNumber = () => {
    const [number, setNumber] = useState(0)
    return {number, setNumber};
};

export default useNumber;