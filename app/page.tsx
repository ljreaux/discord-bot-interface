import { getCommands } from "@/actions/action";
import Form from "@/components/Form";

export default async function Home() {
  const commands = await getCommands();

  return (
    <div>
      <Form />
      {commands.map(
        (
          command: { _id: string; command: string; response: string },
          i: number
        ) => (
          <div key={command._id}>
            <h1>
              {i + 1}. {command.command}
            </h1>
            <p>- {command.response}</p>
          </div>
        )
      )}
    </div>
  );
}
