export default function RegisterView() {
  return (
    <form>
      <h1>Registration</h1>
      <input label="name" name="name"></input>
      <input label="email" name="email"></input>
      <input label="password" name="password"></input>
      <button type="submit">Register</button>
    </form>
  );
}
