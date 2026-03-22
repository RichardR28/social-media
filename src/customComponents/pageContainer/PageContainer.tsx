type PageContainerProps = {
  children: React.ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <main className="w-full h-full rounded-lg p-4">
      {children}
    </main>
  );
}
