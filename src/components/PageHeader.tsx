export function PageHeader({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-8 pt-10 text-center sm:pt-14">
      <h1 className="font-display text-4xl font-semibold text-rose-dark sm:text-5xl">{title}</h1>
      {intro && <p className="mt-4 text-lg text-plum-soft">{intro}</p>}
    </div>
  );
}
