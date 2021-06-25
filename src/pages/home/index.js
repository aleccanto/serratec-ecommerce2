import React, { useState, useEffect } from 'react';
import ApiProduto from '../../service/ApiProduto'
import MeuCard from '../../components/Card/MeuCard';
import { ContainerprodutoWay } from '../../styles/container-produto-styled'
import { Link } from 'react-router-dom';


const Home = () => {

    const [produtos, setProdutos] = useState([])

    const obterProdutos = () => {
        ApiProduto.getProduto()
            .then((resposta => {
                setProdutos(resposta.data);
                
            }))
            .catch((erro => {
                console.log(erro)
            }));
    }

    useEffect(() => {
        obterProdutos();
    }, [])

    return (
        // <div className='container-produtos'>
        <ContainerprodutoWay>
            {produtos.map(produto => (
                <Link to={'/produtos/' + produto.id} key={produto.id}>
                    <MeuCard
                        img={produto.url}
                        nome={produto.nome}
                        descricao={produto.descricao}
                        preco={produto.preco}
                    />
                </Link>
            ))
            }
        </ContainerprodutoWay>
        // </div>
    );
}

export default Home;
