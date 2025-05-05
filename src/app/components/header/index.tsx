import {Heading, HStack, IconButton, Separator} from "@chakra-ui/react";
import {ColorModeButton} from "@/components/ui/color-mode";
import NextLink from "next/link";
import {LuPlus} from "react-icons/lu";

export default function Header() {
    return (
        <>
            <HStack as="header" minH="50px">
                <Heading m="auto" textStyle="5xl" fontFamily="Roboto Serif" asChild><NextLink href="/">Мой
                    дневник</NextLink></Heading>
                <IconButton variant="ghost" asChild>
                    <NextLink href="/record/new"><LuPlus/></NextLink>
                </IconButton>
                <ColorModeButton mr="10px"/>
            </HStack>
            <Separator/>
        </>
    );
}