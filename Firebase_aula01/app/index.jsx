import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_APIKEY,
  authDomain: process.env.EXPO_PUBLIC_AUTHDOMAIN ,
  projectId: process.env.EXPO_PUBLIC_PROJECTID ,
  storageBucket: process.env.EXPO_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.EXPO_PUBLIC_APPID
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
    
    <View style={{flex:1,justifyContent:'center', alignItems:'center', backgroundColor: '#820263' }}>
     <div style={{justifyContent:'center',alignItems:'center', container:'justify',backgroundColor:'#8D86C9', paddingLeft: '1000px' }}>
      <Text><p style={{fontSize: '70px'}}>Lista de Nomes:</p></Text> 
      </div>
      <FlatList
        data={nomes}
        keyExtractor={(item)=> item.id}
        renderItem={({ item } ) => (
          <View>
            <Text style={{fontSize:'50px', width: 1350}}>{item.Nome} {item.Sobrenome}</Text>
          </View>
          )}
       />
      </View>
     );
}