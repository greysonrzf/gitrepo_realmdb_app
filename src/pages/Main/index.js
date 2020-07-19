import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'

import api from '~/services/api'
import Repository from '~/components/Repository'
import { Container, Title, Form, Input, Submit, List } from './styles';

export default function Main() {
  const [input, setInput] = useState('')

  async function saveRepository(repository) {
    const data = {

    }
  }

  async function handleAddRepository() {
    try {
      const response = await api.get(`/repos/${input}`)



    } catch (err) {

    }
  }

  return (
    <Container>
      <Title>Repositórios</Title>

      <Form>
        <Input
          value={input}
          onChangeText={setInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar repositório..."
        />
        <Submit onPress={handleAddRepository}>
          <Icon name="add" size={22} color="#fff" />
        </Submit>
      </Form>

      <List
        keyboardShouldPersistTaps="handled"
        data={[]}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Repository data={item} />
        )}
      />
    </Container>
  )
}
