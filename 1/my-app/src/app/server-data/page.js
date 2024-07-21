import Link from "next/link";

async function getUserlist() {
  try {
    const response = await fetch("https://dummyjson.com/users?limit=5");
    const data = await response.json();
    return data.users;
  } catch (error) {
    throw new Error("Failed to fetch userlist");
  }
}

export default async function Serverdata() {
  const data = await getUserlist();
  return (
    <div>
      <h1>Server Data : Name</h1>
      <ul>
        {data && data.length > 0 ? (
          data.map((user) => (
            <li key={user.id}>
              <Link href={`/server-data/${user.id}`}>{user.firstName}</Link>
            </li>
          ))
        ) : (
          <p>No users found</p>
        )}
      </ul>
    </div>
  );
}
