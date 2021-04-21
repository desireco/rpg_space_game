import Head from "next/head";
import styles from "../styles/journey.module.css";

const JourneyPage = () => {
  return (
    <div>
      <Head>
        <title>Player Journey</title>
      </Head>

      <main className="flex flex-col md:flex-row">
        <div className={styles.background}>
          <div className={styles.star} />
          <div className={styles.star2} />
          <div className={styles.star3} />

          <img alt="spaceship" src="./ship3.png" className="h-32 w-32 transform -rotate-90 scale-150 mx-auto my-auto" />
        </div>

        <div className="flex flex-1 flex-col bg-gray-900 text-white p-4 justify-between">
          <div className="flex flex-col p-4 border-gray-400 border-2 rounded h-full">
            <p className="mb-2 italic">
              Nullam congue tincidunt mi eget eleifend. Aenean vel scelerisque
              massa. Suspendisse quis tincidunt sapien.
            </p>

            <p className="mb-2 italic">
              Etiam sit amet facilisis augue, ut laoreet felis. Morbi id orci
              hendrerit turpis aliquam vulputate at id quam.
            </p>

            <p className="mb-2 italic">Vivamus lobortis nibh ante, id consectetur risus lacinia eu.</p>

            <p className="mb-2 italic">
              Nullam congue tincidunt mi eget eleifend. Aenean vel scelerisque
              massa. Suspendisse quis tincidunt sapien.
            </p>

            <p className="mb-2 italic">
              Mauris nunc lectus, sollicitudin vitae imperdiet nec, vulputate ut
              leo. Praesent condimentum at justo quis interdum. Sed justo lacus,
              varius eget egestas vel, sodales nec quam. Duis finibus tellus eu
              tempus sodales. Sed iaculis iaculis urna, id ullamcorper est
              dictum eu. Ut a lectus metus. Donec id turpis tortor. Etiam quam
              lacus, porta ut velit a, rutrum sagittis diam. Proin fringilla et
              odio sit amet feugiat.
            </p>

            <p className="mb-2 italic">
              Aliquam in lectus vulputate libero porta aliquet et quis erat.
            </p>
          </div>
          <button className="text-xl p-4 border-gray-400 border-2 rounded">
            Travel
          </button>
        </div>
      </main>
    </div>
  );
};

export default JourneyPage;
