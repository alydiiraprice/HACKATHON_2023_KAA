import React, { useState } from 'react';
import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Text,
  Container,
  Button,
  Stack,
} from '@mantine/core';
import Link from 'next/link';
import { makeRequest } from '../utils/axios_wrapper';

export function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (name: string, value: string | null) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    // Access the form data
    console.log('Form Data:', formData);
    // const username = formData.username;
    // const password = formData.password;

    // makeRequest('POST', 'LOGIN', { email, password })
    //     .then(response => {
    //       console.log(response);
    //       const data = response.data;
    //       setAuth(data.token, data.authUserId);
    //       props.history.push('/');
    //     })
    //     .catch(err => console.log(err))
    //     .finally(() => setLoading(false));


    // Add validation and further processing logic here
  };

  return (
    <Container size={520} my={40}>
      <Title align="center">Login</Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Stack>
          <TextInput
            label="Username"
            placeholder="Enter your username"
            name="username"
            value={formData.username}
            onChange={(event) => handleChange('username', event.target.value)}
            required
          />
          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={(event) => handleChange('password', event.target.value)}
            required
          />
        </Stack>
        <Button fullWidth mt="xl" onClick={handleLogin}>
          Login
        </Button>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Don't have an account?{' '}
          <Link href="/signup">
            Sign Up
          </Link>
        </Text>
      </Paper>
    </Container>
  );
}
