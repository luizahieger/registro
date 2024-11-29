import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '##ff69b4', 
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#778899', 
    },
    input: {
        width: '90%',
        height: 50,
        backgroundColor: '#ffc0cb', 
        borderRadius: 10,
        paddingLeft: 15,
        marginVertical: 12,
        fontSize: 16,
        color: '#778899',
        borderWidth: 1,
        borderColor: '#ffc0cb',
    },
    button: {
        width: '90%',
        paddingVertical: 15,
        backgroundColor: '#dda0dd', 
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    placeholderText: {
        color: '#000000', 
    }
});

export default SignUp = () => {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    const registrarUsuario = async function () {
        if (!nome || !email || !senha) {
            console.log('Os parâmetros nome, email e senha devem ser fornecidos!');
            return;
        }
        const resposta = await fetch('https://taskhub-s37f.onrender.com/auth/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: nome, email: email, password: senha })
        });
        if (!resposta) {
            console.log('Erro');
        } else if (resposta.status == 200) {
            console.log('Usuário criado com sucesso!');
        } else {
            console.log('Ocorreu um erro.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Registre-se</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Insira seu e-mail aqui."
                placeholderTextColor={styles.placeholderText.color}
            />
            <TextInput
                style={styles.input}
                onChangeText={(text) => setNome(text)}
                value={nome}
                placeholder="Insira seu nome aqui."
                placeholderTextColor={styles.placeholderText.color}
            />
            <TextInput
                style={styles.input}
                onChangeText={(text) => setSenha(text)}
                value={senha}
                placeholder="Insira sua senha aqui."
                secureTextEntry={true}
                placeholderTextColor={styles.placeholderText.color}
            />
            <Pressable style={styles.button} onPress={registrarUsuario}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </Pressable>
        </SafeAreaView>
    );
};


