import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView } from 'react-native'

const styles = StyleSheet.create({
    input:{
        width:'70%',
        margin: 10,
        backgroundColor:'l#ffb6c1'
    },
    container:{
        alignItems:'center'
    }
})

export default SignUp = () => {
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    const registrarUsuario = async function () {
        if (!nome || !email || !senha){
            console.log('os parametros nome, email e senha devem ser fornecidos')
            return
        }
        const resposta = await fetch('https://taskhub-s37f.onrender.com/auth/signup',{
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({name: nome, email:email, password:senha})
        })
        if(!resposta){
            console.log('erro')
        } else if (resposta.status == 200){
            console.log('User criado com sucesso!')
        } else {
            console.log('Ocorreu um erro.')
        }

    }

    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Registre-se</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText= {(text) => setEmail(text)}
                    value={email}
                    placeholder='Insira seu e-mail aqui.'
                />
                <TextInput
                    style={styles.input}
                    onChangeText= {(text) => setNome(text)}
                    value={nome}
                    placeholder='Insira seu nome aqui.'
                />
                <TextInput
                    style={styles.input}
                    onChangeText= {(text) => setSenha(text)}
                    value={senha}
                    placeholder='Insira sua ssenha aqui'
                    secureTextEntry={true}
                />
                
            </View>
            <View>
                <Pressable onPress={registrarUsuario}>
                    <Text>Cadastrar</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}