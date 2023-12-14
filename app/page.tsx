"use client";

import React, { useRef, useState } from "react";

import { title, subtitle } from "@/components/primitives";
import {
	AmazonLogo,
	ITunesLogo,
	BarnesNoblesLogo,
	GooglePlayLogo,
	TopLeftSvgAccent,
	BottomRightSvgAccent,
	DiagonalArrow,
} from "@/components/icons";
import {
	Image,
	Card,
	Button,
	Link,
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
	Tooltip,
} from "@nextui-org/react";

import BookTable from "@/components/BookTable";

import Spotlight, { SpotlightCard } from "@/components/Spotlight";

import { bookImageReferences, bookPartDescriptions } from "@/app/data";

interface SectionProps {
	className?: string; // Optional className prop
}

declare module "react" {
	interface CSSProperties {
		[key: `--${string}`]: string | number;
	}
}

const BookSection: React.FC<SectionProps> = ({ className }) => {
	return (
		<div className={`container max-w-5xl mx-auto px-4 ${className}`}>
			<div className="marquee masked-edges">
				<div className="marquee__group">
					<Card
						className="p-4 bg-gray-100 dark:bg-gray-400 w-full h-full justify-center items-center"
						isHoverable
						shadow="none"
						isPressable
					>
						<AmazonLogo />
					</Card>
					<Card
						className="p-4 bg-gray-100 dark:bg-gray-400 w-full h-full justify-center items-center"
						isHoverable
						shadow="none"
						isPressable
					>
						<ITunesLogo />
					</Card>
					<Card
						className="p-4 bg-gray-100 dark:bg-gray-400 w-full h-full justify-center items-center"
						isHoverable
						shadow="none"
						isPressable
					>
						<BarnesNoblesLogo />
					</Card>
					<Card
						className="p-4 bg-gray-100 dark:bg-gray-400 w-full h-full justify-center items-center"
						isHoverable
						shadow="none"
						isPressable
					>
						<GooglePlayLogo />
					</Card>
					<Card
						className="p-4 bg-gray-100 dark:bg-gray-400 w-full h-full justify-center items-center"
						isHoverable
						shadow="none"
						isPressable
					>
						<Image
							src="/images/readerhouse-logo.png"
							alt="Description of the image"
						/>
					</Card>
				</div>

				<div aria-hidden="true" className="marquee__group">
					<Card
						className="p-4 bg-gray-100 dark:bg-gray-400 w-full h-full justify-center items-center"
						isHoverable
						shadow="none"
						isPressable
					>
						<AmazonLogo />
					</Card>
					<Card
						className="p-4 bg-gray-100 dark:bg-gray-400 w-full h-full justify-center items-center"
						isHoverable
						shadow="none"
						isPressable
					>
						<ITunesLogo />
					</Card>
					<Card
						className="p-4 bg-gray-100 dark:bg-gray-400 w-full h-full justify-center items-center"
						isHoverable
						shadow="none"
						isPressable
					>
						<BarnesNoblesLogo />
					</Card>
					<Card
						className="p-4 bg-gray-100 dark:bg-gray-400 w-full h-full justify-center items-center"
						isHoverable
						shadow="none"
						isPressable
					>
						<GooglePlayLogo />
					</Card>
					<Card
						className="p-4 bg-gray-100 dark:bg-gray-400 w-full h-full justify-center items-center"
						isHoverable
						shadow="none"
						isPressable
					>
						<Image
							src="/images/readerhouse-logo.png"
							alt="Description of the image"
						/>
					</Card>
				</div>
			</div>
			<div className="marquee masked-edges marquee--reverse mt-3">
				<div className="marquee__group">
					<Card
						className="p-4 bg-gray-100 dark:bg-gray-400 w-full h-full justify-center items-center"
						isHoverable
						shadow="none"
						isPressable
					>
						<AmazonLogo />
					</Card>
					<Card
						className="p-4 bg-gray-100 dark:bg-gray-400 w-full h-full justify-center items-center"
						isHoverable
						shadow="none"
						isPressable
					>
						<ITunesLogo />
					</Card>
					<Card
						className="p-4 bg-gray-100 dark:bg-gray-400 w-full h-full justify-center items-center"
						isHoverable
						shadow="none"
						isPressable
					>
						<BarnesNoblesLogo />
					</Card>
					<Card
						className="p-4 bg-gray-100 dark:bg-gray-400 w-full h-full justify-center items-center"
						isHoverable
						shadow="none"
						isPressable
					>
						<GooglePlayLogo />
					</Card>
					<Card
						className="p-4 bg-gray-100 dark:bg-gray-400 w-full h-full justify-center items-center"
						isHoverable
						shadow="none"
						isPressable
					>
						<Image
							src="/images/readerhouse-logo.png"
							alt="Description of the image"
						/>
					</Card>
				</div>

				<div aria-hidden="true" className="marquee__group">
					<Card
						className="p-4 bg-gray-100 dark:bg-gray-400 w-full h-full justify-center items-center"
						isHoverable
						shadow="none"
						isPressable
					>
						<AmazonLogo />
					</Card>
					<Card
						className="p-4 bg-gray-100 dark:bg-gray-400 w-full h-full justify-center items-center"
						isHoverable
						shadow="none"
						isPressable
					>
						<ITunesLogo />
					</Card>
					<Card
						className="p-4 bg-gray-100 dark:bg-gray-400 w-full h-full justify-center items-center"
						isHoverable
						shadow="none"
						isPressable
					>
						<BarnesNoblesLogo />
					</Card>
					<Card
						className="p-4 bg-gray-100 dark:bg-gray-400 w-full h-full justify-center items-center"
						isHoverable
						shadow="none"
						isPressable
					>
						<GooglePlayLogo />
					</Card>
					<Card
						className="p-4 bg-gray-100 dark:bg-gray-400 w-full h-full justify-center items-center"
						isHoverable
						shadow="none"
						isPressable
					>
						<Image
							src="/images/readerhouse-logo.png"
							alt="Description of the image"
						/>
					</Card>
				</div>
			</div>
		</div>
	);
};

const PressRelease = () => {
	const textRef = useRef(null);
	const text =
		"An interesting work that offers well-documented accuracy and authenticity of the quoted facts, rendering them beyond malicious interpretation. Author Solomon Pournia received his medical degree from the Düsseldorf Medical Academy in Germany. However, history and religion were the other two fields he pursued and researched alongside his main profession as a physician. Nonetheless, the factual information contained in this book, so relevant to the Middle East crises and the Arab-Israeli issue, has not been revealed and remained hidden from Muslims around the world and Westerners. The need for enlightenment and clarification could not stop him from announcing and revealing the truth. He hopes that this first release will spark a tremendous awakening that will lead to insight and the loss of bigotry. Pournia writes, “Not too long ago, my old-time peer from my years in German medical school brought me some souvenirs while visiting me in Los Angeles, including a volume of the Quran with its German translation. While reading, I came across the first pro-Zionist (or, historically defined, the first pro-Israelite) verse in the Quran, and this was very surprising to me. Soon, the index of this version of the Quran became a great help in searching through the ayahs and finding others dealing with the same issue. Continuing my targeted search, I discovered evidence confirming the gravity of the first ayah in relation to other ayahs, all of which I will explain in detail in this book.” Published by Fulton Books, Solomon Pournia&apos;s book tackles very sensitive topics and serves as an eye-opener for Muslim politicians, traditional clerics, Muslims in general, and interested Westerners.";

	// useEffect(() => {
	// 	// Target all spans (characters) within the ref element
	// 	gsap.to(textRef.current.children, {
	// 		color: "black", // Target color
	// 		duration: 0.0025, // Duration of the animation per character
	// 		stagger: 0.0025, // Delay between each character's animation
	// 		ease: "power1.inOut",
	// 	});
	// }, []);
	return (
		<>
			<h3 className={title()}>Full press release text</h3>
			{/* <p ref={textRef} className="mt-5"> */}
			<p className="mt-5">
				{/* {text.split("").map((char, index) => (
					<span key={index}>{char}</span>
				))} */}
				{text}
			</p>
		</>
	);
};
type IntroText = {
	introText: string;
	className?: string;
};
const introText =
	"...the Children of Israel to go to the promised land. It was amazing how openly and boldly the Quran demonstrated its pro-Zionist standpoint. After coming across more pro-Zionist ayahs, it was difficult for me to comprehend how the Muslim world has remained seemingly unaware of these commandments. So many skirmishes, so many wars, so much misery and loss of life because the Muslims are unaware of these commandments? Or, like everything else these days, are even the divine commandments politically smeared? Or, is it due to lack of information and education? Or, a combination of all? Still more questions popped up when continued research reaffirmed the intent of ayah 5:21. The process of fact finding on this subject took me on a long journey, a journey through 3,500 years of Jewish history. At first, this extensive research was unplanned, but soon it evolved into a planned venture. Fortunately, research and comprehensive reading were part of my education in the European school I attended, and these were habits I never gave up. Having completed my research, I decided to elucidate readers on these Qur'anic verses, which have never been brought to widespread public attention. The pro-Zionist verses in the Quran express that Jews should live in the land promised by Allah. The Quran attests to the Jews' affiliation with the land of Israel. Sadly, lack of proper knowledge has aided biased and radical clerics and politicians in their agenda of hiding or misinterpreting these verses to mislead lay Muslims. Understanding Islam and the Quran would be the prerequisites for following a cliché Muslim's frame of mind and the aim of his ventures. Assuming we can understand a ‘theoretical&apos; or ‘stereotypical&apos; Muslim&apos;s ideas and beliefs would be a slippery slope of assumptions not based on reality or evidence – we might study a school of thought, for example, typical religious beliefs of Muslims in a specific region or of a specific set. This is even more pertinent when Muslim extremists and fundamentalists are the players. For them, the Qur'anic laws and their interpretations or misinterpretations are crucial to their daily political conduct, as are the many statements and misinterpretations in the Hadith. It is fair to conclude that Islam is not merely a religion, but also acts as guidance for a Muslim's life and la vie quotidienne. Ever since the Medina Agreement of the 7th century, the religion of Islam and its accompanying politics have merged. Hence, in dealings with the Muslims, one cannot achieve a comprehensive understanding without giving some consideration to their religious mannerisms. For westerners, the Islamic Republic of Iran, the Islamic Republic of Pakistan, and Saudi Arabia's government, as theocratic regimes, modus operandi lack comprehensibility. Therefore, the need for information about Islam is essential. Without it, it would be not only difficult but nearly impossible to unravel related local and world affairs. Most westerners lack general knowledge on Islam, its emergence, its laws, its bylaws, and its convictions. In the western hemisphere, people generally only gain information about Islam through news media, which solely serve their own political agendas and espouse their own ideologies without revealing the whole truth. I was raised in a Muslim country. In school, I never missed the “Sharia hours”, which I was not obligated to attend but I did. Later, in Germany, I encountered Catholic students who, on campus or in the dormitories, tried to proselytize the students from Muslim countries. We spent many nighttime hours into the dawn discussing religion. Ironically, in many instances, I contributed and elaborated more on Islamic weltanschauung than the participating Muslim students. And, without being religious, religion has always been one of the topics I was most interested in, especially from a historical point of view. Soon after conceptualizing the first steps of the present manuscript, I realized what a difficult task it is, as I had to deal with a great number of historical facts, which at times occurred more than three millennia ago. I shared my plan with my relatives. My wife suggested I had a lot to read, and my son recommended that I study Marcus & Page, A Short Guide to Writing About History, which I greatly appreciated. It was a challenge and admittedly not an easy undertaking. Our story begins with two major empires, the Christian Byzantine, successor of the Roman Empire, and the Persian Empire, who were periodically involved in warfare for many decades. Then, in the early 7th century, a new force came to power in the Arabian Peninsula that soon developed into a major player: Islam rapidly burgeoned in an expeditious geographical expansion over neighboring regions ever since its inception in 623 CE. Within a relatively short period of time, it covered the entire Middle East, the south of Europe, and the north African continent. In comparison, it took the Roman Empire almost eleven centuries of effort to become a major power in the classical world, while just 70 years after the death of prophet Mohammad–around 646 AD– North Africa had already been almost completely Islamized. Hence, the developmental process of Islam, Sharia, the 633 CE Arab invasion of today's Syria and Iraq, and the eventually 638 CE conquest of Jerusalem bear relevance to our topic. Islam's policy of conversion was not only to introduce monotheism to the idolatrous Arab Bedouins, but also to impose its religious laws on non-Muslims, dictating all municipal and social decrees, and legislating and governing in an Islamic environment. Sharia law regulated not only the lives and society of Arabs, but also that of the non-Muslims in lands the Arab army conquered. In order to understand the Arab-Israeli conflict, it is necessary to have knowledge not only of the regional socio-political and geographical elements, but also of other factors, such as the Muslims' deeply rooted religious conviction, their cultural background, and the historically low degree of literacy amongst their population. For nearly two millennia, Jews have been living under Christian and Muslim domination. I have endeavored to set forth the long story of Jewish life under Islam and Christianity in a manner as dispassionate and detached as possible. The continuity of the narrative will be broken at times when the historical context renders it appropriate. The most logical method to present the narrative seemed to be a treatment in which Part I is totally dedicated to Islam, its development and laws, and the life of the Prophet, which is crucial to the emergence and evolution of the Islamic faith. The pillars of Islam are discussed as briefly as possible, with the emphasis laying on the Islamic laws affecting the relations between Muslims and non-Muslims. When needed, the opinions of opposing authors are interspersed with my research and commentary for further exploration of controversial issues. Part I is specifically about the support the Quran offers for the establishment of a Jewish Homeland, which the Jews call Eretz Yisrael. The validity of the translation and interpretation of the referenced Quranic verses are explored and scrutinized in length from the viewpoint of notable religious sages. In this Part, the Iranian scholar Shojaeddin Shafa (1918-2010) gives a great deal of new insight into Arab history and the interpretation of Islamic laws. His cited book, included in two volumes, is in Persian and has never been translated into any western language. Part II is dedicated to a section of Jewish history, starting with Abraham the Patriarch and ending in the year 135 CE, when Jews eventually lost their independence. Part III is about Jewish life in diaspora in various European and Muslim countries. Eventually, in the late 19th century, the miseries and deprivations in diaspora gave rise to Zionism and the desire to reestablish the Jewish state. In Part IV, we will analyze the regional political evolution–which still, after seven decades, involves new developments occurring on a daily basis–beginning with the early history and transiting to the reemergence of Zionism, World War I, the bitter Arab-Jewish relations in the Mandate Palestine, Jewish aliyah to the promised land, the reestablishment of the Jewish state, and eventually Islamic anti-Semitism. In Part V under the title “In Search of the Peace” suggestions and ideals will be prospectively elaborated. Statements and theories are referenced with biographical data. If a source is quoted once or twice, it is not listed in the bibliography but referenced in the foot- or endnotes.";

const Intro = ({ introText, className }: IntroText) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	return (
		<>
			<div className={`h-full ${className}`}>
				{/* <TopLeftSvgAccent /> */}
				<BottomRightSvgAccent />
				<div className="relative flex flex-wrap h-full">
					<div className="relative">
						<h3 className={title()}>Introduction</h3>
						<div className="gradient-after">
							<h3 className="text-xl font-medium mt-4">
								After some 45 years apart, my friend and medical school peer
								visited me in Los Angeles. He and his wife brought us many gifts
								from Germany, including a volume of the Holy Quran in original
								Arabic along with its German translation. I take tremendous
								enjoyment reading the books in my library, and the Quran was now
								one of them. I soon realized that the Quran is unlike the Jewish
								Scripture which describes historical events sequentially. And
								so, during my free time, I looked at pages of the Quran wherever
								I happened to open the book. One day, I came across Chapter 5,
								(sūra al-Mā'ida) verse (ayah) 21, in which Allah orders...
							</h3>
						</div>

						<div
							className="text-center"
							style={{
								position: "absolute",
								bottom: 0,
								left: 0,
								right: 0,
							}}
						>
							<Button
								color="primary"
								onPress={onOpen}
								size="lg"
								endContent={<DiagonalArrow />}
								className="w-full bg-teal-500/20 backdrop-blur-sm text-gray-800 dark:text-white text-xl font-medium"
							>
								Read More
							</Button>
						</div>
					</div>

					<div className="p-3 self-end">
						<p className="text-3xl font-medium mt-3 dahlia-font">
							Solomon Pournia, MD
						</p>
						<p className="text-xl">Los Angeles, December 2019</p>
					</div>
				</div>
			</div>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				size="5xl"
				scrollBehavior="inside"
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="pb-2">Introduction</ModalHeader>
							<ModalBody>
								{" "}
								<h3 className="text-xl font-medium">
									After some 45 years apart, my friend and medical school peer
									visited me in Los Angeles. He and his wife brought us many
									gifts from Germany, including a volume of the Holy Quran in
									original Arabic along with its German translation. I take
									tremendous enjoyment reading the books in my library, and the
									Quran was now one of them. I soon realized that the Quran is
									unlike the Jewish Scripture which describes historical events
									sequentially. And so, during my free time, I looked at pages
									of the Quran wherever I happened to open the book. One day, I
									came across Chapter 5, (sūra al-Mā'ida) verse (ayah) 21, in
									which Allah orders...
								</h3>
								{introText}
							</ModalBody>
							<ModalFooter>
								<Button color="primary" variant="ghost" onPress={onClose}>
									Close
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};

const editorPrologueText = () => {
	return (
		<>
			<p className="mt-3">
				Nevertheless, in 1947, after the Holocaust and murder of 6,000,000 Jews,
				a new wave of Jewish migration to Palestine started, and thus conflict
				between the Jews and Palestinian Arabs increased. In 1947 United Nations
				approved a new partition plan to divide Palestine into a Jewish and an
				Arab state. In this plan, Jerusalem was announced as an
				internationalized city. Again, the Jews accepted the plan, but the Arabs
				did not. As a result, a civil war between the Jews and Arabs of
				Palestine ensued and in reality, the mentioned plan could not be
				implemented. However, during this time, the Jews gained control of most
				of the territory ceded to them by the United Nations. The first wave of
				Palestinian refugees was the direct consequence of this conflict. A
				Middle Eastern dilemma which less than two decades later instigated the
				Six-Day-War in June 1967 followed by various Palestinian movements and
				riots; events and conflicts, whose backgrounds have been meticulously
				explained by the author of the present book.
			</p>
			<p className="mt-3">
				De facto the broad term of ‘Arabo-Jewish conflict’ meanwhile is parallel
				and partially linked to the ‘Israeli-Palestinian conflict’. This
				phenomenon is characterized by the problematics of the mentioned
				Palestinian refugees, the exacerbation of the Palestinian national
				desire for a state-building – initiated in the 1920s – as well as the
				emergence of groups of Palestinian activists in the late 1960s carrying
				out bombings, hostage-taking and hijackings. The present work gives the
				reader a comprehensive insight into the aforementioned subjects.
			</p>
			<p className="mt-3">
				One of the unresolved issues related to Jewish-Arab conflicts in history
				and present is the ‘status of Jerusalem’, which both sides Israelis and
				Palestinians claim as their capital. During all these conflicts starting
				already after World War I, Jerusalem has always been in the eye of the
				storm. For many people involved on both sides – and certainly also for
				some observers – the Middle East conflict has a strong religious
				component as ‎Jerusalem is a holy city for Jews, Christians, and
				Muslims. For the very same reason, numerous Jews do not want to give up
				the Temple Mount, on which the Temple stood until 70 CE, and its western
				outer wall – the so-called Wailing Wall – which today is the most
				important shrine of Judaism. For the Jews, there is ample historical
				evidence for this claim. They connect the promises of the Torah and the
				‎waiting for the Messiah with the return to the Holy Land and the
				conquest of Jerusalem in 1967-War. Based on the same ideology the
				settlement of holy sites such as Hebron in the West Bank would not have
				been possible to this extent without ‎religious motivation.‎
			</p>
			<p className="mt-3">
				Equally the Dome of the Rock, located in East Jerusalem, represents a
				special sanctuary for Muslims. This glorification, as we will learn from
				reading this book, obviously does not have any historical archaic roots
				in Islamic scriptures. The veneration of Jerusalem is rather a
				consequence of events in the 20th century. For ‎radical Muslims,
				however, the very existence of Israel in Jerusalem is a ‘problem’,
				because an area that once belonged to the ‎sphere of Islamic influence
				cannot be left to ‘infidels’.‎ The most important concern of the Muslim
				Palestinians is therefore Jerusalem as the capital of a separate state
				with the Temple Mount as its center. Part of this idea is based on the
				early Umayyad Caliphate tradition and according to the story narrated in
				Sura 17, verses 1-2 of the Quran. The account refers to the meeting of
				prophet Muhammad with Allah accompanied by the archangel Gabriel and
				prophet's ascension to heaven. This miracle – so the narrative –
				occurred at the location of today's Dome of the Rock. The author has
				dealt in detail with this almost ‎mythological event and its subsequent
				exegetic interpretations by some prominent Muslim scholars.
			</p>
			<p className="mt-3">
				Since there is not even agreement on the applicable decisive criteria on
				both sides, ‎respectively because each side postulates the principles
				most useful to them in the argument as authoritative, the long-lasting
				and tenacious conflict is inevitable. This crisis is fueled even further
				by ‎continuously creating new facts on the ground. The establishment of
				new Israeli settlements in the West Bank is often cited as an example.
				On the other hand, fears are expressed on the Israeli side that the
				overall significantly higher natality among Arabs would change the
				existing demographic situation in the long term and lead to an Arab
				preponderance. However, this is often contrasted with the equally high
				birth rate in the Jewish settlements in the West Bank. These and ‎other
				arguments make it difficult to reach a consensus on the establishment of
				two equal ‎states side by side.‎
			</p>
			<p className="mt-3">
				Even if the author of this book is not a historian by training, he
				offers the non-specialist reader a broad knowledge, particularly from
				the inside, about the Jewish-Arab conflicts and this is supported by the
				application of a comprehensible diction with numerous facts. The author
				accompanies and helps the reader to better grasp the background of the
				conflicts and the basis of the disputes between Israelis and Arabs
				respectively the Jews and the Muslims and to understand the historical
				background of this mutual resentment. Last but not least, the writer
				does not leave the reader with mere historical facts and data, in
				Chapter V he pleads for a possible peace or at least a peace solution
				based on the already existing common grounds, mutual understanding, and
				consolidative respect.
			</p>
			<p className="mt-3">
				In many aspects, such an optimistic viewpoint is not farfetched from
				reality as some of the recent political initiatives and international
				treaties in and with the Muslim world and the Middle East, in
				particular, would leave certainly some space to ponder on such a
				peaceful solution. In this manner, Egypt and Jordan were the first Arab
				countries which signed a peace treaty with Israel, in 1979 respectively
				in 1993. Furthermore, the Abraham Accords, signed on September 15, 2020,
				were two peace treaties between Israel and the United Arab Emirates on
				the one hand and between Israel and Bahrain on the other. Another event
				happened on October 23, 2020, as former US President Donald Trump
				announced that Israel and Sudan would normalize their relations.
				Subsequently, an agreement was signed on January 6, 2021, in Khartoum.
				On December 10, 2020, Israel and Morocco agreed to normalize their
				relations under an agreement negotiated with the help of the United
				States. Hence a joint declaration was signed on December 22, 2020, in
				Rabat. And finally, On January 30, 2022, Israeli President Isaac Herzog
				began the first-ever official visit to the UAE at the invitation of
				Crown Prince Sheikh Mohammed bin Zayed Al Nahyan. Thus, for the first
				time in the history of the Modern Middle East, the national anthem of
				Israel Hatikvah (Hebrew: ‘hope’) has been orchestrated in the prince’s
				palace in Abu Dhabi.
			</p>
			<p className="mt-3">
				Even though in none of the aforementioned promising agreements with the
				state of Israel Palestinian authorities had any share or contribution,
				nevertheless the recent events show that the Muslim world can and should
				not be characterized as a unified body with a monotonic strategy towards
				Israel and the Jews. The aforementioned initiatives would undoubtedly
				make a difference and probably could be also imperative for other Muslim
				populations including Palestinians.
			</p>
		</>
	);
};

const EditorPrologue = () => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	return (
		<>
			<TopLeftSvgAccent />
			{/* <BottomRightSvgAccent /> */}
			<div className="h-full">
				<div className="relative flex flex-wrap h-full">
					<h3 className={title()}>Editor's Prologue</h3>
					<div className="relative">
						<div className="gradient-after">
							<h3 className="text-xl font-medium mt-3">
								In 1917 Great Britain issued the Balfour Declaration supporting
								the establishment of a Jewish homeland in Palestine. The League
								of Nations confirmed a British mandate for Palestine after World
								War I – based on the British promise– to establish a ‘Jewish
								homeland’. In 1920 the first riots against Jewish immigration
								broke out in Jaffa in Palestine. Some decades later as Nazi
								power grew in Germany, Jewish immigration to Palestine
								increased, the Arabs of Palestine protested and began a revolt
								against British control. The British first proposed the Peel
								Plan (1937), which would have created a very small Jewish state
								and a much larger Arab state. The Jews accepted, but the Arabs
								refused. Shortly after the British issued the White Paper of
								1939, which limited Jewish immigration to Palestine...
							</h3>
						</div>

						<div
							className="text-center"
							style={{
								position: "absolute",
								bottom: 0,
								left: 0,
								right: 0,
							}}
						>
							<Button
								color="primary"
								onPress={onOpen}
								size="lg"
								endContent={<DiagonalArrow />}
								className="w-full bg-teal-500/20 backdrop-blur-sm text-gray-800 dark:text-white text-xl font-medium"
							>
								Read More
							</Button>
						</div>
					</div>
					<div className="p-3 self-end">
						<p className="text-3xl font-medium mt-3 dahlia-font">
							Farshid Delshad
						</p>
						<p className="text-xl">Los Angeles, Winter 2022</p>
					</div>
				</div>
			</div>

			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				size="5xl"
				scrollBehavior="inside"
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="pb-2">Editor's Prologue</ModalHeader>
							<ModalBody>
								<h3 className="text-xl font-medium">
									In 1917 Great Britain issued the Balfour Declaration
									supporting the establishment of a Jewish homeland in
									Palestine. The League of Nations confirmed a British mandate
									for Palestine after World War I – based on the British
									promise– to establish a ‘Jewish homeland’. In 1920 the first
									riots against Jewish immigration broke out in Jaffa in
									Palestine. Some decades later as Nazi power grew in Germany,
									Jewish immigration to Palestine increased, the Arabs of
									Palestine protested and began a revolt against British
									control. The British first proposed the Peel Plan (1937),
									which would have created a very small Jewish state and a much
									larger Arab state. The Jews accepted, but the Arabs refused.
									Shortly after the British issued the White Paper of 1939,
									which limited Jewish immigration to Palestine...
								</h3>
								{editorPrologueText()}
							</ModalBody>
							<ModalFooter>
								<Button color="primary" variant="ghost" onPress={onClose}>
									Close
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};

const synopsisText = () => {
	return (
		<>
			<p>
				What if billions of Muslims were to be made aware of the clearly
				‘pro-Zionist’ verses in the Quran, and were to alter their world view to
				welcome the Jews in their ancestral homeland? Not too long ago, my
				old-time peer from my years in German medical school brought me some
				souvenirs while visiting me in Los Angeles, including a volume of the
				Quran in its German translation. While reading, I came across the first
				pro-Zionist (or, historically defined, the first pro- Israelite) verse
				in the Quran, and this was very surprising to me. Soon, the index of
				this version of the Quran became a great help in searching through the
				ayahs and finding others dealing with the same issue. Continuing my
				targeted search, I discovered evidence confirming the gravity of the
				first ayah in relation to other ayahs, all of which I will explain in
				detail in this book.
			</p>
			<p>
				The significance of Chapter 5, verse 21 of the Quran (sura al-Mā’ida,
				ayah 21) is striking. It is a powerful command, as it is interpreted by
				the renowned 10th century Muslim exegete, Muhammad ibn Jarir al-Tabari
				(839-923 AD) as a command by Allah. Other high ranking Muslim exegetes
				such as Ibn Miskawayh (932-1030), Ibn Asakir (1106-1176 AD), Ibn
				al-Athir (1160- 1233 AD) and Ibn Khallikan (1211-1282 AD) passed on
				Al-Tabari's exegetical interpretation. The verse’s validity is
				strengthened by the existence of other, similar verses, while there is
				no Qur'anic verse that contradicts or abrogates any of the pro- Zionist
				verses. Additionally, there are theories1 projecting that a number of
				additional pro- Zionist verses once existed but were lost or
				deliberately omitted during the Uthmanic recension of the Quran; we will
				investigate this further later on. It is fair to assume, there are many
				learned yet biased clerics who are aware of the multiple pro-Zionist
				verses of the Quran, and yet they deliberately keep the Muslim people
				uninformed about this topic. The people remain largely unaware because
				most have not dealt with this book in a scholarly manner.
			</p>
			<p>
				Starting late in the 20th century, to compliment the cover up of the
				pro-Zionist Qur'anic verses, some dogmatic believers claimed the al-Aqsa
				mosque (Arab. al-Masjid al-Aqṣā) in Jerusalem to be the mosque referred
				to in the Quran when describing the Prophet's spiritual Night Journey.
				In reality, Muslim troops set foot in Jerusalem for the first time in
				638 CE, some five years after the passing of the Prophet, when there was
				no mosque yet in Jerusalem. In fact, the al-Aqsa mosque in Jerusalem was
				built in 710 CE, some seven decades after the death of the Prophet2.
				However, according to some narratives and objective Muslim sages, the
				al-Aqsa mosque referred to in the Quran at verse 17:01, known as
				al-Isra, is a mosque in Heaven3.
			</p>
			<p>
				Further, Jerusalem has only been politically mischaracterized as Islam’s
				third holy city since the onset of the Arab-Israeli conflict. Earlier
				than that, it had no holiness for the Muslim world. Jerusalem is not
				mentioned in the Quran even once, nor is Al-Quds mentioned (its Arabic
				denomination). During the centuries of occupation by Muslim countries
				(Hashemite Jordan and the Ottoman Empire), Jerusalem was just another
				city and a part of Southern Syria, as admitted by some Muslim Arab
				politicians4. The diaries of well-known tourists give testimony to the
				fact that Jerusalem was, for the Muslims, a forgotten city5. In 1948,
				after Israel's War of Independence when the Jordanian government
				occupied Jerusalem, the government failed to elect Jerusalem as their
				capital city for many years, and even moved the Supreme Muslim Council6
				from Jerusalem to Amman. There are numerous sources and materials
				covering the relative unimportance and/or unholiness of this city from
				the Muslim perspective.
			</p>
			<p>
				Ever since 1937, there have been multiple attempts to resolve the
				Arab-Jewish conflict to no avail. Liberal offers for peace were not only
				rejected but were not even countered by Palestinian leadership. The
				hidden religious aspect of the conflict has been generally neglected by
				the parties. Accordingly, the Muslim world is often subjected to
				provocation by zealous clerics and politicians who implement anti-Jewish
				propaganda, including the misinterpretation of the Qur'anic verses. We
				can only assume they have left the Muslims generally unaware of the
				Quran’s pro-Zionist passages. This book, with all its detailed
				historical facts and thorough investigative studies of the pro-Zionist
				Qur'anic verses, is a compendium new both to Muslim countries and
				western literature. It should serve as an eye-opener for Muslim
				politicians, traditional clerics, and Muslims in general, as well as to
				westerners with an interest in intertextual Qur’anic studies. The well-
				documented accuracy and authenticity of the quoted facts render them
				beyond malicious interpretation. Only the revolting minded politicians
				and biased clerics who deliberately follow their blasphemous acts will
				doubt the offered facts. All facts presented here may easily be verified
				via the Quran itself. Disregarding and misconstruing the pro-Zionist
				verses have thus far resulted not only in blasphemy, but also in the
				loss of thousands of lives for two or more generations. It is time to
				analyze and reveal these little-known verses of the Quran from an
				alternative viewpoint. The radical Islamic doctrine, known as “The
				Islamic supremacy doctrine”7, that demands that whatever territory was
				once controlled by Muslims be returned to Muslim rule, is illogical,
				colonialist, biased, and lacks any historic precedence. For the sake of
				peace and in favor of the people of the Middle East and all of humanity,
				we must put an end to the bloodshed and to the misery of the nations
				involved.
			</p>
			<p>
				The history of the Jews after the destruction of their Second Temple in
				70 CE is burdened with persecutions, oppressions, harassment,
				expulsions, and not seldom with personal attack, rape, and murder. The
				atrocities suffered by the Jews during the last centuries were not
				contained by any geographic or temporal limitation. As a result, about a
				century ago, the campaign to return to the ancestral homeland began,
				which later was historically dubbed as the Zionist movement. As a result
				of this movement, the State of Israel was reborn. All that the Jewish
				people want is to live in peace in their homeland, which enjoys
				legitimacy as such via Biblical, Qur'anic, historical, and
				archaeological evidence in addition to support by international laws and
				institutions. Israel was not so much created in response to the largest
				modern calamity suffered by the Jews (the Holocaust), but rather, the
				Holocaust was able to happen because the Jews did not have the safety
				and protection of their homeland, Israel.
			</p>

			<strong>References:</strong>

			<div>
				1 Cf. Ohlig, Karl-Heinz (2005): Wie der Koran wirklich entstand, in:
				Religion, forum 252, pp.62-63.
			</div>
			<div>
				2 Cf. Buchanan, Allen (2004). States, Nations, and Borders: The Ethics
				of Making Boundaries. Cambridge University Press.
			</div>
			<div>
				3 Cf. Frederick S. Colby (6 August 2008). Narrating Muhammad's Night
				Journey: Tracing the Development of the Ibn 'Abbas Ascension Discourse.
				SUNY Press. p. 15.
			</div>
			<div>
				4 Cf. F. E. Peters Jerusalem (1985): The Holy City in the Eyes of
				Chroniclers, Visitors, Pilgrims, and Prophets from the Days of Abraham
				to the Beginnings of Modern Times. Princeton University Press, pp.32 ff.
			</div>
			<div>5 Ibid, pp. 42-44</div>
			<div>
				6 Cf.
				https://www.encyclopedia.com/humanities/encyclopedias-almanacs-transcripts-and-maps/supreme-muslim-
				council
			</div>
			<div>7 Cf. www.wsj.com, Islamic supremacy, Jan 16,2009.</div>
		</>
	);
};
const Synopsis = () => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	return (
		<>
			<TopLeftSvgAccent />
			<BottomRightSvgAccent />
			<div className="h-full">
				<div className="relative flex flex-wrap h-full">
					<h3 className={title()}>Synopsis</h3>
					<div className="relative">
						<div className="gradient-after">
							<h3 className="text-xl font-medium mt-3">
								What would one say if the Holy Quran were found to contain
								beliefs consistent with Zionism? What if the Quran in its very
								philological content blesses and encourages the Jews to live in
								the land of Israel? What if billions of Muslims were to be made
								aware of the clearly ‘pro-Zionist’ verses in the Quran, and were
								to alter their world view to welcome the Jews in their ancestral
								homeland?
							</h3>
						</div>

						<div
							className="text-center"
							style={{
								position: "absolute",
								bottom: 0,
								left: 0,
								right: 0,
							}}
						>
							<Button
								color="primary"
								onPress={onOpen}
								size="lg"
								endContent={<DiagonalArrow />}
								className="w-full bg-teal-500/20 backdrop-blur-sm text-gray-800 dark:text-white text-xl font-medium"
							>
								Read More
							</Button>
						</div>
					</div>
				</div>
			</div>

			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				size="5xl"
				scrollBehavior="inside"
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="pb-2">Synopsis</ModalHeader>
							<ModalBody>
								<h3 className="text-xl font-medium">
									What would one say if the Holy Quran were found to contain
									beliefs consistent with Zionism? What if the Quran in its very
									philological content blesses and encourages the Jews to live
									in the land of Israel?
								</h3>
								{synopsisText()}
							</ModalBody>
							<ModalFooter>
								<Button color="primary" variant="ghost" onPress={onClose}>
									Close
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};

export default function Home() {
	const modalFrontCover = useDisclosure();
	const modalBackCover = useDisclosure();
	const modalQuran = useDisclosure();

	return (
		<>
			<section className="flex flex-col items-center justify-center gap-5 pt-8 pb-5 md:pt-10 pb-8">
				<div className="inline-block max-w-6xl justify-center text-center">
					<div>
						<span className="relative inline-flex px-3 py-2 rounded-3xl">
							<span className="relative z-10 text-xs font-medium">
								Introducing
							</span>
							<div className="highlight-bg"></div>
						</span>
					</div>
					<h1 className="inline-block gradient-text dahlia-font mx-auto">
						<span className="block text-5xl ms-12 ps-12 text-left">the</span>
						<span className="block lg:text-8xl text-6xl ms-6 -mt-5">
							promised land
						</span>
						{/* <span className="block lg:text-4xl text-4xl -mt-1">of</span> */}
						<span className="block text-8xl -mt-5">
							<span className="text-5xl">of</span>
							<span className="ms-2">Israel</span>
						</span>
					</h1>

					<h1 className="mt-3 lg:text-2xl text-md max-w-md mx-auto font-medium text-center lg:text-wrap-unset text-wrap-balance">
						An In-Depth Look at{" "}
						<Tooltip
							showArrow={true}
							content={
								<div className="max-w-sm">
									<p>
										<strong>Zi·on·ism</strong>
									</p>
									<p>
										a movement for (originally) the re-establishment and (now)
										the development and protection of a Jewish nation in what is
										now Israel. It was established as a political organization
										in 1897 under Theodor Herzl, and was later led by Chaim
										Weizmann.
									</p>
								</div>
							}
						>
							<span className="dahlia-font gradient-text cursor-pointer">
								Zionism
							</span>
						</Tooltip>{" "}
						in the Quran and in{" "}
						<Tooltip
							showArrow={true}
							content={
								<div className="max-w-sm">
									Jews originated from the Israelites and Hebrews of historical
									Israel and Judah, two related kingdoms that emerged in the
									Levant during the Iron Age.
								</div>
							}
						>
							<span className="dahlia-font gradient-text">Jewish History</span>
						</Tooltip>
					</h1>

					<h4 className="text-center max-w-2xl mx-auto mt-4 lg:text-xl text-base text-center">
						Readers who wish to experience this intriguing work can purchase
						this book at select bookstores, or online at{" "}
						<Link
							showAnchorIcon
							color="primary"
							href="https://books.apple.com/us/book/the-promised-land-of-israel/id6450221861"
							style={{ font: "inherit" }}
							target="_blank"
						>
							Apple iTunes Store
						</Link>
						•{" "}
						<Link
							showAnchorIcon
							color="primary"
							href="https://www.amazon.com/Promised-Land-Israel-Depth-Zionism/dp/B0C7SFS2HF"
							style={{ font: "inherit" }}
							target="_blank"
						>
							Amazon
						</Link>
						•{" "}
						<Link
							showAnchorIcon
							color="primary"
							href="https://play.google.com/store/books/details/Solomon_Pournia_THE_PROMISED_LAND_OF_ISRAEL?id=HvLEEAAAQBAJ"
							style={{ font: "inherit" }}
							target="_blank"
						>
							Google Play
						</Link>
						•{" "}
						<Link
							showAnchorIcon
							color="primary"
							href="https://play.google.com/store/books/details/Solomon_Pournia_THE_PROMISED_LAND_OF_ISRAEL?id=HvLEEAAAQBAJ"
							style={{ font: "inherit" }}
							target="_blank"
						>
							Barnes & Noble
						</Link>
					</h4>
				</div>

				<BookSection className="mt-3" />

				<section className="py-0 w-full relative">
					<div className="container mx-auto px-4 mt-5">
						<Spotlight className="max-w-2xl mx-auto grid gap-4 grid-cols-1 lg:grid-cols-12 items-start lg:max-w-none group">
							{/* Front cover of book */}
							<SpotlightCard className="lg:col-span-4 col-span-12 flex items-center justify-center">
								<div className="relative h-full bg-white dark:bg-gray-900 w-full h-full flex items-center justify-center flex-col flex-wrap rounded-[inherit] z-20 overflow-hidden">
									<h4 className="p-3 h-auto flex w-full items-center overflow-hidden color-inherit subpixel-antialiased rounded-b-large backdrop-blur backdrop-saturate-150 absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between text-lg font-medium">
										<div className="marquee">
											<div className="marquee__group dark:text-black">
												<div>Front cover of book</div>
												<div className="text-xl">✧</div>
												<div>Front cover of book</div>
												<div className="text-xl">✧</div>
												<div>Front cover of book</div>
											</div>

											<div
												aria-hidden="true"
												className="marquee__group dark:text-black"
											>
												<div>Front cover of book</div>
												<div className="text-xl">✧</div>
												<div>Front cover of book</div>
												<div className="text-xl">✧</div>
												<div>Front cover of book</div>
											</div>
										</div>
									</h4>
									<Button
										onPress={modalFrontCover.onOpen}
										style={{ height: "auto" }}
										className="px-0"
									>
										<div className="h-full w-full">
											<Image
												removeWrapper
												src="/images/frontcoverpdf_orig.png"
												alt="Front cover of the book"
												className="z-0 w-full h-full object-cover"
											/>
										</div>
									</Button>
								</div>
							</SpotlightCard>

							<Modal
								isOpen={modalFrontCover.isOpen}
								onOpenChange={modalFrontCover.onOpenChange}
							>
								<ModalContent>
									{(onClose) => (
										<>
											<ModalHeader className="flex flex-col gap-1">
												Front cover of the book
											</ModalHeader>
											<ModalBody>
												<div className="max-w-lg">
													<Image
														src="/images/frontcoverpdf_orig.png"
														alt="Front cover of the book"
													/>
												</div>
											</ModalBody>
											<ModalFooter>
												<Button
													color="primary"
													variant="ghost"
													onPress={onClose}
												>
													Close
												</Button>
											</ModalFooter>
										</>
									)}
								</ModalContent>
							</Modal>

							{/* Rear cover of book */}
							<SpotlightCard className="lg:col-span-4 col-span-12 flex items-center justify-center">
								<div className="relative h-full bg-white dark:bg-gray-900 w-full h-full flex items-center justify-center flex-col flex-wrap rounded-[inherit] z-20 overflow-hidden">
									<h4 className="p-3 h-auto flex w-full items-center overflow-hidden color-inherit subpixel-antialiased rounded-b-large backdrop-blur backdrop-saturate-150 absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between text-lg font-medium">
										<div className="marquee">
											<div className="marquee__group dark:text-black">
												<div>Rear cover of the book</div>
												<div className="text-xl">✧</div>
												<div>Rear cover of the book</div>
												<div className="text-xl">✧</div>
												<div>Rear cover of the book</div>
											</div>

											<div
												aria-hidden="true"
												className="marquee__group dark:text-black"
											>
												<div>Rear cover of the book</div>
												<div className="text-xl">✧</div>
												<div>Rear cover of the book</div>
												<div className="text-xl">✧</div>
												<div>Rear cover of the book</div>
											</div>
										</div>
									</h4>
									<Button
										onPress={modalBackCover.onOpen}
										style={{ height: "auto" }}
										className="px-0"
									>
										<div className="h-full w-full">
											<Image
												removeWrapper
												src="/images/backcoverpdf_orig.png"
												alt="Rear cover of the book"
												className="z-0 w-full h-full object-cover"
											/>
										</div>
									</Button>
								</div>
							</SpotlightCard>

							<Modal
								isOpen={modalBackCover.isOpen}
								onOpenChange={modalBackCover.onOpenChange}
							>
								<ModalContent>
									{(onClose) => (
										<>
											<ModalHeader className="flex flex-col gap-1">
												Rear cover of the book
											</ModalHeader>
											<ModalBody>
												<div className="max-w-lg">
													<Image
														src="/images/backcoverpdf_orig.png"
														alt="Rear cover of the book"
													/>
												</div>
											</ModalBody>
											<ModalFooter>
												<Button
													color="primary"
													variant="ghost"
													onPress={onClose}
												>
													Close
												</Button>
											</ModalFooter>
										</>
									)}
								</ModalContent>
							</Modal>

							{/* Quran German translated */}
							<SpotlightCard className="lg:col-span-4 col-span-12 flex items-center justify-center">
								<div className="relative h-full bg-white dark:bg-gray-900 w-full h-full flex items-center justify-center flex-col flex-wrap rounded-[inherit] z-20 overflow-hidden">
									<h4 className="p-3 h-auto flex w-full items-center overflow-hidden color-inherit subpixel-antialiased rounded-b-large backdrop-blur backdrop-saturate-150 absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between text-lg font-medium">
										<div className="marquee">
											<div className="marquee__group dark:text-black">
												<div>The Quran with its German translation</div>
												<div className="text-xl">✧</div>
												<div>The Quran with its German translation</div>
												<div className="text-xl">✧</div>
												<div>The Quran with its German translation</div>
											</div>

											<div
												aria-hidden="true"
												className="marquee__group dark:text-black"
											>
												<div>The Quran with its German translation</div>
												<div className="text-xl">✧</div>
												<div>The Quran with its German translation</div>
												<div className="text-xl">✧</div>
												<div>The Quran with its German translation</div>
											</div>
										</div>
									</h4>
									<Button
										onPress={modalQuran.onOpen}
										className="px-0 h-full w-full"
									>
										<div className="h-full w-full">
											<Image
												removeWrapper
												src="/images/quran_front.jpg"
												alt="Rear cover of the book"
												className="z-0 w-full h-full object-cover"
											/>
										</div>
									</Button>
								</div>
							</SpotlightCard>

							<Modal
								isOpen={modalQuran.isOpen}
								onOpenChange={modalQuran.onOpenChange}
							>
								<ModalContent>
									{(onClose) => (
										<>
											<ModalHeader className="flex flex-col gap-1">
												The Book of the Quran with its German translation
											</ModalHeader>
											<ModalBody>
												<div className="max-w-lg">
													<Image
														src="/images/quran_orig.jpg"
														alt="The Book of the Quran with its German translation"
													/>
													<p className="mt-3">
														I received this volume of the Quran as a gift from a
														friend and a classmate in medical school. It is
														written in Arabic, accompanied by a German
														translation. The edition was published by the
														Islamic Library in Germany in 1994. Given its
														origin, we have confidence in the accuracy of the
														translation from Arabic to German. The 33-page index
														is particularly impressive, serving as a valuable
														tool to locate specific subjects. The book, 'THE
														PROMISED LAND OF ISRAEL,' extensively references
														quotes from this Quranic source.
													</p>
												</div>
											</ModalBody>
											<ModalFooter>
												<Button
													color="primary"
													variant="ghost"
													onPress={onClose}
												>
													Close
												</Button>
											</ModalFooter>
										</>
									)}
								</ModalContent>
							</Modal>

							{/* Introduction */}
							<SpotlightCard noBg className="lg:col-span-6 col-span-12">
								<div className="relative h-full bg-white dark:bg-gray-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
									{/* Radial gradient */}
									<div
										className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
										aria-hidden="true"
									>
										<div className="absolute inset-0 translate-z-0 bg-teal-100/20 dark:bg-gray-800 rounded-full blur-[80px]"></div>
									</div>
									<div className="custom-gradient absolute inset-0"></div>
									<div className="flex flex-col h-full items-center">
										<div className="relative inline-flex">
											<div
												className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-custom-blue hidden"
												aria-hidden="true"
											></div>
										</div>
										{/* Text */}
										<div className="grow">
											<Intro introText={introText} />
										</div>
									</div>
								</div>
							</SpotlightCard>
							{/* Editor's Prologue */}
							<SpotlightCard noBg className="lg:col-span-6 col-span-12">
								<div className="relative h-full bg-white dark:bg-gray-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
									{/* Radial gradient */}
									<div
										className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
										aria-hidden="true"
									>
										<div className="absolute inset-0 translate-z-0 bg-teal-100/20 dark:bg-gray-800 rounded-full blur-[80px]"></div>
									</div>
									<div className="custom-gradient-2 absolute inset-0"></div>
									<div className="flex flex-col h-full items-center">
										{/* Image */}
										<div className="relative inline-flex">
											<div
												className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-custom-blue hidden"
												aria-hidden="true"
											></div>
											{/* <Image
                        className="inline-flex"
                        // src={}
                        width={200}
                        height={200}
                        alt="Card 03"
                      /> */}
										</div>
										{/* Text */}
										<div className="grow">
											<EditorPrologue />
										</div>
									</div>
								</div>
							</SpotlightCard>

							{/* Design Element */}
							<SpotlightCard className="lg:col-span-3 col-span-12 flex items-center justify-center">
								<div className="relative h-full bg-white dark:bg-gray-900 w-full h-full flex items-center justify-center flex-col flex-wrap rounded-[inherit] z-20 overflow-hidden">
									<div className="marquee" style={{ "--gap": "1rem" }}>
										<div className="marquee__group" style={{ "--gap": "1rem" }}>
											<div className="text-4xl dahlia-font gradient-text">
												✺
											</div>
											<div
												className="text-4xl dahlia-font gradient-text"
												style={{ "--colorA": "#14B8A6" }}
											>
												the promised land of Israel
											</div>
											<div className="text-4xl dahlia-font gradient-text">
												✺
											</div>
											<div
												className="text-4xl dahlia-font gradient-text"
												style={{ "--colorA": "#14B8A6" }}
											>
												the promised land of Israel
											</div>
											<div className="text-4xl dahlia-font gradient-text">
												✺
											</div>
											<div
												className="text-4xl dahlia-font gradient-text"
												style={{ "--colorA": "#14B8A6" }}
											>
												the promised land of Israel
											</div>
										</div>

										<div
											aria-hidden="true"
											className="marquee__group"
											style={{ "--gap": "1rem" }}
										>
											<div className="text-4xl dahlia-font gradient-text">
												✺
											</div>
											<div
												className="text-4xl dahlia-font gradient-text"
												style={{ "--colorA": "#14B8A6" }}
											>
												the promised land of Israel
											</div>
											<div className="text-4xl dahlia-font gradient-text">
												✺
											</div>
											<div
												className="text-4xl dahlia-font gradient-text"
												style={{ "--colorA": "#14B8A6" }}
											>
												the promised land of Israel
											</div>
											<div className="text-4xl dahlia-font gradient-text">
												✺
											</div>
											<div
												className="text-4xl dahlia-font gradient-text"
												style={{ "--colorA": "#14B8A6" }}
											>
												the promised land of Israel
											</div>
										</div>
									</div>
									<div
										className="marquee marquee--reverse mt-3"
										style={{ "--gap": "1rem" }}
									>
										<div className="marquee__group" style={{ "--gap": "1rem" }}>
											<div className="text-4xl dahlia-font gradient-text">
												✺
											</div>
											<div
												className="text-4xl dahlia-font gradient-text"
												style={{ "--colorA": "#14B8A6" }}
											>
												the promised land of Israel
											</div>
											<div className="text-4xl dahlia-font gradient-text">
												✺
											</div>
											<div
												className="text-4xl dahlia-font gradient-text"
												style={{ "--colorA": "#14B8A6" }}
											>
												the promised land of Israel
											</div>
											<div className="text-4xl dahlia-font gradient-text">
												✺
											</div>
											<div
												className="text-4xl dahlia-font gradient-text"
												style={{ "--colorA": "#14B8A6" }}
											>
												the promised land of Israel
											</div>
										</div>

										<div
											aria-hidden="true"
											className="marquee__group"
											style={{ "--gap": "1rem" }}
										>
											<div className="text-4xl dahlia-font gradient-text">
												✺
											</div>
											<div
												className="text-4xl dahlia-font gradient-text"
												style={{ "--colorA": "#14B8A6" }}
											>
												the promised land of Israel
											</div>
											<div className="text-4xl dahlia-font gradient-text">
												✺
											</div>
											<div
												className="text-4xl dahlia-font gradient-text"
												style={{ "--colorA": "#14B8A6" }}
											>
												the promised land of Israel
											</div>
											<div className="text-4xl dahlia-font gradient-text">
												✺
											</div>
											<div
												className="text-4xl dahlia-font gradient-text"
												style={{ "--colorA": "#14B8A6" }}
											>
												the promised land of Israel
											</div>
										</div>
									</div>
								</div>
							</SpotlightCard>

							{/* Synopsis */}
							<SpotlightCard noBg className="lg:col-span-9 col-span-12">
								<div className="relative h-full bg-white dark:bg-gray-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
									{/* Radial gradient */}
									<div
										className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
										aria-hidden="true"
									>
										<div className="absolute inset-0 translate-z-0 bg-teal-100/20 dark:bg-gray-800 rounded-full blur-[80px]"></div>
									</div>
									<div className="custom-gradient-3 absolute inset-0"></div>
									<div className="flex flex-col h-full items-center">
										{/* Image */}
										<div className="relative inline-flex">
											<div
												className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-custom-blue hidden"
												aria-hidden="true"
											></div>
										</div>
										{/* Text */}
										<div className="grow">
											<Synopsis />
										</div>
									</div>
								</div>
							</SpotlightCard>
							{/* Full Press Release */}
							<SpotlightCard noBg className="col-span-12">
								<div className="relative h-full bg-white dark:bg-gray-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
									{/* Radial gradient */}
									<div
										className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
										aria-hidden="true"
									>
										<div className="absolute inset-0 translate-z-0 bg-teal-100/20 dark:bg-gray-800 rounded-full blur-[80px]"></div>
									</div>
									<div className="flex flex-col h-full items-center">
										{/* Image */}
										<div className="relative inline-flex">
											<div
												className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-custom-blue hidden"
												aria-hidden="true"
											></div>
											{/* <Image
                        className="inline-flex"
                        // src={}
                        width={200}
                        height={200}
                        alt="Card 01"
                      /> */}
										</div>
										{/* Text */}
										<div className="grow">
											<PressRelease />
										</div>
									</div>
								</div>
							</SpotlightCard>
							{/* Image References */}
							<SpotlightCard noBg className="col-span-12">
								<div className="relative h-full bg-white dark:bg-gray-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
									{/* Radial gradient */}
									<div
										className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
										aria-hidden="true"
									>
										<div className="absolute inset-0 translate-z-0 bg-teal-100/20 dark:bg-gray-800 rounded-full blur-[80px]"></div>
									</div>
									<div className="flex flex-col h-full items-center">
										{/* Image */}
										<div className="relative inline-flex">
											<div
												className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-custom-blue hidden"
												aria-hidden="true"
											></div>
											{/* <Image
                        className="inline-flex"
                        // src={}
                        width={200}
                        height={200}
                        alt="Card 02"
                      /> */}
										</div>
										{/* Text */}
										<BookTable
											bookContent={bookImageReferences}
											bookPartDescriptions={bookPartDescriptions}
										/>
									</div>
								</div>
							</SpotlightCard>
						</Spotlight>
					</div>
				</section>

				<div className="flex gap-3">
					{/* <Link
                              isExternal
                              className={CardStyles({
                                   variant: "bordered",
                                   radius: "full",
                              })}
                              href={siteConfig.links.github}
                         >
                              <GithubIcon size={20} />
                              GitHub
                         </Link> */}
				</div>
			</section>
		</>
	);
}
