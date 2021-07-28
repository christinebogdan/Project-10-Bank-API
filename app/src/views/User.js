import "../styles/user.scss";
import Account from "../components/Account";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../store/actions";

function User(props) {
  const state = useSelector((state) => state.authentication);
  const dispatch = useDispatch();

  const editName = () => {
    dispatch(actionCreators.editName);
    console.log("changeName");
    console.log(state);
  };

  const handleChange = (e) => {
    if (e.target.id === "firstName") {
      dispatch(actionCreators.firstName(e.target.value));
    } else if (e.target.id === "lastName") {
      dispatch(actionCreators.lastName(e.target.value));
    }
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
        <form>
          <div className="input-wrapper">
            <input
              type="text"
              id="firstName"
              placeholder={state.userInfo.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="input-wrapper">
            <input
              type="test"
              id="lastName"
              placeholder={state.userInfo.lastName}
              onChange={handleChange}
            />
          </div>
        </form>
      </>
    );
  };

  return (
    <main className="main bg-dark">
      <div className="header">{state.editName ? edit() : noEdit()}</div>
      <h2 className="sr-only">Accounts</h2>
      <Account />
    </main>
  );

  // return (
  //   <main className="main bg-dark">
  //     <div className="header">
  //       <h1>
  //         Welcome back
  //         <br />
  //         {state.firstName} {state.lastName}
  //       </h1>
  //       <button className="edit-button" onClick={changeName}>
  //         Edit Name
  //       </button>
  //     </div>
  //     <h2 className="sr-only">Accounts</h2>
  //     <Account />
  //   </main>
  // );
}

export default User;
