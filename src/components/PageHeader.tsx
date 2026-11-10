export function PageHeader({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="pb-6 pt-8">
      <h1 className="font-display text-4xl font-bold tracking-tight text-heading">{title}</h1>
      {intro && <p className="mt-2 text-muted">{intro}</p>}
    </div>
  );
}
