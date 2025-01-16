import { SVGProps } from "react";

export interface IconPropTypes extends SVGProps<SVGSVGElement> {
  colorScheme?: "primary" | "secondary" | "tertiary";
}
