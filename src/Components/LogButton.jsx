export default function LogButton({ authUser, handleLogOut }) {
  return (
    !authUser ?
      <li>
        <a href='/signIn'>Login</a>
      </li>
      :
      <li>
        <button as="a"onClick={handleLogOut}>Logout</button>
      </li>
  );
}