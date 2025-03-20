import { Button, Stack, Title } from '@mantine/core';


export default function NavBarContent({ data }) {
    const buttons = data.map(week => (
        <Button color="blue" fullWidth mt="md" radius="md" size='lg' key={week.week}>
            {week.date_from} - {week.date_to}
        </Button>
    ))
  return (
    <Stack>
        <Title>Kalenderwoche</Title>
        {buttons}
    </Stack>
    )
}
