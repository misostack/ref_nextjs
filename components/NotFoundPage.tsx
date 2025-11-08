import { useTranslations } from "next-intl";
import PageLayout from "./PageLayout";
import { Link } from "@/i18n/navigation";

export default function NotFoundPage() {
  const t = useTranslations();

  return (
    <PageLayout>
      <p className="max-w-[460px]">{t("NotFoundPage.description")}</p>
      <Link href="/">
        <span className="mt-8 inline-block rounded-md bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-500">
          {t("NotFoundPage.backToHome")}
        </span>
      </Link>
    </PageLayout>
  );
}
