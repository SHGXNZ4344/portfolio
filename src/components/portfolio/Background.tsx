export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="orb-a absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--orb-violet), transparent 60%)" }}
      />
      <div
        className="orb-b absolute -bottom-40 -right-40 h-[42rem] w-[42rem] rounded-full opacity-35 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--orb-cyan), transparent 60%)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
    </div>
  );
}
