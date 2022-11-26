import { Text, View, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { estilos } from './estilos';
import { TemaContext } from '../../contexts/TemaContext';
import { AutenticacaoContext } from '../../contexts/AutenticacaoContext';
import { ProdutosContext } from "../../contexts/ProdutosContext";
import { useContext } from "react";


export default function Finalizar({ navigation }) {
  const { temaEscolhido } = useContext(TemaContext);
  const estilo = estilos(temaEscolhido);

  const { usuario } = useContext(AutenticacaoContext);

  const { quantidade, carrinho } = useContext(ProdutosContext);

  return (
    <View style={estilo.container}>
      <StatusBar />

      <TouchableOpacity style={estilo.botao} onPress={() => navigation.navigate('Principal')}>
        <Text style={estilo.botaoTexto}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}

