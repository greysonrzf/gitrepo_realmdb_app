import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'

import {
  Container,
  HeaderContainer,
  Name,
  RepoName,
  Description,
  FooterContainer,
  Stats,
  Stat,
  StatCount,
  Refresh
} from './styles';

export default function Repository({ data, onRefresh }) {
  return (
    <Container>
      <HeaderContainer>
        <Name>{data.name}</Name>
        <RepoName>{data.fullName}</RepoName>
      </HeaderContainer>
      <Description>{data.description}</Description>
      <FooterContainer>
        <Stats>
          <Stat>
            <Icon name="star" size={16} color="#333" />
            <StatCount> {data.stars}</StatCount>
          </Stat>
          <Stat>
            <Icon name="code-fork" size={16} color="#333" />
            <StatCount> {data.forks}</StatCount>
          </Stat>
        </Stats>
        <Refresh onPress={onRefresh}>
          <Icon name="refresh" size={20} color="#00ccff" />
        </Refresh>
      </FooterContainer>
    </Container>
  )
}

