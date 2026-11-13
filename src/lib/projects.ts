import { getCollection } from "astro:content";

/** All published projects: finished ones first, then by `order`. */
export async function getProjects() {
  const all = await getCollection("projects", (p) => !p.data.draft);
  return all.sort(
    (a, b) =>
      Number(a.data.status === "in-progress") - Number(b.data.status === "in-progress") ||
      a.data.order - b.data.order,
  );
}
