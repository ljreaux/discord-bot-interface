import { getCommands } from "@/actions/action";
import Form from "@/components/CommandForm";

export default async function Home() {
  const commands = await getCommands();

  return (
    <div className="w-screen justify-center align-center mt-8">
      <h1 className="text-3xl w-full text-center mb-4">
        Welcome to the MMMeadBot Admin Panel
      </h1>
      <p className="w-full text-center">
        Use the navbar above to navigate to the other pages where you can add
        new commands and edit existing ones.
      </p>
    </div>
  );
}
