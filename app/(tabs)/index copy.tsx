// app/(tabs)/index.tsx
import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Flow na Chapa</Text>

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
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  lista: {
    paddingHorizontal: 10,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 8,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  imagem: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  nome: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 5,
    textAlign: 'center',
  },
  preco: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
});
