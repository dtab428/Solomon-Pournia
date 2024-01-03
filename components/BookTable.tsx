import React, { useState, useEffect, useRef } from "react";
import {
  Image,
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

// Assuming title is a function from "@/components/primitives"
import { title } from "@/components/primitives";

import { DiagonalArrow } from "@/components/icons";

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
  const [expandedPart, setExpandedPart] = useState<string | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = (item: BookContentItem) => {
    setSelectedItem(item);
    onOpen();
  };

  interface AccordionRefs {
    [key: string]: HTMLDivElement | null;
  }

  const accordionRefs = useRef<AccordionRefs>({});

  const toggleAccordion = (part: string) => {
    if (expandedPart === part) {
      // Scroll to the top of the accordion part
      const accordionElement = accordionRefs.current[part];
      if (accordionElement) {
        accordionElement.scrollIntoView({ behavior: "smooth" });
      }
      setExpandedPart(null);
    } else {
      setExpandedPart(part);
    }
  };

  interface DescriptionComponentProps {
    description: string;
  }
  const DescriptionComponent: React.FC<DescriptionComponentProps> = ({
    description,
  }) => {
    const descriptionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (descriptionRef.current) {
        descriptionRef.current.innerHTML = description;
      }
    }, [description]);

    return <div ref={descriptionRef}></div>;
  };

  return (
    <div className={`container mx-auto w-full ${className || ""}`}>
      <h3 className={title()}>Image References</h3>
      <p className="text-xl my-3">
        The book refers to many images, but does not include them. Below, you'll
        find all images cited in the book.
      </p>
      <div className="mt-8">
        {Object.entries(groupedByPart).map(
          ([part, items], index, entriesArray) => (
            <div key={index} ref={(el) => (accordionRefs.current[part] = el)}>
              <span
                className="text-3xl font-bold mb-2 block text-teal-600"
                id={`part-${part.toUpperCase()}`}
              >{`Part ${part.toUpperCase()}`}</span>
              <div
                className="text-xl"
                dangerouslySetInnerHTML={{ __html: findSummaryForPart(part) }}
              />
              <div className="relative">
                <div
                  className={`pb-5 mt-5 max-w-5xl overflow-hidden ${
                    items.length > 1 && expandedPart != part
                      ? "accordion-mask"
                      : ""
                  }`}
                  style={{
                    maxHeight: expandedPart === part ? "none" : "500px",
                    transition: "max-height 0.5s ease-in-out",
                  }}
                >
                  {items.map((item, itemIndex) => (
                    <div key={itemIndex} className="my-7">
                      <div className="grid lg:grid-cols-2 gap-5 items-center">
                        <Card
                          radius="lg"
                          className="border-none h-full w-full"
                          isPressable
                          onPress={() => handleOpen(item)}
                        >
                          <div className="h-full w-full">
                            <Image
                              src={`/images/references/${item.image}`}
                              alt={`Reference image from The Promised Land of Israel: Part ${item.part}, Page ${item.page}`}
                              className="h-full w-full object-cover"
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
                        <DescriptionComponent
                          description={item.description || ""}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                {items.length > 1 && (
                  <div
                    className="text-center z-20"
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: "2rem",
                    }}
                  >
                    <Button
                      color="primary"
                      onPress={() => toggleAccordion(part)}
                      size="lg"
                      endContent={<DiagonalArrow />}
                      className="w-full bg-teal-500/30 backdrop-blur-sm text-gray-800 dark:text-white text-xl font-medium"
                    >
                      {expandedPart != part
                        ? "See All Images"
                        : "See Less Images"}
                    </Button>
                  </div>
                )}
              </div>
              {index !== entriesArray.length - 1 && (
                <Divider orientation="horizontal" className="my-14" />
              )}
            </div>
          )
        )}
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
