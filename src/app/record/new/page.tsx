'use client';

import {Button, Heading, HStack, Input, Textarea, VStack} from "@chakra-ui/react";
import Link from "next/link";
import Record from "@/app/types/record";
import {FormEvent, useState} from "react";

export default function New() {
    const [record, setRecord] = useState<Record>({
        id: 0,
        title: '',
        text: '',
        date: new Date(),
    });

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(record);
        const response = await fetch('/api/records', {
            method: 'POST',
            body: JSON.stringify(record),
        });
        const data = await response.json()
        console.log('result', data.result);
    }

    return (
        <VStack minW="full" m={"5px"} spaceY="10px">
            <Heading mx="10px">Новая запись в дневнике</Heading>
            <form onSubmit={handleSubmit}>
                <Input type="text" value={record.title} onChange={e => setRecord({...record, title: e.target.value})}
                       m="5px" placeholder="Заголовок..."
                       required/>
                <Textarea m="5px" name="text" value={record.text}
                          onChange={e => setRecord({...record, text: e.target.value})} placeholder="Наните писать..."
                          required
                />
                <HStack spaceX="5px">
                    <Button type="submit">Сохранить</Button>
                    <Button asChild><Link href="/">Отменить</Link></Button>
                </HStack>
            </form>
        </VStack>
    );
}