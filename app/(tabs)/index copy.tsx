import { Text } from 'react-native';


export default function HomeScreen() {
  const aluno = {
    numero: '1', nome: 'aluno'
  }
  return (
    <Text>Alo {aluno.nome} w</Text>
  );
}
