import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/home.module.css";

const Story = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  function interpret(slug) {
    switch (slug) {
      case "welcome":
        return {
          title: "Welcome to the Game",
          txt: "This is my story and I am sticking with it.",
          action: "/story/story1",
          actionPrompt: "Start",
        };
      case "story1":
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
        };
      case "story3":
        return {
          title: "Fix It!",
          txt:
            "You wanted to be a pirate, yet ship can only carry cargo, so trader it is.",
          action: "/story/story4",
          actionPrompt: "Go on",
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
  // let story = switch (slug) {
  //   case "welcome":
  //     story = {
  //       title: "Welcome to the Game",
  //       txt: "This is my story and I am sticking with it.",
  //       action: "/story/story1",
  //       actionPrompt: "Start",
  //     };
  //     break;
  //   case "story1":
  //     story = {
  //       title: "Lucky Break",
  //       txt:
  //         "Your uncle that you barely remember, left you with his old starship.",
  //       action: "/story/story2",
  //       actionPrompt: "Go on",
  //     };
  //     break;
  //   case "story2":
  //     story = {
  //       title: "Lucky Break - continued",
  //       txt:
  //         "Starship is in bad shape, but can be made to fly with a little of TLC.",
  //       action: "/story/story3",
  //       actionPrompt: "Go on",
  //     };
  //     break;
  //   case "story3":
  //     story = {
  //       title: "Lucky Break - continued",
  //       txt:
  //         "Starship is in bad shape, but can be made to fly with a little of TLC.",
  //       action: "/story/story4",
  //       actionPrompt: "Go on",
  //     };
  //     break;
  //   // default:
  //   //   story = {
  //   //     title: "Welcome to the Game",
  //   //     txt: "This is my story and I am sticking with it.",
  //   //     action: "/story/story1",
  //   //     actionPrompt: "Start"
  //   //   }
  // }

  return (
    <div className={styles.container}>
      <Head>
        <title>RPG::MMO::Game::In Space!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-sm p-10 border-dotted border-4 border-light-blue-500">
        <h1>{story.title}</h1>
        <p className="my-10">{story.txt}</p>
        <Link href={story.action}>
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {story.actionPrompt}
          </a>
        </Link>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Story;
