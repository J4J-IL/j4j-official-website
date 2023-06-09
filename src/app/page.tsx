
import { HeadLines, Main, CommunitySentence, OurActivities } from '@j4j/components';


export default function Home() {
  return (
    <>

      <OurActivities/>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-3xl font-bold tracking-widest">Welcome to J4J </h1>
        <HeadLines />
      </main>
      <Main />
      <CommunitySentence />

    </>
  );
}
