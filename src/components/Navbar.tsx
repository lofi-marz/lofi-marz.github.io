import React from 'react';
import { useRouter } from 'next/router';

export const Navbar = (): JSX.Element => {
    const router = useRouter();
    return (
        <header className="sticky top-0 z-10 flex h-16 w-full items-center justify-center font-title text-xl opacity-90 shadow dark:bg-zinc-900 dark:text-white">
            <ul className="flex gap-10">
                <li>
                    <a href="#home">home</a>
                </li>
                <li>
                    <a href="#home">about me</a>
                </li>
                <li>
                    <a href="#projects">projects</a>
                </li>
                <li className="text-primary">
                    <a href="Omari Thompson-Edwards CV.pdf" target="_blank">
                        cv
                    </a>
                </li>
            </ul>
        </header>
    );
};
