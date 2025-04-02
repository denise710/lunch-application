import { Card, Table, Title } from '@mantine/core';
import MealCard from './MealCard';

export default function Mealplan({ week }) {
  return (
    <Table>
      <Table.Tbody>
        {week.meals.map((meal) => (
            <>
          <Table.Tr key={meal.weekday}>
            <Table.Td colSpan={3}><Card><Title order={2}>{meal.weekday}</Title></Card></Table.Td>
            </Table.Tr>
            <Table.Tr key={`${meal.weekday}-meals`}>
            <Table.Td><MealCard meal={meal.pre} cardTitle={"Vorspeise"}/></Table.Td>
            <Table.Td><MealCard meal={meal.main} cardTitle={"Hauptspeise"} style={{height: '100%'}}/></Table.Td>
            <Table.Td><MealCard meal={meal.dessert} cardTitle={"Dessert"}/></Table.Td>
          </Table.Tr>
          </>
        ))}
      </Table.Tbody>
    </Table>
  );
}
