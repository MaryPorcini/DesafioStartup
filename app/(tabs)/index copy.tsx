import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Lista de produtos
const produtos = [
  { id: '1', nome: 'Smash da Rima', preco: 24.99, imagem: require('@/assets/images/smash_burger.png') },
  { id: '2', nome: 'Trap Cheddar', preco: 29.99, imagem: require('@/assets/images/Trap_Cheddar.png') },
  { id: '3', nome: 'Bacon Punchline', preco: 31.99, imagem: require('@/assets/images/Bacon_Punchline.png') },
  { id: '4', nome: 'X-Beat', preco: 29.99, imagem: require('@/assets/images/X_beat.png') },
  { id: '5', nome: 'O Mais brabo da quebrada', preco: 44.99, imagem: require('@/assets/images/O_mais_brabo_da_quebrada.png') },
  { id: '6', nome: 'Verso Apimentado', preco: 32.99, imagem: require('@/assets/images/Verso_apimentado.png') },
  { id: '7', nome: 'Chiken no Flow', preco: 34.99, imagem: require('@/assets/images/Chiken_no_Flow.png') },
  { id: '8', nome: 'Fatality de Costela', preco: 39.99, imagem: require('@/assets/images/Fatality_de_Costela.png') },
  { id: '9', nome: 'Surfando no Beat', preco: 34.99, imagem: require('@/assets/images/Surfando_no_beat.png') },
  { id: '10', nome: 'Onion Flow', preco: 32.99, imagem: require('@/assets/images/onion_flow.png') },
  { id: '11', nome: 'Gim e Verso', preco: 36.99, imagem: require('@/assets/images/gin_verso.png') },
  { id: '12', nome: 'Flow de Maracujá', preco: 29.99, imagem: require('@/assets/images/Flow_de_maracuja.png') },
  { id: '13', nome: 'Beat Tônica', preco: 34.99, imagem: require('@/assets/images/vodka_tonica.png') },
  { id: '14', nome: 'Trapical', preco: 35.99, imagem: require('@/assets/images/Trapical.png') },
  { id: '15', nome: 'Freestyle Sour', preco: 36.99, imagem: require('@/assets/images/Whisky_Sour.png') },
  { id: '16', nome: 'Rimacolada', preco: 37.99, imagem: require('@/assets/images/pinacolada.png') },
  { id: '17', nome: 'Verso Cola', preco: 4.99, imagem: require('@/assets/images/coca.png') },
  { id: '18', nome: 'Verso Cola Zero', preco: 4.99, imagem: require('@/assets/images/coca_zero.png') },
  { id: '19', nome: 'Guaraflow', preco: 4.99, imagem: require('@/assets/images/guaraflow.png') },
  { id: '20', nome: 'Água do Free', preco: 2.99, imagem: require('@/assets/images/agua.png') },
  { id: '21', nome: 'Água do Free c/Gás', preco: 3.99, imagem: require('@/assets/images/agua_gas.png') },
  { id: '22', nome: 'Suco do Trap', preco: 11.99, imagem: require('@/assets/images/suco_trap.png') },
];

export default function HomeScreen() {
  // Função ao clicar no botão
  const handleClick = () => {
    Alert.alert("Pedido", "Você clicou no botão!");
  };

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.header}>Flow na Chapa</Text>

      {/* Botão */}
      <TouchableOpacity style={styles.botao} onPress={handleClick}>
        <Text style={styles.botaoTexto}>Fazer Pedido</Text>
      </TouchableOpacity>

      {/* Lista de Produtos */}
      <FlatList
        data={produtos}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={item.imagem} style={styles.imagem} />
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 40,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 10,
    resizeMode: 'contain',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#FF3D00',
    letterSpacing: 1.5,
  },
  botao: {
    backgroundColor: '#FF3D00',
    marginHorizontal: 50,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  botaoTexto: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  lista: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    margin: 8,
    padding: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  imagem: {
    width: 110,
    height: 110,
    borderRadius: 12,
    marginBottom: 8,
  },
  nome: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 4,
    textAlign: 'center',
    color: '#FFF',
  },
  preco: {
    fontSize: 14,
    color: '#FFB74D',
    marginTop: 3,
    fontWeight: 'bold',
  },
});