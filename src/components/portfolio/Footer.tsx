export function Footer() {
  return (
    <footer className="px-4 pb-10 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Your Name</span>
        <span>Built with motion.</span>
      </div>
    </footer>
  );
}
