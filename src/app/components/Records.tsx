import {Box, Link as ChakraLink, Table} from "@chakra-ui/react";
import NextLink from "next/link";
import Record from "@/app/types/record";

export default async function Records() {
    const response = await fetch("http://localhost:3000/api/records");
    const records: Record[] = await response.json();
    return (
        <Box m="10px">
            <Table.Root interactive>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeader>Заголовок</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign="end">Дата</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {records.map((record: Record) => (
                        <Table.Row key={record.id}>
                            <Table.Cell><ChakraLink asChild><NextLink
                                href={`/record/${record.id}`}>{record.title}</NextLink></ChakraLink></Table.Cell>
                            <Table.Cell textAlign="end">{new Date(record.date).toLocaleDateString("ru-RU")}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </Box>
    )
}