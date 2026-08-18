import {Text, View} from "react-native";
import {styles, styles} from './style';
import gatinho from "../../assets/images/gatinho.jpg"

export const Card = () => {
    return (
        <View>
            <Text style={styles.textColor}>esse é o Card</Text>
            <Image source={gatinho}/>
        </View>
    )
}