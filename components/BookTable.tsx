import React from "react";
import {
  Image,
  Accordion,
  AccordionItem,
  Card,
  CardFooter,
  Button,
} from "@nextui-org/react";
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

  return (
    <div className={`container mx-auto w-full ${className || ""}`}>
      <h3 className={title()}>Image References</h3>
      <p className="text-xl my-3">
        The book refers to many images, but does not include them. Below, you'll
        find all images cited in the book.
      </p>
      <Accordion>
        {Object.entries(groupedByPart).map(([part, items], index) => (
          <AccordionItem
            key={index}
            title={
              <span className="text-2xl font-medium">{`Part ${part.toUpperCase()}`}</span>
            }
            textValue="test"
            subtitle={
              <div
                dangerouslySetInnerHTML={{ __html: findSummaryForPart(part) }}
              />
            }
          >
            <div className="grid grid-cols-3 gap-3">
              {items.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <Card
                    isFooterBlurred
                    radius="lg"
                    className="border-none h-full"
                  >
                    <div className="h-full">
                      <Image
                        src={`/images/references/${item.image}`}
                        alt={`Reference image from The Promised Land of Israel: Part ${item.part}, Page ${item.page}`}
                        className="h-full w-full object-cover max-h-[300px]"
                        removeWrapper={true}
                      />
                    </div>

                    <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                      <p className="text-lg text-white/80">
                        Part: {item.part}, Page: {item.page}
                      </p>
                    </CardFooter>
                  </Card>

                  {/* <div>
                    <p className="text-xl mb-2">
                      <strong>Page:</strong> {item.page}
                    </p>
                    {item.description && (
                      <div>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: item.description,
                          }}
                        />
                      </div>
                    )}
                  </div> */}
                </div>
              ))}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default BookTable;
