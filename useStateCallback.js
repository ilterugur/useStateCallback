import { useState, useEffect } from "react";

export default function useStateCallback(initialState) {
    const [state, setState] = useState(initialState);
    const callbackReferance = useRef(null);

    const setStateCallback = (state, callback) => {
        callbackReferance.current = callback;
        setState(state);
    };

    useEffect(() => {
        if (callbackReferance.current) {
            callbackReferance.current(state);
            callbackReferance.current = null;
        }
    }, [state]);
    return [state, setStateCallback];
}
