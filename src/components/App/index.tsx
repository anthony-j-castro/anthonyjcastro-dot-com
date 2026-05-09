import { useEffect } from "react";
import { useAnalytics } from "use-analytics";
import Portrait from "~/components/Portrait";
import config from "~/config";
import styles from "./style.module.css";
import clsx from "clsx";

const App = () => {
  const analytics = useAnalytics();

  useEffect(() => {
    void analytics.page({ title: "Index" });
  }, [analytics]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <Portrait />
          <div className={styles.socialLinks}>
            <a
              href="https://www.linkedin.com/in/anthonyjcastro/"
              onClick={() => {
                void analytics.track("clicked_linkedin_link");
              }}
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <span className={styles.separator}>|</span>
            <a
              href="https://github.com/anthony-j-castro"
              onClick={() => {
                void analytics.track("clicked_github_link");
              }}
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className={styles.column}>
          <p
            className={clsx(styles.paragraph, styles.greeting)}
            data-testid="greeting"
          >
            Hi! I’m Anthony.
          </p>
          <p className={styles.paragraph}>
            I’m an engineering manager at CircleCI living in New York, NY. I
            also co-host{" "}
            <em>Beyond the Build: Code, Culture, and Everything in Between</em>,
            a podcast dedicated to helping engineering managers and leaders
            build great teams. You can give it a listen on{" "}
            <a
              href="https://podcasts.apple.com/us/podcast/beyond-the-build-code-culture-and-everything-between/id1779379455?i=1000676717231"
              onClick={() => {
                void analytics.track("clicked_apple_podcasts_link");
              }}
              rel="noreferrer"
              target="_blank"
            >
              Apple Podcasts
            </a>{" "}
            or{" "}
            <a
              href="https://open.spotify.com/show/0ldZVVVIEBljKAKrYRHIB3?si=03db250affce4195"
              onClick={() => {
                void analytics.track("clicked_spotify_link");
              }}
              rel="noreferrer"
              target="_blank"
            >
              Spotify
            </a>
            .
          </p>
          <p className={styles.paragraph}>
            Before becoming an EM, I spent a decade as a software engineer
            working on web applications, mostly on the front end. I’ve worked in
            a variety of industries on different types of teams at companies
            including Abstract, Verve, Observer Media, and Time Inc.
          </p>
          <p className={styles.paragraph}>
            Looking to get in touch with me? Send me a message at{" "}
            <a
              href="mailto:hello@anthonyjcastro.com"
              onClick={() => {
                void analytics.track("clicked_email_link");
              }}
              rel="noreferrer"
              target="_blank"
            >
              hello@anthonyjcastro.com
            </a>
            . ID{config.GOOGLE_ANALYTICS_MEASUREMENT_ID}
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
