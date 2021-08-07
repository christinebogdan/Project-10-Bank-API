import "../styles/user.scss";
import Account from "../components/Account";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../store/actions";

function User(props) {
  const state = useSelector((state) => state.authentication);
  const dispatch = useDispatch();

  const editName = () => {
    dispatch(actionCreators.editName());
  };

  const handleChange = (e) => {
    if (e.target.id === "firstName") {
      dispatch(actionCreators.editFirstName(e.target.value));
    } else if (e.target.id === "lastName") {
      dispatch(actionCreators.editLastName(e.target.value));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    const data = state.editNameInput;
    dispatch(actionCreators.updateName(data));
    sessionStorage.setItem("firstName", data.firstName);
    sessionStorage.setItem("lastName", data.lastName);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    dispatch(actionCreators.editName());
  };

  const noEdit = () => {
    return (
      <>
        <h1>
          Welcome back
          <br />
          {state.userInfo.firstName} {state.userInfo.lastName}
        </h1>
        <button className="edit-button" onClick={editName}>
          Edit Name
        </button>
      </>
    );
  };

  const edit = () => {
    return (
      <>
        <h1>Welcome back</h1>
        <form className="form">
          <input
            className="editName"
            type="text"
            id="firstName"
            placeholder={state.userInfo.firstName}
            onChange={handleChange}
          />

          <input
            className="editName"
            type="test"
            id="lastName"
            placeholder={state.userInfo.lastName}
            onChange={handleChange}
          />
          <div className="editName__buttons">
            <button className="editName__button" onClick={handleSave}>
              Save
            </button>
            <button className="editName__button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </>
    );
  };

  return (
    <main className={state.editName ? "main bg-light" : "main bg-dark"}>
      <div
        className={
          state.editName ? "header header-dark" : "header header-light"
        }
      >
        {state.editName ? edit() : noEdit()}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account />
    </main>
  );
}

export default User;
