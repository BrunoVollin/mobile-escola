import { Text, Image } from "react-native";
import { Wrapper, Container } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Button, TextInput, RadioButton } from "react-native-paper";
import { useContext, useState } from "react";
import { AuthContext } from "./../../contexts/AuthContext";
import UserService from "../../services/user";
import { ToastAndroid } from "react-native";

interface LoginProps {}

export default function Login() {
  const navigation = useNavigation();
  const { setIsLoggedIn } = useContext(AuthContext);
  const [checked, setChecked] = useState<"student" | "teacher" | "adm">();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    setLoading(true);
    try {
      const data = await UserService.login(email, password);
      console.log(data);
    } catch (err) {
      ToastAndroid.showWithGravityAndOffset(
        "ERRO: Verifique se os dados estão corretos",
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        50,
        50
      );
      console.log(JSON.stringify(err));
    }
    setLoading(false);
  }

  return (
    <>
      <Wrapper>
        <Container>
          <Image
            source={require("../../../assets/login.png")}
            style={{ width: 200, height: 200 }}
          />
          <TextInput
            label="Email"
            mode="outlined"
            style={{ marginBottom: 10 }}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            label="Senha"
            mode="outlined"
            secureTextEntry={true}
            style={{ marginBottom: 10 }}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <RadioButton.Item
            label="Estudante"
            value="second"
            status={checked === "student" ? "checked" : "unchecked"}
            onPress={() => setChecked("student")}
          />
          <RadioButton.Item
            label="Professor"
            value="second"
            status={checked === "teacher" ? "checked" : "unchecked"}
            onPress={() => setChecked("teacher")}
          />
          <RadioButton.Item
            label="Administrador"
            value="second"
            status={checked === "adm" ? "checked" : "unchecked"}
            onPress={() => setChecked("adm")}
          />

          <Button mode="contained" onPress={handleLogin}
            loading={loading}
          >
            Logar
          </Button>
        </Container>
      </Wrapper>
    </>
  );
}
