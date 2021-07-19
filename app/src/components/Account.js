import "../styles/account.scss";
import AccountEntry from "./AccountEntry";

const accountBalanceData = [
  {
    title: "Argent Bank Checking (x8349)",
    amount: "$2,082.79",
    description: "Available Balance",
  },
  {
    title: "Argent Bank Savings (x6712)",
    amount: "$10,928.42",
    description: "Available Balance",
  },
  {
    title: "Argent Bank Credit Card (x8349)",
    amount: "$184.30",
    description: "Current Balance",
  },
];

function Account() {
  return (
    <>
      {accountBalanceData.map((entry) => {
        return (
          <AccountEntry
            title={entry.title}
            amount={entry.amount}
            description={entry.description}
          />
        );
      })}
    </>
  );
}

export default Account;
