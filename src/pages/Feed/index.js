import {FlatList, Text, View } from "react-native";

import {useEffect, useState } from "react";


//Importando componentes do styledComponents
import {Avatar, Description, Header, Name, Post, PostImagem } from "./styles";


export default function Feed(){

    const [feed,setFeed] = useState([]);
    const [page,setPage] = useState(1);

    /**
     * Função responsavel por carregar os posts e o
     * resto deles ao scrollar até o fim
     **/
    async function loadPage(pageNumber=page)
    {

        /**
         * Fazendo uma requisição
         * O react-native ele não reconhece o localhost
         * Portanto algumas API locais podem dar problema
         * Aki no caso a solução foi colocar o 'http' e o IP do expo
         * Mas por algum motivo não funcionou com o servidor json-server de forma direta
         * Então tive que consumir a API do json-server com o php e ai então consumir aki com o
         * React Native
         **/

        //Promisse e Async function
        const response = await fetch(
            `http://192.168.0.23/anime.php?page=${pageNumber}`
        );

        //Os dados da requisição transformados em JSON
        const data = await response.json();

        //console.log(data);
        setFeed([...feed,...data]);
        setPage(pageNumber + 1);
    }

    useEffect(()=>{

        loadPage();

    },[]);

    return(
       //Todos esses componentes foram criados no styles.js pelo styledComponents
        <View>
            <FlatList
                data={feed}
                
                keyExtractor={(post)=> String(post.id)}

                /*Função que vai ser executada ao chegar no fim da lista*/
                onEndReached={()=> loadPage()}

                //Quando tiver a 10%(0.1) de chegar no fim da lista ele vai executar a função onEndReached
                onEndReachedThreshold={0.1}

                renderItem={({item})=>(
                    <Post>

                        <Header>
                            <Avatar source={{uri: item.author.avatar}}/>
                            <Name>{item.author.name}</Name>
                        </Header>

                        <PostImagem ratio={item.aspectRatio} source={{uri: item.image}} />

                        <Description>
                            <Name>{item.author.name}</Name> {item.description}
                        </Description>

                    </Post>
                )}
            />
        </View>
    );
}