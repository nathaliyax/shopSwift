import {Button, Image, Text, TextInput, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export default function App() {
  return (
      <SafeAreaView>
         <View>
             <Text>Nome</Text>
             <TextInput
                 placeholder="Digite seu nome"/>
          </View>
          <View>
              <Text>Sobrenome</Text>
              <TextInput
                  placeholder="Digite seu sobrenome"/>
          </View>
          <View>
              <Text>CPF</Text>
              <TextInput
                  placeholder="Digite seu CPF"
                  keyboardType={"numeric"}/>

          </View>
          <View>
              <Text>Email</Text>
              <TextInput
                  placeholder="Digite seu email"
                  keyboardType="email"/>
          </View>
          <View>
              <Text>Senha</Text>
              <TextInput
                  placeholder="Digite sua senha"
                  secureTextEntry={true}/>
          </View>
          <Button title="Teste"/>

      </SafeAreaView>
  );
}