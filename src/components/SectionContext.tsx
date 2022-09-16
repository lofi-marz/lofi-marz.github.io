import { createContext, useState } from 'react';
import { Section, WithChildrenProps } from '../types';

export const SectionContext = createContext<Section>('intro');

export const SetSectionContext = createContext<(newSection: Section) => void>(
    (newSection: Section) => {
        console.log(newSection);
    }
);
export function SectionContextProvider({ children }: WithChildrenProps) {
    const [section, setSection] = useState<Section>('intro');
    return (
        <SectionContext.Provider value={section}>
            <SetSectionContext.Provider value={setSection}>
                {children}
            </SetSectionContext.Provider>
        </SectionContext.Provider>
    );
}
