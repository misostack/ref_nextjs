import HelloClientComponent from "@/components/clients/hello.client.component";
import PageLayout from "@/components/PageLayout";
import ProductImageBlock from "@/components/product/ProductImage.Block";
import HelloServerComponent from "@/components/servers/hello.server.component";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <PageLayout>
      <div className="min-h-screen">
        <div className="flex flex-col">
          <div className="shrink bg-amber-200">Line 1</div>
          <div className="shrink">
            <ProductImageBlock />
          </div>
        </div>
        <main className="flex w-full flex-col items-center justify-between px-16 bg-white dark:bg-black sm:items-start">
          <div className="flex space-x-4">
            <Link
              className="text-blue-500 hover:underline"
              locale={"vi"}
              href="/"
            >
              Vietnamese
            </Link>
            <Link
              className="text-blue-500 hover:underline"
              locale={"en"}
              href="/"
            >
              English
            </Link>
          </div>
          <h1>{t("title")}</h1>
          <div>
            <h2>Server Components</h2>
            <HelloServerComponent />
          </div>
          <div>
            <h2>Client Components</h2>
            <HelloClientComponent />
          </div>
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              To get started, edit the page.tsx file.
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Looking for a starting point or more instructions? Head over to{" "}
              <a
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                className="font-medium text-zinc-950 dark:text-zinc-50"
              >
                Templates
              </a>{" "}
              or the{" "}
              <a
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                className="font-medium text-zinc-950 dark:text-zinc-50"
              >
                Learning
              </a>{" "}
              center.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={16}
                height={16}
              />
              Deploy Now
            </a>
            <a
              className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </div>
        </main>
      </div>
    </PageLayout>
  );
}
