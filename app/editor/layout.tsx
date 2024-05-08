import Navbar from "../../components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col w-full">
      <Navbar />
      <div className="flex w-full overflow-y-hidden">{children}</div>
    </div>
  );
}
