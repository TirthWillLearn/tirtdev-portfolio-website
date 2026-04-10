import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id?: string;
  tight?: boolean;
}

const SectionWrapper = ({ children, id, tight }: Props) => (
  <section
    id={id}
    // px-4 on mobile, px-8 on desktop
    // py-12 on mobile, py-16/20 on desktop
    className={`w-full max-w-5xl mx-auto px-4 md:px-8 ${tight ? "py-12 md:py-16" : "py-14 md:py-20"}`}
  >
    {children}
  </section>
);

export default SectionWrapper;
