import {Box, Heading, Text} from "@chakra-ui/react";

export default async function Record({params}: {
    params: Promise<{ id: number }>
}) {
    const { id } = await params;
    const response = await fetch(`http://localhost:3000/api/records/${id}`);
    const record = await response.json();
    return (
        <Box minW="full" m="10px">
            <Heading as="h1" size="3xl" mb="20px">{record.title}</Heading>
            <Text mb="3" fontSize="md" color="fg.muted">
                {new Date(record.date).toLocaleDateString("ru-RU")}
            </Text>
            <Text>{record.text}</Text>
        </Box>
    )
}