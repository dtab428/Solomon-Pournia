import React, { useState } from "react";
import {
	Image,
	Accordion,
	AccordionItem,
	Card,
	CardFooter,
	Button,
	useDisclosure,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	ModalContent,
	Divider,
} from "@nextui-org/react";

import "swiper/css";

import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Scrollbar } from "swiper/modules";
import { Swiper as SwiperType } from "swiper"; // Import Swiper type

import "swiper/css/navigation";
import "swiper/css/scrollbar";

// Assuming title is a function from "@/components/primitives"
import { title } from "@/components/primitives";

interface BookContentItem {
	part: string;
	page: string;
	description?: string;
	image?: string;
	title?: string; // Optional property
	source?: string; // Optional property
}

interface BookTableProps {
	bookContent: BookContentItem[];
	className?: string;
	bookPartDescriptions: PartDescription[];
}

interface PartDescription {
	Part: string;
	Summary: string;
}

interface GroupedByPart {
	[key: string]: BookContentItem[];
}

const BookTable: React.FC<BookTableProps> = ({
	bookContent,
	className,
	bookPartDescriptions,
}) => {
	// Grouping book contents by parts with a specific type
	const groupedByPart = bookContent.reduce<GroupedByPart>((acc, item) => {
		if (!acc[item.part]) {
			acc[item.part] = [];
		}
		acc[item.part].push(item);
		return acc;
	}, {});

	const findSummaryForPart = (part: string): string => {
		const descriptionObj = bookPartDescriptions.find(
			(desc) => desc.Part === part
		);
		return descriptionObj ? descriptionObj.Summary : "";
	};

	const [selectedItem, setSelectedItem] = useState<BookContentItem | null>(
		null
	);
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleOpen = (item: BookContentItem) => {
		setSelectedItem(item);
		onOpen();
	};
	const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
	return (
		<div className={`container mx-auto w-full ${className || ""}`}>
			<h3 className={title()}>Image References</h3>
			<p className="text-xl my-3">
				The book refers to many images, but does not include them. Below, you'll
				find all images cited in the book.
			</p>
			<div>
				{Object.entries(groupedByPart).map(([part, items], index) => (
					<div key={index}>
						{/* <div className="grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-3 pb-5"> */}
						<span className="text-2xl font-medium mb-1 block text-teal-600">{`Part ${part.toUpperCase()}`}</span>
						<div
							dangerouslySetInnerHTML={{ __html: findSummaryForPart(part) }}
						/>
						<div className="gap-3 pb-5 mt-5">
							<SwiperComponent
								spaceBetween={10}
								slidesPerView={2.5}
								onSlideChange={() => console.log("slide change")}
								onSwiper={(swiper) => setSwiperInstance(swiper)} // Store swiper instance
								modules={[Navigation, Scrollbar]}
								navigation={{ el: ".custom-swiper-navigation" }}
								scrollbar={{ el: ".custom-swiper-scrollbar", draggable: true }}
								breakpoints={{
									992: {
										slidesPerView: 5.5,
									},
								}}
							>
								{items.map((item, itemIndex) => (
									<SwiperSlide
										key={itemIndex}
										style={{ height: "auto!important" }}
									>
										<Card
											// isFooterBlurred
											radius="lg"
											className="border-none h-full w-full"
											isPressable
											onPress={() => handleOpen(item)}
										>
											<div className="h-full w-full">
												<Image
													src={`/images/references/${item.image}`}
													alt={`Reference image from The Promised Land of Israel: Part ${item.part}, Page ${item.page}`}
													className="h-full w-full object-cover max-h-[300px]"
													removeWrapper={true}
													isZoomed
												/>
											</div>
											<CardFooter className="justify-center bg-teal-500/70 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
												<p className="text-lg text-white/80">
													Part: {item.part}, Page: {item.page}
												</p>
											</CardFooter>
										</Card>
									</SwiperSlide>
								))}
							</SwiperComponent>
							<div className="w-full mt-5">
								<div className="custom-swiper-scrollbar"></div>
								<div className="custom-swiper-navigation text-end flex gap-3 justify-end mt-4">
									<Button
										onClick={() => swiperInstance.slidePrev()}
										className="text-xl"
										color="secondary"
									>
										Previous
									</Button>
									<Button
										onClick={() => swiperInstance.slideNext()}
										className="text-xl"
										color="secondary"
									>
										Next
									</Button>
								</div>
							</div>
						</div>
						<Divider orientation="horizontal" className="my-5" />
					</div>
				))}
			</div>

			{selectedItem && (
				<Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
					<ModalContent>
						<ModalHeader>
							Part: {selectedItem.part}, Page: {selectedItem.page}
						</ModalHeader>
						<ModalBody>
							<div>
								<Image
									src={`/images/references/${selectedItem.image}`}
									alt={`Reference image from The Promised Land of Israel: Part ${selectedItem.part}, Page ${selectedItem.page}`}
									className="w-full"
									removeWrapper={true}
								/>
								<div
									className="mt-3 font-medium text-lg"
									dangerouslySetInnerHTML={{
										__html: selectedItem.description || "",
									}}
								/>
							</div>
						</ModalBody>
						<ModalFooter>
							<Button onPress={onClose}>Close</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			)}
		</div>
	);
};

export default BookTable;
