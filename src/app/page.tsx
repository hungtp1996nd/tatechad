import About from "@/components/About";
import Header from "@/components/Header";
import InfiniteText from "@/components/InfiniteText";
import Introduction from "@/components/Introduction";
import Tokenomics from "@/components/Tokenomics";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Introduction />
      <InfiniteText />
      <Tokenomics />
      <InfiniteText />
    </main>
  );
}
