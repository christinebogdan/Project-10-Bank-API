import { useSelector } from "react-redux";
import "../styles/accountEntry.scss";

function AccountEntry(props) {
  const state = useSelector((state) => state.authentication);
  return (
    <section className={state.editName ? "account border-light" : "account"}>
      <div className="account-content-wrapper">
        <h3 className="account-title">{props.title}</h3>
        <p className="account-amount">{props.amount}</p>
        <p className="account-amount-description">{props.description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button
          className={
            state.editName
              ? "transaction-button button-purple"
              : "transaction-button"
          }
        >
          View transactions
        </button>
      </div>
    </section>
  );
}

export default AccountEntry;
