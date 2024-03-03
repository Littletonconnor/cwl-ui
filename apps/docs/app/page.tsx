export default function Page(): JSX.Element {
  return (
    <main className="h-full">
      <div className="container mx-auto px-4 pb-8 pt-20">
        <section className="mx-auto max-w-5xl text-center">
          <h1 className="text-5xl font-bold">
            An Accessible
            <br className="hidden lg:inline" />
            Design System for React.
          </h1>
          <div className="mx-auto mt-8 max-w-3xl">
            <p className="text-lg text-zinc-600">
              CWL UI is a collection of React components that have been built to be highly
              composable with one another. It is built on top of Tailwind CSS and React-Aria
              Components.
            </p>
          </div>
          <p className="mt-20 text-zinc-600">
            Built with{' '}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="font-medium text-zinc-800 hover:underline"
              rel="noopener"
            >
              TailwindCSS
            </a>{' '}
            and{' '}
            <a
              href="https://react-spectrum.adobe.com/react-aria/components.html"
              className="font-medium text-zinc-800 hover:underline"
              target="_blank"
              rel="noopener"
            >
              React-Aria Components.
            </a>
          </p>
        </section>
      </div>
      <section className="w-full bg-slate-50 px-4 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold">10+ Components</h2>
          <div className="mt-12 grid grid-flow-dense grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-md border bg-white p-4 md:col-span-2">Example 1</div>
            <div className="rounded-md border bg-white p-4 md:col-span-1">Example 2</div>
            <div className="rounded-md border bg-white p-4 md:col-span-1">Example 3</div>
            <div className="rounded-md border bg-white p-4 md:col-span-1">Example 4</div>
            <div className="rounded-md border bg-white p-4 md:col-span-2">Coming soon</div>
            <div className="rounded-md border bg-white p-4 md:col-span-1">Coming soon</div>
            <div className="rounded-md border bg-white p-4 md:col-span-1">Coming soon</div>
            <div className="rounded-md border bg-white p-4 md:col-span-1">Coming soon</div>
            <div className="rounded-md border bg-white p-4 md:col-span-1">Coming soon</div>
            <div className="rounded-md border bg-white p-4 md:col-span-1">Coming soon</div>
            <div className="rounded-md border bg-white p-4 md:col-span-1">Coming soon</div>
            <div className="rounded-md border bg-white p-4 md:col-span-1">Coming soon</div>
            <div className="rounded-md border bg-white p-4 md:col-span-1">Coming soon</div>
            <div className="rounded-md border bg-white p-4 md:col-span-1">Coming soon</div>
          </div>
        </div>
      </section>
      <footer className="container mx-auto px-6 py-8">
        <p className="mb-4 text-sm text-zinc-600 md:mb-0">
          Built by{' '}
          <a
            href="https://github.com/Littletonconnor"
            target="_blank"
            rel="noopener"
            className="font-medium text-zinc-800 underline"
          >
            Connor Littleton
          </a>{' '}
          and heavily inspired by {'   '}
          <a
            href="https://draft-ui.com/"
            target="_blank"
            rel="noopener"
            className="font-medium text-zinc-800 underline"
          >
            Draft UI
          </a>
          .
        </p>
      </footer>
    </main>
  )
}
