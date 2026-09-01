import {Container} from "../Cadastro/style";
import {HighlightsSection, TextHighlight, TitleHighlight} from "./style";
import logo from "../../assets/images/ShopSwiftLogo.png";
import {Image, ScrollView} from "react-native";
import d1 from "../../assets/images/destaque1.png"
import d2 from "../../assets/images/destaque2.png"
import d3 from "../../assets/images/destaque3.png"

export const Home = () => {
    return (
        <Container>
            <Image source={logo}/>

            <HighlightsSection>
                <TitleHighlight>Nossos <TextHighlight>Destaques</TextHighlight></TitleHighlight>
                <ScrollView horizontal={true}>
                    <Image source={d1}/>
                    <Image source={d2}/>
                    <Image source={d3}/>
                </ScrollView>
            </HighlightsSection>
        </Container>
    )
}