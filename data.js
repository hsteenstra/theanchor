/* =========================================================
   THE ANCHOR: site content
   Edit this file to add stories, podcast episodes, the weekly poll,
   and school breaks. No other file needs to change.
   ========================================================= */

window.ANCHOR = {

  /* ---------- School breaks (countdown) ----------
     The countdown always shows the NEXT break that hasn't started yet.
     "start" is the first day off. These are ESTIMATES. Check the
     official RSU 1 calendar (rsu1.org) and fix any dates that are wrong. */
  breaks: [
    { name: "Thanksgiving Break", start: "2026-11-25" },
    { name: "Winter Break",       start: "2026-12-23" },
    { name: "February Break",     start: "2027-02-15" },
    { name: "April Break",        start: "2027-04-19" },
    { name: "Summer Break",       start: "2027-06-12" },
  ],

  /* ---------- Story submissions ----------
     Paste a Formspree URL (https://formspree.io/f/xxxx) here and the
     "Pitch a Story" form will email you every submission.
     Leave it empty and the form just shows a thank-you message. */
  submitEndpoint: "",

  /* ---------- Announcements (scrolling strip under the menu) ---------- */
  announcements: [
    "Edition I is out now.",
    "Have a story idea? Use the Pitch a Story page.",
    "Our podcast is coming soon.",
  ],

  /* ---------- Poll of the week (homepage) ---------- */
  weeklyPoll: {
    id: "week-1",
    question: "What should The Anchor cover next?",
    options: ["Sports", "Clubs & activities", "Teacher spotlights", "Food & lunch", "Music & art"],
  },

  /* ---------- Current edition (shown above Top Stories) ---------- */
  edition: "Edition I · October 30, 2026",

  /* ---------- Stories ----------
     The first story is the big one on the homepage.
     Stories with category "Pop Culture" skip Top Stories and go in the
     Pop Culture section (Fred Waters' column). Give each column a short
     "topics" list; it shows as "In this column" on the homepage.
     "color" picks the placeholder block shown until you add a photo: blue, navy, sky, or steel.
     Add "image": "images/your-photo.jpg" (and an optional "imageCaption") to use a real photo. */
  stories: [
    {
      id: "confidence-has-no-dresscode",
      color: "blue",
      category: "Features",
      title: "Neela Rosenblatt on “Confidence Has No Dresscode”",
      dek: "Junior Neela Rosenblatt talks about the runway event she started.",
      author: "Emmie Pinkham",
      date: "2026-10-30",
      body: [
        "Neela Rosenblatt is a leader inside and outside of Morse High School, participating in various clubs such as Women's Empowerment and Best Buddies. She is currently on the leadership team for Best Buddies, a member of SCLC and the junior class president. Outside of school, Neela competes in pageantry and horseback riding.",
        "All of these activities give her a unique perspective. In our interview, Neela explained to me that at a Women’s Empowerment meeting, she was conversing with other members about the difficulties of feeling constantly judged, no matter what we wear. “I wish there was something that everyone could wear whatever that they wanted to: and nobody would judge them. And then I created ‘Confidence Has No Dresscode’ from that meeting last year.”",
        "So what is “Confidence Has No Dress code”? Confidence Has No Dress code is an event for anyone at Morse or in the community to walk the runway at Montgomery Theater. “People of all ages can walk the runway, feel confident, have that sense of spotlight on them, and just be able to feel like they're being supported by their community. Anyone can wear whatever they want. Participants are encouraged to wear something that makes them feel confident and represent who they are. That could mean a beautiful dress, a suit, athletic wear, a favorite outfit, or even something creative and unique!”",
        "How can you get involved? If you are a Morse student who wants to be involved with helping backstage or walking the runway, Neela would love to have you. If you are a community member, no matter what age, you are welcome to walk the runway. Email Neela at neela.rosenblatt@rsu1.org. Sharing posts made about the event by Neela’s personal and pageant accounts on Facebook really help get information out there, so if you see one, be sure to share it.",
        "“Confidence Has No Dresscode” will be held on November 8th at 4:00 PM at the Morse High School Montgomery Theater. Participants should show up at 12:00. There will be a $5 charge at the door, and donations are very welcome! We hope to see you there!",
      ],
    },
    {
      id: "cross-country",
      color: "navy",
      category: "Sports",
      title: "Cross Country",
      dek: "How the cross country teams did this season, and why they want more fans at meets.",
      author: "Hannah Keller",
      date: "2026-10-30",
      body: [
        "As most fall sports approached their last few games, cross country sped ahead into their post-season competitions. Starting Saturday, October 17 and continuing through each Saturday through October 31, Morse Cross Country attended their Conference Meet, then those eligible attended Regionals. All of the varsity teams will attend Regionals, and Frida Wright raced on October 31 at States.",
        "This season the Morse Girls Cross Country team placed a record high 14th at the Festival of Champions in the seeded division, with Frida Wright placing 28th out of 224 athletes. At the Laliberte Invitational Meet the Girls Cross Country team won by a 37 point lead. The full varsity scored in the top 10 of the meet. The Boys Cross Country team placed 12th at this same meet. This season Xavier Ames achieved a personal best-sub 19 minutes; Eli Salazar PRed sub 20, contributing to the 32 PRs gained across both teams this year.",
        "Morse Girl’s Cross Country has been KVAC Team Champions for the past two years and Boy’s Cross Country Team placed second in KVAC last year after winning the 2024 season the year before. Despite their high achievements, many students have never attended a race. Cross Country meets aren’t naturally a typical environment for a Morse K-section. Supporters have to move from point to point to cheer for the small period of time the athletes run by. Without a Morse home course, every Cross Country meet has been away this season. However, this season a few students traveled out to a meet in Topsham. “It was really exciting for us to feel the support from our community,” senior captain Rose Strelneck commented. As our athletes continue to compete and excel in each race, students are encouraged to continue the support for their high achieving peers.",
        "Despite the few student supporters, Cross Country has a fan base as they cross each finish line at top notch speeds. Parents and family have supported the athletes every meet, cheering and supplying snacks. The team itself has developed a close-knit family, each athlete supporting the others with enthusiasm. “Since the boys and girls run at different times, we always make sure to cheer the other team as loud as we can. Even during workouts we encourage each other and push each other to our best,” senior Libby Reblin remarked. The team hosts a dinner before every meet to pump up spirits- painted faces and friendship bracelets are a must throughout the season.",
        "The Morse Cross Country team is an energetic and successful part of Morse Athletics. Our athletes work hard, run fast, and have fun as they support each other to their best. Make sure to cheer on our Cross Country team as they finish their season, whether it be traveling to a meet or a “good luck” at lunch or in the hallway.",
      ],
    },
    {
      id: "maine-supreme-court-visits-morse",
      color: "steel",
      category: "News",
      title: "Maine Supreme Court Visits Morse High School",
      dek: "The Maine Supreme Judicial Court heard three cases at Morse on October 7.",
      author: "Navah Weeman",
      date: "2026-10-30",
      body: [
        "On Wednesday, October 7th, 2026, Morse had the privilege to host the Maine Supreme Judicial Court. There were three different trials held throughout the morning that students from various schools had the opportunity to listen in on.",
        "The process of the trials were very informative and educational for a lot of people. Most people's idea of a trial is a judge with a gavel and witnesses being brought in, like something we would see in a movie. This changed our ideology of that experience. One of the cases was about a snowmobile accident that had resulted in death. In the lower court, the person who was believed to be responsible for the death was declared guilty. This trial was between the State of Maine and the person found guilty. The trial at Morse was about how the process happened to come to that decision and whether it was a fair trial.",
        "These trials were oral arguments before a panel of seven justices and lawyers from both sides of the case. The lawyer on behalf of the alleged “killer” was arguing that during the decision there was unfairness in the jury, who was picked to be on the jury, as well as information relayed to the jury that may have influenced their final decisions. The lawyer on behalf of the State of Maine was arguing that the process was, in fact, fair.",
        "This shed a unique view on how the Maine Supreme Judicial Court operates, something that both Morse and students from surrounding schools in the community were grateful to be able to experience.",
      ],
    },
    {
      id: "pop-culture",
      color: "sky",
      category: "Pop Culture",
      title: "Pop Culture",
      dek: "Kelly Clarkson, a Britney Spears movie, SNL and more.",
      topics: [
        "Kelly Clarkson on AI music",
        "A Britney Spears biopic from Jon M. Chu",
        "Shia LaBeouf and FKA Twigs",
        "Olivia Dean's copyright lawsuit",
        "Shane Gillis back on SNL",
        "Have you uplifted Tinashe?",
      ],
      author: "Fred Waters",
      date: "2026-10-30",
      body: [
        "Welcome to the Pop Culture segment of The Anchor! October has already started off with many memorable moments, so let's get into them! So far, Grammy Award Winning Kelly Clarkson has been a big topic! Kelly Clarkson opened up on “The Lost Cultures” podcast about how she loves and thinks that it is helpful to creating music and doing many things, but she draws the line when AI music is seen on a chart compared to humans. Not only has she shared her opinions on AI but also in a small shop titled “Art of Play” In Brooklyn, New York after trying to buy a mechanical singing bird for a price of $15,000.",
        "There has been recent talk from Universal Pictures of a developing feature film adaptation of Britney Spears Best Selling memoir “The Woman in Me”. This biopic is set to be directed by Critics Choice Award Winner Jon M. Chu, previous director of both “Wicked” movies, “Crazy Rich Asians”, “In the Heights”, and more. Although they are very early in development, there are already talks about who would be a good Britney. Who would you like to see play Britney Spears in a biopic?",
        "Shia LaBeouf has also been in the news lately. Shia LaBeouf's wife, Critics Choice Award Winner, Mia Goth has just filed divorce from him citing “irreconcilable differences”, stating that they have been separated since July, 2025. One of LaBeouf's ex’s, Grammy Award Winning FKA Twigs ended her lawsuit against him over the NDA (Non-Disclosure Agreement) from her 2020 case. This is after Labeouf had the disputed provisions terminated. This now leads FKA Twigs to speak publicly after never being allowed to talk about their previous relationship.",
        "Grammy Award Winning Olivia Dean is currently facing a copyright lawsuit over one of her songs titled “I've Seen It”. The allegation states that Dean's song had too many similarities to “Just the Two of Us” by the Grammy Award winning singer Bill Withers. This lawsuit is only targeting the signed publication of Olivia Dean, not her personally.",
        "On the 10th, previous Saturday Night Live cast member Shane Gillis hosted the show for the third time. Shane Gillis is under fire for his opening monologue talking about his prior experiences at his gym. “I haven't been to the gym in so long I didn't know woman just dress like wh*res”. This controversy from Gillis is nothing new, but let's see if it's enough to keep off the SNL stage for a fourth time.",
        "Have you uplifted Tinashe? Tinashe, a famous artist, has recently released her 8th studio album “Popstar”. Fans who want to encourage this album's ratings and popularity have started a new trending question. Feel free to go listen and ask others if they have “Uplifted Tinashe” yet!",
        "Thank you for taking the time to read “Pop Culture Drill”, and I'll see you next time!",
      ],
    },
    {
      id: "2026-emmy-awards",
      color: "blue",
      category: "Entertainment",
      title: "2026 Emmy Awards",
      dek: "A quick look at this year's Emmys.",
      author: "Brenna Lavender",
      date: "2026-10-30",
      body: [
        "The 2026 Emmy Awards aired on September 14, 2026, at 8 pm EST, held at the Peacock Theater in Los Angeles. While award shows might not always be on your radar, this year's ceremony packed a handful of fascinating highlights and surprises you won’t want to miss. The Emmy Awards have seen consistent success from long-time winners like Widows Bay, The Pit, and The Late Show with Stephen Colbert. However, the ceremony's viewership recently dipped by roughly 10%, falling to about 6.7 million viewers.",
      ],
    },
  ],

  /* ---------- Podcast episodes ----------
     For each episode, paste the YouTube video ID (the part after "v="
     in a link like youtube.com/watch?v=dQw4w9WgXcQ).
     Example:
     { title: "Ep. 1: We're Live", date: "2026-11-20", youtubeId: "dQw4w9WgXcQ",
       description: "Meet the hosts and hear what's coming." },              */
  podcast: [],

  /* ---------- Archives ----------
     When an issue ends, move its stories here (or link to a PDF).
     Example: { title: "November 2026 Issue", date: "2026-11-30", link: "archives/nov-2026.pdf" } */
  archives: [],
};
