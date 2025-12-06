// biome-ignore lint/suspicious/useAwait: use cache
async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getCurrentYear();

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <footer>
          <div className="border-t pt-8 font-medium text-muted-foreground text-sm">
            <p>&copy; {year} TODO. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </section>
  );
}
