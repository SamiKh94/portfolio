import { loadCV } from "@/lib/loader";
import CVPage from "@/components/cv/CVPage";

export async function generateMetadata() {
  const data = loadCV();
  return {
    title: `${data.header.name} — CV`,
    description: data.summary ?? `CV for ${data.header.name}`,
  };
}

export default function Home() {
  const data = loadCV();
  return <CVPage data={data} />;
}
