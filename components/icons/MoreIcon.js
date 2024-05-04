import { Circle, Svg } from "react-native-svg";

export default function MoreIcon() {
  return (
    <Svg
      fill="#000000"
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx="17.5" cy="12" r="1.5" />
      <Circle cx="12" cy="12" r="1.5" />
      <Circle cx="6.5" cy="12" r="1.5" />
    </Svg>
  );
}
