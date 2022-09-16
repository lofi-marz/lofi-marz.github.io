import React from 'react';

export type WithChildrenProps = {
    children: React.ReactNode;
};

export type Section = 'intro' | 'about';

export type SectionProps = {
    onViewportEnter: () => void;
};
