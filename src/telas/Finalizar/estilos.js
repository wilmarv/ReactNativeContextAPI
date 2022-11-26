import { StyleSheet } from 'react-native';

export const estilos = (tema) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tema.fundo,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  botao: {
    margin: 16,
    marginBottom: 32,
    paddingVertical: 16,
    borderRadius: 10,
    backgroundColor: tema.botao,
  },
  botaoTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: tema.preto,
    textAlign: "center"
  }
});