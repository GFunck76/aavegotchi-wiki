

interface Table {
    tableName: string
    tableData: TableData[]
}

interface TableData {
    headers: any
    data: any
}

export const tables
    = [
        {
            tableName: "guild",
            tableCaption: "",
            tableData: {
                headers: ["Name", "Emblem", "Description", "Requirement", "Point of Contact", "Social Media", "Discord"],
                data: [
					[`8bit Gamers Guild`, `<img src="/guild/8GG.jpg" alt = "8bit Gamers Guild" />`, `Our goal is to unite those interested in playing, earning, and creating with Aavegotchi. We know games like Aavegotchi will change the world. We want to recruit like minded individuals that want to seize this chance to have fun while creating wealth for themselves and others. The 8bit Gamers Guild will be a place for learning, community, and growth.`, `Good vibes`, `<a href = "https://twitter.com/NftRooster" target = "_blank">@NftRooster</a>`, `<a href = "https://twitter.com/8bitGamersGuild" target = "_blank">Twitter</a>`, `<a href = "https://discord.gg/VunTUMcz73" target = "_blank">Link</a>`],
					[`Aeolian Haunts`, `<img src="/guild/aeolian-haunts.jpg" alt = "Aeolian Haunts Guild" />`, `Aeolian Haunts is a social multinational guild with much love for Crypto and Pixels! Our target is to build a fun and warm community and participate in all kind of activities available for guilds and gotchi parties, when the Gotchiverse is live! We welcome you to be a part of our GotchiGang!`, `You have to love Ghosts, Pixels and Crypto! Main requirement to join is to be active and polite. Even people without a gotchi yet, are welcome to our community. We offer help and tips in our discord channel for everyone who wants to join the aavegotchi ecosystem!`, `CryptoK9#1322`, `<a href = "https://www.facebook.com/groups/456606075476389" target = "_blank">Facebook</a>`, `<a href = "https://discord.gg/w9SRJfFgnE" target = "_blank">Link</a>`],
					[`Aavegotchi Aavenue`, `<img src="/guild/aavegotchi-aavenue.png" alt="Aavegotchi Aavenue Guild" />`, `Come join us and be part of the hottest strip of land in the Gotchiverse, district 1!`, `Ownership of a Gotchiverse district 1 plot for eligibility into votes, raffles, and future events, but tourists from other districts are very welcome to join and hang out with us!`, `Cookiethief#3952`, ``, `<a href = "https://discord.gg/Gvthkzks4C" target = "_blank">Link</a>`],
					[`Aavegotchi Francophonie`, `<img src="/guild/aavegotchi-francophonie.jpg" alt="Aavegotchi Francophonie" />`, `Baguette speakers that want to conquer the Gotchiverse, but first we want to make FRENs, a lot of them and specially in Disctric 8 where we are placed. So If you love "baguette" & "fromage" stuff join us to participate to the very first french Aavegotchi guild. We aim to have a lot of fun and we will accept you either you prefer "pain aux chocolats" or "chocolatine"`, `Speak Baguette's language and have a REALM in Distric 8 (optional)`, `Blackyugin#0500`, `<a href="https://t.me/aavegotchi_francophonie" target="_blank">Telegram</a><br><a href="https://aavegotchi-francophonie.medium.com/" target="_blank">Medium</a>`, ``],
					[`Aavemaa`, `<img src="/guild/aavemaa.png" alt="Aavemaa Guild" />`, `Small group of frens consisting mainly of finnish speaking community members.`, `We have a very low engagement reguirement. We mostly idle away and can occasionally get together and hangout.`, `mikkop#3569`, `<a href = "https://peakd.com/@rova" target = "_blank">Blog</a>`, `<a href = "https://discord.gg/XkGEmnfr" target = "_blank">Link</a>`],
					[`Baklaava Guild`, `<img src="/guild/baklaava-guild.png" alt="Baklaava Guild" />`, `A guild for P2E and Blockchain gaming, especially focused on Aavegotchi. Whether you have Aavegotchi or not is not important. If you love baklava, come and join us.`, `No harsh conditions. Just obey the Discord rules. The most important thing is to love Baklava.`, `gokmens#1148<br>byuzguc#1109<br>kontkara#0725`, `<a href="https://twitter.com/Baklaavaguild" target="_blank">Twitter</a>`, `<a href="https://discord.gg/y5xdQGGV7H" target="_blank">Link</a>`],
					[`BlackPool’s Aapegotchis`, `<img src="/guild/blackpool-aapegotchis.png" alt="BlackPool’s Aapegotchis" />`, `Comfortably settled in the depths of District 15, the Aapegotchis are pacifists and very frenly. They love to collect Alchemicas together, help their frens from other Districts, spook the lickquidators away and plan on conquering the Moon one day. However, be careful not to bully them. Whether you're experienced or a newbie and feel seasoned to join and help grow the Aapegotchis, you are welcome to assemble under the BlackPool flag!`, `Wear any item from the Aastronaut set (more options to come)`, `Hazelstar#7954`, "", `<a href = "https://discord.gg/ddUyu4F4pp" target = "_blank">Link</a>`],
					[`Chigotchi Bulls`, `<img src="/guild/chigotchi-bulls.png" alt = "Chigotchi Bulls Guild" />`, `OG Aair Gotchi Guild. Ballers and Scholars only.`, `BALLER Requirements: At least 1 Aavegotchi with full Aair Gotchi wearable set; join <a href="https://discord.gg/zaBBnG4VhA" target="_blank">Chigotchi Bulls Discord</a> and submit wallet 0x address holding Aair Gotchi in the #baller-roster channel. SCHOLAR Requirements: Join <a href="https://discord.gg/f7C5dHrEsm" target="_blank">Game Theory Guild Discord</a> and intelligently complete <a href="https://gametheoryguild.typeform.com/applications" target="_blank">Game Theory Guild Scholar Application</a>`, `humbledbagger#1337`, `<a href = "https://twitter.com/chigotchibulls" target = "_blank">Twitter</a>`, `<a href = "https://discord.gg/P2MzYYrXUq" target = "_blank">Link</a>`],
					[`cRekto Club`, `<img src="/guild/crekto-club.png" alt = "cRekto Club" />`, `Friends of cRekto`, `Members need to polite, constructive, and have a Wraangler set`, `<a href = "https://twitter.com/Mingkuan100" target = "_blank">cRekto</a>`, `<a href = "https://t.me/cRekto_club" target = "_blank">Telegram</a>`, `<a href = "https://discord.gg/KAbuvbSA" target = "_blank">Link</a>`],
					[`Crypto Gaming United`, `<img src="/guild/CGU.png" alt="Crypto Gaming United" />`, `CGU is a huge, global DAO of gamers, crypto-lovers and frens! We’re super relaxed but well organised, because our goal is to help you explore the P2E world, earn crypto and grow our community. Join us, it will be fun!`, `If you love Aavegotchi, you’re already our fren! But please, wear a leather tunic.`, `@Salimalghoul on Telegram`, `<a href="https://twitter.com/cryptogamingutd" target="_blank">Twitter</a>`, `<a href="https://dsc.gg/cgu" target="_blank">Link</a>`],
					[`Cryptoticker.io GHST Guild`, `<img src="/guild/cryptoticker.png" alt = "Cryptoticker.io GHST Guild" />`, `Cryptoticker.io is participating in Aaavegotchi since the early days. Our Discord community is very active, strategic, german/ english, passionate & excited to collect Alchemica for all Guilde Members. Join us!`, `-`, `Dennis Weidner<br>dennis@cryptoticker.io`, `<a href = "https://cryptoticker.io/" target = "_blank">Website</a><br><a href = "https://twitter.com/CryptotickerIo" target = "_blank">Twitter</a>`, `<a href = "https://discord.gg/Aunznv94rY" target = "_blank">Link</a>`],
					[`DeFi Alpha Gaming Guild`, `<img src="/guild/defi-alpha-gaming-guild.png" alt="DeFi Alpha Gaming Guild" />`, `DeFi Alpha Gaming Guild fosters a safe and friendly community for DeFi users, NFT enthusiasts and play-to-earn gamers to hang, learn and have fun. Our aim is to provide an ongoing set of resources to help new entrants join this exciting space, in a supportive and safe environment.`, `Entry into our growing community is free and there are currently no wearable requirements to join our Guild at this stage.`, `buckley_gerry#9941 and Seb Monty#8764`, `<a href = "https://defialpha.medium.com/" target = "_blank">Medium</a><br><a href = "https://defialpha.io" target = "_blank">Website</a>`, `<a href = "https://discord.gg/zQGs3Dua" target = "_blank">Link</a>`],
					[`F8 Guild`, `<img src="/guild/f8-guild.png" alt = "F8 Guild" />`, `BlockChain gaming guild focused on P2E on Polygon`, `Be respectful and Follow in-game ToS`, `calcryptochad.eth`, `<a href = "https://f8guild.com/" target = "_blank">Website</a>`, `<a href = "https://discord.gg/xwvBxaBuQS" target = "_blank">Link</a>`],
					[`Frenzone`, `<img src="/guild/frenzone.png" alt = "Frenzone Guild" />`, `The Frenzone is a frenly guild made for frens who like aavegotchi! We're not too hardcore but also not too casual either. We are somewhere right in the middle! We welcome both veterans and newbies alike, feel free to ask questions when you are unsure about something! We have community calls every now and again in which we discuss upcoming events and current state of aavegotchi! So what are you waiting for? Join our discord and become one of the Frens today!`, `A Gotchi owning a pajama hat.`, `Remco#3748<br>3DSLAPS#0183`, `<a href = "https://twitter.com/Frenzone_" target = "_blank">Twitter</a>`, `<a href = "https://discord.gg/rdBUZZpDfx" target = "_blank">Link</a>`],
					[`Geistreich`, `<img src="/guild/geistreich.png" alt = "Geistreich Guild" />`, `Explorers of play2earn. Believers in cooperation. Smol in numbers. Big enthusiasm. Decentralized by nature.`, `Proof of enthusiasm (gotchi, parcel, wearable). Mohawk for communal channeling. Being decentralized we don´t focus on any specific district. Guild communication is in German, so (a little) knowledge would be good.`, `Janbao | GOTCHI GANG GERMANY#9485`, `<a href = "https://twitter.com/GotchisGermany" target = "_blank">Twitter</a>`, `<a href = "https://discord.gg/sSCWxJrgCE" target = "_blank">Link</a>`],
					[`Ghost Squad`, `<img src="/guild/ghost-squad.png" alt = "Ghost Squad Guild" />`, `Active community of Gotchiverse addicts, game developers and content creators.`, `Miner Helmet`, `Gotchinomics#4936`, `<a href = "https://twitter.com/gotchighstsquad" target = "_blank">Twitter</a>`, `<a href = "https://discord.gg/JQHx9u8mcV" target = "_blank">Link</a>`],
					[`gmDAO`, `<img src="/guild/gmdao.png" alt = "gmDAO" />`, `gmDAO is a quantitative gotchiverse hedge fund consisting of likeminded alchemica faarmers, aavegotchi petters and laandlords.`, `No requirement. Additional benefits within the gmDAO ecosystem as a gmembership holder.`, `nationalbank#6969`, `<a href = "https://twitter.com/gmdaogm" target = "_blank">Twitter</a><br><a href="https://y.at/%F0%9F%8F%A0%F0%9F%91%BB%F0%9F%9A%9C" target="_blank">Website</a>`, `<a href="https://discord.gg/TvetrDVDdg" target="_blank">Link</a>`],
					[`Gotchi FArmy Gang`, `<img src="/guild/gotchi-farmy-gang.png" alt = "Gotchi FArmy Gang" />`, `Our Community aims to work as a team in the Gotchiverse REALM to come ... Farming / Fighting / Scavenging and more ... that's where we are going Frens … One of the first GotchiGang having an NFT Guild Banner / A decentralised Treasury / A community mini-game on his way and moaaaar !`, `Love gotchis and Claim your NFT Gotchi FArmy Gang Banner`, `PG#0811<br>Be The Coin 🧩#4204`, `<a href = "https://twitter.com/TheGotchiFArmy" target = "_blank">Twitter</a><br><a href="https://www.twitch.tv/thegotchifarmy" target="_blank">Twitch</a>`, `<a href = "https://discord.gg/kMHQYn2dmG" target = "_blank">Link</a>`],
					[`Gotchi Maafia`, `<img src="/guild/gotchi-maafia.png" alt = "Gotchi Maafia" />`, `We are a degenerate organization who’s central activity is; arms dealings, expanding business, protection from liquidators, and the enforcement of illicit agreements in the Gotchiverse through the use of violence.`, `Owning a gotchi that is not afraid to do some dirty work in the REALM.`, `Goobz#9104`, `<a href="https://twitter.com/GotchiMaafia" target="_blank">Twitter</a>`, `<a href="https://discord.gg/E8ufNNTg5j" target="_blank">Link</a>`],
					[`Gotchi Riders`, `<img src="/guild/gotchi-riders.png" alt = "Gotchi Riders Guild" />`, `Gotchis ride together! We are a Gotchi biker gang! We travel far and wide, and beat up Lickquidators!`, `Every Gotchi can become a prospect by wearing a 'Biker Jacket'. The insignia of the Gotchi Riders!`, `CryptoGotchi#9089`, ``, `<a href = "https://discord.gg/uxFxBYJjF6" target = "_blank">Link</a>`],
					[`Keepers of the Realm`, `<img src="/guild/keepers-of-the-realm.png" alt = "Keeper of the Realm Guild">`, `We'll be watching.`, `Invite-only basis. The insignias of guild include Monocle, ROFL, and DAO Egg.`, `Cookiethief#3952`, ``, ``],
					[`LevX DAO`, `<img src="/guild/levx.png" alt = "Levx DAO Guild" />`, `A guild governed by a Morty who's deranged grandpa has absolute authority over.`, `Acquire "Ghost-In-Jars" role`, `bloob#7342`, `<a href="https://twitter.com/LevXDAOhGeez" target="_blank">Twitter</a>`, `<a href = "https://discord.gg/oh-geez" target = "_blank">Link</a>`],
					[`Los Mustachos`, `<img src="/guild/mustachos.png" alt = "Los Mustachos Guild" />`, `First and only spanglish guild for Mustacho aficionados. Decentralized`, `None, but a moustache earns you voting power. <br> 1 mustache= 1 vote<br>Sergey Beard, Goatee, Mutton Chops, Horseshoe & Beard of Wisdom also unlock 1 VP.`, `Fantasma#1777`, `<a href = "https://twitter.com/LosMustachos" target = "_blank">Twitter</a>`, `<a href = "https://discord.gg/bnAKfeczhu" target = "_blank">Link</a>`],
					[`Metaguild`, `<img src="/guild/metaguild.png" alt = "Metaguild">`, `Metaguild is a free-to-play guild. We want to coordinate our farming activities on both sides - aavegotchi and liquidators. Whether you have aavegochi or not is not important. As soon as the lending mechanism is implemented, we will start a scholarship program. Metaguild - the community of players, investors, and developers.  We believe in games where the community has a voice and authority to choose the future.`, `Adhere to the discord rules of Metaguild.`, `Sandro#7777<br>egor#1111<br>ABG#0022`, `<a href = "https://metaguild.com" target ="_blank">Website</a><br><a href = "https://twitter.com/metaguildcom" target = "_blank">Twitter</a>`, `<a href = "https://discord.com/invite/eXhmPHFCqD" target = "_blank">Link</a>`],
					[`MSG`, `<img src="/guild/msg.gif" alt = "MSG Guild" />`, `We are a Lickuidator and Aavegotchi coordination guild. Our focus is on mass coordination efforts amongst Gotchis and Lickuidators to maximize benefits for all. We also focus on expanding the overall Aavegotchi ecosystem by providing moar use case and rewards in GHST. We are here to work together as well as with other guidls to dominate the Reaalm. We are Legion. We are many. We do not forgive. We do not forget to pet. Expect us.`, `Dedication and Love. Our guild wearable is the Geisha Headpiece`, `🐙Musashi13#5579`, `<a href = "https://twitter.com/MSGgaang" target = "_blank">Twitter</a><br><a href = "https://www.twitch.tv/msg13gaang" target = "_blank">Twitch</a>`, `<a href = "https://discord.gg/XUASaaxu2Q" target = "_blank">Link</a>`],
					[`Mug'N'Buns`, `<img src="/guild/mugnbuns.png" alt="Mug'N'Buns' Guild" />`, `Your friendly neighborhood Mug cafe baased in the District 22. Mug owner ? Thirsty for lickquidations ? Join us !`, `Must own 1 Mug wearable`, `Cherry#0302`, `<a href = "https://twitter.com/MugnBunsGuild" target="_blank">Twitter</a>`,`<a href = "https://discord.gg/mugnbuns" target="_blank">Link</a>`],
					[`PLAYDOUGH`, `<img src="/guild/playdough.jpg" alt="Playdough Guild" />`, `We are a community of Play-to-earn Gamers. Our aim is to provide gamers opportunities to access and enjoy gaming metaverses. You are our partners in this never-ending adventure. Let's explore together!`, `P2E lovers and believers of the metaverse`, `MetaMan#7643`, `<a href="https://playdough.xyz/" target="_blank">Website</a><br><a href="https://twitter.com/PlayDoughTech" target="_blank">Twitter</a><br><a href="https://medium.com/@PlayDoughTech" target="_blank">Medium</a>`, `<a href="https://discord.gg/mgP6wGTag9" target="_blank">Link</a>`],
					[`Praawn Stars`,`<img src="/guild/praawn-stars.png" alt="Praawn Stars Guild" />`,`Praawn Stars is a guild for adult stars and filty praawns. Come join us in the Red Light District of the Gotchiverse, District 9.`,`Ownership of a District 9 Paarcel or a Gotchi with an Adult Star name (e.g. Asa Akira, Mia Khalifa, etc...)<br>Guild wearable TBD.`,`Chubs Magoo#2970<br>Onb3SkaAmD#9181`,`<a href="https://twitter.com/PraawnStars" target="_blank">Twitter</a>`,`<a href="https://discord.gg/AVvCuEAfMA" target="_blank">Link</a>`],
					[`Sushi Squad`, `<img src="/guild/sushi-squad.png" alt="Sushi Squad Guild" />`, `We are a guild that loves sushi and anime, and our goal is to open the first sushi restaurant of the Gotchiverse in the south side of District 7 later this year!`, `Any Sushi Chef wearable(s) or anime-inspired gotchi(s)`, `<a href="https://twitter.com/AvidAavegotchis" target="_blank">Avid#7777</a>`, `<a href="https://twitter.com/SushiSquaad" target="_blank">Twitter</a>`, `<a href="https://discord.gg/egpxGq6gZE" target="_blank">Link</a>`],
					[`SynthGuild`, `<img src="/guild/synthguild.png" alt="SynthGuild" />`, `SynthGuild are a totally bogus 80's retro themed guild. We are district 7 degens who work, chill and defend our guild from the buttmunching lickquidators!<p></p><b>SynthGuild Core Values</b><br><b>Good Vibes Zone</b> - We are a welcoming, vibrant community with a bodacious 80’s  vibe.<br><b>Spread the Alpha</b> - Play the game wisely and share your knowledge.<br><b>Profit Together</b> - Do your part to maximize the value of our common assets.<br><b>Empower Scholars</b> - Be an enabler to help scholars reach their goals.<p></p>We would be totally stoked if you joined our discord and became a D7 degen today! Peace out`, `Be able to work, rest and play!`, `FuzzCuzz#6071<br>Dunc Idaho#8289`, `<a href = "https://twitter.com/SynthGuild" target="_blank">Twitter</a>`, `<a href = "https://discord.gg/WFuxnxVRdf" target="_blank">Link</a>`],
					[`TEC Viva Gotchi Guild`, `<img src="/guild/Tec_Viva.png" alt="TEC Viva Gotchi Guild" />`, `TEC Viva Gotchi is built with the love, support, & admiration of everything Aavegotchi. Join our Guild for details and strategy on Game Play, Economics, Stats, and Technology to maximize our community success. This is a community-based initiative with motivations to establish a network of information exchange, scholarships, and a TEC Viva DAO of Aavegotchi gamers. Spanish channels available.`, `Comply with the Discord Rules of TEC Viva Gotchi Guild. No requirements to enter the guild at the moment. Additional roles shall grant rights to scholarships and bazaar listing promotions.`, `TecViva#7652`, `<a href="https://twitter.com/TECGotchi" target="_blank">Twitter</a><br><a href="https://t.me/Ban_Esteban" target="_blank">Telegram</a>`, `<a href="https://discord.gg/Bsn2RPaE" target="_blank">Link</a>`],
					[`TGC`, `<img src="/guild/tgc.jpg" alt="TGC Guild" />`, `A group of blockchain enthusiasts, researchers for long term and sustainable potential project that can bring profound impact to society, by changing the way people connect ~ collaborate ~ creates the better future.`, `Any beginner that hold at least 1 GHST are welcome to our growing TGC community`, `Boyboy#6449`, `<a href = "https://twitter.com/TGC_Guild" target = "_blank">Twitter</a>`, `<a href = "https://discord.gg/2p2vxQDj" target="_blank">Link</a>`],
					[`The Order of Portal Mages`, `<img src="/guild/the-order-of-portal-mages.jpg" alt = "The Order of Portal Mages Guild" />`, `The Order of Portal Mages are the Mages Guild of Aavegotchi! Within our sacred Tavern you will find the finest assembly of Wizards, Witches and Portal Mages in all the Realm. If a Wizard or Witch ye be, then enroll in our Mages College to learn the arts of wizardry & witchcraft! If you are a holder of the legendary Portal Mage gear, you will be welcomed into the Lordship of Portal Mages and a title will be bestowed. All new members are asked to show their POM (Proof of Mage) upon entering the Tavern, if they seek to join the Order.`, `Proof of Mage (can be found in discord)`, `<a href = "https://twitter.com/hillzcrypto" target = "_blank">@hillzcrypto</a>`, `<a href = "https://twitter.com/PortalMages" target = "_blank">Twitter</a>`, `<a href = "https://discord.gg/yHr4H6uVFC" target = "_blank">Link</a>`],
					[`vEmpire`, `<img src="/guild/vempire.png" alt="vEmpire Guild" />`, `Join the vEmpire GotchiGang and be part of something special. Not only will we revenue split profits with those that want to use our Gotchis, any profits from our side get redistributed to users that stake their tokens on our staking platform!`, `Play Hard, Earn Hard!`, `Remus_vEmpire#8574`, `<a href="https://twitter.com/vEmpireDDAO" target="_blank">Twitter</a>`, `<a href="https://discord.gg/UqgpqFueqZ" target="_blank">Link</a>`],
					[`WAGMI Warriors`, `<img src="/guild/WAGMI-warriors.png" alt = "WAGMI Warriors Guild" />`, `We are a wearable based guild for the Gotchiverse`, `You must have an Aavegotchi equipped with any of the wagie wearables; a wagie cap, headphones, or WGMI shirt`, `jarrod | aavegotchistats.com#9686`, `<a href = "https://twitter.com/WagmiWarriors" target = "_blank">Twitter</a>`, `<a href = "https://discord.gg/TNneBnhrM2" target = "_blank">Link</a>`]
				]
            }
        },		
		{
            tableName: "gotchiPresenceBonus",
            tableCaption: "",
            tableData: {
                headers: ["Wearable Rarity", "Bonus"],
                data: [
                    ["Common", "1.001X"],
					["Uncommon", "1.0014X"],
					["Rare", "1.0021X"],
					["Legendary", "1.007X"],
					["Mythical", "1.02X"],
					["Godlike", "1.56X"]
                ]
            }
        },
		{
            tableName: "wearableMultiplier",
            tableCaption: "",
            tableData: {
                headers: ["Wearable Rarity", "Bonus"],
                data: [
                    ["Common", "1X"],
					["Uncommon", "2X"],
					["Rare", "4X"],
					["Legendary", "8X"],
					["Mythical", "20X"],
					["Godlike", "200X"]
                ]
            }
        }
    ]
