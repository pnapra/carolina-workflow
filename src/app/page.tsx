export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Carolina Workflow
        </p>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Helping Carolina businesses spend less time on admin work.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          I&apos;m a local software engineer researching the biggest workflow
          challenges facing small businesses — from scheduling and customer
          follow-up to payments, paperwork, and manual data entry.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#survey"
            className="rounded-lg bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-700"
          >
            Take the 2-Minute Survey
          </a>

          <a
            href="#why"
            className="rounded-lg border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Learn Why I&apos;m Doing This
          </a>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-bold">Common challenges I&apos;m researching</h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Appointment scheduling and reminders",
              "Customer follow-up",
              "Collecting payments and invoices",
              "Intake forms and paperwork",
              "Manual data entry",
              "Repetitive administrative tasks",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="font-medium text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="survey" className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-2xl bg-slate-900 p-8 text-white sm:p-12">
          <h2 className="text-3xl font-bold">Take the 2-minute business workflow survey</h2>

          <p className="mt-4 max-w-2xl text-slate-300">
            I&apos;m speaking with local business owners to understand where
            administrative work creates friction and where better systems could
            save time.
          </p>

          <a
            href="https://tally.so"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
          >
            Take the Survey
          </a>

          <p className="mt-4 text-sm text-slate-400">
            Replace this button link with your Tally, Google Form, or Typeform link.
          </p>
        </div>
      </section>

      <section id="why" className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="text-3xl font-bold">Why I&apos;m doing this</h2>

        <div className="mt-6 max-w-3xl space-y-5 text-lg leading-8 text-slate-600">
          <p>
            Too many software products are built without first talking to the
            people who actually use them.
          </p>

          <p>
            Before building anything, I&apos;m starting with conversations. If
            you&apos;re a business owner, manager, or administrator, your
            perspective would help shape future tools and services designed for
            local businesses.
          </p>

          <p className="font-medium text-slate-900">
            Based in the Charlotte / Waxhaw area.
          </p>
        </div>
      </section>
    </main>
  );
}