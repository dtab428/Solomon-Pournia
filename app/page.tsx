"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

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
} from "@nextui-org/react";

import BookTable from "@/components/BookTable";

import Spotlight, { SpotlightCard } from "@/components/Spotlight";

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
    Summary:
      "Part I of the book comprises 88 pages and encompasses 317 references, delving into the\nsubject of Islam and its Prophet Muhammad. It intricately explores the life of the Prophet,\ncommencing from his childhood to the pivotal moment when he declared himself a Prophet, and\nsubsequently, his endeavors to Islamize the Arabian Peninsula. Regrettably, this process involved\nthe expulsion or complete elimination of three major Jewish tribes, alongside other minor tribes.\nNotably, the final tribe, Banu Quraysa, a prominent Jewish community in Medina, witnessed the\nbeheading of its men, with the properties, women, and children being distributed among Muslim\nfighters.\n\nThis section also details the creation of the Quran, the holy book of Islam, and its evolution into its current form known as the &quot;Uthmanic recension.&quot; The narrative elaborates on the Quran&#39;s significance as a miracle and Muhammad&#39;s stature as a prophet. Additionally, this Part provides in-depth discussions on the Pacific and Sword verses, accompanied by commentaries from renowned Muslim scholars. The exploration of pro-Zionist verses in the Quran is reserved for Part IV of the book, under the title, &quot;Muslim Zionists.&quot;",
  },
  {
    Part: "II",
    Summary:
      "This section of the book delves into the foundational background of Jewish history, commencing with Abraham, the patriarch. It traces the Israelites' migration to Egypt, their journey from slavery to freedom, and their transformation from exile to nationhood. The narrative encompasses the cessation of both the Northern and Southern Kingdoms, marked by the Babylonian exile. Descriptions include the earliest recorded attempt at Jewish genocide, as well as the periods of occupation of the Land of Israel by Persia, Greece, and Rome.",
  },
  {
    Part: "III",
    Summary:
      'This section of the book explores the history of Jews in the diaspora, commencing with the Battle of Yarmuk and the Arab invasion that led to the occupation of the Land of Israel. This occupation prompted Jewish migration to various Middle Eastern and European countries, eventually extending to North and South America. The narrative delves into the fluctuations in the lives of local Jews, detailing the impact of multiple Crusades and the resulting Jewish hardships in European countries and the Land of Israel.Additionally, the creation and effects of "The Protocols of the Elders of Zion" in Jewish history are discussed as is the Martin Luther’s evolution and the Jews. The historical accounts of World War I, World War II, and the Holocaust are examined, shedding light on the myriad challenges faced by Jewish communities.\n\nThe section also addresses the collaboration of Haj Amin Muhammad with the Nazi regime during World War II.',
  },
  {
    Part: "IV",
    Summary:
      "This section explores the aftermath of World War I, encompassing various consequences such as the disintegration of the Ottoman Empire. It delves into the pivotal roles played by the Arab and Jewish legions in countering the Ottoman army, resulting in the issuance of mandates to the British and French armies. These mandates eventually paved the way for the liberation of numerous Arab regions, giving rise to the formation of new Arab nations such as Jordan, Iraq, Arabia, Syria, Lebanon, and the establishment of a mandate for Palestine as a Jewish homeland.\n\nAdditionally, this portion addresses the origins and development of political Zionism, examining the circumstances that led to its emergence. It sheds light on the remarkable and sometimes unbelievable circumstances surrounding the continuous return of Jews, predominantly from Eastern Europe, facilitated by collaboration between Zionist leaders and the Jewish Agency. This collaborative effort ultimately culminated in the reestablishment of the Jewish homeland.\n\nThe narrative also touches upon the Armenian Genocide perpetrated by the Ottoman Turks during World War I, drawing parallels with the Holocaust orchestrated by the Nazis during World War II. Furthermore, it delves into the Israeli War of Independence and subsequent conflicts imposed on the nascent state.\n",
  },
  {
    Part: "V",
    Summary:
      "In the preceding sections, readers were immersed in a comprehensive exploration of the Arab-Jewish-Israeli conflicts. This journey included an in-depth look at historical roots, contemporary facts, and the intertwining tapestry of sentiments among the involved parties. The systematic propagation of anti-Semitic ideologies over the decades, commencing with impressionable minds in kindergartens and persisting through university classrooms and campus environments, coupled with the toxic influence of misinformation in the media and the maneuvers of local politicians, has not merely quelled aspirations for peace. Rather, it has steered the sentiments of Arabs, notably the Palestinians, so resolutely to the right that the prospect of a peaceful resolution under current circumstances appears elusive.\n\nHowever, Part V aspires to present a glimmer of hope amid this seemingly intractable dilemma. This section proffers suggestions and pathways that could potentially pave the way for a more constructive and harmonious future.",
  },
];

interface SectionProps {
  className?: string; // Optional className prop
}

const BookSection: React.FC<SectionProps> = ({ className }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className={`container max-w-5xl mx-auto px-4 ${className}`}>
      <div className="marquee">
        <div className="marquee__group">
          <Card
            className="p-8 bg-sky-300 w-full h-full justify-center items-center"
            isHoverable
            shadow="none"
            isPressable
          >
            <AmazonLogo />
          </Card>
          <Card
            className="p-8 bg-sky-300 w-full h-full justify-center items-center"
            isHoverable
            shadow="none"
            isPressable
          >
            <ITunesLogo />
          </Card>
          <Card
            className="p-8 bg-sky-300 w-full h-full justify-center items-center"
            isHoverable
            shadow="none"
            isPressable
          >
            <BarnesNoblesLogo />
          </Card>
          <Card
            className="p-8 bg-sky-300 w-full h-full justify-center items-center"
            isHoverable
            shadow="none"
            isPressable
          >
            <GooglePlayLogo />
          </Card>
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
        </div>

        <div aria-hidden="true" className="marquee__group">
          <Card
            className="p-8 bg-sky-300 w-full h-full justify-center items-center"
            isHoverable
            shadow="none"
            isPressable
          >
            <AmazonLogo />
          </Card>
          <Card
            className="p-8 bg-sky-300 w-full h-full justify-center items-center"
            isHoverable
            shadow="none"
            isPressable
          >
            <ITunesLogo />
          </Card>
          <Card
            className="p-8 bg-sky-300 w-full h-full justify-center items-center"
            isHoverable
            shadow="none"
            isPressable
          >
            <BarnesNoblesLogo />
          </Card>
          <Card
            className="p-8 bg-sky-300 w-full h-full justify-center items-center"
            isHoverable
            shadow="none"
            isPressable
          >
            <GooglePlayLogo />
          </Card>
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
        </div>
      </div>

      <div className="marquee marquee--reverse mt-3">
        <div className="marquee__group">
          <Card
            className="p-8 bg-sky-300 w-full h-full justify-center items-center"
            isHoverable
            shadow="none"
            isPressable
          >
            <AmazonLogo />
          </Card>
          <Card
            className="p-8 bg-sky-300 w-full h-full justify-center items-center"
            isHoverable
            shadow="none"
            isPressable
          >
            <ITunesLogo />
          </Card>
          <Card
            className="p-8 bg-sky-300 w-full h-full justify-center items-center"
            isHoverable
            shadow="none"
            isPressable
          >
            <BarnesNoblesLogo />
          </Card>
          <Card
            className="p-8 bg-sky-300 w-full h-full justify-center items-center"
            isHoverable
            shadow="none"
            isPressable
          >
            <GooglePlayLogo />
          </Card>
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
        </div>

        <div aria-hidden="true" className="marquee__group">
          <Card
            className="p-8 bg-sky-300 w-full h-full justify-center items-center"
            isHoverable
            shadow="none"
            isPressable
          >
            <AmazonLogo />
          </Card>
          <Card
            className="p-8 bg-sky-300 w-full h-full justify-center items-center"
            isHoverable
            shadow="none"
            isPressable
          >
            <ITunesLogo />
          </Card>
          <Card
            className="p-8 bg-sky-300 w-full h-full justify-center items-center"
            isHoverable
            shadow="none"
            isPressable
          >
            <BarnesNoblesLogo />
          </Card>
          <Card
            className="p-8 bg-sky-300 w-full h-full justify-center items-center"
            isHoverable
            shadow="none"
            isPressable
          >
            <GooglePlayLogo />
          </Card>
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
        </div>
      </div>

      <div className="container max-w-xl mx-auto mt-7 mb-7">
        <div className="flex gap-5">
          <div>
            <h4 className="text-md mb-3 font-medium">
              Front cover of the book
            </h4>
            <Button
              onPress={onOpen}
              style={{ height: "auto" }}
              className="px-0"
            >
              <Image
                src="/images/frontcoverpdf_orig.png"
                alt="Front cover of the book"
              />
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Front cover of the book
                    </ModalHeader>
                    <ModalBody>
                      <Image
                        src="/images/frontcoverpdf_orig.png"
                        alt="Front cover of the book"
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Action
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
          <div>
            <h4 className="text-md mb-3 font-medium">Rear cover of the book</h4>
            <Button
              onPress={onOpen}
              style={{ height: "auto" }}
              className="px-0"
            >
              <Image
                src="/images/backcoverpdf_orig.png"
                alt="Rear cover of the book"
              />
            </Button>
          </div>
        </div>
        <div className="w-full mt-5">
          <h4 className="text-md mb-3 font-medium">
            The Book of the Quran with its German translation
          </h4>
          <Image
            src="/images/quran_orig.jpg"
            alt="The Book of the Quran with its German translation"
          />
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
        <TopLeftSvgAccent />
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
                className="w-full bg-white/50 backdrop-blur-sm text-gray-800"
              >
                Read More
              </Button>
            </div>
          </div>

          <div className="p-3 self-end">
            <p className="text-2xl font-medium mt-3">Solomon Pournia, MD</p>
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
      <BottomRightSvgAccent />
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
                className="w-full bg-white/50 backdrop-blur-sm text-gray-800"
              >
                Read More
              </Button>
            </div>
          </div>
          <div className="p-3 self-end">
            <p className="text-2xl font-medium mt-3">Farshid Delshad</p>
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
        What would one say if the Holy Quran were found to contain beliefs
        consistent with Zionism? What if the Quran in its very philological
        content blesses and encourages the Jews to live in the land of Israel?
      </p>
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
        Al-Tabari&#39;s exegetical interpretation. The verse’s validity is
        strengthened by the existence of other, similar verses, while there is
        no Qur&#39;anic verse that contradicts or abrogates any of the pro-
        Zionist verses. Additionally, there are theories1 projecting that a
        number of additional pro- Zionist verses once existed but were lost or
        deliberately omitted during the Uthmanic recension of the Quran; we will
        investigate this further later on. It is fair to assume, there are many
        learned yet biased clerics who are aware of the multiple pro-Zionist
        verses of the Quran, and yet they deliberately keep the Muslim people
        uninformed about this topic. The people remain largely unaware because
        most have not dealt with this book in a scholarly manner.
      </p>
      <p>
        Starting late in the 20th century, to compliment the cover up of the
        pro-Zionist Qur&#39;anic verses, some dogmatic believers claimed the
        al-Aqsa mosque (Arab. al-Masjid al-Aqṣā) in Jerusalem to be the mosque
        referred to in the Quran when describing the Prophet&#39;s spiritual
        Night Journey. In reality, Muslim troops set foot in Jerusalem for the
        first time in 638 CE, some five years after the passing of the Prophet,
        when there was no mosque yet in Jerusalem. In fact, the al-Aqsa mosque
        in Jerusalem was built in 710 CE, some seven decades after the death of
        the Prophet2. However, according to some narratives and objective Muslim
        sages, the al-Aqsa mosque referred to in the Quran at verse 17:01, known
        as al-Isra, is a mosque in Heaven3.
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
        after Israel&#39;s War of Independence when the Jordanian government
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
        propaganda, including the misinterpretation of the Qur&#39;anic verses.
        We can only assume they have left the Muslims generally unaware of the
        Quran’s pro-Zionist passages. This book, with all its detailed
        historical facts and thorough investigative studies of the pro-Zionist
        Qur&#39;anic verses, is a compendium new both to Muslim countries and
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
        legitimacy as such via Biblical, Qur&#39;anic, historical, and
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
        3 Cf. Frederick S. Colby (6 August 2008). Narrating Muhammad&#39;s Night
        Journey: Tracing the Development of the Ibn &#39;Abbas Ascension
        Discourse. SUNY Press. p. 15.
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
                className="w-full bg-white/50 backdrop-blur-sm text-gray-800"
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
              <ModalHeader className="pb-2">Synpsis</ModalHeader>
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
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-5 pt-8 pb-5 md:pt-10 pb-8">
        <div className="inline-block max-w-5xl text-center justify-center">
          <h1 className="text-2xl uppercase font-bold">Introducing</h1>
          <h1 className="text-4xl font-bold gradient-text">
            THE PROMISED LAND OF ISRAEL
          </h1>

          <h1 className="mt-3 text-3xl font-medium">
            An In-Depth Look at Zionism in the Quran and in Jewish History
          </h1>

          <h4
            className={
              (subtitle(), "text-center max-w-2xl mx-auto mt-4 text-xl")
            }
          >
            Readers who wish to experience this intriguing work can purchase
            this book at select bookstores, or online at the{" "}
            <Link
              showAnchorIcon
              color="primary"
              href="https://books.apple.com/us/book/the-promised-land-of-israel/id6450221861"
              style={{ font: "inherit" }}
              target="_blank"
            >
              Apple iTunes Store
            </Link>
            ,{" "}
            <Link
              showAnchorIcon
              color="primary"
              href="https://www.amazon.com/Promised-Land-Israel-Depth-Zionism/dp/B0C7SFS2HF"
              style={{ font: "inherit" }}
              target="_blank"
            >
              Amazon
            </Link>
            ,{" "}
            <Link
              showAnchorIcon
              color="primary"
              href="https://play.google.com/store/books/details/Solomon_Pournia_THE_PROMISED_LAND_OF_ISRAEL?id=HvLEEAAAQBAJ"
              style={{ font: "inherit" }}
              target="_blank"
            >
              Google Play
            </Link>
            , or{" "}
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

        <BookSection className="" />

        <section className="py-0 w-full relative">
          <div className="container mx-auto px-4 mt-4">
            <Spotlight className="max-w-2xl mx-auto grid gap-4 grid-cols-1 lg:grid-cols-12 items-start lg:max-w-none group">
              {/* Card #1 -- Introduction */}
              <SpotlightCard noBg className="lg:col-span-6 col-span-12">
                <div className="relative h-full bg-white p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                  {/* Radial gradient */}
                  <div
                    className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 translate-z-0 bg-gray-200 rounded-full blur-[80px]"></div>
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
              {/* Card #2 -- Editor's Prologue */}
              <SpotlightCard noBg className="lg:col-span-6 col-span-12">
                <div className="relative h-full bg-white p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                  {/* Radial gradient */}
                  <div
                    className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 translate-z-0 bg-gray-200 rounded-full blur-[80px]"></div>
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
              <SpotlightCard className="lg:col-span-4 col-span-12 flex items-center justify-center">
                <div className="relative h-full bg-white w-full h-full p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                  <div className="text-5xl">✺</div>
                </div>
              </SpotlightCard>

              {/* Card #3 -- Synopsis */}
              <SpotlightCard noBg className="lg:col-span-8 col-span-4">
                <div className="relative h-full bg-white p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                  {/* Radial gradient */}
                  <div
                    className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 translate-z-0 bg-gray-200 rounded-full blur-[80px]"></div>
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
              {/* Card #4 -- Full Press Release */}
              <SpotlightCard noBg className="col-span-12">
                <div className="relative h-full bg-gray-100 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                  {/* Radial gradient */}
                  <div
                    className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 translate-z-0 bg-gray-200 rounded-full blur-[80px]"></div>
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
              {/* Card #5 -- Image References */}
              <SpotlightCard noBg className="col-span-12">
                <div className="relative h-full bg-gray-100 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                  {/* Radial gradient */}
                  <div
                    className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 translate-z-0 bg-gray-200 rounded-full blur-[80px]"></div>
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
