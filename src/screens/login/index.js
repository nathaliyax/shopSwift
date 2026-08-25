import {View, Text, Image, TextInput, Pressable} from "react-native";
import { styles } from "./style";
import Logo from "../../assets/images/logoSs.png";

export const Login = () => {
    return (
        <View style={styles.containerHome}>

            <Image source={Logo}></Image>
            <View style={styles.contentHome}>

            <Text style={styles.textTitle}>Faça login e se <Text
                style={styles.textHighlight}>surpreenda</Text></Text>
            </View>

            <View style={styles.containerForm}>

                <View style={styles.containerInputs}>
                    <View>

                    <Text>Email:</Text>
                    <TextInput keyboardType="email-address" style={styles.input} />

                    </View>

                    <View>

                    <Text>Senha:</Text>
                    <TextInput secureTextEntry={true} style={styles.input} />

                    </View>
                </View>

            <Pressable style={styles.buttonLogin}>

                <Text style={styles.txtLogin}>Entrar</Text>

            </Pressable>

                </View>

            <Text style={styles.txtNoAccount}>Não tem uma conta? <Text style={styles.txtCriarConta}>Criar conta</Text></Text>

        </View>
    );
}