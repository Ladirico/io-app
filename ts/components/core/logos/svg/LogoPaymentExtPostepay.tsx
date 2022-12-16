import React from "react";
import { Svg, Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { SVGLogoProps } from "../LogoPayment";

const LogoPaymentExtPostepay = ({ size }: SVGLogoProps) => (
  <Svg width={size} height={size} viewBox="0 0 49 30">
    <Path
      d="M44.805 0H3.195A3.202 3.202 0 0 0 0 3.209V26.79A3.202 3.202 0 0 0 3.195 30h41.61A3.202 3.202 0 0 0 48 26.791V3.21A3.202 3.202 0 0 0 44.805 0Z"
      fill="url(#postepay-ext-gradient)"
    />
    <Path
      d="M15.779 17.895c-.436-.27-.742-.618-.917-1.045l-1.064 4.801H12l2.639-11.909c.036-.163.127-.659.273-1.488h1.826l-.181.989c-.06.27-.102.474-.127.612a4.569 4.569 0 0 1 1.662-1.294 4.805 4.805 0 0 1 2.04-.457c1.218 0 2.098.446 2.642 1.337.543.891.642 2.115.297 3.672-.35 1.582-1.033 2.841-2.047 3.78-1.015.938-2.18 1.407-3.499 1.407-.728 0-1.31-.135-1.746-.405Zm5.344-7.55c-.314-.597-.91-.895-1.788-.895-.98 0-1.781.333-2.405.998-.625.666-1.08 1.645-1.367 2.938-.269 1.211-.237 2.112.093 2.702.331.59.942.884 1.833.884s1.677-.338 2.32-1.016c.642-.678 1.107-1.664 1.394-2.957.26-1.173.233-2.058-.08-2.654ZM32.835 16.596c-.986.979-2.123 1.468-3.41 1.468-1.185 0-2-.417-2.442-1.252l-1.077 4.858h-2.909l2.985-13.472h2.777l-.23 1.384c.367-.47.831-.852 1.392-1.144.56-.292 1.201-.438 1.923-.438 1.274 0 2.168.449 2.681 1.346.514.898.61 2.068.29 3.512-.334 1.513-.995 2.759-1.98 3.738Zm-2.003-1.266c.493-.58.847-1.357 1.063-2.33.222-1.004.225-1.783.009-2.335-.217-.552-.648-.829-1.295-.829-.646 0-1.25.292-1.79.876-.54.584-.924 1.39-1.152 2.42-.224 1.01-.21 1.774.043 2.292.252.518.718.776 1.396.776.677 0 1.234-.29 1.727-.87Z"
      fill="#024FC0"
    />
    <Defs>
      <LinearGradient
        id="postepay-ext-gradient"
        x1="24"
        y1="0"
        x2="24"
        y2="30"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F6E301" />
        <Stop offset="1" stopColor="#E9D407" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default LogoPaymentExtPostepay;