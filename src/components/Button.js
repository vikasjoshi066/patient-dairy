import { TouchableOpacity, Text } from "react-native";


const Button = ({ onPress, style, textStyle, title }) => (
  <TouchableOpacity style={style} onPress={onPress}>
    <Text style={textStyle}>{title}</Text>
  </TouchableOpacity>
);

export default Button;
