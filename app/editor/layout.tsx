import EditorNav from "@/components/editorComponents/EditorNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col w-full overflow-y-hidden">
      <EditorNav fixed />
      <div className="flex w-full h-full">{children}</div>
    </div>
  );
}
