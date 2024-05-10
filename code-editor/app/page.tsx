import EditorWindow from "@/components/EditorWindow";
import OutputWindow from "@/components/OutputWindow";


export default function Home() {
  return (
    <main className="flex h-screen p-4 bg-base-100 join w-full join">
      <EditorWindow />
      <OutputWindow />
    </main>
  );
}
