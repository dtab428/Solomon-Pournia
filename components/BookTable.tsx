import React from "react";
import { Image, Accordion, AccordionItem } from "@nextui-org/react";

interface BookContentItem {
     part: string;
     page: string;
     description: string;
     image: string;
}

interface BookTableProps {
     bookContent: BookContentItem[];
}

interface GroupedByPart {
     [key: string]: BookContentItem[];
}

const BookTable: React.FC<BookTableProps> = ({ bookContent }) => {
     // Grouping book contents by parts with a specific type
     const groupedByPart = bookContent.reduce<GroupedByPart>((acc, item) => {
          if (!acc[item.part]) {
               acc[item.part] = [];
          }
          acc[item.part].push(item);
          return acc;
     }, {});

     return (
          <div className="w-full mt-7">
               <h3 className="text-3xl mb-6">Image References</h3>
               <p className="mt-0 mb-5">
                    The book refers to many images, but does not include them.
                    Below, you'll find all images cited in the book.
               </p>
               <Accordion>
                    {Object.entries(groupedByPart).map(
                         ([part, items], index) => (
                              <AccordionItem
                                   key={index}
                                   title={
                                        <span className="text-2xl font-medium">{`Part ${part.toUpperCase()}`}</span>
                                   }
                              >
                                   {items.map((item, itemIndex) => (
                                        <div
                                             key={itemIndex}
                                             style={{
                                                  display: "grid",
                                                  gridTemplateColumns:
                                                       "1fr 1fr",
                                                  gap: "20px",
                                                  marginBottom: "10px",
                                             }}
                                        >
                                             <div className="my-4 flex justify-end">
                                                  <Image
                                                       src={`/images/references/${item.image}`}
                                                       alt="Book Image"
                                                       style={{ width: "100%" }}
                                                  />
                                             </div>
                                             <div>
                                                  <p className="text-xl mb-2">
                                                       <strong>Page:</strong>{" "}
                                                       {item.page}
                                                  </p>
                                                  <p className="text-xl mb-2">
                                                       <strong>
                                                            Description:
                                                       </strong>
                                                  </p>
                                                  <p
                                                       dangerouslySetInnerHTML={{
                                                            __html: item.description,
                                                       }}
                                                  />
                                             </div>
                                        </div>
                                   ))}
                              </AccordionItem>
                         )
                    )}
               </Accordion>
          </div>
     );
};

export default BookTable;
