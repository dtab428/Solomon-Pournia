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
		<div className="mt-7">
			<h3 className="text-3xl mb-6">Synopsis</h3>
			<Table aria-label="Book Content Table">
				<TableHeader>
					<TableColumn>Image</TableColumn>
					<TableColumn>Part</TableColumn>
					<TableColumn>Page</TableColumn>
					<TableColumn>Description</TableColumn>
				</TableHeader>
				<TableBody>
					{bookContent.map((item, index) => (
						<TableRow key={index}>
							<TableCell>
								<Image
									src={item.imageURL.replace("@/public/", "/")}
									alt="Book Image"
									style={{ width: "100%" }}
								/>
							</TableCell>
							<TableCell>{item.part}</TableCell>
							<TableCell>{item.page}</TableCell>
							<TableCell>
								<p dangerouslySetInnerHTML={{ __html: item.description }} />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default BookTable;
