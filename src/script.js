document.addEventListener("DOMContentLoaded", function () {
  const words = [
    "Torn Note ", "Lavender Scent", "Missing key", "Muddy boots", "Prescription", "Argument", "Love letter",
    "Hidden Passage", "Missing Gemstone", "Rare Wine Receipt", "Lace Fragment", "Blood-stained scarf", "Old Rifle", "Eleanor’s Diary", "Wine Cellar Map",
    "Photograph","Candlestick", "Dr. Moore’s Phone Call", "Dark Cloak", "Eleanor’s Regret",  "Security Camera", "Coded Message", "Second Set Of Footprints", "Confession Letter",
    "Reveal"];
    const chapters = [
      "In Eleanor’s study, a torn note caught the light: “Meet me at midnight near the garden gate. It’s time to settle this once and for all.” The words were hurried, full of urgency. Who was Eleanor meeting? And what truth that was planned to reveal that couldn’t wait until dawn?",
      "As the wind whispered through the open window, a faint scent of lavender lingered near the doorknob to Eleanor’s room. Martha’s perfume. It clung to the brass, almost as if she had been there moments ago. What did she want in Eleanor’s private space?",
      "Eleanor’s keyring was always in her possession, but tonight, one was missing. The key to her study, her safe haven. Who could have taken it, and why? Someone had access to her most guarded secrets—and it wasn’t Eleanor herself.",
      "A pair of muddy boots sat just inside the back door, their size far too large to belong to Eleanor. The earth still fresh on the soles, the mud leading toward the garden. Someone had been out in the night. But who had they met, and what had they done?",
      "A prescription signed by Dr. Moore, dated just the day before Eleanor’s death, lay on her desk. The label warned against mixing with alcohol—was Eleanor poisoned? And who would know to combine the two to take advantage of her fragile state?",
      "The servant, who was cleaning the hallway near the study, had heard the heated conversation between Victor and Eleanor. Victor’s voice had carried through the house, sharp and angry. “You think you can cut me out, Eleanor? After everything I’ve done for you?” The words echoed in the hallway. But Eleanor’s calm demeanor suggested there was more beneath the surface—something more dangerous than just words.",
      "Tucked away in the back of Eleanor’s dresser drawer, an unsigned letter read: “If only you knew, Eleanor. If only you saw how I feel.” Jonathan Price’s handwriting, filled with longing. It revealed a hidden side of Eleanor’s life—but would it lead to murder, or simply heartbreak?",
      "Snow crunched beneath boots as fresh footprints led to the hidden passageway behind the garden gate. The entrance was concealed, but the evidence was clear. Someone had used the secret route, slipping past unnoticed. Who had walked this path, and what had they come to do?",
      "A bracelet, one gemstone missing, was found beneath Eleanor’s bed. It was a delicate piece—one she cherished. The missing gemstone was discovered later, near the broken window. A sign of struggle? A clue pointing to a confrontation, and perhaps, the struggle that ended Eleanor’s life.",
      "A receipt, creased and forgotten, lay beneath a pile of papers. It showed Amelia Frost had purchased the rare wine Eleanor drank that evening. The wine’s source seemed innocent enough—until it was discovered that the bottle had been opened, with no evidence it had been tampered with.",
      "A fragment of lace clung to the broken window’s edge. Its delicate pattern matched Martha’s uniform. The torn piece suggested a struggle, a fleeting moment where Martha had been near Eleanor’s room—perhaps in a confrontation. The question remained: What had really happened behind that closed door?",
      "Near the fireplace, Jonathan Price’s scarf lay bloodied, though the stain was unmistakably Eleanor’s. The presence of the scarf in the room seemed damning, but a closer look revealed no evidence Jonathan had harmed her. Why was he there, and why had he left behind such a clue?",
      "A servant noticed Martha  handling the rifle with unusual care and her visible discomfort when noticing the missing bullet. Though the rifle had been removed from its place, it hadn’t been used in the murder. Her behavior seemed off, as if trying to hide something far worse than the weapon itself.",
      "In her diary, Eleanor wrote: “The truth will come out tomorrow, no matter the cost.” Her final words echoed with determination. What truth was she about to reveal? The secrets she kept were worth killing for, and someone was desperate to ensure they stayed buried forever.",
      "Victor Hale’s luggage revealed a map of the Frost mansion, with the wine cellar circled in red. The cellar was always locked, and only those with a key could access it. Why had Victor marked it so clearly? What secret did he intend to uncover—or hide?",
      "A crumpled photograph, yellowed with age, showed Eleanor and Jonathan, smiling in happier times. The word “Liar” was scrawled across it in red ink. The message was clear: Jonathan had betrayed Eleanor. But why? And how did this betrayal fit into the web of deceit surrounding her death?",
      "The murder weapon, a heavy candlestick, revealed a set of fingerprints—matching Amelia Frost’s. She was never known to be violent. Was it an accident, or was Amelia more involved than anyone realized? The evidence suggested a darker side to her involvement in Eleanor’s demise.",
      "Dr. Moore’s phone records showed a call to Eleanor’s personal line exactly one hour before her death. What was discussed in that brief conversation? Could Dr. Moore’s involvement be more than professional? The timing of the call raised questions about whether the doctor knew more than they let on.",
      "A servant’s report described a figure in a dark cloak slipping out of the house just after midnight, moving quickly and quietly. Was this the killer fleeing the scene? The cloak’s color matched nothing in the Frost family’s wardrobe. Could it belong to someone else—an outsider?",
      "Eleanor’s second diary entry read: “My greatest regret is keeping her secret for so long.” Who was she referring to? The guilt in her words was palpable. Whatever secret Eleanor had been holding was about to come to light—and someone was desperate to keep it buried.",
      "The grainy footage from the security camera showed Victor slipping into Eleanor’s room just after midnight. Moments later, he exited, his expression unreadable. What had he been doing inside? And why did he leave so quickly—was he alone, or was someone else involved?",
      "Buried within Eleanor’s favorite novel, a series of strange symbols caught the light. Decoding the message revealed a chilling secret: “If you speak, everything will be exposed. Your silence is the price of safety.” Eleanor had been blackmailed—by whom, and why? The answer was closer than anyone realized.",
      "A second set of muddy footprints, smaller than the first, led toward the greenhouse at the back of the estate. The print was familiar but inconclusive. Who had been there? And what had they been doing in the darkened greenhouse, hidden away from the eyes of the house?",
      "The letter was short, but its words were damning. “I did it. I had to. Eleanor knew too much about my past, and she was going to tell everyone. I couldn’t let that happen. I had no choice.” The real killer had confessed—and the motive was a secret too dangerous to reveal.",
      "The detective revealed the truth: Martha, desperate to protect a dark secret, murdered Eleanor. The clues—an argument, a hidden passage, and cryptic messages—pointed to her. Eleanor had uncovered that Martha's daughter was involved in a terrible accident, and Eleanor planned to expose it. In a panic, Martha killed her to silence the truth. The red herrings—Victor’s anger, the hidden passage, and the coded messages—misled everyone, but Martha’s guilt ultimately betrayed her."
    ]


  let message = "";
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  let timeDelay = 200;

  // Ensure it runs only in December
  if (month === 12) {
    const listItems = document.querySelectorAll("li");

    listItems.forEach((item, index) => {
      const adventWindow = index + 1;

      // Open past windows
      if (day !== adventWindow && adventWindow < day) {
        setTimeout(() => {
          item.querySelector(".door").classList.add("open");
        }, timeDelay);
        timeDelay += 100;
      }

      

      // Add words so far to the message variable
      if (adventWindow <= day) {
        const word = words[index];
        const revealedDiv = document.createElement("div");
        revealedDiv.className = "revealed";
        revealedDiv.textContent = word;
        item.appendChild(revealedDiv);

        message += " " + word;

      }

      // Add jiggle animation for the current day's window
      if (adventWindow === day) {
        item.classList.add("current", "jiggle");
      }
      item.addEventListener("click", () => {
        if (adventWindow <= day) {
          item.querySelector(".door").classList//.toggle("open");
          item.classList.remove("jiggle");

          // Show the chapter message
          const messageElement = document.getElementById("message");
          messageElement.textContent = chapters[index];
          messageElement.style.display = "block";
        }
      });
    });
  }
});
