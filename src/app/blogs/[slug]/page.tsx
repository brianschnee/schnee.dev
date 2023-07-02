import { getBlogBySlug } from "@/lib/mdx";
import Link from "next/link";

type Params = {
  params: { slug: string };
};

const getPageContent = async (slug: string) => {
  const { meta, content } = await getBlogBySlug(slug);
  return { meta, content };
};

export async function generateMetadata({ params }: Params) {
  const { meta } = await getPageContent(params.slug);
  return { title: meta.title };
}

const Page = async ({ params }: Params) => {
  const { content } = await getPageContent(params.slug);

  return (
    <div className="prose-custom-colors">
      <Link className="mb-6 inline-flex items-center gap-1" href="/blogs">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--accent)"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back to Blogs
      </Link>
      {content}
    </div>
  );
};

export default Page;
