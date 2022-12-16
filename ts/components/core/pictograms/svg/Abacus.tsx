import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGPictogramProps } from "../Pictogram";

const Abacus = ({ size, color, ...props }: SVGPictogramProps) => (
  <Svg width={size} height={size} viewBox="0 0 120 120" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M110.426 100.851h-.639V5.745A5.751 5.751 0 0 0 104.043 0a5.751 5.751 0 0 0-5.745 5.745v7.66h-4.072c-.853-3.3-3.855-5.745-7.418-5.745a7.642 7.642 0 0 0-5.744 2.601 7.642 7.642 0 0 0-5.745-2.601c-3.563 0-6.565 2.444-7.417 5.744h-4.315c-.852-3.3-3.854-5.744-7.417-5.744a7.642 7.642 0 0 0-5.745 2.601 7.641 7.641 0 0 0-11.49 0 7.642 7.642 0 0 0-5.744-2.601c-3.563 0-6.565 2.444-7.417 5.744h-4.072v-7.66A5.751 5.751 0 0 0 15.957 0a5.751 5.751 0 0 0-5.744 5.745v95.106h-.639c-5.28 0-9.574 4.295-9.574 9.575v7.659C0 119.143.857 120 1.915 120h116.17a1.915 1.915 0 0 0 1.915-1.915v-7.659c0-5.28-4.295-9.575-9.574-9.575ZM94.468 17.234h3.83v3.83h-3.83v-3.83Zm-7.66-5.745a3.834 3.834 0 0 0-3.83 3.83v7.66a3.834 3.834 0 0 0 3.83 3.83 3.834 3.834 0 0 0 3.83-3.83v-7.66a3.834 3.834 0 0 0-3.83-3.83ZM71.49 15.32a3.834 3.834 0 0 1 3.83-3.83 3.834 3.834 0 0 1 3.83 3.83v7.66a3.834 3.834 0 0 1-3.83 3.83 3.834 3.834 0 0 1-3.83-3.83v-7.66Zm-3.83 1.915h-3.83v3.83h3.83v-3.83ZM52.34 15.32a3.834 3.834 0 0 1 3.83-3.83A3.834 3.834 0 0 1 60 15.32v7.66a3.834 3.834 0 0 1-3.83 3.83 3.834 3.834 0 0 1-3.83-3.83v-7.66Zm-7.66-3.83a3.834 3.834 0 0 0-3.829 3.83v7.66a3.834 3.834 0 0 0 3.83 3.83 3.834 3.834 0 0 0 3.83-3.83v-7.66a3.834 3.834 0 0 0-3.83-3.83Zm-15.318 3.83a3.834 3.834 0 0 1 3.83-3.83 3.834 3.834 0 0 1 3.83 3.83v7.66a3.834 3.834 0 0 1-3.83 3.83 3.834 3.834 0 0 1-3.83-3.83v-7.66Zm-3.83 1.915h-3.83v3.83h3.83v-3.83Zm-3.83 7.66h4.072c.853 3.3 3.855 5.744 7.417 5.744a7.642 7.642 0 0 0 5.745-2.6 7.641 7.641 0 0 0 11.49 0 7.642 7.642 0 0 0 5.744 2.6c3.563 0 6.565-2.444 7.418-5.744h4.314c.853 3.3 3.855 5.744 7.418 5.744a7.642 7.642 0 0 0 5.744-2.6 7.642 7.642 0 0 0 5.745 2.6c3.563 0 6.565-2.444 7.417-5.744h4.072v17.872h-4.072c-.853-3.3-3.855-5.745-7.418-5.745a7.642 7.642 0 0 0-5.744 2.602 7.641 7.641 0 0 0-11.49 0 7.641 7.641 0 0 0-11.49 0 7.641 7.641 0 0 0-5.744-2.602c-3.563 0-6.565 2.445-7.417 5.745h-4.315c-.852-3.3-3.854-5.745-7.417-5.745-3.563 0-6.565 2.445-7.417 5.745h-4.072V24.894Zm76.596 25.532v-3.83h-3.83v3.83h3.83Zm-7.66-5.745v7.66a3.834 3.834 0 0 1-3.83 3.83 3.834 3.834 0 0 1-3.83-3.83v-7.66a3.834 3.834 0 0 1 3.83-3.83 3.834 3.834 0 0 1 3.83 3.83Zm-11.49 7.66v-7.66a3.834 3.834 0 0 0-3.829-3.83 3.834 3.834 0 0 0-3.83 3.83v7.66a3.834 3.834 0 0 0 3.83 3.83 3.834 3.834 0 0 0 3.83-3.83ZM67.66 44.68v7.66a3.834 3.834 0 0 1-3.83 3.83A3.834 3.834 0 0 1 60 52.34v-7.66a3.834 3.834 0 0 1 3.83-3.83 3.834 3.834 0 0 1 3.83 3.83Zm-11.49 7.66v-7.66a3.834 3.834 0 0 0-3.83-3.83 3.834 3.834 0 0 0-3.83 3.83v7.66a3.834 3.834 0 0 0 3.83 3.83 3.834 3.834 0 0 0 3.83-3.83Zm-11.49-5.745v3.83h-3.829v-3.83h3.83Zm-7.659 5.744v-7.66a3.834 3.834 0 0 0-3.83-3.829 3.834 3.834 0 0 0-3.83 3.83v7.66a3.834 3.834 0 0 0 3.83 3.83 3.834 3.834 0 0 0 3.83-3.83Zm-15.319-5.744h3.83v3.83h-3.83v-3.83Zm4.072 7.66h-4.072v17.871h4.072c.852-3.3 3.854-5.744 7.417-5.744a7.642 7.642 0 0 1 5.745 2.601 7.642 7.642 0 0 1 5.745-2.601c3.562 0 6.564 2.445 7.417 5.745h4.314c.853-3.3 3.855-5.745 7.418-5.745a7.64 7.64 0 0 1 5.744 2.601 7.642 7.642 0 0 1 11.49 0 7.642 7.642 0 0 1 5.745-2.601c3.562 0 6.564 2.445 7.417 5.745h4.072V54.254h-4.072c-.852 3.3-3.855 5.745-7.417 5.745a7.642 7.642 0 0 1-5.745-2.601 7.642 7.642 0 0 1-11.49 0 7.642 7.642 0 0 1-11.489 0A7.642 7.642 0 0 1 52.34 60c-3.562 0-6.565-2.445-7.417-5.745H40.61C39.756 57.555 36.754 60 33.19 60c-3.562 0-6.564-2.445-7.417-5.745Zm72.524 21.701v3.83h-3.83v-3.83h3.83Zm-7.66 5.745v-7.66a3.834 3.834 0 0 0-3.83-3.83 3.834 3.834 0 0 0-3.83 3.83v7.66a3.834 3.834 0 0 0 3.83 3.83 3.834 3.834 0 0 0 3.83-3.83Zm-11.49-7.66v7.66a3.834 3.834 0 0 1-3.829 3.83 3.834 3.834 0 0 1-3.83-3.83v-7.66a3.834 3.834 0 0 1 3.83-3.83 3.834 3.834 0 0 1 3.83 3.83Zm-11.488 7.66v-7.66a3.834 3.834 0 0 0-3.83-3.83 3.834 3.834 0 0 0-3.83 3.83v7.66a3.834 3.834 0 0 0 3.83 3.83 3.834 3.834 0 0 0 3.83-3.83Zm-11.49-5.745v3.83h-3.83v-3.83h3.83Zm-7.66 5.745v-7.66a3.834 3.834 0 0 0-3.829-3.83 3.834 3.834 0 0 0-3.83 3.83v7.66a3.834 3.834 0 0 0 3.83 3.83 3.834 3.834 0 0 0 3.83-3.83Zm-11.489-7.66v7.66a3.834 3.834 0 0 1-3.83 3.83 3.834 3.834 0 0 1-3.83-3.83v-7.66a3.834 3.834 0 0 1 3.83-3.83 3.834 3.834 0 0 1 3.83 3.83Zm-11.49 1.915h-3.829v3.83h3.83v-3.83ZM14.044 5.745c0-1.056.859-1.915 1.914-1.915 1.056 0 1.915.859 1.915 1.915v89.362a1.915 1.915 0 1 0 3.83 0v-11.49h4.072c.852 3.3 3.855 5.745 7.417 5.745a7.642 7.642 0 0 0 5.745-2.601 7.641 7.641 0 0 0 5.745 2.601c3.562 0 6.565-2.445 7.417-5.745h4.315c.852 3.3 3.854 5.745 7.417 5.745a7.642 7.642 0 0 0 5.745-2.601 7.641 7.641 0 0 0 11.489 0 7.642 7.642 0 0 0 5.745 2.601c3.562 0 6.565-2.445 7.417-5.745h4.072v11.49a1.915 1.915 0 1 0 3.83 0V5.745c0-1.056.859-1.915 1.915-1.915s1.914.859 1.914 1.915v95.106H14.043V5.745ZM3.83 116.17h112.34v-5.744a5.751 5.751 0 0 0-5.744-5.745H9.574a5.751 5.751 0 0 0-5.744 5.745v5.744Z"
      fill={color}
    />
  </Svg>
);

export default Abacus;