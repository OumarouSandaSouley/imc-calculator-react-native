import React, { useState } from "react";
import { Button, Linking, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  const [poids, setPoids] = useState(0)
  const [taille, setTaille] = useState(0)
  const [imc, setImc] = useState(0)
  const [show, setShow] = useState("hidden")
  const [tips, setTips] = useState("")
  const [message, setMessage] = useState("")
  return (
    <SafeAreaView>
      <View className="page !h-screen bg-white">

        <View className="top-bar !h-14 border-b-[#eee] border-b flex flex-row justify-between items-center w-full px-4">
          <Text className="text-lg font-bold">IMC Calculator</Text>
          <Button
          title="?"
            onPress={()=>{Linking.openURL('https://www.github.com/OumarouSandaSouley')}}
            className="bg-black   flex items-center justify-center rounded-3xl text-lg font-extrabold text-white"
          />
        </View>
        <View className="!h-[80vh] flex items-center justify-center w-full">
          <View className={`w-full py-3 ${tips}`}>
            <Text className="text-md text-center text-semibold">Entrez votre poids et votre taille puis cliquez sur Calculer pour calculer votre IMC</Text>
          </View>
        <View className="pt-6 px-4">
          <View className="h-16 rounded-sm bg-gray-100 flex flex-row items-center px-3 mb-5">
            <Text className="text-sm font-extrabold border-r-white border-r-2 pr-4">Kg</Text>
            <TextInput inputMode="decimal" className="w-4/5 text-md bg-white" placeholder="Votre Poids"  onChangeText={(e)=>{setPoids(e)}} />
          </View>
          <View className="h-16 rounded-sm bg-gray-100 flex flex-row items-center px-3 mt-3 mb-5">
            <Text className="text-sm font-extrabold border-r-white border-r-2 pr-4">m</Text>
            <TextInput inputMode="decimal" className="w-4/5 text-md bg-white" placeholder="Votre Taille" onChangeText={(e)=>{setTaille(e)}} />
          </View>
        </View>
        <View className="w-full py-4 flex items-center justify-center">
        <Button title="Calculer" className=" w-full mt-6" onPress={()=>{
          if (poids != "" && taille != "") {
            let result = parseFloat((parseFloat(poids) / (parseFloat(taille) * parseFloat(taille) )).toFixed(2))
            if(result < 18.50){setMessage("Vous êtes en minceur")}
            else if(18.50 <= imc < 25) {setMessage("Vous êtes en poids normal")}
            else if(25 <= imc < 30) { setMessage("Vous êtes en sur poids")}
            else if(30 <= imc < 40) {setMessage("Vous êtes en obesité modérée")} 
            else{ setMessage("Vous êtes en obesité sévère")}
            setImc(result)
            setShow("")
            setTips("hidden")
          }
        }} />
        </View>
        <View className={`pt-4  mt-4 px-3 ${show}`}>
          <Text className="text-center text-md mb-2">Votre Indice de Masse Corporelle est de :</Text>
          <Text className="text-center text-xl  font-bold mb-4">{imc} </Text>
          <Text className="text-lg underline  font-bold">Observations:</Text>
          <Text className="text-center text-md mb-2">{message} </Text>
        </View>
        </View>
        

      </View>
      
    </SafeAreaView>
  );
};

export default index;
