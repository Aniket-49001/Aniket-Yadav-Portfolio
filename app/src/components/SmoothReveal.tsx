'use client';

import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';


interface SmoothRevealProps {
    children: React.ReactNode;
    width?: 'fit-content' | '100%';
    className?: string;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    duration?: number;
}

const SmoothReveal = ({
    children,
    width = 'fit-content',
    className = "",
    delay = 0,
    direction = 'up',
    duration = 0.5
}: SmoothRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-5% 0px -20% 0px", once: false });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        } else {
            mainControls.start("hidden");
        }
    }, [isInView, mainControls]);

    const getHiddenVariant = () => {
        switch (direction) {
            case 'up': return { opacity: 0, y: 50 };
            case 'down': return { opacity: 0, y: -50 };
            case 'left': return { opacity: 0, x: 50 };
            case 'right': return { opacity: 0, x: -50 };
            case 'none': return { opacity: 0, scale: 0.95 };
            default: return { opacity: 0, y: 50 };
        }
    };

    return (
        <div ref={ref} style={{ width, position: 'relative', overflow: 'hidden' }} className={className}>
            <motion.div
                variants={{
                    hidden: getHiddenVariant(),
                    visible: { opacity: 1, x: 0, y: 0, scale: 1 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration, delay, ease: "easeOut" }}
                className="h-full"
            >
                {children}
            </motion.div>
        </div>
    );
};

export default SmoothReveal;
