export default function UserCards({ username, email }) {
  return (
    <div>
      <h2>Users</h2>
      <p>
        Navn: <strong>{username}</strong> - Email:<strong>{email}</strong>
      </p>
    </div>
  );
}
