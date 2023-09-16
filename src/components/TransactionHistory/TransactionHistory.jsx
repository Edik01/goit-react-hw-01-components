import PropTypes from 'prop-types';

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

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
