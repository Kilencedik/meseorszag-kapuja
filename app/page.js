import {redirect} from "next/navigation";

export default function Home() {
  redirect("/program")
  return(
      <div>Content</div>
  )
}