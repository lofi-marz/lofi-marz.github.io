import { Variants } from 'framer-motion';

export const fadeInLeftVariants: Variants = {
    hidden: {
        x: -10,
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
    },
};

export function fadeIn() {
    return fadeInX(0);
}

export function fadeInX(x = -10) {
    return {
        hidden: {
            x,
            opacity: 0,
        },
        show: {
            x: 0,
            opacity: 1,
        },
    };
}
