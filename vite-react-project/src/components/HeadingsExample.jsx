import Heading from './Heading'
import Section from './Section'
import { EmojiContext } from '../context/EmojiContext'
import { useContext } from 'react'


export default function HeadingsExample() {
    const { mood } = useContext(EmojiContext)

    return (
        <Section level={1}>
            <Heading >Mood?</Heading>
            <Section level={2}>
                <Heading>{mood}</Heading>
                <Heading>{mood}</Heading>
                <Heading>{mood}</Heading>
                <Section level={3}>
                    <Heading>{mood}</Heading>
                    <Heading>{mood}</Heading>
                    <Heading>{mood}</Heading>
                    <Section level={4}>
                        <Heading >{mood}</Heading>
                        <Heading >{mood}</Heading>
                        <Heading >{mood}</Heading>
                    </Section>
                </Section>
            </Section>
        </Section>
    )
}