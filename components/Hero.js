export function SectionHeading({ children }) {
  return <h1 className="mt-2 sm:mt-4 text-primary text-xl font-extrabold md:text-4xl max-w-md">{children}</h1>;
}

export function SectionSubHeading({ children }) {
  return <p className="mt-2 sm:mt-4 text-secondary md:text-lg max-w-2xl shadow-sm">{children}</p>;
}
