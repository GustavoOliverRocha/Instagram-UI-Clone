import {FlatList, Text, View } from "react-native";

import {useEffect, useState } from "react";


//Importando componentes do styledComponents
import {Avatar, Description, Header, Loadin, Name, Post, PostImagem } from "./styles";


export default function Feed(){
    /**
     * feed: conterá a API
     * page: É a paginação atual
     * total: total de posts atualmente renderizados
     * loading:
     **/ 
    const [feed,setFeed] = useState([]);
    const [page,setPage] = useState(1);
    const [total,setTotal] = useState(0);
    const [loading,setLoading] = useState(false);


    /**
     * Função responsavel por carregar os posts e o
     * resto deles ao scrollar até o fim
     **/
    async function loadPage(pageNumber = page)
    {
        if(total && pageNumber > total)
            return;

        setLoading(true);

        console.log(pageNumber);

        /**
         * Fazendo uma requisição:
         * 
         * O react-native ele não reconhece o localhost
         * Portanto algumas API locais podem dar problema
         * Aki no caso a solução foi colocar o 'http' e o IP do expo
         * Mas por algum motivo não funcionou com o servidor json-server de forma direta
         * Então tive que consumir a API do json-server com o php e ai então consumir aki com o
         * React Native
         **/
        //Promise e Async function
        const response = await fetch(
            `http://192.168.0.23/anime.php?page=${pageNumber}`
        );

        //Os dados da requisição transformados em JSON
        const data = await response.json();

        const totalItems = response.headers.get('X-Total-Count');

        //console.log(data);
        setTotal(Math.floor(totalItems / 5));
        setFeed([...feed,...data]);
        setPage(pageNumber + 1);

        setLoading(false);
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

                /**Essa propriedade renderiza um componente no final da pagina*/
                ListFooterComponent={
                    //Se o state do loading for true ele renderiza
                    loading && <Loadin/>
                }

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