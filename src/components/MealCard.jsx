import { IconHeart } from '@tabler/icons-react';
import { useState } from 'react';
import { Button, Badge, Card, Group, Image, Text } from '@mantine/core';
import classes from './MealCard.module.css';
import fallbackImage from '../assets/foodImg/placeholder.png';

export default function MealCard({ meal, cardTitle }) {

    const [favorites, setFavorites] = useState([]);
  
    const toggleFavorite = (mealName) => {
      setFavorites((prev) =>
        prev.includes(mealName) ? prev.filter((name) => name !== mealName) : [...prev, mealName]
      );
    };


  return (
    <Card className={classes.card} shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section className={classes.section}>
        <Text className={classes.label}>{cardTitle}</Text>
        <Image src={meal.picture} height={160} alt={meal.name} fallbackSrc={fallbackImage}/>
      </Card.Section>
      <Group position="apart" mt="md">
        <Text fw={500}>{meal.title}</Text>
        <Button
          size="xs"
          variant={favorites.includes(meal.title) ? 'filled' : 'outline'}
          color="red"
          onClick={() => toggleFavorite(meal.title)}
        >
          <IconHeart size={16}/>
        </Button>
      </Group>
      <Group mt="xs">
        {meal.badges.map((tag) => (
          <Badge key={tag} color="blue" variant="light">
            {tag}
          </Badge>
        ))}
      </Group>
    </Card>
  );
}
