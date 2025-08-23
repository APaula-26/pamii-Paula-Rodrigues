import { Box } from "@/components/ui/box"
import { Center } from "@/components/ui/center/index.web"
import { Image } from "@/components/ui/image"
import { Text } from "@/components/ui/text"


export default function Index() {
  return (
    <Box className="bg-info-500 p-5 w-[100%] h-[100px]">
       <Center className="h-[100%] w-[55%]">
        <Image
          source={require('../assets/images/logo-london-coffee-station.png')}
          alt="Logo"
          size="full"
          resizeMode="contain"
          style={{ width: '100%', height:'100%'}}
        />
        </Center>
    </Box>
  )
}
