import { useState } from 'react';

interface Hook {
    isShowing: boolean
    toggle: () => void
}

const useModal = (): Hook => {
    const [isShowing, setIsShowing] = useState(false);

    function toggle() {
        setIsShowing(!isShowing);
    }

    return {
        isShowing,
        toggle,
    };
};

export default useModal;
