import React, { PropsWithChildren } from "react";

export default function Repeat({ children, n = 1 }: PropsWithChildren<{ n?: number }>) {
    return <> {Array.from(Array(n), _ => children)} </>;
}