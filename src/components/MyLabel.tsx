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
}

/**
 * Primary UI component for user interaction
 */
export const MyLabel = ({
  label = "No label",
  size = "normal",
  color,
  allCaps = false,
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
