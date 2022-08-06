import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Image } from 'react-native';
//Aqui podemos ver que se uma pasta tem o  componente com o nome de index.js
//você não precisa especificar o arquivo no caminho do import
import Feed from './src/pages/Feed';

import logo from './src/assets/instagram.png';

const Stack = createNativeStackNavigator();
function Imagem(){
        return(
                <Image
      style={{ width: 99, height: 28 }}
      source={require('./src/assets/instagram.png')}
    />
        );
}
export default function Routes(){
        return(
        <NavigationContainer>
                <Stack.Navigator 
                //Para que todas as telas tenham a mesma estilização
                //usa-se a propriedade screenOptions
                    screenOptions={{
                        //Nós podemos usar a prop "title:" para strings normais
                        //e a headerTitle para componentes

                        headerStyle:{
                                backgroundColor:'#f5f5f5'
                        },
                        headerTitle:(props)=><Imagem {...props}/>,
                        headerTitleAlign: 'center'
                    }}
                >
                        {/** 
                         * Esse stack.screen é responsavel pelo header da nossa aplicação 
                         * Toda rota/tela vai ter um desse e cada uma vai ter uma configuração/propriedades
                         * 
                         * name: é o nome da rota, também aparece no header mas pode ser sobre escrito por outra propriedade, o title
                         * compnent é o componente que vai ser renderiado nessa rota
                         * e options são outras configurações que pode ter esse header*/}
                        <Stack.Screen 
                                name="Home"
                                component={Feed}                       
                        />
                </Stack.Navigator>
        </NavigationContainer>
        );
}