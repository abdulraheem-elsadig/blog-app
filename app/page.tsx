import { getPostsData } from "@/api";
import MainCard from "@/componsents/MainCard";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Home() {
  const data = await getPostsData();
  if (!data) notFound();

  return (
    <main>
      {/* {JSON.stringify(data)} */}
      <h1 className="page-title">THE BLOG</h1>

      <section>
        <h2 className="section-title">Recent blog posts</h2>
        {data.map((item) => (
          <MainCard data={item} />
        ))}
      </section>

      <section>
        <h2 className="section-title">All blog posts</h2>
        <div>
          {/* <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard /> */}
        </div>
      </section>

      {/* Pagination */}
      <div>
        <button>Next</button>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>
        <button>Previous</button>
      </div>

      {/* Footer */}
      <footer>
        <span>2023</span>
        <ul>
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">LinkedIn</a>
          </li>
          <li>
            <a href="">Email</a>
          </li>
          <li>
            <a href="">RSS feed</a>
          </li>

          <li>
            <a href="">Add to Feedly</a>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </footer>
    </main>
  );
}
