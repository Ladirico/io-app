import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../Icon";

const IconEyeHide = ({ size, color }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="m22.207 2.5-.707-.707L1.793 21.5l.707.707L22.207 2.5ZM12 4c1.685 0 3.332.353 4.868 1.01l-1.076 1.076A10.906 10.906 0 0 0 12 5.4c-4.268 0-8.272 2.554-10.5 6.682.98 1.817 2.305 3.328 3.845 4.452l-.906.905c-1.774-1.313-3.288-3.087-4.386-5.22a.476.476 0 0 1 0-.437C2.523 6.982 7.101 4 12 4Z"
      fill={color}
    />
    <Path
      d="M12 7c.833 0 1.62.205 2.312.567l-.965.964a3.754 3.754 0 0 0-4.816 4.816l-.964.965A4.97 4.97 0 0 1 7 12c0-2.757 2.243-5 5-5ZM16.433 9.688l-.92.921a3.754 3.754 0 0 1-4.903 4.903l-.922.921A4.97 4.97 0 0 0 12 17c2.757 0 5-2.243 5-5 0-.834-.205-1.62-.567-2.312Z"
      fill={color}
    />
    <Path
      d="M12 9.5c.12 0 .238.009.354.025l-2.83 2.829A2.502 2.502 0 0 1 12 9.5ZM14.475 11.646l-2.829 2.83a2.503 2.503 0 0 0 2.829-2.829Z"
      fill={color}
    />
    <Path
      d="M12 18.764c-1.346 0-2.665-.254-3.911-.731l-.957.956A12.342 12.342 0 0 0 12 20c4.9 0 9.477-2.982 11.947-7.781.07-.138.07-.3 0-.437-1.098-2.134-2.612-3.908-4.386-5.221l-1.001 1c1.58 1.13 2.94 2.667 3.94 4.521-2.229 4.128-6.232 6.682-10.5 6.682Z"
      fill={color}
    />
  </Svg>
);

export default IconEyeHide;