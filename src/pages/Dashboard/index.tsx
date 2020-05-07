import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/31808723?s=460&u=b179273fc0eed3ee84909480985413c513a6ee81&v=4"
            alt="Lara Beatriz"
          />
          <div>
            <strong>desafio-fundamentos-nodejs</strong>
            <p>Treinando os fundamentos do Node.js</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/31808723?s=460&u=b179273fc0eed3ee84909480985413c513a6ee81&v=4"
            alt="Lara Beatriz"
          />
          <div>
            <strong>desafio-fundamentos-nodejs</strong>
            <p>Treinando os fundamentos do Node.js</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
