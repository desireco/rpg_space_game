import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/home.module.css";

const Story = () => {
  const router = useRouter();
  const { slug } = router.query;

  function interpret(slug) {
    switch (slug) {
      case "welcome":
        return {
          title: "Lucky Break",
          txt:
            "Your uncle that you barely remember, left you with his old starship.",
          action: "/story/story2",
          actionPrompt: "Go on",
        };
      case "story2":
        return {
          title: "Lucky Break - continued",
          txt:
            "Starship is in bad shape, but can be made to fly with a little of TLC. Would you like to fix it so you could fly?",
          action: "/story/story3",
          actionPrompt: "Fix it",
          action2: "/",
          action2Prompt: "I am not sure about it.",
        };
      case "story3":
        return {
          title: "Fix It!",
          txt: "Now you get to decide if you will be pirate or a trader.",
          action: "/story/story3p",
          actionPrompt: "I wanna be a pirrraaattee",
          action2: "/story/story3t",
          action2Prompt: "Let me trade my way to riches",
        };
      case "story3p":
        return {
          title: "Pirate!",
          txt: "You are a pirate! Outfit your ship with weapons and cargo.",
          action: "/story/story4",
          actionPrompt: "Next step",
        };
      case "story3t":
        return {
          title: "You are Trader",
          txt: "Outfit your ship with fast drive and big cargo hold.",
          action: "/story/story4",
          actionPrompt: "Next step",
        };
      case "story4":
        return {
          title: "Name Your Vessel!",
          txt:
            "It is time for you to name your vessel. Pick a name that would make you proud.",
          action: "/story/story5",
          actionPrompt: "Name it!",
        };
      case "story5":
        return {
          title: "You are ready",
          txt: "",
          action: "/journey",
          actionPrompt: "Start your journey!",
        };
      default:
        return {
          title: "Welcome to the Game",
          txt:
            "Welcome to the Space Game RPG that happens in space. Click on 'Start' button when you are ready to start.",
          action: "/story/story1",
          actionPrompt: "Start",
        };
    }
  }

  const story = interpret(slug);
  console.log(story);
  return (
    <div className={styles.container}>
      <Head>
        <title>RPG::MMO::Game::In Space!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-sm p-10 border-dotted border-4 border-light-blue-500">
        <h1>{story.title}</h1>
        <p className="my-10">{story.txt}</p>
        <p>
          <Link href={story.action}>
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {story.actionPrompt}
            </a>
          </Link>
        </p>
        {story.action2 !== undefined && (
          <p className="py-6">
            <Link href={story.action2}>
              <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {story.action2Prompt}
              </a>
            </Link>
          </p>
        )}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Story;
