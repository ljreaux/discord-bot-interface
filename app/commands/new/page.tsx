import Form from "@/components/CommandForm";
import connect from "@/lib/db";

export default async function NewCommand() {
  await connect();
  return (
    <main>
      <Form />
    </main>
  );
}
