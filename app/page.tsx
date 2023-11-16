"use client";

import { title, subtitle } from "@/components/primitives";
import {
	GithubIcon,
	AmazonLogo,
	ITunesLogo,
	BarnesNoblesLogo,
	GooglePlayLogo,
} from "@/components/icons";
import { Image, Button } from "@nextui-org/react";

import BookTable from "@/components/BookTable";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css";

const bookContent = [
	// PartI
	{
		part: "PartI",
		page: "Page4",
		description:
			"An ongoing Hajj process in Mecca. The brown-black cube in the middle is the Kaaba. Every Muslim, if capable, has to make a pilgrimage to Mecca at least once in his &apos;life&apos;.",
		source: "Wikipedia",
		imageURL: "@/public/images/abe_orig.png",
	},
	{
		part: "PartI",
		page: "Page14",
		description:
			"The atrocities of radical Muslims against religious minorities for political or for other reasons are not always reported. Reports, photographs, and videos of beheading non-Muslims, destruction of non-Muslim houses of worships, and mass killings have been portrayed on the Internet. A clip from a YouTube video about persecution of the Christians in Egypt.",
		imageURL: "@/public/images/abe_orig.png",
	},
	{
		part: "PartI",
		page: "Page19",
		description:
			"An aerial view of the Temple Mount, known by Muslims as Haram al-Sharif. It is a 35-acre walled compound in the Old City of Jerusalem, site of the Dome of the Rock and the Al-Aqsa Mosque. The Israeli government holds political sovereignty, but custodianship is with an Islamic Council called the Waqf.",
		source: "www.myjewishlearning.com",
		imageURL: "@/public/images/abe_orig.png",
	},
	{
		part: "PartI",
		page: "Page28",
		description:
			"A Survey of Palestine, a booklet prepared by the English Mandate for the ANGLO-AMERICAN COMMITTEE OF INQUIRY, showing figures for Jerusalem&apos;s population.",
		source: "Internet",
		imageURL: "@/public/images/abe_orig.png",
	},

	// PartII
	{
		part: "PartII",
		page: "Page98",
		description:
			"God ordered Abraham to sacrifice his son Isaac as a test of his faith. Painting by Rembrandt van Rijn, &apos;The Sacrifice of Isaac&apos;, 1635, copied by an Iranian carpet weaver.",
		imageURL: "@/public/images/abe_orig.png",
	},
	{
		part: "PartII",
		page: "Page124",
		description:
			"The Fortress of Masada, a mountaintop fortress built by Herod, overlooking the Dead Sea. The Jewish revolts against Rome ended here after resisting the Roman army for more than two years.",
		source: "JewishVirtualLibrary.org",
		imageURL: "@/public/images/abe_orig.png",
	},
	{
		part: "PartII",
		page: "Page127",
		description:
			"A painting on the interior wall of the Wilshire Temple in Los Angeles, depicting Titus&apos;s victory procession with spoils from the Temple in Jerusalem.",
		photographer: "Allen",
		imageURL: "@/public/images/abe_orig.png",
	},

	// PartIII
	{
		part: "PartIII",
		page: "Page155",
		description:
			"Martin Luther, a German theologian and monk, initiated the Protestant Reformation. His work &apos;From the Jews and their lies&apos; is considered the first work of modern anti-Semitism.",
		source: "Wikimedia",
		imageURL: "@/public/images/abe_orig.png",
	},
	{
		part: "PartIII",
		page: "Page187",
		description:
			"Vladimir Jabotinsky&apos;s idea to establish a warrior force to fight for conquering Palestine.",
		source: "Wikipedia",
		imageURL: "@/public/images/abe_orig.png",
	},
	{
		part: "PartIII",
		page: "Page200",
		description:
			"Oranienburg and Sachsenhausen Concentration Camp history and details, including the treatment of prisoners and camp liberation.",
		photographer: "Allen",
		imageURL: "@/public/images/abe_orig.png",
	},
	{
		part: "PartIII",
		page: "Page201",
		description:
			"Survival of young children and teens in Sachsenhausen Concentration Camp, rescued by prisoners and liberated by American troops.",
		source: "Children of the Holocaust book cover",
		imageURL: "@/public/images/abe_orig.png",
	},
	{
		part: "PartIII",
		page: "Page212",
		description:
			"Henry Ford&apos;s anti-Semitic actions, including the spread of &apos;The Protocols of the Elders of Zion&apos; and ownership of &apos;The Dearborn Independent&apos;.",
		imageURL: "@/public/images/abe_orig.png",
	},
	{
		part: "PartIII",
		page: "Page238",
		description:
			"Habib Elghanayan, an Iranian Jewish industrialist and philanthropist, sentenced to death after the Islamic Revolution of 1979.",
		source: "Tehran newspaper Etela&apos;at",
		imageURL: "@/public/images/abe_orig.png",
	},
	{
		part: "PartIII",
		page: "Page242",
		description:
			"Mahmoud Abbas encourages the Palestinians to stop Jews from visiting the holy site and emphasizes the reward for those who spill blood for Allah and Jerusalem.",
		source: "YouTube video",
		imageURL: "@/public/images/abe_orig.png",
	},

	// PartIV
	{
		part: "PartIV",
		page: "Page269",
		description:
			"Chaim Weizmann, a science professor before becoming a Zionist leader and the first president of the State of Israel.",
		source: "Wikipedia",
		imageURL: "@/public/images/abe_orig.png",
	},
	{
		part: "PartIV",
		page: "Page279",
		description:
			"A Yiddish-language poster recruiting men for the all-volunteer Jewish Legion to serve under British rule in Ottoman-occupied Palestine.",
		source: "Tablet Magazine or military.wikia.com",
		imageURL: "@/public/images/abe_orig.png",
	},
	{
		part: "PartIV",
		page: "Page287",
		description:
			"The Armenian Genocide: Armenian men, women, and children were marched from Anatolia to Syria.",
		source: "thestar.com",
		imageURL: "@/public/images/abe_orig.png",
	},
	{
		part: "PartIV",
		page: "Page300",
		description:
			"Alfred Dreyfus, a French army Jewish captain, was tried as a spy and wrongfully sentenced to life in prison, influencing Theodor Herzl&apos;s Zionist views.",
		source: "World Jewish conference",
		imageURL: "@/public/images/abe_orig.png",
	},
	{
		part: "PartIV",
		page: "Page301",
		description:
			"Theodor Ze&apos;ev Herzl, founder of political Zionism, made two trips to the Mandate Palestine and was hailed as &apos;the anointed one&apos; by local Jews.",
		source: "JNF brochures or Wikimedia",
		imageURL: "@/public/images/abe_orig.png",
	},
	{
		part: "PartIV",
		page: "Page350",
		description:
			"The blue collecting box of the Jewish National Fund (J.N.F.), crucial for land purchase and development in Palestine.",
		imageURL: "@/public/images/abe_orig.png",
	},
	{
		part: "PartIV",
		page: "Page376",
		description:
			"Leopold Pilichowski&apos;s painting &apos;The Opening of the Hebrew University in Jerusalem&apos; showing Lord Balfour addressing the assembly.",
		source: "Wikimedia.com",
		imageURL: "@/public/images/abe_orig.png",
	},
	{
		part: "PartIV",
		page: "Page377",
		description:
			"The Baltimore News report on the massacre of women and children at Hebron.",
		source: "Documentary YouTube video",
		imageURL: "@/public/images/abe_orig.png",
	},
	{
		part: "PartIV",
		page: "Page396",
		description:
			"A man in the Jewish Brigade, a segment of the British Army fighting the Germans in Italy in 1944, with a rocket labeled &apos;Hitler&apos;s Gift&apos;.",
		source: "Wikipedia Common",
		imageURL: "@/public/images/abe_orig.png",
	},
	{
		part: "PartIV",
		page: "Page398",
		description:
			"The Palestine Post (later Jerusalem Post) report on the UN&apos;s General Assembly Resolution 181 approval, proposing a Jewish state, an Arab state, and Jerusalem as an international zone.",
		imageURL: "@/public/images/abe_orig.png",
	},
	{
		part: "PartIV",
		page: "Page401",
		description:
			"David Ben-Gurion declaring the Israeli Independence beneath a portrait of Theodor Herzl.",
		imageURL: "@/public/images/abe_orig.png",
	},
	{
		part: "PartIV",
		page: "Page414",
		description:
			"In February 1969, Golda Meir became the Prime Minister of Israel. Her announcement as prime minister emphasized Israel&apos;s readiness to discuss peace, but her territory-for-peace policy was ignored, leading to the Yom Kippur war.",
		source: "https://www.bbc.co.uk/programmes/p02lqqtp",
		imageURL: "@/public/images/abe_orig.png",
	},

	// PartV
	{
		part: "PartV",
		page: "Page469",
		description:
			"The Palestinian young generation&apos;s ideation about the &apos;peace with Israel&apos; in the future. Emphasizes the importance of cooperation for peace, highlighting the value of lives, Palestinian or Israeli.",
		imageURL: "@/public/images/abe_orig.png",
	},
];

interface BookSectionProps {
	className?: string; // Optional className prop
}

const BookSection: React.FC<BookSectionProps> = ({ className }) => {
	return (
		<div className={`container mx-auto px-4 ${className}`}>
			<h4 className={(subtitle(), "text-center max-w-xl mx-auto")}>
				Readers who wish to experience this intriguing work can purchase this
				book at select bookstores, or online at the Apple iTunes store, Amazon,
				Google Play, or Barnes and Noble
			</h4>
			<div className="grid grid-cols-5 my-5 gap-4">
				<Button variant="solid" style={{ height: "6rem" }}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						width="603"
						height="182"
						style={{ fill: "#221f1f" }}
						id="svg1936"
						viewBox="0 0 603 182"
					>
						<path
							d="m 374.00642,142.18404 c -34.99948,25.79739 -85.72909,39.56123 -129.40634,39.56123 -61.24255,0 -116.37656,-22.65135 -158.08757,-60.32496 -3.2771,-2.96252 -0.34083,-6.9999 3.59171,-4.69283 45.01431,26.19064 100.67269,41.94697 158.16623,41.94697 38.774689,0 81.4295,-8.02237 120.6499,-24.67006 5.92501,-2.51683 10.87999,3.88009 5.08607,8.17965"
							id="path8"
							style={{ fill: "#ff9900" }}
						/>
						<path
							d="m 388.55678,125.53635 c -4.45688,-5.71527 -29.57261,-2.70033 -40.84585,-1.36327 -3.43442,0.41947 -3.95874,-2.56925 -0.86517,-4.71905 20.00346,-14.07844 52.82696,-10.01483 56.65462,-5.2958 3.82764,4.74526 -0.99624,37.64741 -19.79373,53.35128 -2.88385,2.41195 -5.63662,1.12734 -4.35198,-2.07113 4.2209,-10.53917 13.68519,-34.16054 9.20211,-39.90203"
							id="path10"
							style={{ fill: "#ff9900" }}
						/>
						<path
							d="M 348.49744,20.06598 V 6.38079 c 0,-2.07113 1.57301,-3.46062 3.46062,-3.46062 h 61.26875 c 1.96628,0 3.53929,1.41571 3.53929,3.46062 v 11.71893 c -0.0262,1.96626 -1.67788,4.53551 -4.61418,8.59912 l -31.74859,45.32893 c 11.79759,-0.28837 24.25059,1.46814 34.94706,7.49802 2.41195,1.36327 3.06737,3.35575 3.25089,5.32203 V 99.4506 c 0,1.99248 -2.20222,4.32576 -4.5093,3.1198 -18.84992,-9.88376 -43.887,-10.95865 -64.72939,0.10487 -2.12356,1.15354 -4.35199,-1.15354 -4.35199,-3.14602 V 85.66054 c 0,-2.22843 0.0262,-6.02989 2.25463,-9.41186 l 36.78224,-52.74829 h -32.01076 c -1.96626,0 -3.53927,-1.38948 -3.53927,-3.43441"
							id="path12"
						/>
						<path
							d="m 124.99883,105.45424 h -18.64017 c -1.78273,-0.13107 -3.19845,-1.46813 -3.32954,-3.17224 V 6.61676 c 0,-1.91383 1.59923,-3.43442 3.59171,-3.43442 h 17.38176 c 1.80898,0.0786 3.25089,1.46814 3.38199,3.19845 v 12.50545 h 0.34082 c 4.53551,-12.08598 13.05597,-17.7226 24.53896,-17.7226 11.66649,0 18.95477,5.63662 24.19814,17.7226 4.5093,-12.08598 14.76008,-17.7226 25.74495,-17.7226 7.81262,0 16.35931,3.22467 21.57646,10.46052 5.89879,8.04857 4.69281,19.74128 4.69281,29.99208 l -0.0262,60.37739 c 0,1.91383 -1.59923,3.46061 -3.59171,3.46061 h -18.61397 c -1.86138,-0.13107 -3.35574,-1.62543 -3.35574,-3.46061 V 51.29025 c 0,-4.03739 0.36702,-14.10466 -0.52434,-17.93233 -1.38949,-6.42311 -5.55797,-8.23209 -10.95865,-8.23209 -4.5093,0 -9.22833,3.01494 -11.14216,7.83885 -1.91383,4.8239 -1.73031,12.89867 -1.73031,18.32557 v 50.70338 c 0,1.91383 -1.59923,3.46061 -3.59171,3.46061 h -18.61395 c -1.88761,-0.13107 -3.35576,-1.62543 -3.35576,-3.46061 L 152.946,51.29025 c 0,-10.67025 1.75651,-26.37415 -11.48298,-26.37415 -13.39682,0 -12.87248,15.31063 -12.87248,26.37415 v 50.70338 c 0,1.91383 -1.59923,3.46061 -3.59171,3.46061"
							id="path14"
						/>
						<path
							d="m 469.51439,1.16364 c 27.65877,0 42.62858,23.75246 42.62858,53.95427 0,29.17934 -16.54284,52.32881 -42.62858,52.32881 -27.16066,0 -41.94697,-23.75246 -41.94697,-53.35127 0,-29.78234 14.96983,-52.93181 41.94697,-52.93181 m 0.15729,19.53156 c -13.73761,0 -14.60278,18.71881 -14.60278,30.38532 0,11.69271 -0.18352,36.65114 14.44549,36.65114 14.44548,0 15.12712,-20.13452 15.12712,-32.40403 0,-8.07477 -0.34082,-17.72257 -2.779,-25.3779 -2.09735,-6.65906 -6.26581,-9.25453 -12.19083,-9.25453"
							id="path16"
						/>
						<path
							d="M 548.00762,105.45424 H 529.4461 c -1.86141,-0.13107 -3.35577,-1.62543 -3.35577,-3.46061 l -0.0262,-95.69149 c 0.1573,-1.75653 1.7041,-3.1198 3.59171,-3.1198 h 17.27691 c 1.62543,0.0786 2.96249,1.17976 3.32954,2.67412 v 14.62899 h 0.3408 c 5.21717,-13.0822 12.53165,-19.32181 25.40412,-19.32181 8.36317,0 16.51662,3.01494 21.75999,11.27324 4.87633,7.65532 4.87633,20.5278 4.87633,29.78233 v 60.22011 c -0.20973,1.67786 -1.75653,3.01492 -3.59169,3.01492 h -18.69262 c -1.70411,-0.13107 -3.11982,-1.38948 -3.30332,-3.01492 V 50.47753 c 0,-10.46052 1.20597,-25.77117 -11.66651,-25.77117 -4.5355,0 -8.70399,3.04117 -10.77512,7.65532 -2.62167,5.84637 -2.96249,11.66651 -2.96249,18.11585 v 51.5161 c -0.0262,1.91383 -1.65166,3.46061 -3.64414,3.46061"
							id="path18"
						/>
						<use
							xlinkHref="#path30"
							transform="translate(244.36719)"
							id="use28"
						/>
						<path
							d="M 55.288261,59.75829 V 55.7209 c -13.475471,0 -27.711211,2.88385 -27.711211,18.77125 0,8.04857 4.16847,13.50169 11.32567,13.50169 5.24337,0 9.93618,-3.22467 12.8987,-8.46805 3.670341,-6.44935 3.486841,-12.50544 3.486841,-19.7675 m 18.79747,45.43378 c -1.23219,1.10111 -3.01495,1.17976 -4.40444,0.4457 -6.18716,-5.1385 -7.28828,-7.52423 -10.69647,-12.42678 -10.224571,10.4343 -17.460401,13.55409 -30.726141,13.55409 -15.67768,0 -27.89471,-9.67401 -27.89471,-29.04824 0,-15.12713 8.20587,-25.43035 19.87236,-30.46398 10.1197,-4.45688 24.25058,-5.24337 35.051931,-6.47556 v -2.41195 c 0,-4.43066 0.34082,-9.67403 -2.25465,-13.50167 -2.280881,-3.43442 -6.632861,-4.85013 -10.460531,-4.85013 -7.10475,0 -13.44924,3.64414 -14.99603,11.19459 -0.31461,1.67789 -1.5468,3.32955 -3.22467,3.4082 L 6.26276,32.67628 C 4.74218,32.33548 3.0643,31.10327 3.48377,28.76999 7.65225,6.85271 27.44596,0.24605 45.16856,0.24605 c 9.071011,0 20.921021,2.41195 28.078221,9.28076 9.07104,8.46804 8.20587,19.7675 8.20587,32.06321 v 29.04826 c 0,8.73022 3.61794,12.55786 7.02613,17.27691 1.20597,1.67786 1.46814,3.69656 -0.05244,4.95497 -3.80144,3.17225 -10.56538,9.07104 -14.28819,12.37436 l -0.05242,-0.0525"
							id="path30"
						/>
					</svg>
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
			<h3 className={subtitle()}>Full press release text</h3>
			<p>
				An interesting work that offers well-documented accuracy and
				authenticity of the quoted facts, rendering them beyond malicious
				interpretation. Author Solomon Pournia received his medical degree from
				the Düsseldorf Medical Academy in Germany. However, history and religion
				were the other two fields he pursued and researched alongside his main
				profession as a physician. Nonetheless, the factual information
				contained in this book, so relevant to the Middle East crises and the
				Arab-Israeli issue, has not been revealed and remained hidden from
				Muslims around the world and Westerners. The need for enlightenment and
				clarification could not stop him from announcing and revealing the
				truth. He hopes that this first release will spark a tremendous
				awakening that will lead to insight and the loss of bigotry. Pournia
				writes, “Not too long ago, my old-time peer from my years in German
				medical school brought me some souvenirs while visiting me in Los
				Angeles, including a volume of the Quran with its German translation.
				While reading, I came across the first pro-Zionist (or, historically
				defined, the first pro-Israelite) verse in the Quran, and this was very
				surprising to me. Soon, the index of this version of the Quran became a
				great help in searching through the ayahs and finding others dealing
				with the same issue. Continuing my targeted search, I discovered
				evidence confirming the gravity of the first ayah in relation to other
				ayahs, all of which I will explain in detail in this book.” Published by
				Fulton Books, Solomon Pournia&apos;s book tackles very sensitive topics
				and serves as an eye-opener for Muslim politicians, traditional clerics,
				Muslims in general, and interested Westerners.
			</p>
		</div>
	);
};

const Intro = () => {
	return (
		<div className="container mx-auto px-4 mt-4">
			<h3 className={subtitle()}>Introduction</h3>
			<p>
				After some 45 years apart, my friend and medical school peer visited me
				in Los Angeles. He and his wife brought us many gifts from Germany,
				including a volume of the Holy Quran in original Arabic along with its
				German translation. I take tremendous enjoyment reading the books in my
				library, and the Quran was now one of them. I soon realized that the
				Quran is unlike the Jewish Scripture, which describes historical events
				sequentially. And so, during my free time, I looked at pages of the
				Quran wherever I happened to open the book. One day, I came across
				Chapter 5, (sūra al-Mā'ida) verse (ayah) 21, in which Allah orders the
				Children of Israel to go to the promised land. It was amazing how openly
				and boldly the Quran demonstrated its pro-Zionist standpoint. After
				coming across more pro-Zionist ayahs, it was difficult for me to
				comprehend how the Muslim world has remained seemingly unaware of these
				commandments. So many skirmishes, so many wars, so much misery and loss
				of life because the Muslims are unaware of these commandments? Or, like
				everything else these days, are even the divine commandments politically
				smeared? Or, is it due to lack of information and education? Or, a
				combination of all? Still more questions popped up when continued
				research reaffirmed the intent of ayah 5:21. The process of fact finding
				on this subject took me on a long journey, a journey through 3,500 years
				of Jewish history. At first, this extensive research was unplanned, but
				soon it evolved into a planned venture. Fortunately, research and
				comprehensive reading were part of my education in the European school I
				attended, and these were habits I never gave up. Having completed my
				research, I decided to elucidate readers on these Qur'anic verses, which
				have never been brought to widespread public attention. The pro-Zionist
				verses in the Quran express that Jews should live in the land promised
				by Allah. The Quran attests to the Jews' affiliation with the land of
				Israel. Sadly, lack of proper knowledge has aided biased and radical
				clerics and politicians in their agenda of hiding or misinterpreting
				these verses to mislead lay Muslims. Understanding Islam and the Quran
				would be the prerequisites for following a cliché Muslim's frame of mind
				and the aim of his ventures. Assuming we can understand a
				‘theoretical&apos; or ‘stereotypical&apos; Muslim&apos;s ideas and
				beliefs would be a slippery slope of assumptions not based on reality or
				evidence – we might study a school of thought, for example, typical
				religious beliefs of Muslims in a specific region or of a specific set.
				This is even more pertinent when Muslim extremists and fundamentalists
				are the players. For them, the Qur'anic laws and their interpretations
				or misinterpretations are crucial to their daily political conduct, as
				are the many statements and misinterpretations in the Hadith. It is fair
				to conclude that Islam is not merely a religion, but also acts as
				guidance for a Muslim's life and la vie quotidienne. Ever since the
				Medina Agreement of the 7th century, the religion of Islam and its
				accompanying politics have merged. Hence, in dealings with the Muslims,
				one cannot achieve a comprehensive understanding without giving some
				consideration to their religious mannerisms. For westerners, the Islamic
				Republic of Iran, the Islamic Republic of Pakistan, and Saudi Arabia's
				government, as theocratic regimes, modus operandi lack
				comprehensibility. Therefore, the need for information about Islam is
				essential. Without it, it would be not only difficult but nearly
				impossible to unravel related local and world affairs. Most westerners
				lack general knowledge on Islam, its emergence, its laws, its bylaws,
				and its convictions. In the western hemisphere, people generally only
				gain information about Islam through news media, which solely serve
				their own political agendas and espouse their own ideologies without
				revealing the whole truth. I was raised in a Muslim country. In school,
				I never missed the “Sharia hours”, which I was not obligated to attend
				but I did. Later, in Germany, I encountered Catholic students who, on
				campus or in the dormitories, tried to proselytize the students from
				Muslim countries. We spent many nighttime hours into the dawn discussing
				religion. Ironically, in many instances, I contributed and elaborated
				more on Islamic weltanschauung than the participating Muslim students.
				And, without being religious, religion has always been one of the topics
				I was most interested in, especially from a historical point of view.
				Soon after conceptualizing the first steps of the present manuscript, I
				realized what a difficult task it is, as I had to deal with a great
				number of historical facts, which at times occurred more than three
				millennia ago. I shared my plan with my relatives. My wife suggested I
				had a lot to read, and my son recommended that I study Marcus & Page, A
				Short Guide to Writing About History, which I greatly appreciated. It
				was a challenge and admittedly not an easy undertaking. Our story begins
				with two major empires, the Christian Byzantine, successor of the Roman
				Empire, and the Persian Empire, who were periodically involved in
				warfare for many decades. Then, in the early 7th century, a new force
				came to power in the Arabian Peninsula that soon developed into a major
				player: Islam rapidly burgeoned in an expeditious geographical expansion
				over neighboring regions ever since its inception in 623 CE. Within a
				relatively short period of time, it covered the entire Middle East, the
				south of Europe, and the north African continent. In comparison, it took
				the Roman Empire almost eleven centuries of effort to become a major
				power in the classical world, while just 70 years after the death of
				prophet Mohammad–around 646 AD– North Africa had already been almost
				completely Islamized. Hence, the developmental process of Islam, Sharia,
				the 633 CE Arab invasion of today's Syria and Iraq, and the eventually
				638 CE conquest of Jerusalem bear relevance to our topic. Islam's policy
				of conversion was not only to introduce monotheism to the idolatrous
				Arab Bedouins, but also to impose its religious laws on non-Muslims,
				dictating all municipal and social decrees, and legislating and
				governing in an Islamic environment. Sharia law regulated not only the
				lives and society of Arabs, but also that of the non-Muslims in lands
				the Arab army conquered. In order to understand the Arab-Israeli
				conflict, it is necessary to have knowledge not only of the regional
				socio-political and geographical elements, but also of other factors,
				such as the Muslims' deeply rooted religious conviction, their cultural
				background, and the historically low degree of literacy amongst their
				population. For nearly two millennia, Jews have been living under
				Christian and Muslim domination. I have endeavored to set forth the long
				story of Jewish life under Islam and Christianity in a manner as
				dispassionate and detached as possible. The continuity of the narrative
				will be broken at times when the historical context renders it
				appropriate. The most logical method to present the narrative seemed to
				be a treatment in which Part I is totally dedicated to Islam, its
				development and laws, and the life of the Prophet, which is crucial to
				the emergence and evolution of the Islamic faith. The pillars of Islam
				are discussed as briefly as possible, with the emphasis laying on the
				Islamic laws affecting the relations between Muslims and non-Muslims.
				When needed, the opinions of opposing authors are interspersed with my
				research and commentary for further exploration of controversial issues.
				Part I is specifically about the support the Quran offers for the
				establishment of a Jewish Homeland, which the Jews call Eretz Yisrael.
				The validity of the translation and interpretation of the referenced
				Quranic verses are explored and scrutinized in length from the viewpoint
				of notable religious sages. In this Part, the Iranian scholar Shojaeddin
				Shafa (1918-2010) gives a great deal of new insight into Arab history
				and the interpretation of Islamic laws. His cited book, included in two
				volumes, is in Persian and has never been translated into any western
				language. Part II is dedicated to a section of Jewish history, starting
				with Abraham the Patriarch and ending in the year 135 CE, when Jews
				eventually lost their independence. Part III is about Jewish life in
				diaspora in various European and Muslim countries. Eventually, in the
				late 19th century, the miseries and deprivations in diaspora gave rise
				to Zionism and the desire to reestablish the Jewish state. In Part IV,
				we will analyze the regional political evolution–which still, after
				seven decades, involves new developments occurring on a daily
				basis–beginning with the early history and transiting to the reemergence
				of Zionism, World War I, the bitter Arab-Jewish relations in the Mandate
				Palestine, Jewish aliyah to the promised land, the reestablishment of
				the Jewish state, and eventually Islamic anti-Semitism. In Part V under
				the title “In Search of the Peace” suggestions and ideals will be
				prospectively elaborated. Statements and theories are referenced with
				biographical data. If a source is quoted once or twice, it is not listed
				in the bibliography but referenced in the foot- or endnotes.
			</p>
			<p className="mt-3">Solomon Pournia, MD</p>
			<p>Los Angeles, December 2019</p>
		</div>
	);
};

export default function Home() {
	return (
		<>
			<section className="flex flex-col items-center justify-center gap-4 pt-8 pb-5 md:pt-10 pb-8">
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
				{/* 
                    <Table aria-label="Example static collection table">
                         <TableHeader>
                              <TableColumn>NAME</TableColumn>
                              <TableColumn>ROLE</TableColumn>
                              <TableColumn>STATUS</TableColumn>
                         </TableHeader>
                         <TableBody>
                              <TableRow key="1">
                                   <TableCell>Tony Reichert</TableCell>
                                   <TableCell>CEO</TableCell>
                                   <TableCell>Active</TableCell>
                              </TableRow>
                              <TableRow key="2">
                                   <TableCell>Zoey Lang</TableCell>
                                   <TableCell>Technical Lead</TableCell>
                                   <TableCell>Paused</TableCell>
                              </TableRow>
                              <TableRow key="3">
                                   <TableCell>Jane Fisher</TableCell>
                                   <TableCell>Senior Developer</TableCell>
                                   <TableCell>Active</TableCell>
                              </TableRow>
                              <TableRow key="4">
                                   <TableCell>William Howard</TableCell>
                                   <TableCell>Community Manager</TableCell>
                                   <TableCell>Vacation</TableCell>
                              </TableRow>
                         </TableBody>
                    </Table> */}

				<BookTable bookContent={bookContent} />

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
