import {Button, Image, Pressable, Text, TextInput, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import gatinho from "./assets/images/gatinho.jpg"
import {Card} from "./components/Card/index";

export default function App() {
    // const dizerOi = () => {
    //     alert("Oi")
    // }
  return (
      <SafeAreaView>
         {/* <View>*/}
         {/*     <Text>CPF</Text>*/}
         {/*     <TextInput*/}
         {/*         placeholder="Digite seu CPF"*/}
         {/*         keyboardType={"numeric"}/>*/}
         {/* </View>*/}
         {/* <View>*/}
         {/*     <Text>Coloque uma foto sua</Text>*/}
         {/*     <Image source={gatinho}/>*/}
         {/* </View>*/}
         {/* <Pressable onPress={() => alert("Clicou")}>*/}
         {/*   <Text>Clique</Text>*/}
         {/* </Pressable>*/}
         {/* <Pressable onPress={dizerOi}>*/}
         {/*   <Text>oi</Text>*/}
         {/* </Pressable>*/}
         {/* <TouchableOpacity>*/}
         {/*     <Text>Clique</Text>*/}
         {/* </TouchableOpacity>*/}
          <Card/>

      </SafeAreaView>
  );
}