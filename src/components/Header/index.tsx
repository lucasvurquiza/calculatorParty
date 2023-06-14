import { View } from "react-native";
import { Text } from "../Text";
import { Container } from "./styles";
import { DeleteIcon } from "../Icons/DeleteIcon";

export function Header() {
  return (
    <Container>
      <View>
        <Text weight='300' size='15' color='#674626'>Bem-vindo(a) à</Text>
        <Text weight='700' size='25' color='#674626'>CALCULADORA</Text>
      </View>
    </Container>
  )
}