import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBpkmngbcETqDKHRcuhkA8cUjo0mZ8gCHQ",
  authDomain: "meu-primeiro-firebase-1e595.firebaseapp.com",
  projectId: "meu-primeiro-firebase-1e595",
  storageBucket: "meu-primeiro-firebase-1e595.firebasestorage.app",
  messagingSenderId: "83995557883",
  appId: "1:83995557883:web:269034d8c825a51903955e"
};


firebase.initializeApp(firebaseConfig);


import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default function App(){
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
   const fetchData = async() => {
    const nomesCollection = firebase.firestore().collection('Nomes');
    const snapshot = await nomesCollection.get();

    const data = [];
    snapshot.forEach((doc) => {
      data.push({id: doc.id, ...doc.data()});
    });

    setNomes(data);
  };

  fetchData();
 }, []);

   return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Lista de Nomes:</Text>
      <FlatList
        data={nomes}
        keyExtractor={(item)=> item.id}
        renderItem={({ item } ) => (
          <View>
            <Text>{item.Nome} {item.Sobrenome}</Text>
          </View>
          )}
       />
      </View>
     );
}