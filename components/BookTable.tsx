import React from "react";
import { Image, Accordion, AccordionItem } from "@nextui-org/react";
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
                  <div className="my-4 flex justify-end">
                    <Image
                      src={`/images/references/${item.image}`}
                      alt="Book Image"
                      style={{ width: "100%" }}
                    />
                  </div>
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
