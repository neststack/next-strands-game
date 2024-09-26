import StrandsGrid from "@/components/strandsGrid";
import ThemeDisplay from "@/components/ThemeDisplay";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col sm:flex-row gap-2 sm:gap-8 row-start-2 items-center">
        <ThemeDisplay />
        <StrandsGrid />
      </main>
    </div>
  );
}
