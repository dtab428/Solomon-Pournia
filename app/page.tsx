"use client";

import { title, subtitle } from "@/components/primitives";
import {
     GithubIcon,
     AmazonLogo,
     ITunesLogo,
     BarnesNoblesLogo,
     GooglePlayLogo,
} from "@/components/icons";
import { Image, Card } from "@nextui-org/react";

import BookTable from "@/components/BookTable";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

const bookImageReferences = [
     {
          part: "I",
          page: "16",
          title: "Hajj",
          description:
               "The Muslim tradition maintains that the Ka&#39;abah, the brown-black cube in the middle, was originally built by Adam. After the biblical flood, recorded in Genesis 6:8, it was rebuilt by Abraham and his son Ishmael [Qur&#39;an 2:127]. In the Muslim tradition they “believe that this is the House of God. At least once a year, tribes from all around the Arabian Peninsula, would converge on Mecca to perform the Hajj pilgrimage. They would circle the shrine seven times, kiss the Black Stone embedded in the wall of Ka&#39;abah. Hajj has been a great source of revenue for Mecca and for its custodian.",
          source: "?",
          image: "part1_image1.png",
     },
     {
          part: "I",
          page: "24",
          title: "An Aerial view of the Temple Mount",
          description:
               "An Aerial view of the Temple Mount, known by the Muslims as Haram al-Sharif. Today, the Temple Mount, a 35-acre walled compound within the Old City of Jerusalem, features the Dome of the Rock to the north (with a golden dome) and the Al-Aqsa Mosque to the south (with a silvered dome). In the southwest, the Western Wall stands as a remnant of the Second Temple, representing the holiest site in Judaism. While the Israeli government maintains political sovereignty over the compound, the custodianship of the religious sites is entrusted to an Islamic Council known as the Waqf. \n\nAccording to the Bible, King Solomon built the First Temple on this site. In a 1929 publication titled &quot;A Brief Guide to the Haram al-Sharif,&quot; written by Waqf historian Aref al Aref, it is declared that the Mount&#39;s &quot;identity with the site of Solomon’s temple is beyond dispute.&quot; This fact was contested by Yasser Arafat during his meeting with U.S. President Bill Clinton and Israeli Prime Minister Ehud Barak in 2000.",
          source: "www.myjewishlearning.com",
          image: "part1_image2.png",
     },
     {
          part: "I",
          page: "28",
          title: "?",
          description:
               "During the 400-year occupation of the City of Jerusalem by the Ottoman Turks the City’s Jewish population grew steadily. “A Survey of Palestine: a booklet, which was prepared in December 1945 – January 1946, by the English Mandate for the Anglo-American Committee of Inquiry. In its Volume I, Chapter VI, pages 148 and tables 7b &amp; 8b the figures for Jerusalem’s population and their ethnicity are shown. The data for reference #105, (Part I, page 28) were obtained from this booklet, which is available via Internet.",
          source: "?",
          image: "part1_image3.png",
     },
     {
          part: "I",
          page: "28",
          title: "?",
          description:
               "On December 11, 1917, two days after Ottoman army had left the city, as Jerusalem was\nconquered by the British army, General Allenby, its Commander, to show respect for the holy city, entered the city on foot.",
          source: "Wikipedia",
          image: "part1_image4.png",
     },
     {
          part: "I",
          page: "80",
          title: "?",
          description:
               "The atrocities committed by radical individuals or groups identifying as Muslims against religious minorities, for political or other motivations, are not always extensively covered by mainstream news agencies, newspapers, or radio broadcasts. Instances of beheadings of non-Muslims, destruction of non-Muslim places of worship, and mass killings of innocent civilians, including women and children, by fanatic Muslims have, however, found visibility on the internet. One example is a clip from a YouTube video highlighting the persecution of Christians in Egypt.",
          source: "YouTube Video",
          image: "part1_image5.png",
     },
     {
          part: "I",
          page: "85",
          title: "?",
          description:
               "Haj Amin Muhammad al-Husseini (1897-1974), the Grand Mufti of Jerusalem, is considered the &#39;founding father&#39; of Palestinian nationalism. He played a significant role during the Palestine Mandate era. However, his legacy is controversial due to his alliance with Hitler&#39;s Nazi regime during World War II, aimed at driving the British from Palestine and preventing Jewish immigration to their homeland.\n\nYasser Arafat, a distant cousin of Haj Amin, later became one of his close followers.",
          source: "Yad Vashem",
          image: "part1_image6.png",
     },
     {
          part: "I",
          page: "85",
          title: "?",
          description:
               "During World War II, Haj Amin collaborated with the Nazis in Berlin, serving as an Arab ally and propagandist for the Third Reich. He continued his campaign of antisemitic incitement, which he had initiated in Palestine. Additionally, he recruited and organized Bosnian Muslim battalions to fight alongside the German Army&#39;s &#39;Waffen-SS&#39; units.",
          source: "Yad Vashem",
          image: "part1_image7.png",
     },
     {
          part: "II",
          page: "98",
          description:
               'The Sacrifice of Isaac. God commanded Abraham to test his faith by sacrificing his son Isaac (Genesis 22:1-13). In Islamic belief, however, it is thought that God instructed Abraham to sacrifice his son Ishmael (Ismail) (Qur’an 37:101-105). The renowned Dutch artist Rembrandt van Rijn\'s painting, "The Sacrifice of Isaac" (1635), has been skillfully reproduced by an Iranian carpet weaver in a 41" by 58", a masterpiece. Private collection.',
          image: "part2_image1.png",
     },
     {
          part: "II",
          page: "124",
          title: "The Fortress of Masada",
          description:
               "The Fortress of Masada, a mountaintop stronghold constructed by Herod on a towering 1,300 feet high rock in the Judaean desert, commands a panoramic view of the Dead Sea. The conclusion of the Jewish revolts against Rome from 63-73 CE unfolded at Masada, where a resilient fortress, after withstanding the Roman army for over two years, ultimately succumbed in 73 CE. Source, Jewish Virtual Library. Part II, page 124.",
          source: "Jewish Virtual Library",
          image: "part2_image2.png",
     },
     {
          part: "II",
          page: "125",
          description:
               "A mural on the interior wall of the Wilshire Temple in Los Angeles replicates a sculptured panel found inside the Arch of Titus in Rome. This artwork portrays Titus's triumphal procession and the spoils seized from the Temple in Jerusalem after the city's conquest and the subsequent looting of the Temple.",
          source: "Photo by the author",
          image: "part2_image3.png",
     },
     {
          part: "III",
          page: "149",
          description:
               "A wall-calendar for the Hebrew year 5354, corresponding to 1593-94, printed in Italy, stands out with the bold Hebrew inscription at its bottom: 'Leshana habaa be-yeroushalaim,' translating to \"Next year in Jerusalem.\"  This unique calendar is part of a collection that spans from the 12th to the 18th century, consisting of Jewish books and prayer books. These valuable items were originally part of the Valmadonna Trust Library collection, a portion of which was auctioned by Sotheby's in December 2015 in New York.",
          source: "Photo of an advertisement by Sotheby's",
          image: "part3_image1.png",
     },
     {
          part: "III",
          page: "155",
          title: "Martin Luther, the German Theologian",
          description:
               'Martin Luther, a German theologian and monk, instigated significant religious reform with his 95 Theses, protesting various Church practices and doctrines. His outspoken critique sparked a wave of religious reformers across Europe. On January 3, 1521, Luther faced excommunication from the Catholic Church, an act that inadvertently fueled the development of the Lutheran church and the broader Protestant Reformation.    However, when the Jewish community did not embrace Lutheranism, he turned vehemently against them. In a pivotal turn, Luther published a pamphlet titled "On the Jews and Their Lies," considered one of the earliest works of modern anti-Semitism. This publication marked a significant step toward the dark path that would eventually lead to the Holocaust.',
          source: "Wikimedia",
          image: "part3_image2.png",
     },
     {
          part: "III",
          page: "187",
          description:
               "It was Vladimir Jabotinsky’s idea to establish a warrior force that will fight to conquer Palestine.",
          source: "Jewish Virtual Library",
          image: "part3_image3.png",
     },
     {
          part: "III",
          page: "200",
          title: "Sachsenhausen Concentration Camp in the City of Oranienburg",
          description:
               "\n\nOranienburg is a town situated on the banks of the Havel River, approximately 22 miles north of the center of Berlin. This small city is accessible by railways from Berlin. At its outskirts lies the Sachsenhausen Concentration Camp, the second such camp constructed by the Nazis on German soil, following Dachau in Munich. Over its nine-year history, around 200,000 people, including notable Germans who opposed Nazi policies, were interned at Sachsenhausen.",
          image: "part3_image4.png",
     },
     {
          part: "III",
          page: "200",
          title: "The Sachsenhausen Camp Entry Gate",
          description:
               'Constructed in 1936 to the north of Berlin, the Nazi concentration camp Sachsenhausen featured a gate bearing the ominous sign "Arbeit Macht Frei" ("Work Makes You Free"). This symbol, serving as a chilling emblem, was present in various formats on the entry gates of different concentration camps.\n\nSachsenhausen, operated by the Nazi SS, housed over 200,000 individuals, including political prisoners, Jews, Gypsies, and captured Soviet soldiers. Tragically, tens of thousands of inmates perished due to starvation, forced labor, medical experiments, and murder by SS personnel. Today, the camp stands as a memorial, offering visitors a somber education about the atrocities committed by the Nazis.',
          image: "part3_image5.png",
     },
     {
          part: "III",
          page: "200",
          description:
               'The thoroughfare leading to Sachsenhausen Concentration Camp, one of the first two built by the Nazis, is located just outside the city of Berlin and can be reached with a fifteen-minute walk from the train station in the small city of Oranienburg. During this walk, Jews and other prisoners endured harassment, including booing and spitting, from the local residents. The main gate bears the German inscription "Arbeit Macht Frei" ("Work Makes You Free"), a cruel irony as, in reality, it signified "Extermination through Labor." Initially established as a labor camp in 1936, the camp was liberated by the Soviets in 1945. Tragically, nearly 50,000 people lost their lives within its confines.',
          source: "Photo by the author",
          image: "part3_image6.png",
     },
     {
          part: "III",
          page: "200",
          title: "Pastor Martin Niemoeller",
          description:
               'Sachsenhausen Concentration Camp housed several prominent figures, among them Pastor Martin Niemoeller. Initially, Niemoeller welcomed the Third Reich enthusiastically, but after a meeting with Hitler in January 1934, he came to view the Nazi state as a dictatorship, against which he took a stand. Niemoeller is most renowned for his poignant quotation: "First, they came for the socialists, and I did not speak out—because I was not a socialist. Then they came for the trade unionists, and I did not speak out—because I was not a trade unionist. Then they came for the Jews, and I did not speak out—because I was not a Jew. Then they came for me—and there was no one left to speak for me."',
          source: "Holocaust Encyclopedia",
          image: "part3_image7.png",
     },
     {
          part: "III",
          page: "200",
          title: "Anne Frank",
          description:
               "Anne Frank, the young Jewish diarist, was born in Frankfurt, Germany. Fleeing the Nazis, she and her family moved to Amsterdam. When the Nazis occupied the Netherlands, they went into hiding, and it was during those two years in concealment that Anne wrote her diary. Eventually, the Nazis deported all the Jews from the Netherlands to concentration camps. Tragically, Anne Frank succumbed to Typhus and died in Sachsenhausen Concentration Camp on March 12, 1945. After the war, her father, who had survived the Holocaust, discovered her diary. Translated into numerous languages, Anne's diary has been published and stands as a poignant testament to the human spirit amid adversity.",
          source: "Jewish Virtual Library",
          image: "part3_image8.png",
     },
     {
          part: "III",
          page: "200",
          description:
               "Only a chimney has remained from the crematorium in the Sachsenhausen Concentration Camp. It captures the stark and haunting reality of what remains from the crematorium in the Sachsenhausen Concentration Camp.",
          source: "Photo by the author",
          image: "part3_image9.png",
     },
     {
          part: "III",
          page: "201",
          title: "Children of the Holocaust",
          description:
               "In January 1945, as prisoners were compelled to assist in running the camp, they clandestinely designated block 66 for the rescue of young children and teens. These children received slightly better nourishment compared to other prisoners. When the camp was liberated by American troops on April 11, 1945, they were horrified to discover hundreds of children who were little more than skeletons covered by skin. The American commander urgently contacted the children's rescue group in Geneva, seeking assistance in evacuating these young survivors. Photo, front page of the book with the same title.\n",
          image: "part3_image10.png",
     },
     {
          part: "III",
          page: "212",
          title: "Henry Ford and anti-Semitism",
          description:
               "Antisemitism, fueled by certain Christian Protestants, peaked in the United States shortly after World War I. Henry Ford, who publicly expressed anti-Semitic views in 1915, invested significant personal funds to have \"The Protocols of the Elders of Zion\" translated into English. Distributing it widely in America, the Protocols became the second best-selling book in the United States during the 1920s and 1930s, following only the Bible.\n\nIn 1919, Ford purchased the openly anti-Semitic paper \"The Dearborn Independent,\" turning it into a propaganda machine against Jews. Under the series of articles titled 'The International Jew: The World's Problem,' he initiated a relentless attack on Jews, resulting in an unprecedented increase in the newspaper's circulation. Starting with around 72,000 copies a week, the circulation peaked at 700,000 in 1924. Despite his earlier anti-Semitic activities, Henry Ford contributed to the war effort during World War II by supporting the production of one B-24 bomber per hour, aiding the United States in its victory.",
          source: "Front page of the book",
          image: "part3_image11.png",
     },
     {
          part: "III",
          page: "221",
          title: "Commemorative Stamp by the State of Israel showing Cyrus Cylinder.",
          description:
               "In 539 B.C.E., King Cyrus the Great of Persia conquered Babylon, bringing about the end of the Babylonian Empire. Many Jewish leaders in captivity regarded Cyrus as the figure destined to fulfill the biblical prophecy foretelling the liberation of the Jews and their return to the Promised Land. A postage stamp from the State of Israel serves as a testament to how Jews worldwide honor the ancient Persian King, Cyrus.\n",
          image: "part3_image12.png",
     },
     {
          part: "III",
          page: "238",
          title: "Habib Elghanayan",
          description:
               "Habib Elghanayan, the Iranian Jewish industrialist and philanthropist. He was pioneering Iran’s industry. Photo, courtesy of a relative.",
          image: "part3_image13.png",
     },
     {
          part: "III",
          page: "238-239",
          description:
               "Following the Islamic Revolution of 1979, Habib Elghanayan was arrested and subsequently imprisoned. In a brief 30-minute Revolutionary Court proceeding, depicted on the right side of the photo, and without the presence of a defense attorney, he was falsely labeled as a Zionist spy and swiftly sentenced to death by firing squad. This shocking development became headline news on the front page of the renowned Tehran newspaper, Etela’at.",
          source: "Photo of the subject newspaper",
          image: "part3_image14.png",
     },
     {
          part: "IV",
          page: "191",
          title: "Jewish Books Burning",
          description:
               "Throughout history the Jewish religious texts, books, and works by Jewish authors were targeted for destruction. This unfortunate practice has been a recurring theme in various periods and locations.\n\nIn the 15th century, during the Spanish Inquisition, there were incidents where Jewish religious books were burnt. Similarly, during the Counter-Reformation, in 1559, the future Pope Pius V ordered the burning of Jewish religious books. On May 10, 1933, some 40,000 people gathered in the front of the University of Berlin to witness the ritual named, “Public burning of noxious Jewish writings”, as a ‘cleansing process’. The books written by the Jewish authors including Heine, Mendelssohn, Wassermann, Zweig, Marx, Brecht, Auerbach and numerous others as well as the Jewish Bible were set fire to. Heinrich Heine (1797-1856) wrote: Wherever they burn books they will also, in the end, burn human beings. The quote from Heine is indeed prophetic. His words emphasize the dangerous consequences of suppressing intellectual freedom and the persecution of ideas, which can escalate to the persecution of individuals, as tragically demonstrated by the Holocaust during World War II.",
          source: "Photo courtesy of Holocaust Memorial Museum",
          image: "part2_image1.png",
     },
     {
          part: "IV",
          page: "263",
          title: "World War I",
          description:
               "World War I did see a widespread and prolonged use of trench warfare on the Western Front, where both the Allies and the Central Powers constructed elaborate systems of trenches to protect themselves from enemy fire. The war on the Western Front often became a stalemate with both sides entrenched for long periods.\n\nThe use of machine guns, poisonous gas, and other new technologies were indeed notable features of World War I. The machine gun, in particular, played a significant role in shaping the nature of warfare on the Western Front. The introduction of chemical weapons, including poisonous gas, was another grim aspect of this conflict.\n\nWhile the war involved millions of soldiers, the total number of military personnel mobilized from all countries involved was around 70 million. The number of casualties, including both military and civilian, reached into the tens of millions.\n\nWorld War I was a complex and devastating conflict that reshaped the geopolitical landscape and had a profound impact on the 20th century.",
          source: "Wikipedia",
          image: "part4_image2.png",
     },
     {
          part: "IV",
          page: "266",
          title: "Husayn bin Ali",
          description:
               "Husayn bin Ali was the Sharif of Mecca and Emir of the Hejaz (region in western Arabia) during the early 20th century. He was appointed by the Ottoman Empire but later became a key figure in the Arab Revolt against Ottoman Empire during World War I. \n\nHusayn bin Ali's two sons who played significant roles in the Arab Revolt were Faisal and Abdullah. Faisal became the King of Iraq, and Abdullah became the Emir of Transjordan (later Jordan). These events occurred in the aftermath of World War I.\n\nThe Hashemite family, to which Husayn belonged, played a key role in the establishment of new Arab states with the help of British and French support. Faisal's reign in Iraq began in 1921, and Abdullah became the Emir of Transjordan in 1921 as well.",
          source: "Wikipedia",
          image: "part4_image3.png",
     },
     {
          part: "IV",
          page: "267",
          title: "Lord Arthur James Balfour",
          description:
               'The Balfour Declaration, issued on November 2, 1917, was a letter from the British Foreign Secretary Arthur James Balfour to Lord Walter Rothschild, a leader of the British Jewish community. The declaration expressed the British government\'s support for the establishment of a "national home for the Jewish people" in Palestine.\n\nThe Balfour Declaration had a significant impact on the course of history, as it laid the groundwork for the establishment of the State of Israel in 1948. The complexities and consequences of the Balfour Declaration continue to be discussed and debated to this day.',
          source: "Wikimedia",
          image: "part4_image4.png",
     },
     {
          part: "IV",
          page: "269",
          title: "Chaim Weizmann",
          description:
               "Chaim Weizmann was a prominent figure in the Zionist movement and played a crucial role in the establishment of the State of Israel.\n\nChaim Weizmann was born in 1874 in what is now Belarus and later became a British citizen. Before his involvement in Zionist leadership, he was a distinguished chemist and scientist. Weizmann's scientific contributions included the development of a method for producing acetone, which was important for the British war effort during World War I. Weizmann's involvement in the Zionist movement increased, and he became the president of the World Zionist Organization from 1920 to 1931 and again from 1935 to 1946. He played a key role in negotiations with the British government, including those leading to the issuance of the Balfour Declaration in 1917. \n\nWeizmann served as the ceremonial president of the state of Israel until his resignation in 1952 due to health reasons. \n",
          image: "part4_image5.png",
     },
     {
          part: "IV",
          page: "279",
          title: "A Recruitment Poster",
          description:
               'The Yiddish-language poster, which reflects the appeal for Jewish volunteers to join the Jewish Legion and fight under the British rule in the hope of contributing to the establishment of a Jewish homeland in Palestine. The concept of the "Old New Land" is a reference to the Zionist aspiration of reestablishing a Jewish homeland in the historic land of Israel.\n\nThe Jewish Legion was officially established in 1917, and it consisted of Jewish volunteers from various countries, including Russia, the United States, and Britain. The unit fought in the Middle East during World War I, and its activities played a symbolic role in the eventual British conquest of Palestine. \n\nAfter the war, the Jewish Legion\'s contribution was recognized, and some of its members became involved in the early defense and security efforts of the Jewish community in Palestine. The experiences of these soldiers were seen as contributing to the broader narrative of Jewish self-defense and the establishment of the State of Israel in 1948. \n\nThe recruitment poster reflects the historical context of the time and the aspirations of the Zionist movement during World War I. \n\n',
          source: "Tablet Magazine 11-9-2012",
          image: "part4_image6.png",
     },
     {
          part: "IV",
          page: "279",
          title: "Jewish soldiers of the 38th Battalion",
          source: "Wikipedia",
          image: "part4_image7.png",
     },
     {
          part: "IV",
          page: "279",
          title: "The Jewish Legion Flag in WWI",
          source: "Wikipedia",
     },
     {
          part: "IV",
          page: "281",
          title: "The Armenian Genocide",
          description:
               'The Armenian Physicians were hanged in Aleppo Square, Istanbul. The Armenian Genocide occurred during World War I. In 1915, the Ottoman Empire, initiated a systematic campaign to exterminate the Armenian population. The Armenians, who were a Christian minority in the Ottoman Empire, were subjected to mass deportations, forced marches, and mass killings.\n\nThere were various instances of public executions and mass killings. Many Armenian intellectuals, professionals, and community leaders were arrested and executed as part of the Ottoman government\'s plan to eliminate the Armenian population.\n\nThe events of the Armenian Genocide are a matter of historical record and have been widely recognized as genocide by many countries and scholars. However, the Turkish government continues to dispute the use of the term "genocide" and contests the characterization of the events.',
          source: "dailymail.co.uk",
          image: "part4_image9.png",
     },
     {
          part: "IV",
          page: "281",
          title: '"Auction of Souls"',
          description:
               'A still frame from the "Auction of Souls", which is a silent film released in 1919 and is considered one of the earliest cinematic works to depict the Armenian Genocide. The film was based on the book "Ravished Armenia" by Aurora Mardiganian, who was a survivor of the events. The film aimed to raise awareness about the atrocities committed against the Armenian population during the World War I.\n\nThe film sought to portray the experiences of Armenians during the genocide. The specific scene with crucified Christian girls, reflects the horrifying and brutal nature of the atrocities committed. \n\nThe Armenian Genocide involved widespread atrocities, including mass killings, deportations, and acts of violence against the Armenian population.\n\nThe Armenian Genocide is a contentious and sensitive historical issue. Recognition of the events as genocide is a subject of international debate and political sensitivity. Many countries and scholars recognize it as genocide, while others, particularly the Turkish government, dispute this classification. \n',
          source: "Wikipedia ",
          image: "part4_image10.png",
     },
     {
          part: "IV",
          page: "287",
          title: "Armenian Genocide",
          description:
               "The Armenian men, women and children were marched through the highways, roads and villages from Anatolia in the east Turkey to Syria, which was then a part of the Ottoman Empire.",
          source: "thestar.com",
          image: "part4_image11.png",
     },
     {
          part: "IV",
          page: "271",
          title: "Emir Faisal",
          description:
               "Emir Faisal, son of Husayn Ben Ali of Arabia, commander of Arab Legion. After WWI, he was ultimately appointed by the Brits as the King in Iraq.",
          source: "Wikipedia",
          image: "part4_image12.png",
     },
     {
          part: "IV",
          page: "301",
          title: "Alfred Dreyfus, a Jewish captain in the French army",
          description:
               "Alfred Dreyfus, a Jewish captain in the French army, was falsely accused of passing military secrets to the German Empire. In 1894, he was convicted in a court-martial and sentenced to life imprisonment on Devil's Island. The case revealed the anti-Semitic sentiments within the French military and society. The Dreyfus Affair had a profound impact on Herzl. He was indeed present in Paris as a correspondent for the Viennese newspaper ‘Neue Freie Presse’ during the time of the Dreyfus Affair. The blatant anti-Semitism and injustice witnessed during the trial deeply affected Herzl. The Dreyfus Affair convinced Herzl that Jews could not fully integrate into European societies, and he concluded that the only solution to anti-Semitism was the establishment of a Jewish state. This realization laid the foundation for Herzl's later efforts in promoting the idea of a Jewish homeland, culminating in the publication of Herzl's book \"The Jewish State,\" and the First Zionist Congress in 1897.",
          image: "part4_image13.png",
     },
     {
          part: "IV",
          page: "301",
          title: "Theodor Ze’ev Herzl",
          description:
               'Theodor Ze’ev Herzl was a key figure in the early Zionist movement and is often referred to as the father of modern political Zionism. Born in 1860 in Budapest, Hungary, Herzl was a journalist, playwright, and political activist.\n\nHerzl became a prominent advocate for the establishment of a Jewish homeland in Palestine, then part of the Ottoman Empire. He articulated his ideas in his influential pamphlet titled "Der Judenstaat" ("The Jewish State"), published in 1896. In this work, Herzl argued for the creation of a Jewish state as a solution to the "Jewish Question" and the rising anti-Semitism in Europe. Herzl convened the First Zionist Congress in Basel, Switzerland, in 1897, where the World Zionist Organization was founded. The congress adopted the Basel Program, which called for the establishment of a publicly and legally assured home for the Jewish people in Palestine.\n\nHerzl worked tirelessly to gain international support for the Zionist cause, engaging with political leaders and seeking a charter for the establishment of a Jewish homeland.\n\nUnfortunately, Herzl did not live to see the realization of his vision. He passed away in 1904, well before the establishment of the State of Israel in 1948.\n\nHerzl\'s ideas and efforts, however, laid the foundation for the Zionist movement, which played a crucial role in the establishment of Israel as a Jewish state. His legacy is remembered and honored within the broader context of the history of modern Israel. Photo, Herzl by Amos Elon, 1975.',
          source: "Photo by Herzl by Amos Elon",
          image: "part4_image14.png",
     },
     {
          part: "IV",
          page: "301",
          title: "Theodor Ze’ev Herzl",
          description:
               "During his eight years of Zionist activities Herzl made two trips to the Mandate Palestine. He was welcomed by the Jews everywhere and at times they called him the “anointed one.”    ",
          source: "JNF Brochures",
          image: "part4_image15.png",
     },
     {
          part: "IV",
          page: "303",
          title: "Reverend William H. Hechler",
          description:
               "Reverend William H. Hechler (1845–1931) was an Anglican clergyman and a notable Christian Zionist. He is perhaps best known for his association with Theodor Herzl, the founder of modern political Zionism.\n\nHechler and Herzl first met in 1896, and Hechler quickly became a supporter of Herzl's Zionist vision. Hechler believed in the idea of establishing a Jewish homeland in Palestine as a fulfillment of biblical prophecy and, as a Christian Zionist, he saw it as an essential step toward the realization of Christian eschatology.\n\nHechler used his connections in European aristocratic and political circles to assist Herzl in gaining support for the Zionist cause. He introduced Herzl to various influential figures, including German Emperor Wilhelm II, as well as other European leaders. It's worth noting that Herzl's initial efforts to gain political support for the establishment of a Jewish homeland faced challenges, but Hechler's assistance helped open doors to some influential individuals. Photo, Herzl by Amos Elon, 1975.",
          image: "part4_image16.png",
     },
     {
          part: "IV",
          page: "350",
          title: 'The "JNF Blue Box"',
          description:
               'The "JNF Blue Box" or "Keren Kayemeth LeIsrael" (KKL) Blue Box. The Jewish National Fund (JNF) introduced these blue boxes as part of its fundraising efforts. The JNF was established at the Fifth Zionist Congress in 1901 with the primary goal of acquiring and developing land in Palestine for Jewish settlement.\n\nThe JNF Blue Box became an iconic symbol of the Zionist movement and the efforts to establish a Jewish homeland in Palestine. The idea was to encourage Jews around the world to contribute to the fund by placing spare change or donations into these blue boxes. The funds collected were used to purchase land in Palestine and support various projects related to agriculture, afforestation, infrastructure, and community development.\n\nThe JNF played a crucial role in transforming the landscape of Palestine, purchasing land that would later become the foundation for the State of Israel. The Blue Box campaign not only raised money but also fostered a sense of collective responsibility and participation among Jews worldwide in the Zionist enterprise.\n\nThe Blue Box campaign continued to be an enduring symbol of grassroots support for the Zionist cause and the development of the land.\n',
          source: "JNF Brochures",
          image: "part4_image17.png",
     },
     {
          part: "IV",
          page: "353",
          title: "Sir Moses Montefiore",
          description:
               "Sir Moses Montefiore, indeed, was a prominent English Jewish philanthropist and a key figure in the 19th-century Zionist movement. Born in Italy in 1784, Montefiore became a successful financier and a leading figure in the Jewish community in England. His efforts were multifaceted, and his interest in the Holy Land and the well-being of the Jewish population there were central to his philanthropic activities.\n\nOne of his most notable endeavors was his support for projects in the Ottoman Palestine, particularly in the areas of industry, education, and health. Montefiore recognized the importance of education as a cornerstone for the future success of any society. His contributions aimed to improve the living conditions and opportunities for Jews in Palestine, laying the groundwork for self-sufficiency and progress.\n\nMontefiore's philanthropy aligned with the broader aspirations of the Zionist movement, which sought to establish a Jewish homeland. While his efforts were not explicitly political, the socio-economic improvements he supported were seen as contributing to the overall goal of creating a thriving Jewish community in the Holy Land.                                                                        \n\nIt's important to note that Sir Moses Montefiore's philanthropic legacy extends beyond the Holy Land. His contributions to various causes, both within and outside the Jewish community, left a lasting impact on charitable work in the 19th century.\n",
          source: "Photo source: montefioredellaso",
          image: "part4_image18.png",
     },
     {
          part: "IV",
          page: "357",
          title: "This Land Is My Land",
          description:
               'This Land Is My Land, is a publication by Hertz that often focuses on the historical and geopolitical aspects of the British Mandate for Palestine. Hertz\'s work discusses how the region designated as the "Mandate for Palestine" was altered by British authorities, resulting in a disproportionate division between Jewish and Arab entities. The book addresses the historical developments and argue that British policies contributed to a truncated Jewish state compared to the original intent of the League of Nations Mandate for Palestine. The photo shows the front page of the book.\n',
          image: "part4_image19.png",
     },
     {
          part: "IV",
          page: "353",
          title: 'The "Two-State Solution"',
          description:
               "The “Two-State Solution” according to The Peel Commission Report of July 7, 1937. It proposed a two-state solution for the British Mandate of Palestine. The Peel Commission was appointed by the British government to investigate the causes of the Arab-Jewish violence in Palestine, which had erupted in the late 1930s. The commission's recommendations were presented in its report, and a significant aspect of those recommendations was the idea of partition. Green shows the Arab land, Blue the Jewish land and Red to be Independent and controlled by the UN!",
          source: "Source: Encyclopedia Britannica",
          image: "part4_image20.png",
     },
     {
          part: "IV",
          page: "376",
          title: '"The Opening of the Hebrew University in Jerusalem" ',
          description:
               'Leopold Pilichowski was a Jewish Polish painter. One of his notable works is "The Opening of the Hebrew University in Jerusalem," where he portrayed the ceremony marking the establishment of the Hebrew University of Jerusalem on April 1, 1925, and it was a significant moment in the history of the Zionist movement and the development of Jewish cultural and intellectual life in Palestine.\n\nIn the painting Pilichowski depicts Lord Arthur Balfour addressing the assembly. The opening of the Hebrew University was a milestone, and Lord Balfour\'s presence at the event underscored the international recognition and support for the Zionist endeavor.',
          source: "Wikimedia",
          image: "part4_image21.png",
     },
     {
          part: "IV",
          page: "377",
          title: "Massacre of Jewish Women and Children in Hebron",
          description:
               "In 1929, tensions between Jewish and Arab communities in British Mandate Palestine escalated, leading to violent incidents, including the Hebron Massacre. On August 23, 1929, Arab residents attacked the Jewish community in Hebron. The violence resulted in the killing of approximately 67-68 Jews and the forced evacuation of the surviving Jewish residents. The Hebron Massacre was part of a series of violent events known as the 1929 Palestine riots or the Buraq Uprising. ",
          source: "A Clip from a documentary YouTube video",
          image: "part4_image22.png",
     },
     {
          part: "IV",
          page: "378",
          title: "The Cave of the Patriarchs",
          description:
               "The Cave of the Patriarchs, known to Muslims as the Ibrahimi Mosque, is located in the city of Hebron in the West Bank. It is a site that is significant to both Judaism and Islam. The cave is believed to be the burial place of several key figures in the religious traditions.  According to Jewish tradition, the Cave of the Patriarchs is where Abraham, Sarah, Isaac, Rebecca, Jacob, and Leah are buried. These figures are considered patriarchs and matriarchs of the Jewish people.\n\nFor Muslims, the site is significant because of its association with the prophet Ibrahim (Abraham in Judaism and Christianity). The Ibrahimi Mosque, which encompasses the cave, is a place of worship for Muslims and holds importance in Islamic tradition.\n\nThe history of the site is complex and has been a source of tension and conflict. The building enclosing the cave dates back to the Herodian era and has undergone various modifications and changes over the centuries.                                                                                    \n\nThe Cave of the Patriarchs/Ibrahimi Mosque reflects the shared religious history in the region and the interconnectedness of Judaism and Islam. However, it has also been a focal point of tensions between different communities due to the religious and political significance attached to the site.",
          source: "Wikipedia",
          image: "part4_image23.png",
     },
     {
          part: "IV",
          page: "396",
          description:
               "This image is of a man in the Jewish Brigade, a segment of the British Army that fought the Germans in Italy in 1944. The rocket says in Hebrew, “Hitler’s Gift”\n",
          source: "Wikipedia",
          image: "part4_image24.png",
     },
     {
          part: "IV",
          page: "398",
          title: "The United Nations Resolution 181",
          description:
               "The United Nations Resolution 181, also known as the UN Partition Plan for Palestine, was a proposal put forth by the United Nations in 1947. The resolution aimed to address the ongoing conflict between Jewish and Arab communities in the British Mandate of Palestine and the impending end of the British Mandate. The proposal outlined a plan for the partition of Palestine into separate Jewish and Arab states, with an international administration for Jerusalem. \n\nThe UN General Assembly voted on Resolution 181 on November 29, 1947. The resolution was adopted with 33 votes in favor, 13 against, and 10 abstentions. The Jewish leadership accepted the partition plan, while the Arab leadership strongly opposed it, viewing it as unjust and a violation of their right to self-determination.\n\nThe rejection of the UN Partition Plan by the Arab states and the subsequent Arab-Israeli War in 1948 led to the establishment of the State of Israel and marked the beginning of a complex and ongoing geopolitical situation in the region. \n",
          source: "Source: Encyclopedia Britannica",
          image: "part4_image25.png",
     },
     {
          part: "IV",
          page: "398",
          title: "The Palestine Post, (later The Jerusalem Post)",
          description:
               "The Palestine Post, (later The Jerusalem Post) reported on the UN General Assembly Resolution 181, passed on November 29, 1947. The Resolution was a significant development in the lead-up to the establishment of the State of Israel. The UN resolution marked a pivotal point in the history of the Israeli-Palestinian conflict, as it set the stage for the establishment of the State of Israel on May 14, 1948. The Arab rejection of the partition plan and the subsequent Arab-Israeli War that followed the declaration of the State of Israel contributed to shaping the geopolitical landscape of the region.",
          image: "part4_image26.png",
     },
     {
          part: "IV",
          page: "401",
          description:
               "A clip of a video showing ‘The Palestine Post’ daily Newspaper of November 30, 1947. UN Resolution 181, also known as the United Nations Partition Plan for Palestine, was passed on November 29, 1947. The resolution called for the partition of Palestine into separate Jewish and Arab states, with Jerusalem as an international city. The plan was accepted by the Jewish leadership but rejected by the Arab states. Jews generally welcomed the resolution as it provided international recognition for the establishment of a Jewish state. However, Arab leaders and populations were strongly opposed to the plan, viewing it as unjust and a violation of their rights. This disagreement eventually led to the Arab-Israeli War of 1948-1949.",
          image: "part4_image27.png",
     },
     {
          part: "IV",
          page: "401",
          description:
               "David Ben-Gurion, the head of the Jewish Agency declares the establishment of the State of Israel. It took place on May 14, 1948. He announced the establishment of the new state in Tel Aviv. The event occurred at the Tel Aviv Museum of Art, and it marked the end of the British Mandate in Palestine. ",
          source: "KKL",
          image: "part4_image28.png",
     },
     {
          part: "IV",
          page: "401",
          description:
               "The Palestine Post was a daily English language newspaper, which was established in Jerusalem as part of the Zionists’ initiatives. It was founded in 1932 during the British Mandate of Palestine. This is its Sunday, May 16, 1948, issue, the first one after the Proclamation of Israel’s statehood. It was published later as “The Jerusalem Post”.",
          image: "part4_image29.png",
     },
     {
          part: "IV",
          page: "414",
          title: "1967 war",
          description:
               "The first Israeli paratroopers reaching victoriously the Western (Wailing) Wall in the Old City of Jerusalem.",
          source: "A screenshot from a YouTube documentary film",
          image: "part4_image30.png",
     },
     {
          part: "IV",
          page: "414",
          title: "Moshe Dayan",
          description: "Moshe Dayan (center) during the 6-Day War.",
          source: "A screenshot from a YouTube documentary film",
          image: "part4_image31.png",
     },
     {
          part: "IV",
          page: "414",
          title: "The cover page of the LIFE Magazine, June 23, 1967",
          description:
               "The Six-Day War took place in June 1967 and involved Israel, Egypt, Jordan, and Syria. It was a brief but significant conflict that had lasting implications for the Middle East.\n\nOne of the major fronts of the war was the Sinai Peninsula, which was then part of Egypt. Israeli forces quickly gained control of the Sinai Peninsula and the Suez Canal. \r",
          image: "part4_image32.png",
     },
     {
          part: "IV",
          page: "414",
          title: "Israel's Victory",
          description:
               "The Six-Day War, which took place from June 5 to June 10, 1967, resulted in a decisive victory for Israel. The conflict involved Israel and several Arab states, including Egypt, Jordan, and Syria. Israel gained control of the Sinai Peninsula from Egypt, the West Bank from Jordan, and the Golan Heights from Syria.  Israel also captured East Jerusalem, including the Old City, bringing the entire city under Israeli control. This had significant religious and political implications.",
          image: "part4_image33.png",
     },
     {
          part: "IV",
          page: "414",
          title: "Golda Meir",
          description:
               "Golda Meir became the Prime Minister of Israel in March 1969. She served as Prime Minister until 1974. At her first announcement as PM she said, “We are prepared to discuss peace with our neighbors.” However, despite her willingness to engage in peace talks, the political situation in the region remained complex, and tensions continued to escalate. The Arab states were unwilling to engage in direct negotiations with Israel.\n\nThe Yom Kippur War (October 1973) caught Israel by surprise when Egypt and Syria launched coordinated attacks on the holiest day in the Jewish calendar. The conflict led to a significant loss of life on both sides and prompted international diplomatic efforts to bring about a ceasefire. The war highlighted the vulnerability of Israel and the need for a reevaluation of security and military strategies.",
          source: "Photo source: www.bbc.co.uk/programms/p021qqtp",
          image: "part4_image34.png",
     },
     {
          part: "IV",
          page: "416",
          title: "Proclamation of Total War by Arab Leaders",
          description:
               "The period leading up to the Six-Day War in 1967 was marked by heightened tension and military mobilization in the Middle East. The political and military rhetoric from various Arab leaders and their respective media outlets indeed included threats against Israel's existence. Newspaper headlines and public statements by Arab leaders during this time often reflected a sense of confrontation and military readiness. There were calls for the liberation of Palestinian territories and the removal of what many Arab nations perceived as Israeli aggression. Arab leaders, including Egyptian President Gamal Abdel Nasser, made statements that contributed to the escalating tension.",
          source: "A clip from a documentary YouTube video",
          image: "part4_image35.png",
     },
     {
          part: "IV",
          page: "436",
          title: "A Brief Guide to al-Haram al-Sharif",
          description:
               "A Brief Guide to al-Haram al-Sharif, published in 1924 by the Supreme Muslim Council in Jerusalem. Ironically it is the period when Haj Amin Muhammad al Husseini was the head of this Council and was the Grand Mufti of Jerusalem from 1922 to 1937. In this booklet the Supreme Muslim Council confirms the truth of the Jewish people’s unique relationship to the consecrated Mount Temple dating back some three thousand years. This Guide officially recognizes the Jewish connection to the Temple Mount. On its fourth page the Historical Sketch of the Haram declares: “The site is one of the oldest in the world. Its sanctity dates from the earliest times. Its identity with the site of Solomon’s Temple is beyond dispute.” Describing the area of Solomon’s Stables, the Guide states: “It dates probably as far back as the construction of Solomon’s Temple.”",
          source: "Photo courtesy of Simon Wiesenthal Center, Los Angeles",
          image: "part4_image36.png",
     },
     {
          part: "IV",
          page: "440",
          description:
               "There are anti-Semitic teachings and propaganda in the educational materials and institutions in the Gaza Strip and other Palestinian territories.\n\nThe anti-Semitic teachings and propagandas are not only in the madrassas, schools and universities a part of the education but the new generation is additionally trained as if they are in the regular army.\r",
          source: "A clip from a YouTube video",
          image: "part4_image37.png",
     },
     {
          part: "V",
          page: "469",
          title: "From the River to the Sea",
          description:
               "From the River to the See, Palestine will be free (from Jordan river to the Mediterranean Sea). This slogan was invented in 1964 and was immediately accepted by the Palestine Liberation Organization (PLO), which is a political and military organization formed to unite various Palestinian Arab groups and ultimately to bring about an independent state of Palestine. The slogan calls for one state solution and “free” from the Jews, contrary to the two-state solution, which is propagated by the Palestinian Authority (PA) to the Westerners. Altogether, the slogan means there should be no Jewish state and no Jews in this land.  Let’s remember that the said slogan is taught in the schools by the PA and Hamas. Interestingly, the UN supported and managed schools in the West Bank and Gaza are no exception to this teaching!",
          image: "part5_image1.png",
     },
];

const bookPartDescriptions = [
     {
          Part: "I",
          Summary: "Part I of the book comprises 88 pages and encompasses 317 references, delving into the\nsubject of Islam and its Prophet Muhammad. It intricately explores the life of the Prophet,\ncommencing from his childhood to the pivotal moment when he declared himself a Prophet, and\nsubsequently, his endeavors to Islamize the Arabian Peninsula. Regrettably, this process involved\nthe expulsion or complete elimination of three major Jewish tribes, alongside other minor tribes.\nNotably, the final tribe, Banu Quraysa, a prominent Jewish community in Medina, witnessed the\nbeheading of its men, with the properties, women, and children being distributed among Muslim\nfighters.\n\nThis section also details the creation of the Quran, the holy book of Islam, and its evolution into its current form known as the &quot;Uthmanic recension.&quot; The narrative elaborates on the Quran&#39;s significance as a miracle and Muhammad&#39;s stature as a prophet. Additionally, this Part provides in-depth discussions on the Pacific and Sword verses, accompanied by commentaries from renowned Muslim scholars. The exploration of pro-Zionist verses in the Quran is reserved for Part IV of the book, under the title, &quot;Muslim Zionists.&quot;",
     },
     {
          Part: "II",
          Summary: "This section of the book delves into the foundational background of Jewish history, commencing with Abraham, the patriarch. It traces the Israelites' migration to Egypt, their journey from slavery to freedom, and their transformation from exile to nationhood. The narrative encompasses the cessation of both the Northern and Southern Kingdoms, marked by the Babylonian exile. Descriptions include the earliest recorded attempt at Jewish genocide, as well as the periods of occupation of the Land of Israel by Persia, Greece, and Rome.",
     },
     {
          Part: "III",
          Summary: 'This section of the book explores the history of Jews in the diaspora, commencing with the Battle of Yarmuk and the Arab invasion that led to the occupation of the Land of Israel. This occupation prompted Jewish migration to various Middle Eastern and European countries, eventually extending to North and South America. The narrative delves into the fluctuations in the lives of local Jews, detailing the impact of multiple Crusades and the resulting Jewish hardships in European countries and the Land of Israel.Additionally, the creation and effects of "The Protocols of the Elders of Zion" in Jewish history are discussed as is the Martin Luther’s evolution and the Jews. The historical accounts of World War I, World War II, and the Holocaust are examined, shedding light on the myriad challenges faced by Jewish communities.\n\nThe section also addresses the collaboration of Haj Amin Muhammad with the Nazi regime during World War II.',
     },
     {
          Part: "IV",
          Summary: "This section explores the aftermath of World War I, encompassing various consequences such as the disintegration of the Ottoman Empire. It delves into the pivotal roles played by the Arab and Jewish legions in countering the Ottoman army, resulting in the issuance of mandates to the British and French armies. These mandates eventually paved the way for the liberation of numerous Arab regions, giving rise to the formation of new Arab nations such as Jordan, Iraq, Arabia, Syria, Lebanon, and the establishment of a mandate for Palestine as a Jewish homeland.\n\nAdditionally, this portion addresses the origins and development of political Zionism, examining the circumstances that led to its emergence. It sheds light on the remarkable and sometimes unbelievable circumstances surrounding the continuous return of Jews, predominantly from Eastern Europe, facilitated by collaboration between Zionist leaders and the Jewish Agency. This collaborative effort ultimately culminated in the reestablishment of the Jewish homeland.\n\nThe narrative also touches upon the Armenian Genocide perpetrated by the Ottoman Turks during World War I, drawing parallels with the Holocaust orchestrated by the Nazis during World War II. Furthermore, it delves into the Israeli War of Independence and subsequent conflicts imposed on the nascent state.\n",
     },
     {
          Part: "V",
          Summary: "In the preceding sections, readers were immersed in a comprehensive exploration of the Arab-Jewish-Israeli conflicts. This journey included an in-depth look at historical roots, contemporary facts, and the intertwining tapestry of sentiments among the involved parties. The systematic propagation of anti-Semitic ideologies over the decades, commencing with impressionable minds in kindergartens and persisting through university classrooms and campus environments, coupled with the toxic influence of misinformation in the media and the maneuvers of local politicians, has not merely quelled aspirations for peace. Rather, it has steered the sentiments of Arabs, notably the Palestinians, so resolutely to the right that the prospect of a peaceful resolution under current circumstances appears elusive.\n\nHowever, Part V aspires to present a glimmer of hope amid this seemingly intractable dilemma. This section proffers suggestions and pathways that could potentially pave the way for a more constructive and harmonious future.",
     },
];

interface SectionProps {
     className?: string; // Optional className prop
}

const BookSection: React.FC<SectionProps> = ({ className }) => {
     return (
          <div className={`container mx-auto px-4 ${className}`}>
               <h4 className={(subtitle(), "text-center max-w-xl mx-auto")}>
                    Readers who wish to experience this intriguing work can
                    purchase this book at select bookstores, or online at the
                    Apple iTunes store, Amazon, Google Play, or Barnes and Noble
               </h4>

               <Swiper
                    spaceBetween={32}
                    slidesPerView={"auto"} // Number of slides per view
                    navigation // Enable navigation
                    modules={[Navigation, Autoplay]}
                    autoplay={{
                         delay: 0,
                         disableOnInteraction: true,
                         pauseOnMouseEnter: true,
                    }}
                    speed={8000}
                    loop={true}
                    className="marquee mt-8"
               >
                    <SwiperSlide>
                         <Card
                              className="p-8 bg-sky-300 w-full h-full justify-center items-center"
                              isHoverable
                              shadow="none"
                              isPressable
                         >
                              <AmazonLogo />
                         </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                         <Card
                              className="p-8 bg-sky-300 w-full h-full justify-center items-center"
                              isHoverable
                              shadow="none"
                              isPressable
                         >
                              <ITunesLogo />
                         </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                         <Card
                              className="p-8 bg-sky-300 w-full h-full justify-center items-center"
                              isHoverable
                              shadow="none"
                              isPressable
                         >
                              <BarnesNoblesLogo />
                         </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                         <Card
                              className="p-8 bg-sky-300 w-full h-full justify-center items-center"
                              isHoverable
                              shadow="none"
                              isPressable
                         >
                              <GooglePlayLogo />
                         </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                         <Card
                              className="p-8 bg-sky-300 w-full h-full justify-center items-center"
                              isHoverable
                              shadow="none"
                              isPressable
                         >
                              <Image
                                   src="/images/readerhouse-logo.png"
                                   alt="Description of the image"
                              />
                         </Card>
                    </SwiperSlide>
               </Swiper>

               <Swiper
                    spaceBetween={32}
                    slidesPerView={2}
                    navigation // Enable navigation
                    modules={[Navigation]} // Add the Navigation module
                    className="mt-8"
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
                                   The Book of the Quran with its German
                                   translation
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
                    className="p-3 bg-slate-200 dark:bg-gray-950"
                    isHoverable
                    shadow="none"
                    isPressable
               >
                    <h3 className="text-3xl mb-3">Full press release text</h3>
                    <p className="text-start">
                         An interesting work that offers well-documented
                         accuracy and authenticity of the quoted facts,
                         rendering them beyond malicious interpretation. Author
                         Solomon Pournia received his medical degree from the
                         Düsseldorf Medical Academy in Germany. However, history
                         and religion were the other two fields he pursued and
                         researched alongside his main profession as a
                         physician. Nonetheless, the factual information
                         contained in this book, so relevant to the Middle East
                         crises and the Arab-Israeli issue, has not been
                         revealed and remained hidden from Muslims around the
                         world and Westerners. The need for enlightenment and
                         clarification could not stop him from announcing and
                         revealing the truth. He hopes that this first release
                         will spark a tremendous awakening that will lead to
                         insight and the loss of bigotry. Pournia writes, “Not
                         too long ago, my old-time peer from my years in German
                         medical school brought me some souvenirs while visiting
                         me in Los Angeles, including a volume of the Quran with
                         its German translation. While reading, I came across
                         the first pro-Zionist (or, historically defined, the
                         first pro-Israelite) verse in the Quran, and this was
                         very surprising to me. Soon, the index of this version
                         of the Quran became a great help in searching through
                         the ayahs and finding others dealing with the same
                         issue. Continuing my targeted search, I discovered
                         evidence confirming the gravity of the first ayah in
                         relation to other ayahs, all of which I will explain in
                         detail in this book.” Published by Fulton Books,
                         Solomon Pournia&apos;s book tackles very sensitive
                         topics and serves as an eye-opener for Muslim
                         politicians, traditional clerics, Muslims in general,
                         and interested Westerners.
                    </p>
               </Card>
          </div>
     );
};

const Intro = () => {
     return (
          <div className="container mx-auto px-4 mt-4">
               <Card
                    className="p-3 bg-slate-200 dark:bg-gray-950"
                    isHoverable
                    shadow="none"
                    isPressable
               >
                    <h3 className="text-3xl mb-3">Introduction</h3>
                    <p className="text-start">
                         After some 45 years apart, my friend and medical school
                         peer visited me in Los Angeles. He and his wife brought
                         us many gifts from Germany, including a volume of the
                         Holy Quran in original Arabic along with its German
                         translation. I take tremendous enjoyment reading the
                         books in my library, and the Quran was now one of them.
                         I soon realized that the Quran is unlike the Jewish
                         Scripture, which describes historical events
                         sequentially. And so, during my free time, I looked at
                         pages of the Quran wherever I happened to open the
                         book. One day, I came across Chapter 5, (sūra
                         al-Mā'ida) verse (ayah) 21, in which Allah orders the
                         Children of Israel to go to the promised land. It was
                         amazing how openly and boldly the Quran demonstrated
                         its pro-Zionist standpoint. After coming across more
                         pro-Zionist ayahs, it was difficult for me to
                         comprehend how the Muslim world has remained seemingly
                         unaware of these commandments. So many skirmishes, so
                         many wars, so much misery and loss of life because the
                         Muslims are unaware of these commandments? Or, like
                         everything else these days, are even the divine
                         commandments politically smeared? Or, is it due to lack
                         of information and education? Or, a combination of all?
                         Still more questions popped up when continued research
                         reaffirmed the intent of ayah 5:21. The process of fact
                         finding on this subject took me on a long journey, a
                         journey through 3,500 years of Jewish history. At
                         first, this extensive research was unplanned, but soon
                         it evolved into a planned venture. Fortunately,
                         research and comprehensive reading were part of my
                         education in the European school I attended, and these
                         were habits I never gave up. Having completed my
                         research, I decided to elucidate readers on these
                         Qur'anic verses, which have never been brought to
                         widespread public attention. The pro-Zionist verses in
                         the Quran express that Jews should live in the land
                         promised by Allah. The Quran attests to the Jews'
                         affiliation with the land of Israel. Sadly, lack of
                         proper knowledge has aided biased and radical clerics
                         and politicians in their agenda of hiding or
                         misinterpreting these verses to mislead lay Muslims.
                         Understanding Islam and the Quran would be the
                         prerequisites for following a cliché Muslim's frame of
                         mind and the aim of his ventures. Assuming we can
                         understand a ‘theoretical&apos; or ‘stereotypical&apos;
                         Muslim&apos;s ideas and beliefs would be a slippery
                         slope of assumptions not based on reality or evidence –
                         we might study a school of thought, for example,
                         typical religious beliefs of Muslims in a specific
                         region or of a specific set. This is even more
                         pertinent when Muslim extremists and fundamentalists
                         are the players. For them, the Qur'anic laws and their
                         interpretations or misinterpretations are crucial to
                         their daily political conduct, as are the many
                         statements and misinterpretations in the Hadith. It is
                         fair to conclude that Islam is not merely a religion,
                         but also acts as guidance for a Muslim's life and la
                         vie quotidienne. Ever since the Medina Agreement of the
                         7th century, the religion of Islam and its accompanying
                         politics have merged. Hence, in dealings with the
                         Muslims, one cannot achieve a comprehensive
                         understanding without giving some consideration to
                         their religious mannerisms. For westerners, the Islamic
                         Republic of Iran, the Islamic Republic of Pakistan, and
                         Saudi Arabia's government, as theocratic regimes, modus
                         operandi lack comprehensibility. Therefore, the need
                         for information about Islam is essential. Without it,
                         it would be not only difficult but nearly impossible to
                         unravel related local and world affairs. Most
                         westerners lack general knowledge on Islam, its
                         emergence, its laws, its bylaws, and its convictions.
                         In the western hemisphere, people generally only gain
                         information about Islam through news media, which
                         solely serve their own political agendas and espouse
                         their own ideologies without revealing the whole truth.
                         I was raised in a Muslim country. In school, I never
                         missed the “Sharia hours”, which I was not obligated to
                         attend but I did. Later, in Germany, I encountered
                         Catholic students who, on campus or in the dormitories,
                         tried to proselytize the students from Muslim
                         countries. We spent many nighttime hours into the dawn
                         discussing religion. Ironically, in many instances, I
                         contributed and elaborated more on Islamic
                         weltanschauung than the participating Muslim students.
                         And, without being religious, religion has always been
                         one of the topics I was most interested in, especially
                         from a historical point of view. Soon after
                         conceptualizing the first steps of the present
                         manuscript, I realized what a difficult task it is, as
                         I had to deal with a great number of historical facts,
                         which at times occurred more than three millennia ago.
                         I shared my plan with my relatives. My wife suggested I
                         had a lot to read, and my son recommended that I study
                         Marcus & Page, A Short Guide to Writing About History,
                         which I greatly appreciated. It was a challenge and
                         admittedly not an easy undertaking. Our story begins
                         with two major empires, the Christian Byzantine,
                         successor of the Roman Empire, and the Persian Empire,
                         who were periodically involved in warfare for many
                         decades. Then, in the early 7th century, a new force
                         came to power in the Arabian Peninsula that soon
                         developed into a major player: Islam rapidly burgeoned
                         in an expeditious geographical expansion over
                         neighboring regions ever since its inception in 623 CE.
                         Within a relatively short period of time, it covered
                         the entire Middle East, the south of Europe, and the
                         north African continent. In comparison, it took the
                         Roman Empire almost eleven centuries of effort to
                         become a major power in the classical world, while just
                         70 years after the death of prophet Mohammad–around 646
                         AD– North Africa had already been almost completely
                         Islamized. Hence, the developmental process of Islam,
                         Sharia, the 633 CE Arab invasion of today's Syria and
                         Iraq, and the eventually 638 CE conquest of Jerusalem
                         bear relevance to our topic. Islam's policy of
                         conversion was not only to introduce monotheism to the
                         idolatrous Arab Bedouins, but also to impose its
                         religious laws on non-Muslims, dictating all municipal
                         and social decrees, and legislating and governing in an
                         Islamic environment. Sharia law regulated not only the
                         lives and society of Arabs, but also that of the
                         non-Muslims in lands the Arab army conquered. In order
                         to understand the Arab-Israeli conflict, it is
                         necessary to have knowledge not only of the regional
                         socio-political and geographical elements, but also of
                         other factors, such as the Muslims' deeply rooted
                         religious conviction, their cultural background, and
                         the historically low degree of literacy amongst their
                         population. For nearly two millennia, Jews have been
                         living under Christian and Muslim domination. I have
                         endeavored to set forth the long story of Jewish life
                         under Islam and Christianity in a manner as
                         dispassionate and detached as possible. The continuity
                         of the narrative will be broken at times when the
                         historical context renders it appropriate. The most
                         logical method to present the narrative seemed to be a
                         treatment in which Part I is totally dedicated to
                         Islam, its development and laws, and the life of the
                         Prophet, which is crucial to the emergence and
                         evolution of the Islamic faith. The pillars of Islam
                         are discussed as briefly as possible, with the emphasis
                         laying on the Islamic laws affecting the relations
                         between Muslims and non-Muslims. When needed, the
                         opinions of opposing authors are interspersed with my
                         research and commentary for further exploration of
                         controversial issues. Part I is specifically about the
                         support the Quran offers for the establishment of a
                         Jewish Homeland, which the Jews call Eretz Yisrael. The
                         validity of the translation and interpretation of the
                         referenced Quranic verses are explored and scrutinized
                         in length from the viewpoint of notable religious
                         sages. In this Part, the Iranian scholar Shojaeddin
                         Shafa (1918-2010) gives a great deal of new insight
                         into Arab history and the interpretation of Islamic
                         laws. His cited book, included in two volumes, is in
                         Persian and has never been translated into any western
                         language. Part II is dedicated to a section of Jewish
                         history, starting with Abraham the Patriarch and ending
                         in the year 135 CE, when Jews eventually lost their
                         independence. Part III is about Jewish life in diaspora
                         in various European and Muslim countries. Eventually,
                         in the late 19th century, the miseries and deprivations
                         in diaspora gave rise to Zionism and the desire to
                         reestablish the Jewish state. In Part IV, we will
                         analyze the regional political evolution–which still,
                         after seven decades, involves new developments
                         occurring on a daily basis–beginning with the early
                         history and transiting to the reemergence of Zionism,
                         World War I, the bitter Arab-Jewish relations in the
                         Mandate Palestine, Jewish aliyah to the promised land,
                         the reestablishment of the Jewish state, and eventually
                         Islamic anti-Semitism. In Part V under the title “In
                         Search of the Peace” suggestions and ideals will be
                         prospectively elaborated. Statements and theories are
                         referenced with biographical data. If a source is
                         quoted once or twice, it is not listed in the
                         bibliography but referenced in the foot- or endnotes.
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
                         <h1 className="text-3xl">Introducing</h1>
                         <h1 className="mt-3 text-5xl gradient-text">
                              THE PROMISED LAND OF ISRAEL
                         </h1>

                         <h1 className="mt-5 text-2xl">
                              An In-Depth Look at Zionism in the Quran and in
                              Jewish History
                         </h1>
                    </div>

                    <BookSection className="mt-3" />

                    <PressRelease />

                    <Intro />

                    <section className="bg-gray-200 py-7 w-full relative">
                         <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="323"
                              height="386"
                              viewBox="0 0 323 386"
                              fill="none"
                              className="absolute top-0 left-0"
                         >
                              <path
                                   d="M97.4996 187.095C69.1014 247.753 -20.3448 249.733 -61.518 243.141C-196.532 224.03 -90.7817 15.025 14.5869 47.6779C119.956 80.3308 14.9634 -126.074 79.1536 -103.213C143.344 -80.3522 207.886 37.9806 205.334 97.4428C202.783 156.905 132.997 111.273 97.4996 187.095Z"
                                   stroke="url(#paint0_linear_31_6740)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M-4.11486 107.422C-19.0988 139.36 -66.2323 140.432 -87.9261 136.975C-159.065 126.959 -103.272 16.9089 -47.7598 34.0626C7.75274 51.2162 -47.5051 -57.3972 -13.688 -45.3844C20.1291 -33.3717 54.1007 28.8954 52.7369 60.1959C51.3732 91.4965 14.615 67.4992 -4.11486 107.422Z"
                                   stroke="url(#paint1_linear_31_6740)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M92.5905 183.314C64.8779 242.597 -22.4911 244.494 -62.7116 238.032C-194.6 219.291 -91.3955 15.0258 11.5416 46.9914C114.479 78.957 11.8336 -122.858 74.5438 -100.483C137.254 -78.1075 200.349 37.5962 197.883 95.7219C195.417 153.848 127.231 109.21 92.5905 183.314Z"
                                   stroke="url(#paint2_linear_31_6740)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M87.7203 179.532C60.6169 237.438 -24.7633 239.323 -64.0655 233.027C-192.944 214.773 -92.0141 15.2518 8.56716 46.4312C109.148 77.6106 8.9151 -119.443 70.189 -97.6142C131.463 -75.7855 193.079 37.1864 190.648 93.9523C188.216 150.718 121.6 107.15 87.7203 179.532Z"
                                   stroke="url(#paint3_linear_31_6740)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M82.9367 175.695C56.4879 232.24 -26.8653 234.064 -65.2358 227.908C-191.058 210.057 -92.5631 15.2237 5.63665 45.6929C103.836 76.1621 5.9442 -116.299 65.7678 -94.9695C125.591 -73.6399 185.767 36.7001 183.404 92.1372C181.041 147.574 115.998 105.013 82.9367 175.695Z"
                                   stroke="url(#paint4_linear_31_6740)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M78.0665 171.913C52.2269 227.081 -29.1375 228.893 -66.5897 222.903C-189.402 205.539 -93.1818 15.4497 2.66222 45.1327C98.5062 74.8157 3.02569 -112.883 61.4131 -92.1007C119.801 -71.318 178.497 36.2903 176.169 90.3676C173.84 144.445 110.366 102.954 78.0665 171.913Z"
                                   stroke="url(#paint5_linear_31_6740)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M73.2828 168.075C48.0978 221.883 -31.2395 223.634 -67.76 217.783C-187.517 200.822 -93.7308 15.4213 -0.268302 44.3942C93.1942 73.367 0.0547883 -109.74 56.9919 -89.4563C113.929 -69.1725 171.184 35.8039 168.925 88.5522C166.666 141.301 104.764 100.816 73.2828 168.075Z"
                                   stroke="url(#paint6_linear_31_6740)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M68.4126 164.294C43.8368 216.724 -33.5117 218.463 -69.114 212.778C-185.861 196.304 -94.3495 15.6473 -3.24275 43.8339C87.864 72.0205 -2.86376 -106.324 52.6372 -86.5876C108.138 -66.8507 163.914 35.394 161.689 86.7826C159.465 138.171 99.1323 98.7567 68.4126 164.294Z"
                                   stroke="url(#paint7_linear_31_6740)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M63.6289 160.456C39.7077 211.526 -35.6137 213.204 -70.2842 207.659C-183.975 191.587 -94.8984 15.6192 -6.17324 43.0956C82.5519 70.5721 -5.83463 -103.181 48.216 -83.9429C102.267 -64.705 156.602 34.9078 154.446 84.9675C152.29 135.027 93.5305 96.6194 63.6289 160.456Z"
                                   stroke="url(#paint8_linear_31_6740)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M58.7194 156.918C35.467 206.658 -37.8389 208.25 -71.5854 202.829C-182.245 187.106 -95.6509 15.721 -9.28294 42.5404C77.085 69.3597 -9.03684 -99.9683 43.5792 -81.195C96.1953 -62.4218 149.134 34.6563 147.064 83.4254C144.995 132.195 87.7847 94.7425 58.7194 156.918Z"
                                   stroke="url(#paint9_linear_31_6740)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M53.9405 153.095C31.3285 201.444 -39.9387 203.001 -72.7458 197.735C-180.325 182.468 -96.1174 15.8775 -12.1553 41.9335C71.8068 67.9896 -11.8975 -96.5791 39.2526 -78.3391C90.4027 -60.0992 141.856 34.2499 139.838 81.6517C137.819 129.054 82.2056 92.6591 53.9405 153.095Z"
                                   stroke="url(#paint10_linear_31_6740)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M49.0655 149.299C27.077 196.301 -42.2131 197.82 -74.1096 192.705C-178.703 177.871 -96.8185 15.9189 -15.1879 41.2419C66.4427 66.5648 -14.9263 -93.409 34.8033 -75.6816C84.5329 -57.9542 134.552 33.7603 132.585 79.8407C130.619 125.921 76.5511 90.5458 49.0655 149.299Z"
                                   stroke="url(#paint11_linear_31_6740)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M44.2867 145.476C22.9384 191.087 -44.3129 192.571 -75.27 187.611C-176.783 173.233 -97.2851 16.0754 -18.0603 40.635C61.1645 65.1947 -17.7869 -90.0198 30.4767 -72.8257C78.7403 -55.6316 127.274 33.3538 125.359 78.067C123.444 122.78 70.972 88.4625 44.2867 145.476Z"
                                   stroke="url(#paint12_linear_31_6740)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M39.4116 141.68C18.6869 185.944 -46.5873 187.391 -76.6338 182.581C-175.161 168.637 -97.9862 16.1168 -21.0928 39.9434C55.8005 63.7699 -20.8157 -86.8497 26.0274 -70.1682C72.8705 -53.4866 119.969 32.8643 118.106 76.256C116.244 119.648 65.3175 86.3491 39.4116 141.68Z"
                                   stroke="url(#paint13_linear_31_6740)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M34.626 137.842C14.5559 180.746 -48.6912 182.132 -77.806 177.461C-173.278 163.92 -98.5371 16.0884 -24.0253 39.2048C50.4865 62.3212 -23.7885 -83.7063 21.6043 -67.5238C66.9971 -51.3412 112.655 32.3778 110.861 74.4406C109.067 116.503 59.7137 84.2115 34.626 137.842Z"
                                   stroke="url(#paint14_linear_31_6740)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M29.7578 134.061C10.2968 175.587 -50.9615 176.961 -79.158 172.457C-171.62 159.402 -99.1538 16.3147 -26.9978 38.6449C45.1583 60.975 -26.7051 -80.2904 17.2515 -64.6547C61.2081 -49.019 105.387 31.9682 103.627 72.6712C101.868 113.374 54.0839 82.1524 29.7578 134.061Z"
                                   stroke="url(#paint15_linear_31_6740)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M24.9722 130.223C6.16583 170.389 -53.0654 171.702 -80.3302 167.337C-169.736 154.685 -99.7047 16.2863 -29.9302 37.9063C39.8443 59.5263 -29.6779 -77.147 12.8284 -62.0103C55.3347 -46.8736 98.0724 31.4818 96.3818 70.8559C94.6913 110.23 48.4801 80.0148 24.9722 130.223Z"
                                   stroke="url(#paint16_linear_31_6740)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M19.9785 126.498C1.81241 165.273 -55.38 166.55 -81.7055 162.343C-168.031 150.146 -100.386 16.5415 -33.0175 37.3981C34.3512 58.2548 -32.7534 -73.6591 8.28695 -59.0557C49.3273 -44.4523 90.5798 31.1739 88.9405 69.1808C87.3011 107.188 42.6861 78.0301 19.9785 126.498Z"
                                   stroke="url(#paint17_linear_31_6740)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M15.1929 122.66C-2.31861 160.075 -57.4839 161.292 -82.8777 157.223C-166.148 145.429 -100.937 16.5134 -35.9499 36.6598C29.0372 56.8063 -35.7263 -70.5155 3.86382 -56.4111C43.4539 -42.3067 83.2657 30.6877 81.695 67.3656C80.1244 104.044 37.0822 75.8928 15.1929 122.66Z"
                                   stroke="url(#paint18_linear_31_6740)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M10.3246 118.879C-6.57766 154.915 -59.7542 156.12 -84.2297 152.218C-164.49 140.911 -101.554 16.7391 -38.9224 36.0994C23.709 55.4596 -38.6428 -67.1001 -0.488968 -53.5426C37.6649 -39.985 75.9973 30.2776 74.4614 65.5958C72.9255 100.914 31.4525 73.8332 10.3246 118.879Z"
                                   stroke="url(#paint19_linear_31_6740)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M5.53901 115.041C-10.7087 149.717 -61.8581 150.862 -85.4019 147.099C-162.606 136.194 -102.105 16.711 -41.8549 35.3611C18.395 54.0111 -41.6157 -63.9565 -4.91209 -50.8979C31.7915 -37.8393 68.6832 29.7914 67.216 63.7807C65.7488 97.7699 25.8486 71.6958 5.53901 115.041Z"
                                   stroke="url(#paint20_linear_31_6740)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M0.663977 111.245C-14.9602 144.575 -64.1325 145.681 -86.7657 142.068C-160.984 131.597 -102.806 16.7524 -44.8874 34.6694C13.031 52.5864 -44.6444 -60.7864 -9.36137 -48.2404C25.9217 -35.6944 61.3784 29.3019 59.9634 61.9697C58.5485 94.6375 20.1942 69.5825 0.663977 111.245Z"
                                   stroke="url(#paint21_linear_31_6740)"
                                   stroke-width="2"
                              />
                              <defs>
                                   <linearGradient
                                        id="paint0_linear_31_6740"
                                        x1="-145.979"
                                        y1="155.1"
                                        x2="200.999"
                                        y2="-1.1591"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint1_linear_31_6740"
                                        x1="-132.403"
                                        y1="90.6597"
                                        x2="50.4858"
                                        y2="8.29845"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint2_linear_31_6740"
                                        x1="-145.25"
                                        y1="151.932"
                                        x2="193.603"
                                        y2="-0.671869"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint3_linear_31_6740"
                                        x1="-144.693"
                                        y1="148.973"
                                        x2="186.502"
                                        y2="-0.179873"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint4_linear_31_6740"
                                        x1="-143.965"
                                        y1="145.805"
                                        x2="179.338"
                                        y2="0.205285"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint5_linear_31_6740"
                                        x1="-143.408"
                                        y1="142.846"
                                        x2="172.237"
                                        y2="0.697282"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint6_linear_31_6740"
                                        x1="-142.681"
                                        y1="139.678"
                                        x2="165.073"
                                        y2="1.08221"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint7_linear_31_6740"
                                        x1="-142.124"
                                        y1="136.719"
                                        x2="157.972"
                                        y2="1.57419"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint8_linear_31_6740"
                                        x1="-141.396"
                                        y1="133.551"
                                        x2="150.808"
                                        y2="1.95936"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint9_linear_31_6740"
                                        x1="-140.838"
                                        y1="130.589"
                                        x2="143.474"
                                        y2="2.54849"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint10_linear_31_6740"
                                        x1="-140.062"
                                        y1="127.53"
                                        x2="136.359"
                                        y2="3.04415"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint11_linear_31_6740"
                                        x1="-139.553"
                                        y1="124.462"
                                        x2="129.209"
                                        y2="3.42565"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint12_linear_31_6740"
                                        x1="-138.778"
                                        y1="121.404"
                                        x2="122.093"
                                        y2="3.92132"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint13_linear_31_6740"
                                        x1="-138.269"
                                        y1="118.336"
                                        x2="114.944"
                                        y2="4.30281"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint14_linear_31_6740"
                                        x1="-137.543"
                                        y1="115.168"
                                        x2="107.778"
                                        y2="4.68774"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint15_linear_31_6740"
                                        x1="-136.984"
                                        y1="112.209"
                                        x2="100.679"
                                        y2="5.17998"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint16_linear_31_6740"
                                        x1="-136.258"
                                        y1="109.041"
                                        x2="93.5127"
                                        y2="5.5649"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint17_linear_31_6740"
                                        x1="-135.698"
                                        y1="106.081"
                                        x2="86.1822"
                                        y2="6.15921"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint18_linear_31_6740"
                                        x1="-134.973"
                                        y1="102.913"
                                        x2="79.0161"
                                        y2="6.54437"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint19_linear_31_6740"
                                        x1="-134.413"
                                        y1="99.9541"
                                        x2="71.9171"
                                        y2="7.03612"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint20_linear_31_6740"
                                        x1="-133.688"
                                        y1="96.7864"
                                        x2="64.751"
                                        y2="7.42129"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint21_linear_31_6740"
                                        x1="-133.179"
                                        y1="93.7184"
                                        x2="57.6015"
                                        y2="7.80278"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                              </defs>
                         </svg>
                         <BookTable bookContent={bookImageReferences} />
                         <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="273"
                              height="397"
                              viewBox="0 0 273 397"
                              fill="none"
                              className="absolute bottom-0 right-0"
                         >
                              <path
                                   d="M154.923 250.278C139.349 185.138 208.083 127.865 244.397 107.371C361.915 38.2087 409.4 267.58 306.635 307.681C203.87 347.782 414.586 443.83 350.132 465.937C285.678 488.044 161.472 435.689 126.423 387.586C91.3751 339.484 174.392 331.703 154.923 250.278Z"
                                   stroke="url(#paint0_linear_31_6763)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M284.044 249.297C275.868 214.979 312.07 184.777 331.193 173.966C393.079 137.483 417.997 258.325 363.886 279.491C309.776 300.656 420.665 351.192 386.728 362.863C352.792 374.534 287.427 346.99 268.994 321.656C250.561 296.322 294.264 292.194 284.044 249.297Z"
                                   stroke="url(#paint1_linear_31_6763)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M161.12 250.177C145.865 186.539 213.026 130.626 248.514 110.624C363.357 43.1189 409.881 267.197 309.446 306.321C209.011 345.444 415.032 439.365 352.038 460.929C289.044 482.494 167.607 431.294 133.325 384.29C99.0427 337.286 180.189 329.724 161.12 250.177Z"
                                   stroke="url(#paint2_linear_31_6763)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M167.284 250.101C152.411 187.92 218.024 133.256 252.689 113.696C364.874 47.6848 410.222 266.635 312.12 304.906C214.018 343.177 415.185 434.875 353.655 455.973C292.126 477.07 173.548 427.086 140.086 381.167C106.623 335.248 185.875 327.827 167.284 250.101Z"
                                   stroke="url(#paint3_linear_31_6763)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M173.418 250.123C158.881 189.414 222.946 136.06 256.796 116.971C366.339 52.549 410.671 266.315 314.874 303.658C219.077 341.001 415.552 430.565 355.468 451.15C295.384 471.734 179.573 422.911 146.884 378.074C114.196 333.237 191.591 326.009 173.418 250.123Z"
                                   stroke="url(#paint4_linear_31_6763)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M179.582 250.047C165.426 190.795 227.943 138.689 260.971 120.043C367.857 57.1149 411.013 265.753 317.548 302.243C224.084 338.734 415.706 426.075 357.086 446.193C298.466 466.31 185.513 418.702 153.645 374.951C121.777 331.199 197.277 324.112 179.582 250.047Z"
                                   stroke="url(#paint5_linear_31_6763)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M185.717 250.069C171.896 192.289 232.866 141.493 265.078 123.318C369.322 61.979 411.462 265.433 320.302 300.995C229.143 336.557 416.073 421.765 358.898 441.37C301.724 460.974 191.538 414.527 160.444 371.858C129.35 329.189 202.993 322.293 185.717 250.069Z"
                                   stroke="url(#paint6_linear_31_6763)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M191.882 249.993C178.443 193.67 237.865 144.123 269.255 126.39C370.842 66.5454 411.805 264.871 322.978 299.581C234.152 334.29 416.228 417.276 360.518 436.413C304.807 455.551 197.481 410.319 167.207 368.735C136.932 327.152 208.681 320.397 191.882 249.993Z"
                                   stroke="url(#paint7_linear_31_6763)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M198.015 250.014C184.912 195.163 242.785 146.927 273.36 129.664C372.305 71.4089 412.252 264.55 325.731 298.332C239.209 332.113 416.594 412.965 362.329 431.589C308.063 450.214 203.503 406.143 174.003 365.642C144.503 325.14 214.395 318.578 198.015 250.014Z"
                                   stroke="url(#paint8_linear_31_6763)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M204.059 249.724C191.26 196.329 247.611 149.415 277.386 132.633C373.742 75.9926 412.776 264.002 328.508 296.829C244.24 329.656 417.096 408.458 364.243 426.552C311.389 444.646 209.501 401.688 180.737 362.25C151.974 322.812 220.057 316.467 204.059 249.724Z"
                                   stroke="url(#paint9_linear_31_6763)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M210.177 249.738C197.745 197.831 252.522 152.214 281.465 135.895C375.129 80.8171 413.042 263.59 331.131 295.515C249.221 327.44 417.221 404.025 365.847 421.623C314.472 439.221 215.445 397.472 187.493 359.136C159.542 320.799 225.718 314.621 210.177 249.738Z"
                                   stroke="url(#paint10_linear_31_6763)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M216.359 249.669C204.278 199.204 257.532 154.849 285.67 138.979C376.727 85.4223 413.568 263.12 333.938 294.166C254.308 325.212 417.619 399.657 367.675 416.771C317.731 433.885 221.468 393.304 194.299 356.033C167.129 318.763 231.461 312.751 216.359 249.669Z"
                                   stroke="url(#paint11_linear_31_6763)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M222.477 249.683C210.762 200.705 262.444 157.648 289.749 142.241C378.113 90.2469 413.834 262.707 336.562 292.852C259.289 322.996 417.744 395.225 369.279 411.842C320.814 428.46 227.412 389.088 201.055 352.919C174.697 316.75 237.122 310.905 222.477 249.683Z"
                                   stroke="url(#paint12_linear_31_6763)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M228.656 249.615C217.291 202.079 267.45 160.283 293.95 145.327C379.708 94.8528 414.357 262.238 339.365 291.503C264.372 320.769 418.138 390.858 371.103 406.992C324.069 423.125 233.431 384.92 207.856 349.818C182.281 314.715 242.861 309.036 228.656 249.615Z"
                                   stroke="url(#paint13_linear_31_6763)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M234.79 249.636C223.761 203.572 272.372 163.086 298.056 148.601C381.174 99.7162 414.806 261.917 342.119 290.254C269.432 318.592 418.505 386.547 372.916 402.168C327.327 417.788 239.456 380.744 214.655 346.724C189.854 312.703 248.577 307.217 234.79 249.636Z"
                                   stroke="url(#paint14_linear_31_6763)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M240.954 249.56C230.307 204.953 277.369 165.716 302.232 151.673C382.691 104.282 415.147 261.355 344.793 288.84C274.439 316.325 418.659 382.058 374.534 397.211C330.409 412.365 245.397 376.536 221.416 343.601C197.434 310.666 254.263 305.32 240.954 249.56Z"
                                   stroke="url(#paint15_linear_31_6763)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M247.089 249.582C236.777 206.447 282.292 168.519 306.338 154.948C384.156 109.146 415.596 261.035 347.547 287.591C279.498 314.148 419.026 377.747 376.346 392.388C333.666 407.028 251.421 372.361 228.214 340.508C205.007 308.655 259.979 303.501 247.089 249.582Z"
                                   stroke="url(#paint16_linear_31_6763)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M253.314 249.384C243.369 207.736 287.31 171.107 310.525 157.998C385.65 113.759 415.969 260.411 350.278 286.066C284.586 311.72 419.258 373.103 378.057 387.247C336.856 401.391 257.473 367.934 235.078 337.182C212.683 306.431 265.747 301.444 253.314 249.384Z"
                                   stroke="url(#paint17_linear_31_6763)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M259.449 249.405C249.839 209.229 292.233 173.91 314.631 161.272C387.116 118.622 416.418 260.09 353.032 284.816C289.646 309.543 419.626 368.792 379.87 382.423C340.114 396.054 263.498 363.758 241.877 334.088C220.256 304.419 271.462 299.625 259.449 249.405Z"
                                   stroke="url(#paint18_linear_31_6763)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M265.613 249.33C256.384 210.611 297.23 176.54 318.806 164.345C388.633 123.189 416.759 259.528 355.706 283.403C294.652 307.277 419.779 364.303 381.488 377.467C343.196 390.631 269.439 359.55 248.637 330.966C227.836 302.382 277.149 297.729 265.613 249.33Z"
                                   stroke="url(#paint19_linear_31_6763)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M271.747 249.351C262.854 212.104 302.152 179.344 322.913 167.619C390.098 128.053 417.208 259.207 358.46 282.154C299.712 305.1 420.146 359.992 383.3 372.643C346.454 385.294 275.463 355.374 255.436 327.872C235.409 300.371 282.864 295.91 271.747 249.351Z"
                                   stroke="url(#paint20_linear_31_6763)"
                                   stroke-width="2"
                              />
                              <path
                                   d="M277.926 249.283C269.383 213.477 307.158 181.978 327.114 170.704C391.693 132.658 417.731 258.738 361.263 280.805C304.795 302.872 420.54 355.625 385.125 367.792C349.709 379.959 281.482 351.206 262.237 324.77C242.993 298.335 288.604 294.04 277.926 249.283Z"
                                   stroke="url(#paint21_linear_31_6763)"
                                   stroke-width="2"
                              />
                              <defs>
                                   <linearGradient
                                        id="paint0_linear_31_6763"
                                        x1="365.312"
                                        y1="123.622"
                                        x2="191.242"
                                        y2="462.015"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint1_linear_31_6763"
                                        x1="394.838"
                                        y1="182.487"
                                        x2="303.086"
                                        y2="360.85"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint2_linear_31_6763"
                                        x1="366.717"
                                        y1="126.554"
                                        x2="196.725"
                                        y2="457.026"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint3_linear_31_6763"
                                        x1="368.123"
                                        y1="129.216"
                                        x2="201.971"
                                        y2="452.218"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint4_linear_31_6763"
                                        x1="369.53"
                                        y1="132.147"
                                        x2="207.337"
                                        y2="447.453"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint5_linear_31_6763"
                                        x1="370.936"
                                        y1="134.809"
                                        x2="212.584"
                                        y2="442.645"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint6_linear_31_6763"
                                        x1="372.342"
                                        y1="137.74"
                                        x2="217.949"
                                        y2="437.88"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint7_linear_31_6763"
                                        x1="373.75"
                                        y1="140.402"
                                        x2="223.198"
                                        y2="433.072"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint8_linear_31_6763"
                                        x1="375.154"
                                        y1="143.332"
                                        x2="228.562"
                                        y2="428.307"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint9_linear_31_6763"
                                        x1="376.562"
                                        y1="145.998"
                                        x2="233.931"
                                        y2="423.278"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint10_linear_31_6763"
                                        x1="377.859"
                                        y1="148.874"
                                        x2="239.186"
                                        y2="418.458"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint11_linear_31_6763"
                                        x1="379.376"
                                        y1="151.59"
                                        x2="244.545"
                                        y2="413.704"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint12_linear_31_6763"
                                        x1="380.673"
                                        y1="154.467"
                                        x2="249.801"
                                        y2="408.884"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint13_linear_31_6763"
                                        x1="382.186"
                                        y1="157.184"
                                        x2="255.156"
                                        y2="404.132"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint14_linear_31_6763"
                                        x1="383.592"
                                        y1="160.114"
                                        x2="260.522"
                                        y2="399.366"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint15_linear_31_6763"
                                        x1="384.998"
                                        y1="162.776"
                                        x2="265.768"
                                        y2="394.558"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint16_linear_31_6763"
                                        x1="386.405"
                                        y1="165.707"
                                        x2="271.134"
                                        y2="389.793"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint17_linear_31_6763"
                                        x1="387.809"
                                        y1="168.371"
                                        x2="276.497"
                                        y2="384.761"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint18_linear_31_6763"
                                        x1="389.216"
                                        y1="171.301"
                                        x2="281.863"
                                        y2="379.996"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint19_linear_31_6763"
                                        x1="390.622"
                                        y1="173.964"
                                        x2="287.109"
                                        y2="375.188"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint20_linear_31_6763"
                                        x1="392.028"
                                        y1="176.894"
                                        x2="292.475"
                                        y2="370.423"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                                   <linearGradient
                                        id="paint21_linear_31_6763"
                                        x1="393.541"
                                        y1="179.611"
                                        x2="297.83"
                                        y2="365.67"
                                        gradientUnits="userSpaceOnUse"
                                   >
                                        <stop stop-color="#FFA400" />
                                        <stop
                                             offset="1"
                                             stop-color="#FFA400"
                                             stop-opacity="0"
                                        />
                                   </linearGradient>
                              </defs>
                         </svg>
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
