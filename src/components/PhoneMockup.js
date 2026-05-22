export default function PhoneMockup() {
  return (
    <div
      className="relative w-full max-w-[280px] sm:max-w-xs"
      aria-hidden="true"
    >
      <div className="rounded-[2.5rem] border-[6px] border-zinc-800 bg-zinc-900 p-2 shadow-2xl shadow-orange-200/60">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-b from-orange-500 to-red-600">
          <div className="flex items-center justify-between px-5 pt-4 text-white/90">
            <span className="text-xs font-medium">9:41</span>
            <span className="text-xs">Leevon</span>
          </div>

          <div className="mx-4 mt-4 rounded-2xl bg-white/95 p-4 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-wide text-orange-600">
              Deliver to
            </p>
            <p className="mt-1 text-sm font-bold text-zinc-900">Kurnool, AP</p>
            <div className="mt-3 flex gap-2">
              <span className="rounded-full bg-orange-100 px-2 py-1 text-[10px] font-medium text-orange-800">
                Biryani
              </span>
              <span className="rounded-full bg-orange-100 px-2 py-1 text-[10px] font-medium text-orange-800">
                Meals
              </span>
              <span className="rounded-full bg-orange-100 px-2 py-1 text-[10px] font-medium text-orange-800">
                Snacks
              </span>
            </div>
          </div>

          <div className="space-y-2 p-4">
            {["Spice Garden", "Kurnool Kitchen", "Andhra Meals Hub"].map((name) => (
              <div
                key={name}
                className="flex items-center gap-3 rounded-xl bg-white/90 p-3 shadow"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-sm font-bold text-orange-700">
                  {name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-zinc-900">{name}</p>
                  <p className="text-xs text-zinc-500">25–35 min · Local favourite</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-4 mb-4 rounded-xl bg-white px-4 py-3 text-center text-sm font-bold text-orange-600">
            Track order →
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 -left-4 rounded-xl border border-orange-200 bg-white px-3 py-2 text-xs font-semibold text-zinc-700 shadow-lg">
        Built for Kurnool
      </div>
    </div>
  );
}
