"use client";

import React from "react";
import { Image } from "@nextui-org/react";
import {
     Table,
     TableBody,
     TableHeader,
     TableColumn,
     TableCell,
     TableRow,
} from "@nextui-org/table";

interface BookContentItem {
     part: string;
     page: string;
     description: string;
     imageURL: string;
}

interface BookTableProps {
     bookContent: BookContentItem[];
}

const BookTable: React.FC<BookTableProps> = ({ bookContent }) => {
     return (
          <Table aria-label="Book Content Table">
               <TableHeader>
                    <TableColumn>Part</TableColumn>
                    <TableColumn>Page</TableColumn>
                    <TableColumn>Description</TableColumn>
                    <TableColumn>Image</TableColumn>
               </TableHeader>
               <TableBody>
                    {bookContent.map((item, index) => (
                         <TableRow key={index}>
                              <TableCell>{item.part}</TableCell>
                              <TableCell>{item.page}</TableCell>
                              <TableCell>{item.description}</TableCell>
                              <TableCell>
                                   <Image
                                        src={item.imageURL.replace(
                                             "@/public/",
                                             "/"
                                        )}
                                        alt="Book Image"
                                   />
                              </TableCell>
                         </TableRow>
                    ))}
               </TableBody>
          </Table>
     );
};

export default BookTable;
