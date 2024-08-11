import VideoForm from "@/components/VideoForm";
import connect from "@/lib/db";

export default async function NewCommand() {
  await connect();
  return (
    <main>
      <VideoForm />
    </main>
  );
}
