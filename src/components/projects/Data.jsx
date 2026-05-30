import image1 from "../../assets/web1.png";
import image2 from "../../assets/barcode.png";
import image3 from "../../assets/sanrio.png";
import image4 from "../../assets/Dashboard.jpg";
import webLobby from "../../assets/web_lobby.png";
import cliLobby from "../../assets/cli_lobby.png";
import cliRoom from "../../assets/cli_room.png";

export const projects = [
  {
    slug: "vaux",
    title: "Vaux - CLI & Web music sharing room",
    image: webLobby,
    description:
      "Vaux is a real-time, Socket.io–based synchronized music platform that enables shared YouTube queue management, voting, and host-controlled playback across web and CLI clients using a centralized Node.js backend with MPV-based local audio rendering.",
    tags: ["Next.js", "Socket.io", "Node.js", "MPV"],
    link: "https://github.com/itsvee0120/Vaux",
    demo: "https://vaux-ten.vercel.app/",
    pypi: "https://pypi.org/project/vaux-cli/", // verify this URL
    details: "",
    body: `## Vaux – Original Plan

### How the Idea for the Virtual Jam Room Came to Be

This project actually started somewhere completely different.

Originally, I really wanted to build a terminal-based application. I've always liked the idea of software that runs entirely inside the terminal — lightweight, fast, and surprisingly immersive when done well. After discovering Python's textual framework and seeing how modern TUIs could look almost like full desktop applications, I knew I wanted to build something around real-time interaction.

The challenge was figuring out what to build.

I didn't want another generic CLI productivity tool or dashboard project. I wanted something social, interactive, and technically challenging enough to teach me concepts I hadn't explored deeply before. Eventually I landed on the idea of a music sharing room.

The concept immediately felt interesting because it naturally introduced two things I wanted to learn:

- Real-time synchronization
- Socket.io and WebSocket communication

A shared music room sounds simple at first, but the more I thought about it, the more interesting the engineering became. If multiple people are listening together, everyone needs to stay synchronized. Users should be able to join a room, chat, queue songs, vote tracks up or down, and hear the same playback position at the same time.

That meant the project wasn't just about playing music — it became a distributed state synchronization problem.

What made the idea even more compelling was realizing that I didn't actually need to stream audio myself. The app could rely on platforms like YouTube for playback while my backend handled synchronization, room state, queue logic, and communication between clients.

That shifted the project from "music app" to "real-time systems project disguised as a music app."

As I planned the architecture further, another idea emerged that ended up becoming one of my favorite parts of the project: multiple clients sharing the same backend.

Instead of treating the terminal application as the entire project, I realized I could build a web client alongside it. Both clients would communicate with the same Socket.io server and follow the same event contract.

The architecture became:

- One backend
- Shared real-time event system
- Multiple independent clients

That idea fascinated me because it felt much closer to how real systems are designed. The backend becomes a platform rather than something tied to a single interface.

The web client would demonstrate:

- React and frontend engineering
- Real-time browser UI
- API integration
- Collaborative UX

![Vaux web client lobby](${webLobby})

The terminal client would demonstrate:

- Python and textual
- TUI application design
- Networking fundamentals
- Event-driven architecture

![Vaux CLI lobby](${cliLobby})

![Vaux CLI room](${cliRoom})

Both clients solving the same problem differently ended up being far more interesting than building two unrelated projects.

Another thing that drew me toward the concept was how naturally social music is. Most music apps are still surprisingly individual experiences. You send links back and forth, but you rarely feel like you're actually listening together. I wanted to explore whether a lightweight "virtual jam room" could recreate some of the feeling of passing songs around with friends in the same room.

The deeper I got into planning, the more the project evolved from a simple terminal experiment into a full real-time collaboration platform.

And honestly, that's probably my favorite kind of project idea — one that starts small, teaches you something unexpected, and gradually expands into something much bigger than the original concept.

## yt-dlp, mpv & ffmpeg

One unexpected part of this project was rediscovering tools I had used years before I even considered studying computer science.

Long before I thought seriously about software engineering, I used tools like yt-dlp and ffmpeg for something much simpler: downloading and converting mashup tracks into MP3s I could listen to offline. Back then they felt like mysterious internet tools that "just worked." I didn't understand the internals — I only knew the right command could turn a YouTube link into a music file.

Coming back to those same tools while building Vaux felt full-circle.

At first, yt-dlp wasn't even part of my CLI architecture plan. I assumed I'd use Electron or fully embedded web playback to avoid local media complexity. But as I went deeper into terminal app design, I wanted the CLI to feel native and self-contained, not like a browser wrapper.

That decision opened a rabbit hole.

I started experimenting with local playback through mpv, which introduced distribution and dependency problems across systems. I spent a lot of time figuring out how users could pip install vaux-cli without manual mpv setup.

I thought this would be easy — download a binary, extract it, done. It turned into a systems problem involving portable builds, archive formats, architecture detection, and cross-platform handling.

I ended up building an installer pipeline inside Vaux. On first run, the CLI creates vendor/staging directories under ~/.vaux, queries GitHub Releases, picks the right portable mpv asset by architecture, downloads it, extracts it, and caches the resolved mpv path for future launches.

Extraction itself was trickier than expected.

The official mpv builds are shipped as .7z archives, and standard Python extraction paths were unreliable for those archives (BCJ2-related filters). The practical fix was to rely on an actual 7-Zip binary for extraction.

That changed the implementation approach.

Instead of depending on Python archive libraries, Vaux now prefers system 7z; if unavailable, it downloads and installs a local 7-Zip executable under ~/.vaux/7z, then invokes it via subprocess for extraction. What started as "include a media player" became a full dependency pipeline: discovery, staging, downloading, extraction, caching, and recovery paths.

Claude and Cursor were useful during this phase as planning partners. I used them to compare tradeoffs (Electron vs native playback vs embedded web approaches), evaluate edge cases, and structure implementation steps. That helped me move from scattered experiments to deliberate system design.

I eventually landed on a portable mpv bootstrap flow that is reproducible at the process level (deterministic asset selection and install path), though it still depends on upstream GitHub release availability. It's still evolving, and automating update/pinning strategy is future work.

Ironically, that frustration made the project more interesting.

For the first time, I wasn't just consuming tools — I was integrating them into a system. yt-dlp stopped being "just a downloader" and became part of a media pipeline. ffmpeg stopped being a magic command and became infrastructure thinking: process control, error paths, buffering, and playback synchronization.

That shift — from passive tool usage to system-level integration — was one of the most meaningful parts of this project.

It also reinforced something I keep noticing while learning computer science: many things that first drew me to tech were already forms of engineering curiosity. I just didn't recognize them that way at the time.

Even downloading mashup tracks years ago connects directly to the same curiosity that later led me to build a real-time collaborative music platform.`,
    features: [],
  },
  {
    slug: "personal-website",
    title: "Personal Website",
    image: image1,
    description: "Built with React to showcase my skills and projects.",
    tags: ["React"],
    link: "https://github.com/itsvee0120/violet-website",
    demo: "",
    details: "",
    features: [],
  },
  {
    slug: "barcode-qrcode-generator",
    title: "Barcode & QR code Generator",
    image: image2,
    description:
      "A web application that allows users to generate and download barcodes and QR codes from any input data or URL.",
    tags: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/itsvee0120/Barcode_QRcode_Generator",
    demo: "",
    details: "",
    features: [],
  },
  {
    slug: "social-media-platform",
    title: "Social Media Platform Project",
    image: image3,
    description:
      "This is an ongoing Sanrio's theme social media platform project",
    tags: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/itsvee0120/Social-Media-Platform/",
    demo: "",
    details: "",
    features: [],
  },
  {
    slug: "houreum-time-bank",
    title: "Houreum - Time Bank (in maintenance)",
    image: image4,
    description:
      "Houreum Time Bank App – Track, exchange, and manage time-based tasks using React Native and Supabase.",
    tags: ["Expo Go", "React Native", "Supabase"],
    link: "https://github.com/itsvee0120/time-bank",
    demo: "",
    details: "",
    features: [],
  },
];

export default projects;
