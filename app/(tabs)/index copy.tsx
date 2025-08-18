import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Lista de produtos
const produtos = [
  { id: '1', nome: 'Smash da Rima', preco: 25.00, imagem: require('@/assets/images/smash_burger.png') },
  { id: '2', nome: 'Trap Cheddar', preco: 30.00, imagem: require('@/assets/images/Trap_Cheddar.png') },
  { id: '3', nome: 'Bacon Punchline', preco: 32.00, imagem: require('@/assets/images/Bacon_Punchline.png') },
  { id: '4', nome: 'X-Beat', preco: 30.00, imagem: require('@/assets/images/X_beat.png') },
  { id: '5', nome: 'O Mais brabo da quebrada', preco: 45.00, imagem: require('@/assets/images/O_mais_brabo_da_quebrada.png') },
  { id: '6', nome: 'Verso Apimentado', preco: 33.00, imagem: require('@/assets/images/Verso_apimentado.png') },
  { id: '7', nome: 'Chiken no Flow', preco: 35.00, imagem: require('@/assets/images/Chiken_no_Flow.png') },
  { id: '8', nome: 'Fatality de Costela', preco: 40.00, imagem: require('@/assets/images/Fatality_de_Costela.png') },
  { id: '9', nome: 'Surfando no Beat', preco: 35.00, imagem: require('@/assets/images/Surfando_no_beat.png') },
  { id: '10', nome: 'Gim e Verso', preco: 37.00, imagem: require('@/assets/images/gin_verso.png') },
  { id: '11', nome: 'Beat Suíno', preco: 37.00, imagem: require('@/assets/images/Beat_Suino.png') },
  { id: '12', nome: 'Beat Suíno', preco: 37.00, imagem: require('@/assets/images/Beat_Suino.png') },
  { id: '13', nome: 'Beat Suíno', preco: 37.00, imagem: require('@/assets/images/Beat_Suino.png') },
  { id: '14', nome: 'Beat Suíno', preco: 37.00, imagem: require('@/assets/images/Beat_Suino.png') },
  { id: '15', nome: 'Beat Suíno', preco: 37.00, imagem: require('@/assets/images/Beat_Suino.png') },
  { id: '16', nome: 'Beat Suíno', preco: 37.00, imagem: require('@/assets/images/Beat_Suino.png') },
  { id: '17', nome: 'Beat Suíno', preco: 37.00, imagem: require('@/assets/images/Beat_Suino.png') },
  { id: '18', nome: 'Beat Suíno', preco: 37.00, imagem: require('@/assets/images/Beat_Suino.png') },
  { id: '19', nome: 'Beat Suíno', preco: 37.00, imagem: require('@/assets/images/Beat_Suino.png') },
  { id: '20', nome: 'Beat Suíno', preco: 37.00, imagem: require('@/assets/images/Beat_Suino.png') },
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