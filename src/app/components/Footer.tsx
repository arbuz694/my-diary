import {HStack, Text} from "@chakra-ui/react";

export default function Footer() {
    return (
        <HStack as="footer" h="50px">
            <Text fontWeight="bold" m="auto">{new Date().getFullYear()}, Kusov A. ©</Text>
        </HStack>
    );
}