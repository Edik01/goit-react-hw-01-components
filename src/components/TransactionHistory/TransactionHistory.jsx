import { Table, Head, Th, Tr } from './TransactionHistory.styled';
export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <Head>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </Head>

      <tbody>
        {transactions.map((transaction, index) => {
          return (
            <Tr $index={index} key={transaction.id}>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </Tr>
          );
        })}
      </tbody>
    </Table>
  );
};
