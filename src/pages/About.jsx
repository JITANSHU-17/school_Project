export default function About() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-4 py-10">
      <div className="max-w-6xl mx-auto space-y-16">
        <section className="rounded-3xl bg-[#111827] p-10 shadow-2xl border border-white/10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-red-400 mb-4">
                About Us
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                CrimeTrackr is the secure, anonymous crime reporting system for safer communities.
              </h1>
              <p className="mt-6 text-gray-300 max-w-2xl text-lg leading-8">
                We empower citizens to report incidents quickly and confidentially while giving authorities a centralized dashboard to respond faster. Built with trust, privacy, and usability at the center of every interaction.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#111827] border border-white/10 p-5">
                  <h2 className="text-xl font-semibold">Anonymous by design</h2>
                  <p className="mt-2 text-gray-400">Submit reports without revealing your identity or personal details.</p>
                </div>
                <div className="rounded-2xl bg-[#111827] border border-white/10 p-5">
                  <h2 className="text-xl font-semibold">Actionable insights</h2>
                  <p className="mt-2 text-gray-400">Officials can view reports, prioritize incidents, and respond with clarity.</p>
                </div>
              </div>
            </div>
            <div className="rounded-[32px] bg-red-500/10 p-8 border border-red-400/20 shadow-inner">
              <p className="uppercase tracking-[0.35em] text-red-300 text-sm mb-3">
                Our commitment
              </p>
              <h2 className="text-3xl font-bold">Privacy, Trust, and Community Safety</h2>
              <p className="mt-5 text-gray-200 leading-7">
                CrimeTrackr is designed to remove friction from reporting, protect whistleblowers, and support authorities with relevant, contextual information. Every feature is tuned for accessibility and real-world response.
              </p>
              <div className="mt-8 space-y-4">
                <div className="rounded-2xl bg-[#0f172a] p-5 border border-white/10">
                  <p className="text-sm uppercase text-gray-400">Privacy first</p>
                  <p className="mt-2 text-gray-200">No identifying information is required to file a report.</p>
                </div>
                <div className="rounded-2xl bg-[#0f172a] p-5 border border-white/10">
                  <p className="text-sm uppercase text-gray-400">Fast response</p>
                  <p className="mt-2 text-gray-200">Well-structured reports help authorities identify priorities quickly.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl bg-[#111827] p-8 border border-white/10 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-7">
              To create a safer community where every person can report crime confidently and anonymously, without fear or delay.
            </p>
          </div>
          <div className="rounded-3xl bg-[#111827] p-8 border border-white/10 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-7">
              Make crime reporting accessible, fast, and secure through a modern digital experience that respects privacy and supports action.
            </p>
          </div>
          <div className="rounded-3xl bg-[#111827] p-8 border border-white/10 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
            <ul className="space-y-3 text-gray-300 leading-7">
              <li>Safety-first design</li>
              <li>Confidentiality for users</li>
              <li>Reliable, clear reporting</li>
            </ul>
          </div>
        </section>

        <section className="rounded-3xl bg-[#111827] p-10 border border-white/10 shadow-2xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-red-400 mb-4">Why CrimeTrackr?</p>
              <h2 className="text-4xl font-bold">A platform built for people and peace of mind.</h2>
            </div>
            <div className="space-y-3 max-w-xl text-gray-300">
              <p>
                CrimeTrackr blends an intuitive interface with a powerful backend to let communities report issues, follow progress, and help law enforcement move with confidence.
              </p>
              <p>
                Every feature is created to minimize barriers and enable meaningful action, from anonymous submissions to priority-based dashboards.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#0f172a] p-6 border border-white/10">
              <h4 className="text-xl font-semibold">Secure filing</h4>
              <p className="mt-3 text-gray-400">Report incidents knowing that your anonymity is preserved.</p>
            </div>
            <div className="rounded-2xl bg-[#0f172a] p-6 border border-white/10">
              <h4 className="text-xl font-semibold">Clear reporting</h4>
              <p className="mt-3 text-gray-400">Well-formatted reports help authorities respond faster and more accurately.</p>
            </div>
            <div className="rounded-2xl bg-[#0f172a] p-6 border border-white/10">
              <h4 className="text-xl font-semibold">Intuitive dashboard</h4>
              <p className="mt-3 text-gray-400">The authority view turns raw reports into actionable priorities.</p>
            </div>
            <div className="rounded-2xl bg-[#0f172a] p-6 border border-white/10">
              <h4 className="text-xl font-semibold">Community trust</h4>
              <p className="mt-3 text-gray-400">We help people feel safe reporting incidents without exposing themselves.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
