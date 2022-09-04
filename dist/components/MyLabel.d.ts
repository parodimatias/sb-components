/// <reference types="react" />
import "./mylabel.css";
export interface MyLabelProps {
    /**
     * The label text?
     */
    label: string;
    /**
     * How large should the font be?
     */
    size?: "normal" | "h1" | "h2" | "h3";
    color?: "primary" | "secondary" | "tertiary";
    allCaps: boolean;
    fontColor?: string;
    backgroundColor?: string;
}
/**
 * Primary UI component for user interaction
 */
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
