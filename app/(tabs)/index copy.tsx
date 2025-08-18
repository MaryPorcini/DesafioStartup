import React from 'react';
import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Lista de produtos
const produtos = [
  { id: '1', nome: 'Hambúrguer Clássico', preco: 25.00, imagem: require('@/assets/images/burger.png') },
  { id: '2', nome: 'Hambúrguer Duplo', preco: 30.00, imagem: require('@/assets/images/burger.png') },
  { id: '3', nome: 'Cheeseburger', preco: 28.00, imagem: require('@/assets/images/burger.png') },
  { id: '4', nome: 'Bacon Burger', preco: 32.00, imagem: require('@/assets/images/burger.png') },
  { id: '5', nome: 'Veggie Burger', preco: 27.00, imagem: require('@/assets/images/burger.png') },
  { id: '6', nome: 'Frango Burger', preco: 26.00, imagem: require('@/assets/images/burger.png') },
  { id: '7', nome: 'Burger BBQ', preco: 33.00, imagem: require('@/assets/images/burger.png') },
  { id: '8', nome: 'Burger Especial', preco: 35.00, imagem: require('@/assets/images/burger.png') },
  { id: '9', nome: 'Burger Picante', preco: 29.00, imagem: require('@/assets/images/burger.png') },
  { id: '10', nome: 'Burger Premium', preco: 40.00, imagem: require('@/assets/images/burger.png') },
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
