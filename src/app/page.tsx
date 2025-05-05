import {Box, Heading} from "@chakra-ui/react";
import Records from "@/app/components/Records";

export default async function Home() {
    return (
        <Box minW="full" mx="10px">
            <Heading>Ваши записи</Heading>
            <Records/>
        </Box>
    );
}
