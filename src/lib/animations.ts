export const fadeIn = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
        opacity: 1,
        transition: { delay: i * 0.1 },
    }),
};

export const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1 },
    }),
};

export const fadeInDown = {
    hidden: { opacity: 0, y: -20 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1 },
    }),
};

export const slideInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: (i = 1) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.1, duration: 0.5 },
    }),
};

export const slideInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.1, duration: 0.5 },
    }),
};

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i = 1) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: i * 0.1, duration: 0.4 },
    }),
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

export const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
    },
};

export const hoverScale = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
};

export const hoverGlow = {
    rest: { boxShadow: "0 0 0 rgba(0, 0, 0, 0)" },
    hover: { boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)" },
};
