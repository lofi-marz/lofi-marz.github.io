import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';

const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
};

export function Toggle() {
    const [isOn, setIsOn] = useState(false);

    useEffect(() => {
        console.log(isOn);
    }, [isOn]);

    return (
        <div
            className={classNames(
                'flex h-10 w-20 flex-row rounded-full bg-zinc-800',
                isOn ? 'justify-start' : 'justify-end'
            )}>
            <div className="absolute flex h-10 w-20 items-center justify-between rounded-full">
                <FaSun />
                <FaMoon />
            </div>
            <motion.div
                className=" aspect-square h-10 rounded-full bg-white"
                onClick={() => setIsOn((isOn) => !isOn)}
                layout
                transition={spring}
            />
        </div>
    );
}
