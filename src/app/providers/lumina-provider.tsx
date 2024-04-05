"use client"

import React, { ReactNode, createContext, useContext, useState } from 'react';


interface LuminaContextProps {
    isOpen: boolean
    id: string | null
    open: () => void
    close: () => void
}

const LuminaContext = createContext<LuminaContextProps>({} as LuminaContextProps);

type LuminaProviderProps = {
    children: ReactNode
}

export default function LuminaProvider({ children }: LuminaProviderProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [id, setId] = useState<string | null>("");

    const open = () => {
        setIsOpen(true);
        setId(crypto.randomUUID());
    };

    const close = () => {
        setIsOpen(false);
        setId(null);
    };

    return (
        <LuminaContext.Provider value={{ isOpen, id, open, close }}>
            {children}
        </LuminaContext.Provider>
    );
};

export const useLumina = () => useContext(LuminaContext);
