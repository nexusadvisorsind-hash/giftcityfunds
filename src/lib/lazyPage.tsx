import { lazy, Suspense, type ComponentType } from "react";

// A route component that is split into its own JavaScript file.
// `preload()` fetches it ahead of time; once loaded it renders synchronously,
// which lets the build-time prerenderer and the browser's hydration render the
// same HTML without a loading flash.
export type LazyPage = ComponentType & { preload: () => Promise<void> };

export function lazyPage(factory: () => Promise<{ default: ComponentType }>): LazyPage {
  let Loaded: ComponentType | null = null;
  let pending: Promise<void> | null = null;
  const preload = () =>
    (pending ??= factory().then((m) => {
      Loaded = m.default;
    }));
  const Lazy = lazy(() => preload().then(() => ({ default: Loaded as ComponentType })));
  const Page = ((() => {
    if (Loaded) {
      const C = Loaded;
      return <C />;
    }
    return (
      <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>
        <Lazy />
      </Suspense>
    );
  }) as unknown) as LazyPage;
  Page.preload = preload;
  return Page;
}
