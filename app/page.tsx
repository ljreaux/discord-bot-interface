import { getCommands } from "@/actions/action";
import Form from "@/components/CommandForm";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default async function Home() {
  return (
    <main className="w-screen justify-center align-center mt-8">
      <h1 className="text-3xl w-full text-center mb-4">
        Welcome to the MMMeadBot Admin Panel
      </h1>
      <p className="w-full text-center">
        Please select your organization to continue.
      </p>
      <div className="w-screen flex items-center justify-center py-6">
        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
          }}
        />
      </div>
    </main>
  );
}
