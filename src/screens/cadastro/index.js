import {Text} from "react-native";
import logo from "../../assets/images/logoSs.png";
import {Container, TextTitle} from "./style";

export const Cadastro = () => {
    return (
        <Container>
            <Image source={logo}/>
            <TextTitle>Crie uma conta<Text>Já tenho uma conta</Text></TextTitle>
        </Container>
    )
}