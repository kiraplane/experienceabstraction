import type { WikiTopicPage } from './types';

const checkedAt = '2026-07-19';

export const wikiTopics: Record<WikiTopicPage['slug'], WikiTopicPage> = {
  codes: {
    slug: 'codes',
    title: 'Experience Abstraction Codes',
    seoTitle: 'Experience Abstraction Codes (July 2026) - Current Status',
    seoDescription:
      'Check the current Experience Abstraction codes status, whether Roblox redemption exists, reliable sources, and how to avoid fake code claims.',
    badge: 'Codes Status',
    intro:
      'No active Experience Abstraction codes or official redemption system were verified on July 11, 2026. This page tracks the real status without filling the gap with copied or invented strings.',
    heroImage: '/experienceabstraction/media/official-3.png',
    heroAlt: 'Official Experience Abstraction Roblox circus screenshot',
    checkedAt,
    facts: [
      {
        label: 'Verified active codes',
        value: '0',
        note: 'No reliable code string found',
      },
      {
        label: 'Redeem system',
        value: 'Not verified',
        note: 'No official menu or field confirmed',
      },
      {
        label: 'Official badges',
        value: '0',
        note: 'Roblox badge API snapshot',
      },
      {
        label: 'Last checked',
        value: 'July 11, 2026',
        note: 'Official, search, and video pass',
      },
    ],
    sections: [
      {
        heading: 'Are there Experience Abstraction codes right now?',
        paragraphs: [
          'There are no verified active codes to enter at the time of this check. More importantly, no official redemption field, codes button, or creator-published code list was confirmed. A new Roblox game can receive updates without receiving a promo-code system, so an update timestamp alone is not evidence that a code exists.',
          'The safest answer is therefore zero verified codes, not a speculative list. If the creator adds redemption later, this page can change quickly because the status, source, exact capitalization, and reward can be recorded separately instead of copying an untraceable list from another game.',
        ],
      },
      {
        heading: 'What was checked before publishing this status',
        paragraphs: [
          'The check covered the official Roblox description, the Roblox Games API snapshot for Universe ID 10352185757, the experience badge endpoint, exact-name web results, Serper autocomplete and related searches, and current YouTube results around the July update. Those sources consistently surfaced the abstraction mechanic and the new Caine and Cellar workflow, but not an active code string.',
          'Search results for this phrase are unusually noisy because “experience abstraction” is also used in software and research. Programming pages about abstract code are not Roblox promo-code sources and must never be converted into a game codes list.',
        ],
        bullets: [
          'Official Roblox game description: no code announcement or redemption instruction.',
          'Roblox platform data: no verified code field and no badges at the check time.',
          'Exact YouTube search: current guides cover abstraction, Caine, and the Cellar—not codes.',
          'Competitor coverage: the only focused guide found covers how to abstract, not rewards or redemption.',
        ],
      },
      {
        heading: 'How to recognize a real future code',
        paragraphs: [
          'A real code needs more than a search-friendly title. The strongest evidence would be a string published in the Roblox description or by pawlooz through an owned channel, combined with a visible in-game redemption path. A current screenshot or a second independent guide can help confirm capitalization, expiry, and reward details.',
          'Until those pieces exist, a list that claims free currency, skins, Caine access, or instant abstraction should be treated as unverified. Caine is currently reached through the game’s chat and player-state workflow, not through a promo string based on the sources checked for this page.',
        ],
      },
      {
        heading: 'Where to check after an update',
        paragraphs: [
          'Start with the official Roblox page because the creator can change the description alongside a release. Then check the live interface for a Codes, Gift, Redeem, or Twitter-style button. Finally, compare any claimed string against two recent, independent sources before trusting reward text or expiry status.',
          'Do not paste scripts into an executor, install a modified Roblox client, or submit your Roblox password to redeem a code. Legitimate Roblox promo redemption happens through the game or an official Roblox-owned surface, never through a downloadable cheat tool.',
        ],
      },
      {
        heading: 'Codes page update policy',
        paragraphs: [
          'This page will keep the checked date visible even while the verified count remains zero. When a reliable code appears, it should be added with the exact string, reward wording, source, check date, and active or expired state. If sources disagree, the code stays out until the conflict is resolved.',
          'That conservative approach is useful for a fast-changing game: a short accurate status page is more helpful than a long table populated with strings from unrelated Roblox experiences.',
        ],
      },
    ],
    faq: [
      {
        question: 'What are the active Experience Abstraction codes?',
        answer:
          'There were no verified active codes when the official page, Roblox data, search results, and current videos were checked on July 11, 2026.',
      },
      {
        question: 'Where is the Experience Abstraction codes button?',
        answer:
          'No official Codes or Redeem button was verified. Do not assume another Roblox game’s redemption instructions apply here.',
      },
      {
        question: 'Can a code unlock Caine?',
        answer:
          'Current gameplay sources use the chat keyword Caine and a player-state sequence. No Caine promo code was verified.',
      },
      {
        question: 'How often is this codes status checked?',
        answer:
          'The page records a visible check date and should be refreshed after official updates or credible creator announcements.',
      },
    ],
    relatedRoutes: [
      {
        href: '/characters',
        label: 'Characters',
        description:
          'See what is actually known about Caine and player states.',
      },
      {
        href: '/official-links',
        label: 'Official Links',
        description: 'Use the real Roblox page for creator announcements.',
      },
      {
        href: '/guides/how-to-abstract',
        label: 'How to Abstract',
        description:
          'Follow the verified mechanic instead of fake reward claims.',
      },
    ],
  },
  characters: {
    slug: 'characters',
    title: 'Experience Abstraction Characters',
    seoTitle: 'Experience Abstraction Characters - Caine & Player States',
    seoDescription:
      'Meet the verified Experience Abstraction characters and states, including Caine, normal players, abstracted players, and the Cellar route.',
    badge: 'Characters',
    intro:
      'The current Roblox game has one clearly demonstrated named character—Caine—plus normal and abstracted player states. It does not yet support a trustworthy full-cast database.',
    heroImage: 'https://i.ytimg.com/vi/pKiYkkQFkmA/maxresdefault.jpg',
    heroAlt: 'Caine in Experience Abstraction Roblox gameplay',
    checkedAt,
    facts: [
      {
        label: 'Named character verified',
        value: 'Caine',
        note: 'Current update gameplay',
      },
      {
        label: 'Player states',
        value: 'Normal / Abstracted',
        note: 'Core social mechanic',
      },
      {
        label: 'Full TADC roster',
        value: 'Not confirmed',
        note: 'Do not import series lore as game data',
      },
      {
        label: 'Last checked',
        value: 'July 11, 2026',
        note: 'Roblox and two current walkthroughs',
      },
    ],
    sections: [
      {
        heading: 'What counts as a character in this Roblox experience',
        paragraphs: [
          'Experience Abstraction is inspired by The Amazing Digital Circus, but inspiration does not automatically make every series character part of the playable Roblox build. The current source set supports a smaller, clearer roster: Caine appears as a summonable game character, while players move between a normal avatar state and an abstracted state.',
          'This page separates confirmed gameplay from franchise lore. Names such as Pomni, Jax, Ragatha, Kinger, Gangle, and Zooble should not be presented as available characters unless the live game or an owned update source confirms them.',
        ],
      },
      {
        heading: 'Caine: the currently verified named character',
        paragraphs: [
          'Caine appears in multiple current walkthroughs published after the July 10 update. The repeatable interaction demonstrated in the current build is simple: enter Caine in Roblox chat to summon him. The capitalization used in the demonstrations is Caine, although Roblox chat matching may change with later updates.',
          'Caine should be treated as a summoned NPC or event character, not as a permanently unlocked playable class. No character shop, rarity, stat line, upgrade path, or Caine code was verified. His current practical role is tied to the updated abstraction and Cellar sequence.',
        ],
        bullets: [
          'Current command demonstrated: type Caine in Roblox chat.',
          'Current role: summoned character connected to an abstraction event.',
          'Not verified: playable roster slot, purchase price, rarity, stats, or promo-code unlock.',
        ],
      },
      {
        heading: 'The normal player state',
        paragraphs: [
          'A normal player keeps the standard Roblox avatar presentation and can choose whether to trigger or resist abstraction. Staying with the group, remaining in light, and moving away from abstracted players reverses the three risk conditions published on the official game page.',
          'The normal state is not a separate named character. It is the starting side of the social loop, which matters because one player may need to remain normal long enough to summon Caine while another player completes the abstracted side of the sequence.',
        ],
      },
      {
        heading: 'The abstracted player state',
        paragraphs: [
          'An abstracted player becomes the transformed side of the mechanic. Current gameplay depicts a dark, heavy creature form with bright multicolored eye-like markings. The official description confirms three ways to reach abstraction: isolation, prolonged darkness, or proximity to someone already abstracted.',
          'This is a state applied to a player rather than a named collectible character. Exact transformation timers, damage values, movement bonuses, infection ranges, and recovery rules remain unpublished, so a character table should not invent numerical stats.',
        ],
      },
      {
        heading: 'How Caine connects to the Cellar sequence',
        paragraphs: [
          'A current step-by-step demonstration uses two player roles. One player becomes abstracted; another nearby player types Caine in chat. That combination initiates the current route associated with the Cellar. Because the feature arrived in a recent update, server version and timing can affect whether the sequence responds immediately.',
          'If nothing happens, confirm that the target player is fully abstracted, keep the summoning player close, type the name plainly in chat, and try a fresh server. The stage appears in one demonstration, but no fixed summon location has been verified—the chat interaction and player states are the supported parts.',
        ],
      },
      {
        heading: 'Resolve conflicting Caine instructions before retrying',
        paragraphs: [
          'Current exact-game pages do not all describe the trigger the same way. Some repeat the demonstrated two-player chat sequence, while others add a timer, stage position, or hidden location requirement without showing a repeatable test. Treat the two-player roles and the plain Caine chat message as the verified core; treat extra timing or coordinate claims as unconfirmed variables.',
          'When a guide conflicts with what your server shows, change one variable at a time. Confirm the abstracted state, keep the second player nearby, send only Caine in chat, and then move to a fresh server before testing a different location. This prevents a stale instance from looking like proof of a new character rule.',
        ],
        bullets: [
          'Verified core: one abstracted player and one nearby summoning player.',
          'Repeatable input: type Caine plainly in Roblox chat.',
          'Not verified as mandatory: stage coordinates, a fixed timer, or a permanent unlock.',
        ],
      },
      {
        heading: 'Why this page does not copy the entire series cast',
        paragraphs: [
          'Search results for “Experience Abstraction characters” are dominated by pages about abstracted characters in the original series. Those pages can explain the inspiration, but they are not reliable evidence for the Roblox game’s current roster, commands, or mechanics.',
          'The list will expand only when the live experience, creator-owned information, or multiple current gameplay sources confirm a character. That keeps a fast-moving fan game separate from unrelated roleplay bots, fan animations, theories, and lore databases.',
        ],
      },
    ],
    video: {
      id: 'pKiYkkQFkmA',
      title:
        'How to get CAINE and go to CELLAR in EXPERIENCE ABSTRACTION Roblox',
      channel: 'codeshunterx4',
      url: 'https://www.youtube.com/watch?v=pKiYkkQFkmA',
      thumbnailUrl: 'https://i.ytimg.com/vi/pKiYkkQFkmA/maxresdefault.jpg',
      publishedAt: '2026-07-10',
      checkedAt,
      caption:
        'Current Caine and Cellar walkthrough, cross-checked against a second July update guide.',
    },
    faq: [
      {
        question: 'Which characters are in Experience Abstraction?',
        answer:
          'Caine is the currently verified named character. Normal and abstracted players are gameplay states rather than separate named roster entries.',
      },
      {
        question: 'How do you get Caine in Experience Abstraction?',
        answer:
          'Current July 2026 gameplay demonstrates summoning Caine by typing Caine in Roblox chat.',
      },
      {
        question: 'Is Caine a playable character?',
        answer:
          'Caine is currently supported as a summoned NPC or event character. A permanent playable slot, stats, rarity, and upgrade path were not verified.',
      },
      {
        question: 'Are all Amazing Digital Circus characters in the game?',
        answer:
          'No complete series roster is confirmed. This wiki does not treat original-series lore as current Roblox game data.',
      },
    ],
    relatedRoutes: [
      {
        href: '/locations',
        label: 'Locations',
        description: 'Find the stage, rooms, dark routes, and Cellar workflow.',
      },
      {
        href: '/map',
        label: 'Map Guide',
        description: 'Use landmarks to plan the Caine and abstraction routes.',
      },
      {
        href: '/guides/how-to-abstract',
        label: 'How to Abstract',
        description: 'Prepare the transformed player state used by the update.',
      },
    ],
  },
  map: {
    slug: 'map',
    title: 'Experience Abstraction Map',
    seoTitle: 'Experience Abstraction Map Guide - Circus, Rooms & Cellar',
    seoDescription:
      'Navigate the Experience Abstraction map with a route-first guide to the circus floor, stage, room hallway, dark areas, and Cellar sequence.',
    badge: 'Map Guide',
    intro:
      'The map is a multi-level circus hub built around an open central floor, a stage, room corridors, darker side routes, and the update-linked Cellar destination.',
    heroImage: '/experienceabstraction/media/official-3.png',
    heroAlt: 'Official wide view of the Experience Abstraction circus map',
    checkedAt,
    facts: [
      {
        label: 'Layout',
        value: 'Multi-level circus hub',
        note: 'Open center with surrounding routes',
      },
      {
        label: 'Core landmarks',
        value: '5',
        note: 'Floor, stage, rooms, dark routes, Cellar',
      },
      {
        label: 'Interactive map',
        value: 'Not official',
        note: 'Use the route index below',
      },
      {
        label: 'Cellar access',
        value: 'Sequence-gated',
        note: 'Not a normal walk-in doorway',
      },
    ],
    sections: [
      {
        heading: 'How to read the map without a minimap',
        paragraphs: [
          'Treat the bright central circus floor as the anchor. It is visually open, easy to re-enter, and connected to the surrounding colored structures and raised paths. When you lose another player or abandon an abstraction attempt, return to the center before choosing the next route.',
          'The map matters because each abstraction condition wants a different environment. High-traffic light helps survival; private or dark space helps a controlled attempt; an abstracted player creates a moving proximity zone; and the Cellar uses an event sequence instead of ordinary navigation.',
        ],
      },
      {
        heading: 'Landmark index for the current build',
        paragraphs: [
          'The game does not publish a labeled overhead plan, so this guide uses plain landmark names that match what players can recognize on screen. They are navigation descriptions, not claims that every label is an official room name.',
        ],
        bullets: [
          'Central circus floor: the large checkered, open area used to regroup and reorient.',
          'Stage: the curtained platform used as a clear meeting point in current gameplay.',
          'Room hallway: the red and orange corridor lined with player doors and room controls.',
          'Dark side routes: less crowded areas and unlit pockets used for darkness or isolation attempts.',
          'Cellar: a special destination associated with Caine and an abstracted player, not a standard entrance on the main floor.',
        ],
      },
      {
        heading: 'Route planner by player goal',
        paragraphs: [
          'For survival, start in the central floor, keep at least one other player in view, and favor bright routes. For isolation, move outward from the center and pick a route with low traffic. For darkness, a private room with the lights off creates a cleaner test than mixing darkness with an already abstracted player.',
          'For the Caine sequence, organize the roles before moving. One player prepares the abstracted state; the other remains available to type Caine in chat while nearby. No fixed stage requirement is confirmed even though one current demonstration uses the stage as its meeting point.',
        ],
        bullets: [
          'Survive: central floor → bright connected route → regroup when chased.',
          'Test isolation: center → outer route or private room → avoid passing groups.',
          'Test darkness: room hallway → private room → switch off the room light if available.',
          'Reach the Cellar sequence: prepare two roles → abstract one player → summon Caine nearby.',
        ],
      },
      {
        heading: 'Why the Cellar is different from a normal map location',
        paragraphs: [
          'Current July walkthroughs describe the Cellar as an update-linked destination reached through a player-state interaction. You should not waste time searching every wall for a permanent Cellar door. The reliable route starts with an abstracted player and a second nearby player who summons Caine through chat.',
          'Because the destination depends on a recent sequence, a stale server can behave differently from a fresh one. Rejoin if the command produces Caine but the event does not progress, and keep speculative secret-door coordinates out of the route until they are repeatable.',
        ],
      },
      {
        heading: 'Fresh-server troubleshooting checklist',
        paragraphs: [
          'A server can stay on an older build after an update. If the chat command, character state, or Cellar transition behaves differently from a current walkthrough, do not immediately assume the map route changed. Leave the instance, join a newly started public or private server, and repeat the same two-player setup before adding another condition.',
          'The clean test order is state, distance, command, then server version. Location comes last because the stage is a convenient landmark rather than a verified fixed trigger. Record which step failed so a later update can correct one rule without rewriting the whole map.',
        ],
        bullets: [
          'Confirm the target has fully changed into the abstracted state.',
          'Keep the normal player close enough to coordinate the event.',
          'Send Caine without extra punctuation or command prefixes.',
          'Retry in a fresh server before testing speculative coordinates.',
        ],
      },
      {
        heading: 'What the current map data does not confirm',
        paragraphs: [
          'No official room coordinate system, collectible map, fast-travel menu, named region list, or developer-published interactive map was found. Raised tubes and platforms are visible, but a decorative path should not be labeled as a secret zone unless players can consistently enter and use it.',
          'The same rule applies to original-series locations. The Tent, Void, Grounds, and other franchise terms are not automatically current Roblox destinations. Only landmarks visible or repeatable in the game belong in this route index.',
        ],
      },
      {
        heading: 'How to use the map after future updates',
        paragraphs: [
          'Check the official Roblox update timestamp first, then compare the central floor, room hallway, stage, and Cellar workflow against a fresh server. If a new door or destination appears, record how it is entered and what player job it solves before adding another location name.',
          'A route-first map stays useful even when decorations change. The important structure is where players meet, where they can separate, where light can be controlled, and which destinations require a triggered sequence.',
        ],
      },
    ],
    video: {
      id: 'aJjPh2YoE_0',
      title: 'Experience Abstraction... l Roblox game l',
      channel: 'Robox',
      url: 'https://www.youtube.com/watch?v=aJjPh2YoE_0',
      thumbnailUrl: 'https://i.ytimg.com/vi/aJjPh2YoE_0/maxresdefault.jpg',
      publishedAt: '2026-07-10',
      checkedAt,
      caption:
        'Long-form current-build gameplay used to cross-check the circus layout and movement routes.',
    },
    faq: [
      {
        question: 'Does Experience Abstraction have an official map?',
        answer:
          'No developer-published interactive or labeled overhead map was verified. This page uses recognizable current-build landmarks.',
      },
      {
        question: 'Where is the Cellar on the map?',
        answer:
          'The Cellar is currently sequence-gated rather than a normal walk-in room. Prepare an abstracted player and summon Caine nearby.',
      },
      {
        question: 'Where should I go to avoid abstraction?',
        answer:
          'Use bright, populated routes near the central floor and move away when an abstracted player approaches.',
      },
      {
        question: 'Is the stage required to summon Caine?',
        answer:
          'A current demonstration uses the stage, but no fixed summon location is verified. Typing Caine in chat is the repeatable interaction.',
      },
    ],
    relatedRoutes: [
      {
        href: '/locations',
        label: 'Locations',
        description:
          'Choose the best landmark for darkness, isolation, or safety.',
      },
      {
        href: '/characters',
        label: 'Characters',
        description: 'Understand the Caine and abstracted-player roles.',
      },
      {
        href: '/gameplay',
        label: 'Gameplay',
        description: 'Review the three official abstraction conditions.',
      },
    ],
  },
  locations: {
    slug: 'locations',
    title: 'Experience Abstraction Locations',
    seoTitle: 'Experience Abstraction Locations - Rooms, Stage & Cellar',
    seoDescription:
      'Find useful Experience Abstraction locations for isolation, darkness, regrouping, Caine summoning, and the Cellar route in the Roblox game.',
    badge: 'Locations',
    intro:
      'Choose a location by the mechanic you want to control: private rooms for clean darkness tests, the central floor for safety, and the Caine sequence for the Cellar.',
    heroImage: '/experienceabstraction/media/official-1.png',
    heroAlt: 'Official Experience Abstraction corridor and darker location',
    checkedAt,
    facts: [
      {
        label: 'Controlled darkness',
        value: 'Private room',
        note: 'Turn off the room light if available',
      },
      {
        label: 'Regroup point',
        value: 'Central floor',
        note: 'Bright and high traffic',
      },
      {
        label: 'Meeting landmark',
        value: 'Stage',
        note: 'Clear visual reference',
      },
      {
        label: 'Special destination',
        value: 'Cellar',
        note: 'Requires a current event sequence',
      },
    ],
    sections: [
      {
        heading: 'Pick a location that matches one player job',
        paragraphs: [
          'The best location depends on whether you want to abstract, stay normal, meet another player, or trigger the Caine and Cellar workflow. Do not judge a spot only by its appearance. Light level, player traffic, escape routes, and proximity to an abstracted player change what the same room does for you.',
          'For a clean test, control one condition at a time. A private room is useful because you can reduce traffic and control light. The central floor is useful for the opposite reason: other players and bright space make it easier to resist isolation and darkness.',
        ],
      },
      {
        heading: 'Private rooms: the cleanest darkness and isolation test',
        paragraphs: [
          'Current how-to guidance uses the player rooms as a controlled setup. Enter your room from the colored hallway, switch the light off when the room control is available, and avoid bringing a crowd inside. That separates the darkness route from the proximity route and makes the result easier to repeat.',
          'A room is not automatically isolated if players keep opening the door or standing nearby. Watch the traffic outside, keep the attempt simple, and leave when your goal changes. For survival, turn the light back on and return to a populated route rather than staying hidden.',
        ],
        bullets: [
          'Best for: controlled darkness, low traffic, repeatable solo attempts.',
          'Weak point: other players can interrupt the isolation condition.',
          'Exit plan: return through the room hallway toward the central floor.',
        ],
      },
      {
        heading: 'Central circus floor: the safest regrouping location',
        paragraphs: [
          'The open checkered floor is the easiest landmark to recognize and one of the simplest places to find company. It is therefore a strong regroup point when you want to reverse isolation or help another player stay near the crowd.',
          'Open space does not make you automatically safe. If an abstracted player enters the group, proximity becomes a risk condition. Use the visibility to create distance early instead of letting the crowd trap you between structures.',
        ],
      },
      {
        heading: 'Dark side routes: useful but harder to control',
        paragraphs: [
          'Unlit pockets and darker outer routes can support the darkness condition without using a private room. They are less controlled because traffic can change and another abstracted player may enter the same route, mixing two conditions in one attempt.',
          'Use a recognizable exit landmark before committing. If the space becomes crowded, return to the central floor and restart instead of assuming a hidden timer continues unchanged. The official game page does not publish exact darkness duration or distance thresholds.',
        ],
      },
      {
        heading: 'Stage: a clear place to meet and organize roles',
        paragraphs: [
          'The curtained stage is visually distinctive and works well as a meeting point when two players need to coordinate. A current Caine demonstration begins there, making it a convenient landmark for the summoning player and the player preparing to abstract.',
          'The stage should not be treated as a mandatory Caine spawn pad. Current evidence supports typing Caine in chat; it does not establish a fixed coordinate requirement. If the command works elsewhere in your server, the chat interaction is more important than the landmark.',
        ],
      },
      {
        heading: 'Cellar: a destination reached through the Caine sequence',
        paragraphs: [
          'The Cellar is the most important new location signal in current July gameplay, but it does not behave like a door you simply find during exploration. The demonstrated route requires one player to become abstracted and a nearby player to summon Caine through chat.',
          'If the sequence stalls, verify both roles, keep the players close, and try a newly started server. Do not substitute original-series lore for the Roblox route: this page records only the currently demonstrated entry workflow, not speculative Cellar contents or permanent coordinates.',
        ],
      },
      {
        heading: 'Separate a meeting point from a trigger condition',
        paragraphs: [
          'The stage appears often because it is easy for two players to recognize and regroup there. That makes it a good setup location, but it does not prove that Caine only works on the stage. The current cross-check supports the two player jobs and chat input more strongly than any fixed coordinate.',
          'If one location fails, first test a fresh server with the same player roles. Only treat a location as required after the same result repeats across servers and more than one current gameplay source shows the condition.',
        ],
      },
    ],
    video: {
      id: 'D8mBiEX8am4',
      title: 'How to Abstract in EXPERIENCE ABSTRACTION (Roblox)',
      channel: 'Roblox Master Guides',
      url: 'https://www.youtube.com/watch?v=D8mBiEX8am4',
      thumbnailUrl: 'https://i.ytimg.com/vi/D8mBiEX8am4/maxresdefault.jpg',
      publishedAt: '2026-07-08',
      checkedAt,
      caption:
        'Exact-game route walkthrough used to cross-check room and dark-area choices.',
    },
    faq: [
      {
        question: 'Where is the best place to abstract?',
        answer:
          'A private room with controlled light and low traffic is a clean place to test darkness or isolation separately.',
      },
      {
        question: 'Where should I go to stay normal?',
        answer:
          'Use bright, populated space around the central circus floor, then move away if an abstracted player arrives.',
      },
      {
        question: 'Where is the Cellar?',
        answer:
          'The Cellar is currently reached through a Caine and abstracted-player sequence rather than a verified permanent door.',
      },
      {
        question: 'Can Caine only be summoned on the stage?',
        answer:
          'The stage is a useful meeting landmark, but no stage-only requirement was verified. The current interaction uses Roblox chat.',
      },
    ],
    relatedRoutes: [
      {
        href: '/map',
        label: 'Map Guide',
        description: 'See how the locations connect into complete routes.',
      },
      {
        href: '/characters',
        label: 'Characters',
        description: 'Set up the Caine and abstracted-player roles.',
      },
      {
        href: '/guides/how-to-avoid-abstraction',
        label: 'Avoid Abstraction',
        description: 'Use light, company, and distance to stay normal.',
      },
    ],
  },
};

export function getWikiTopic(slug: WikiTopicPage['slug']) {
  return wikiTopics[slug];
}
