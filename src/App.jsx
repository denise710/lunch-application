import './App.css';
import '@mantine/core/styles.css';
import { AppShell, Image, MantineProvider, DEFAULT_THEME, Title, Group } from '@mantine/core';
import logo from './assets/logo.png'
import { data } from './assets/data';
import Mealplan from './components/Mealplan';
import NavBarContent from './components/NavBarContent';
import { useState } from 'react';

export default function App() {
  const [week, setWeek] = useState(data[0])

  const selectWeek = (weekNo) => {
    setWeek(data[weekNo-1])
  }

  return (
    <MantineProvider theme={DEFAULT_THEME}>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
        }}
        padding="md"
      >
        <AppShell.Header>
        <Group justify="center">
          <Image src={logo} radius="md" h={55} w="auto" fit="contain" />
          <Title>Let's have Lunch!</Title>
          </Group>
        </AppShell.Header>

        <AppShell.Navbar p="md">
          <NavBarContent data={data} selectWeek={selectWeek} />
        </AppShell.Navbar>

        <AppShell.Main>
          <Mealplan week={week} />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
