/**
 * O Styled Components é uma dependencia que permite
 * criar componentes já estilizados
 * como se fosse CSS e também injetar javascript
 **/
import styled from "styled-components";



//Exportando componentes ja estilizados
export const Post = styled.View`
	margin-top: 5px;
`;

export const Header = styled.View`
	padding: 15px;
	flexDirection: row;
	align-items: center;

`;

export const Avatar = styled.Image`
	width: 32px;
	height: 32px;
	border-radius: 16px;
	margin-right: 10px;
`;

export const Name = styled.Text`
	color: #333;
	font-weight: bold;
`;

export const PostImagem = styled.Image`
	width:100%;
	aspect-ratio:${props=> props.ratio};
`;

export const Description = styled.Text`
	padding: 15px;
	line-height: 18px;
`;
//ActivityIndicator é um sinal de loading do ReactNative
//Que se adapta a qualquer platafora seja Android IOS ou...
export const Loadin = styled.ActivityIndicator.attrs({
	size: "small",
	color:"#999"
})`
	margin: 30px 0
`