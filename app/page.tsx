import BlogCard from "@/componsents/BlogCard";
import Button from "@/componsents/Button";
import MainCard from "@/componsents/MainCard";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>THE BLOG</h1>
      <section>
        <h2>Recent blog posts</h2>
        <MainCard />
        <ul>
          <li>Design</li>
          <li>Research</li>
          <li>Presentation</li>
        </ul>

        <BlogCard />
        <BlogCard />
        <MainCard />
      </section>

      <section>
        <h1>All blog posts</h1>
        <div>
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
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
        </ul>
      </footer>
    </main>
  );
}
