import type { ReactNode } from "react";

export interface IExpensItem {
    category:string;
    entryMethod: "Manual" | "Automatic";
    amount: number;
    date: string;
};

export interface ICategoryList {
    selectedCategory: string | undefined;
    setSelectedCategory: (arg: string) => void;
};

export type IMainlayoutProps = {
    children: ReactNode;
    withBottomBar: boolean
};