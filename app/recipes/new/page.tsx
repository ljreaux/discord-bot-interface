import connect from "@/lib/db";
import Form from "@/components/RecipeForm";

export default async function NewRecipe() {
  await connect();
  return (
    <main>
      <Form />
    </main>
  );
}
