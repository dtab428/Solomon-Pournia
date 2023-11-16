"use client";

import { title, subtitle } from "@/components/primitives";
import {
	GithubIcon,
	AmazonLogo,
	ITunesLogo,
	BarnesNoblesLogo,
	GooglePlayLogo,
} from "@/components/icons";
import { Image, Button, Card } from "@nextui-org/react";

import BookTable from "@/components/BookTable";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

const books = [
	{
		part: "II",
		page: "98",
		description:
			"God ordered Abraham to sacrifice his son Isaac as a test of his faith (Genesis, 22: 1-13). But in Islam, the belief is that it was Ishmael (Ismail) who God asked Abraham to sacrifice. (Qur’an 37: 101-105) Painting depicted by the great Dutch artist Rembrandt van Rijn, The Sacrifice of Isaac, 1635, is here masterfully copied by the Iranian carpet weaver, 41” by 58”.",
		imageURL: "@/public/images/references/image1.png",
	},
	{
		part: "I",
		page: "4",
		description:
			"An ongoing Hajj process in Mecca. The brown-black cube in the middle is, the Kaaba. Source: Wikipedia. Every Muslim, if capable, has to make a pilgrimage to Mecca at least once in his life.",
		imageURL: "@/public/images/references/image2.png",
	},
	{
		part: "I",
		page: "19",
		description:
			"An Aerial view of the Temple Mount, known by the Muslims as Haram al-Sharif. Source: www.myjewishlearning.com <br/><br/> Today the <strong>Temple Mount</strong>, a 35-acre walled compound within the Old City of Jerusalem, is the site of the Dome of the Rock to the north (with golden dome) and the Al-Aqsa Mosque to the south (with silvered dome). In the southwest stands the Western Wall—a remnant of the Second Temple and the holiest site in Judaism. The Israeli government holds the political sovereignty over the compound; however, the custodianship entrusted with an Islamic Council called the Waqf. <br /><br />According to the Bible King Solomon, built here the First Temple. A 1929 publication, “A Brief Guide to the Haram al-Sharif,” written by Waqf historian Aref al Aref, declares that the Mount’s “identity with the site of Solomon’s temple is beyond dispute,” a fact, which Yasser Arafat deputed when in 2000 he met the US President Bill Clinton and Ehud Barack the Israeli PM. Source: Joshua Hammer, April 2011, www.smithsonianmag.com/history, partially adapted.",
		imageURL: "@/public/images/references/image3.png",
	},
	{
		part: "IV",
		page: "436",
		description:
			"<strong>A Brief Guide to al-Haram al-Sharif</strong>, published in 1924 by the Supreme Muslim Council in Jerusalem, ironically when Haj Amin Muhammad al Husseini was the head of this Council and was the Grand Mufti of Jerusalem from 1922 to 1937, in which the Supreme Muslim Council confirms the truth of the Jewish people’s unique relationship to the consecrated Mount Temple dating back some three thousand years. <br /><br />This Guide officially recognizes the Jewish connection to the Temple Mount. On its fourth page the Historical Sketch of the Haram declares: “The site is one of the oldest in the world. Its sanctity dates from the earliest times. Its identity with the site of Solomon’s Temple is beyond dispute. “Describing the area of Solomon’s Stables, the Guide states: “It dates probably as far back as the construction of Solomon’s Temple.” <br /><br />Photo: Courtesy of Simon Wiesenthal Center, Los Angeles",
		imageURL: "@/public/images/references/image4.png",
	},
	{
		part: "I",
		page: "28",
		description:
			"During the 400-year occupation of the City of Jerusalem by the Ottoman Turks the City’s Jewish population grew steadily. <br /><br /> <strong>“A Survey of Palestine”</strong>, a booklet, which was prepared in December 1945 - January 1946, by the English Mandate for the information of the ANGLO-AMERICAN COMMITTEE OF INQUIRY. <br /><br />Its volume I, chapter VI, pages 148, and, tables 7b & 8b, the figures for Jerusalem’s population are shown. <br /><br /> Data for reference # 105 (Part I, page 28) were obtained from this “Booklet”, which is available from Internet",
		imageURL: "@/public/images/references/image5.png",
	},
	{
		part: "I",
		page: "19",
		description:
			"A clip from a video about the City of Jerusalem, showing a portion of the Western (Wailing) Wall around the old City. <strong>The Dome of the Rock</strong> and the <strong>Al-Aqsa Mosque</strong> are shown as well.",
		imageURL: "@/public/images/references/image6.png",
	},
	{
		part: "I",
		page: "14",
		description: "",
		imageURL: "@/public/images/references/image7.png",
	},
	{
		part: "I",
		page: "80-84",
		description:
			"The atrocities of radical Muslims against religious minorities for political or for other reasons are not always reported by the news agencies, newspapers or by the radio broadcastings. Reports, photographs, and even videos of beheading non-Muslims, videos of the destruction of non-Muslim houses of worships, and even of mass killings of the innocents including women and children, all by fanatic Muslims have been portrayed in Internet. A clip from a YouTube Video about persecution of the Christians in Egypt. <br /><br /> More about this subject on Part I, pages 80 to 84.",
		imageURL: "@/public/images/references/image8.png",
	},
	{
		part: "IV",
		page: "377",
		description:
			"<strong>Machpelah</strong>, the Tomb, known by the Muslims as “Ibrahimi Mosque” enclosed by a rectangular building from the Herodian era, is said to be the spot where Judaism’s patriarchs and matriarchs are buried, including Abraham and Sarah, Isaac and Rebecca, and Jacob and Leah. It is considered the second holiest site in Judaism, next to the Temple Mount in Jerusalem. Wikipedia Common",
		imageURL: "@/public/images/references/image9.png",
	},
	{
		part: "III",
		page: "221",
		description:
			"In 539 B.C.E., King Cyrus the Great of Persia conquered Babylon and terminated the Babylonian Empire. Cyrus was hailed by many of the Jewish leaders in captivity as the person designated to fulfill the biblical prophecy that the Jews would be liberated and allowed to return to the Promised Land. A postage stamp of the State of Israel testifying how the Jews all over the world honor the ancient Persian King, Cyrus.",
		imageURL: "@/public/images/references/image10.png",
	},
	{
		part: "II",
		page: "127",
		description:
			"A painting on the interior wall of the Wilshire Temple in Los Angeles, after sculptured panel inside the Arch of Titus in Rome. It depicts Titus's victory procession and spoils, which were taken from the Temple in Jerusalem after the city of Jerusalem was conquered and the Temple looted.",
		imageURL: "@/public/images/references/image11.png",
	},
	{
		part: "II",
		page: "124",
		description:
			"The Fortress of Masada: the mountaintop fortress, Masada was built by Herod on a 1,300 feet high rock in the Judaean desert overlooking the Dead Sea. The Jewish revolts against Rome from 63-73 CE ended here with the fall of a fortress after resisting the Roman army for longer than two years. It finally fell in 73 CE.. Allen: The above description should be next to the Fortress. Source: JewishVirtualLibrary.org",
		imageURL: "@/public/images/references/image12.png",
	},
	{
		part: "IV",
		page: "299",
		description:
			"<strong>Sir Moses Montefiore</strong>, 1784 – 1885, an English citizen had Jewish philanthropist. The Holy Land was in the center of his interests. He, being aware of the importance of education as an investment and as a foundation for a victorious future society, donated large sums of money to promote industry, education and health in the Ottoman Palestine. His activities were part of the broader program to enable the Jews of Palestine to become self-supporting, in the anticipation of the establishment of a Jewish homeland. Source: montefioredellaso.com",
		imageURL: "@/public/images/references/image13.png",
	},
	{
		part: "III",
		page: "155",
		description:
			"<strong>Martin Luther</strong>, a German theologian and monk, who with his <em><strong>95 Theses</strong></em>, protested several Church practices and doctrines. His uncontrollable words ignited religious reformers all across the Europe. On January 3, 1521, he was excommunicated from the Catholic Church. With that, the Pope helped galvanizing the development of the Lutheran church and the Protestant Reformation. When Jews did not accept his invitation to Lutheranism, he turned on them in fury. He published a pamphlet, “From the Jews and their lies'”, which may be termed the first work of the modern anti-Semitism and a giant step forward on the road to the Holocaust. Photo: Wikimedia",
		imageURL: "@/public/images/references/image14.png",
	},
	{
		part: "IV",
		page: "263",
		description:
			"In the <em>World War I</em>, for the first time the trench warfare was started, as did the widespread use of the machine gun and poisonous gas. More than 65 million men from 30 countries fought on the side of the <em>Central Powers</em> or the of <em>The Allies</em>. Photo: Wikipedia Common",
		imageURL: "@/public/images/references/image15.png",
	},
	{
		part: "IV",
		page: "269",
		description:
			"On November 2, 1917, the British Foreign Secretary <strong>Lord Arthur James Balfour</strong>, on behalf of the British Government, in the form of a letter to Lord Rothschild sent a declaration of support for the Jewish National Home in the Mandate Palestine, (which applied originally to the country on both sides of the river Jordan). Photo: Wikimedia. Part IV, page 269",
		imageURL: "@/public/images/references/image16.png",
	},
	{
		part: "IV",
		page: "269",
		description:
			"Chaim Weizmann. He was a science professor before becoming a Zionist leader. Later he was elected as the State of Israel’s first president. Source: Wikipedia",
		imageURL: "@/public/images/references/image17.png",
	},
	{
		part: "IV",
		page: "279",
		description:
			"<strong>A Recruitment Poster</strong>.  A Yiddish-language poster recruiting men for the all-volunteer Jewish Legion to serve under British rule in Ottoman-occupied Palestine. The Daughter of Zion (representing the Hebrew people): The text reads: &quot;Your Old New Land must have you! Join the Jewish regiment&quot; Source: Tablet Magazine 11-9-2012.",
		imageURL: "@/public/images/references/image18.png",
	},
	{
		part: "IV",
		page: "279",
		description: "The Jewish Legion Flag in WWI. Source: Wikipedia",
		imageURL: "@/public/images/references/image19.png",
	},
];

interface SectionProps {
	className?: string; // Optional className prop
}

const BookSection: React.FC<SectionProps> = ({ className }) => {
	return (
		<div className={`container mx-auto px-4 ${className}`}>
			<h4 className={(subtitle(), "text-center max-w-xl mx-auto")}>
				Readers who wish to experience this intriguing work can purchase this
				book at select bookstores, or online at the Apple iTunes store, Amazon,
				Google Play, or Barnes and Noble
			</h4>
			<div className="grid grid-cols-5 my-5 gap-4">
				<Button variant="solid" style={{ height: "6rem" }}>
					<AmazonLogo />
				</Button>
				<Button style={{ height: "6rem" }}>
					<ITunesLogo />
				</Button>
				<Button style={{ height: "6rem" }}>
					<BarnesNoblesLogo />
				</Button>
				<Button style={{ height: "6rem" }}>
					<GooglePlayLogo />
				</Button>
				<Button className="p-5" style={{ height: "6rem" }}>
					<Image
						src="/images/readerhouse-logo.png" // Path relative to the public directory
						alt="Description of the image"
						// Add other properties as needed, like width, height, etc.
					/>
				</Button>
			</div>
			<Swiper
				spaceBetween={32}
				slidesPerView={2}
				navigation // Enable navigation
				modules={[Navigation]} // Add the Navigation module
				autoHeight={true}
			>
				<SwiperSlide>
					<div>
						<h4 className="text-2xl mb-3 font-medium">
							Front cover of the book
						</h4>
						<Image
							src="/images/frontcoverpdf_orig.png"
							alt="Front cover of the book"
							// Add other properties as needed, like width, height, etc.
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div>
						<h4 className="text-2xl mb-3 font-medium">
							Rear cover of the book
						</h4>
						<Image
							src="/images/backcoverpdf_orig.png"
							alt="Rear cover of the book"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div>
						<h4 className="text-2xl mb-3 font-medium">
							The Book of the Quran with its German translation
						</h4>
						<Image
							src="/images/quran_orig.jpg"
							alt="The Book of the Quran with its German translation"
						/>
					</div>
				</SwiperSlide>
				{/* Add more SwiperSlides as needed */}
			</Swiper>
		</div>
	);
};

const PressRelease = () => {
	return (
		<div className="container mx-auto px-4 mt-4">
			<Card
				className="p-7 bg-slate-200 dark:bg-gray-950"
				isHoverable
				shadow="none"
				isPressable
			>
				<h3 className="text-3xl mb-3">Full press release text</h3>
				<p className="text-start">
					An interesting work that offers well-documented accuracy and
					authenticity of the quoted facts, rendering them beyond malicious
					interpretation. Author Solomon Pournia received his medical degree
					from the Düsseldorf Medical Academy in Germany. However, history and
					religion were the other two fields he pursued and researched alongside
					his main profession as a physician. Nonetheless, the factual
					information contained in this book, so relevant to the Middle East
					crises and the Arab-Israeli issue, has not been revealed and remained
					hidden from Muslims around the world and Westerners. The need for
					enlightenment and clarification could not stop him from announcing and
					revealing the truth. He hopes that this first release will spark a
					tremendous awakening that will lead to insight and the loss of
					bigotry. Pournia writes, “Not too long ago, my old-time peer from my
					years in German medical school brought me some souvenirs while
					visiting me in Los Angeles, including a volume of the Quran with its
					German translation. While reading, I came across the first pro-Zionist
					(or, historically defined, the first pro-Israelite) verse in the
					Quran, and this was very surprising to me. Soon, the index of this
					version of the Quran became a great help in searching through the
					ayahs and finding others dealing with the same issue. Continuing my
					targeted search, I discovered evidence confirming the gravity of the
					first ayah in relation to other ayahs, all of which I will explain in
					detail in this book.” Published by Fulton Books, Solomon
					Pournia&apos;s book tackles very sensitive topics and serves as an
					eye-opener for Muslim politicians, traditional clerics, Muslims in
					general, and interested Westerners.
				</p>
			</Card>
		</div>
	);
};

const Intro = () => {
	return (
		<div className="container mx-auto px-4 mt-4">
			<Card
				className="p-7 bg-slate-200 dark:bg-gray-950"
				isHoverable
				shadow="none"
				isPressable
			>
				<h3 className="text-3xl mb-3">Introduction</h3>
				<p className="text-start">
					After some 45 years apart, my friend and medical school peer visited
					me in Los Angeles. He and his wife brought us many gifts from Germany,
					including a volume of the Holy Quran in original Arabic along with its
					German translation. I take tremendous enjoyment reading the books in
					my library, and the Quran was now one of them. I soon realized that
					the Quran is unlike the Jewish Scripture, which describes historical
					events sequentially. And so, during my free time, I looked at pages of
					the Quran wherever I happened to open the book. One day, I came across
					Chapter 5, (sūra al-Mā'ida) verse (ayah) 21, in which Allah orders the
					Children of Israel to go to the promised land. It was amazing how
					openly and boldly the Quran demonstrated its pro-Zionist standpoint.
					After coming across more pro-Zionist ayahs, it was difficult for me to
					comprehend how the Muslim world has remained seemingly unaware of
					these commandments. So many skirmishes, so many wars, so much misery
					and loss of life because the Muslims are unaware of these
					commandments? Or, like everything else these days, are even the divine
					commandments politically smeared? Or, is it due to lack of information
					and education? Or, a combination of all? Still more questions popped
					up when continued research reaffirmed the intent of ayah 5:21. The
					process of fact finding on this subject took me on a long journey, a
					journey through 3,500 years of Jewish history. At first, this
					extensive research was unplanned, but soon it evolved into a planned
					venture. Fortunately, research and comprehensive reading were part of
					my education in the European school I attended, and these were habits
					I never gave up. Having completed my research, I decided to elucidate
					readers on these Qur'anic verses, which have never been brought to
					widespread public attention. The pro-Zionist verses in the Quran
					express that Jews should live in the land promised by Allah. The Quran
					attests to the Jews' affiliation with the land of Israel. Sadly, lack
					of proper knowledge has aided biased and radical clerics and
					politicians in their agenda of hiding or misinterpreting these verses
					to mislead lay Muslims. Understanding Islam and the Quran would be the
					prerequisites for following a cliché Muslim's frame of mind and the
					aim of his ventures. Assuming we can understand a ‘theoretical&apos;
					or ‘stereotypical&apos; Muslim&apos;s ideas and beliefs would be a
					slippery slope of assumptions not based on reality or evidence – we
					might study a school of thought, for example, typical religious
					beliefs of Muslims in a specific region or of a specific set. This is
					even more pertinent when Muslim extremists and fundamentalists are the
					players. For them, the Qur'anic laws and their interpretations or
					misinterpretations are crucial to their daily political conduct, as
					are the many statements and misinterpretations in the Hadith. It is
					fair to conclude that Islam is not merely a religion, but also acts as
					guidance for a Muslim's life and la vie quotidienne. Ever since the
					Medina Agreement of the 7th century, the religion of Islam and its
					accompanying politics have merged. Hence, in dealings with the
					Muslims, one cannot achieve a comprehensive understanding without
					giving some consideration to their religious mannerisms. For
					westerners, the Islamic Republic of Iran, the Islamic Republic of
					Pakistan, and Saudi Arabia's government, as theocratic regimes, modus
					operandi lack comprehensibility. Therefore, the need for information
					about Islam is essential. Without it, it would be not only difficult
					but nearly impossible to unravel related local and world affairs. Most
					westerners lack general knowledge on Islam, its emergence, its laws,
					its bylaws, and its convictions. In the western hemisphere, people
					generally only gain information about Islam through news media, which
					solely serve their own political agendas and espouse their own
					ideologies without revealing the whole truth. I was raised in a Muslim
					country. In school, I never missed the “Sharia hours”, which I was not
					obligated to attend but I did. Later, in Germany, I encountered
					Catholic students who, on campus or in the dormitories, tried to
					proselytize the students from Muslim countries. We spent many
					nighttime hours into the dawn discussing religion. Ironically, in many
					instances, I contributed and elaborated more on Islamic weltanschauung
					than the participating Muslim students. And, without being religious,
					religion has always been one of the topics I was most interested in,
					especially from a historical point of view. Soon after conceptualizing
					the first steps of the present manuscript, I realized what a difficult
					task it is, as I had to deal with a great number of historical facts,
					which at times occurred more than three millennia ago. I shared my
					plan with my relatives. My wife suggested I had a lot to read, and my
					son recommended that I study Marcus & Page, A Short Guide to Writing
					About History, which I greatly appreciated. It was a challenge and
					admittedly not an easy undertaking. Our story begins with two major
					empires, the Christian Byzantine, successor of the Roman Empire, and
					the Persian Empire, who were periodically involved in warfare for many
					decades. Then, in the early 7th century, a new force came to power in
					the Arabian Peninsula that soon developed into a major player: Islam
					rapidly burgeoned in an expeditious geographical expansion over
					neighboring regions ever since its inception in 623 CE. Within a
					relatively short period of time, it covered the entire Middle East,
					the south of Europe, and the north African continent. In comparison,
					it took the Roman Empire almost eleven centuries of effort to become a
					major power in the classical world, while just 70 years after the
					death of prophet Mohammad–around 646 AD– North Africa had already been
					almost completely Islamized. Hence, the developmental process of
					Islam, Sharia, the 633 CE Arab invasion of today's Syria and Iraq, and
					the eventually 638 CE conquest of Jerusalem bear relevance to our
					topic. Islam's policy of conversion was not only to introduce
					monotheism to the idolatrous Arab Bedouins, but also to impose its
					religious laws on non-Muslims, dictating all municipal and social
					decrees, and legislating and governing in an Islamic environment.
					Sharia law regulated not only the lives and society of Arabs, but also
					that of the non-Muslims in lands the Arab army conquered. In order to
					understand the Arab-Israeli conflict, it is necessary to have
					knowledge not only of the regional socio-political and geographical
					elements, but also of other factors, such as the Muslims' deeply
					rooted religious conviction, their cultural background, and the
					historically low degree of literacy amongst their population. For
					nearly two millennia, Jews have been living under Christian and Muslim
					domination. I have endeavored to set forth the long story of Jewish
					life under Islam and Christianity in a manner as dispassionate and
					detached as possible. The continuity of the narrative will be broken
					at times when the historical context renders it appropriate. The most
					logical method to present the narrative seemed to be a treatment in
					which Part I is totally dedicated to Islam, its development and laws,
					and the life of the Prophet, which is crucial to the emergence and
					evolution of the Islamic faith. The pillars of Islam are discussed as
					briefly as possible, with the emphasis laying on the Islamic laws
					affecting the relations between Muslims and non-Muslims. When needed,
					the opinions of opposing authors are interspersed with my research and
					commentary for further exploration of controversial issues. Part I is
					specifically about the support the Quran offers for the establishment
					of a Jewish Homeland, which the Jews call Eretz Yisrael. The validity
					of the translation and interpretation of the referenced Quranic verses
					are explored and scrutinized in length from the viewpoint of notable
					religious sages. In this Part, the Iranian scholar Shojaeddin Shafa
					(1918-2010) gives a great deal of new insight into Arab history and
					the interpretation of Islamic laws. His cited book, included in two
					volumes, is in Persian and has never been translated into any western
					language. Part II is dedicated to a section of Jewish history,
					starting with Abraham the Patriarch and ending in the year 135 CE,
					when Jews eventually lost their independence. Part III is about Jewish
					life in diaspora in various European and Muslim countries. Eventually,
					in the late 19th century, the miseries and deprivations in diaspora
					gave rise to Zionism and the desire to reestablish the Jewish state.
					In Part IV, we will analyze the regional political evolution–which
					still, after seven decades, involves new developments occurring on a
					daily basis–beginning with the early history and transiting to the
					reemergence of Zionism, World War I, the bitter Arab-Jewish relations
					in the Mandate Palestine, Jewish aliyah to the promised land, the
					reestablishment of the Jewish state, and eventually Islamic
					anti-Semitism. In Part V under the title “In Search of the Peace”
					suggestions and ideals will be prospectively elaborated. Statements
					and theories are referenced with biographical data. If a source is
					quoted once or twice, it is not listed in the bibliography but
					referenced in the foot- or endnotes.
				</p>
				<p className="mt-3">Solomon Pournia, MD</p>
				<p>Los Angeles, December 2019</p>
			</Card>
		</div>
	);
};

export default function Home() {
	return (
		<>
			<section className="flex flex-col items-center justify-center gap-5 pt-8 pb-5 md:pt-10 pb-8">
				<div className="inline-block max-w-3xl text-center justify-center">
					<h1 className={title()}>Introducing&nbsp;</h1>
					<h1 className={title({ color: "violet" })}>
						THE PROMISED LAND OF ISRAEL &nbsp;
					</h1>
					<br />
					<h1 className={title()}>
						An In-Depth Look at Zionism in the Quran and in Jewish History
					</h1>
				</div>

				<BookSection className="mt-3" />

				<PressRelease />

				<Intro />

				<BookTable bookContent={books} />

				<div className="flex gap-3">
					{/* <Link
                              isExternal
                              className={buttonStyles({
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
