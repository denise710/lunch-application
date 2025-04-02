import { Card, Table, Title } from '@mantine/core';
import MealCard from './MealCard';

export default function Mealplan({ week }) {
  return (
    <Table>
      <Table.Tbody>
        {week.meals.map((meal) => (
            <>
              <Table.Tr key={`${meal.weekday}-meals`}>
                <Table.Td><MealCard meal={meal.pre} cardTitle={"Vorspeise"}/></Table.Td>
              </Table.Tr>
            </>
        ))}
      </Table.Tbody>
    </Table>
  );
}
