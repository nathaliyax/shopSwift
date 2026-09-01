import {SafeAreaView} from "react-native-safe-area-context";
//import {Card} from "./components/Card/index";
import {Login} from "./screens/Login";
import {Cadastro} from "./screens/Cadastro";
import {Home} from "./screens/Home";

export default function App() {

  return (
      <SafeAreaView>

          {/*<Login />*/}
          {/*<Cadastro />*/}
          <Home/>

      </SafeAreaView>
  );
}