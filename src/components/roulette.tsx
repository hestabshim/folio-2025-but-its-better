import styles from "../styles/roulette.module.css";
import { useState } from "react";
function Roulette() {
  const [text, setText] = useState("loves all weird, wonderful and wacky.");

  const Generate = () => {
    const r_text = [
      "likes honeycrisp apples.",
      "gets 25% sugar in her boba.",
      "creates digital collages in Photoshop.",
      "would like to own two cats one day.",
      "is halfway decent at 跳棋.",
      "really wants to go thrifting more.",
      "thinks she should drink more water.",
      "appreciates a good grunge or punk aesthetic.",
      "likes 4k textures on Twitter.",
      "spent too much time coding this website.",
      "spends a lot of time on godly.website.",
      "has too many tabs open on her laptop.",
      "spends too much time online secondhand shopping.",
      "tries her best :)",
      "believes in thoughtful, well crafted experiences"
    ];

    const i = Math.floor(r_text.length * Math.random());
    setText(r_text[i]);
  };

  return (
    <div className={styles.roulette}>
      <div className={styles.position}>
        <h2
          key={Math.random()}
          onClick={Generate}
          className={styles.typewriter}
        >
          {text}
        </h2>
      </div>
    </div>
  );
}
export default Roulette;
