import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div className="container">
      Home page
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
