'use client'
import { useCurrentUser } from '@/hook/hook'
import { getTechKnowledgeVault, TechItem } from '@/lib/tech-data'
import React, { useEffect, useState } from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useParams } from 'next/navigation'

const page = () => {

    // Store knowledge in variable
    const [showknowledge, setShowknowledge] = useState<TechItem[] | null>(null)

    // Retrieved email from hook
    const { email } = useCurrentUser()

    // Retrieved id from params
    const {id} = useParams()

    // Run knowledge function when email is available
    useEffect(() => {
        if (email) {
            knowledge()
        }
    }, [email])

    // Fetch TechKnowledge data from backend
    const knowledge = async () => {
        const getknowledge = await getTechKnowledgeVault(email || "")
        setShowknowledge(getknowledge)
    }

    // Render knowledge cards in a grid layout
    return (
        <div>
            {showknowledge && showknowledge.map((k) =>
            <a key={k.id} href={`/single/${k.id}`}>
                <Card className='h-70 w-80' key={k.id}>
                    <CardContent>
                        <img className='h-20 w-20' src={k.img}/>
                    </CardContent>
                    <CardHeader>
                        <CardTitle>{k.name}</CardTitle>
                        <CardDescription>{k.desc}</CardDescription>
                    </CardHeader>
                </Card>
                </a>
            )}
        </div>
    )
}

export default page
