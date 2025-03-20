import { Table } from '@mantine/core';

export default function Week({ week_data }) {
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Wochentag</Table.Th>
          <Table.Th>Vorspeise</Table.Th>
          <Table.Th>Hauptgericht</Table.Th>
          <Table.Th>Dessert</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <tbody>
        {week_data.map((meal) => (
          <tr key={meal.weekday}>
            <td>{meal.weekday}</td>
            <td>{meal.pre}</td>
            <td>{meal.main}</td>
            <td>{meal.dessert}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
