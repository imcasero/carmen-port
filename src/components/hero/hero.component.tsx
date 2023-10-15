import css from "./hero.component.module.css";
import logo from "../../assets/PERSONAL_BRANDING.png";
export default function Hero() {
  return (
    <section className={css.hero}>
      <article className={css.avatarContainerRes}>
        <img src={logo} />
      </article>
      <article className={css.titleContainer}>
        <div className={css.title}>
          <h1>I'm Carmen</h1>
          <h2>Graphic designer</h2>
        </div>
        <div className={css.about}>
          <p>
            By the time you read this, I'll probably be drinking a Monster or a coffee to keep me going or watching
            anime late at night to rest my mind. Another essential thing in my life is music, I listen to music 24h a
            day, the first thing I do as soon as I wake up is play music, which flows depending on my mood during the
            day.
          </p>

          <p>
            My mobile phone and computer have become portals to a universe of trends and styles, I live looking to
            discover new trends, ideas and references in everything I see that can serve as a reference in my next
            projects. My inspiration comes mainly from Japanese and Korean art, and minimalism, where beauty is found in
            simplicity and harmony.
          </p>

          <p>
            My biggest nightmare? Misaligned things. My radar for symmetry is always on, and a misaligned world makes me
            shiver like a cat in a storm.
          </p>

          <p>There's a lot more about me I could say, but I can't tell it all here either, this is not my biography.</p>
        </div>
      </article>
      <article className={css.avatarContainer}>
        <img src={logo} />
      </article>
    </section>
  );
}
