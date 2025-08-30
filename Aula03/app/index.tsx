import { Box } from "@/components/ui/box";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";


export default function Index() {
  return (
    <Box className="bg-primary-400 p-5 w-[100%] h-[100%]">
       {/* <Center className="h-[100%] w-[55%]">
        <Image
          source={require('../assets/images/logo-london-coffee-station.png')}
          alt="Logo"
          size="full"
          resizeMode="contain"
          style={{ width: '100%', height:'100%'}}
        />
        <VStack>
          
        {/* /* <Icon as={MenuIcon}className="text-typography-500"/> */}

        {/* </VStack> */}
        {/* </Center> */} 

        <Box 
          style={{ width: '100%', height:800}}
        >
          <Image size="full"source={require('../assets/images/LSC_01.jpg')}/>
          <VStack style={{position:"absolute"}}>
            <Text style={{color:"#fff"}} size={"sm"}>CAFETERIA PREMIUM DE INSPIRAÇÃO LONDRINA</Text>
            <Text style={{color:"#fff"}} size={"4xl"}>THE BREAKFAST, BRUNCH AND DRINK LAB.</Text>
            <Text style={{color:"#fff"}} size={"sm"}>Enviar Mensagem</Text>
            <Text style={{color:"#fff"}} size={"xl"}>LONDON COFFE STATION</Text>
            </VStack>
        </Box>
        <Box>
          <Text>A LONDON COFFEE STATION é uma cafeteria elegante e charmosa inspirada nos cafés e pubs londrinos. Oferecemos em nosso menu cafés especiais, bolos típicos britânicos e americanos, breakfast, brunch e as famosas torres afternoon tea para seu chá da tarde. venha nos conhecer e se sentir em londres.</Text>
          <Text> Experimente o tradicional Full English Breakfast.</Text>
          <Text>Conheça nossas opções de  breakfasts e brunches , cestas especiais de café da manhã, cafés especiais 100% arábica extraídos nos métodos, nossas maravilhosas pancakes e os irresistíveis cinnamon rolls com recheios de dar água na boca.</Text>
        </Box>
      </Box>
  )
}
