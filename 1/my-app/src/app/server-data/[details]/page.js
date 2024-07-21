import Link from "next/link";

// This is the page component that will be rendered when the user navigates to there profile page

async function getcurrentUser(id) {
  try {
    let userid = id.details;
    const response = await fetch(`https://dummyjson.com/users/${userid}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch user");
  }
}

export default async function Profile({ params }) {
  const id = params;
  const user = await getcurrentUser(id);
  return (
    <div>
      <h1>Profile</h1>
      <p>This is the profile page : </p>
      <p>
        {user.firstName}
        {user.lastName}
      </p>
      <p>{user.email}</p>
      <Link href={"/server-data"}>Go back To User List</Link>
    </div>
  );
}
