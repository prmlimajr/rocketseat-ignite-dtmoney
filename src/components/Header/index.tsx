import { useState } from 'react';
import Logo from '../../assets/Logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header ({ onOpenNewTransactionModal }: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={Logo} alt="dt money"/>

        <button onClick={onOpenNewTransactionModal}>Nova transação</button>
        
      </Content>
    </Container>
  )
}