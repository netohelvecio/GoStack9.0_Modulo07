import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <>
      <ProductList>
        <li>
          <img
            src="https://imgcentauro-a.akamaihd.net/900x900/9234417O/tenis-new-balance-ml501-masculino-img.jpg"
            alt="Tênis"
          />
          <strong>Tênis top</strong>
          <span>R$ 145,00</span>

          <button type="button">
            <div>
              <MdShoppingCart size={16} color="#FFF" /> 3
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>

        <li>
          <img
            src="https://imgcentauro-a.akamaihd.net/900x900/9234417O/tenis-new-balance-ml501-masculino-img.jpg"
            alt="Tênis"
          />
          <strong>Tênis top</strong>
          <span>R$ 145,00</span>

          <button type="button">
            <div>
              <MdShoppingCart size={16} color="#FFF" /> 3
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>

        <li>
          <img
            src="https://imgcentauro-a.akamaihd.net/900x900/9234417O/tenis-new-balance-ml501-masculino-img.jpg"
            alt="Tênis"
          />
          <strong>Tênis top</strong>
          <span>R$ 145,00</span>

          <button type="button">
            <div>
              <MdShoppingCart size={16} color="#FFF" /> 3
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>

        <li>
          <img
            src="https://imgcentauro-a.akamaihd.net/900x900/9234417O/tenis-new-balance-ml501-masculino-img.jpg"
            alt="Tênis"
          />
          <strong>Tênis top</strong>
          <span>R$ 145,00</span>

          <button type="button">
            <div>
              <MdShoppingCart size={16} color="#FFF" /> 3
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>

        <li>
          <img
            src="https://imgcentauro-a.akamaihd.net/900x900/9234417O/tenis-new-balance-ml501-masculino-img.jpg"
            alt="Tênis"
          />
          <strong>Tênis top</strong>
          <span>R$ 145,00</span>

          <button type="button">
            <div>
              <MdShoppingCart size={16} color="#FFF" /> 3
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>

        <li>
          <img
            src="https://imgcentauro-a.akamaihd.net/900x900/9234417O/tenis-new-balance-ml501-masculino-img.jpg"
            alt="Tênis"
          />
          <strong>Tênis top</strong>
          <span>R$ 145,00</span>

          <button type="button">
            <div>
              <MdShoppingCart size={16} color="#FFF" /> 3
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      </ProductList>
    </>
  );
}
