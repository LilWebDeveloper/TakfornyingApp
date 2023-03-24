import { ReactElement,  ReactNode, ReactPortal } from "react";

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = {} | ReactNodeArray;
type ReactNodeType = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

export type ProtectType = {
    children: ReactNodeType,
    redirectPath?: string
}