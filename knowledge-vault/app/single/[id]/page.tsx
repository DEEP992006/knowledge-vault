'use client'
import { useCurrentUser } from '@/hook/hook'
import { getTechItemById, TechItem } from '@/lib/tech-data'
import { useUser } from '@clerk/nextjs'
import { useParams } from 'next/navigation'
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

const page = () => {
    // State to hold the single tech item
    const [getsingleTech, setGetsingleTech] = useState<TechItem | null>(null)

    // Get the id parameter from the URL
    const { id } = useParams()
    // console.log(id)

    // Effect to fetch tech item when id changes
    useEffect(() => {
        if (id) {
            singletech(Number(id))
        }
    }, [id])

    // Function to fetch a single tech item by id
    const singletech = async (id: Number) => {
        const singletechbyid = await getTechItemById(Number(id))
        // Update state with the fetched tech item or null
        setGetsingleTech(singletechbyid || null);
    }

    return (
        <div>
            <div>
                {getsingleTech &&
                    <div>
                        <Card className='h-70 w-80'>
                            <CardContent>
                                {/* Display tech item image */}
                                <img className='h-20 w-20' src={getsingleTech.img} />
                            </CardContent>
                            <CardHeader>
                                {/* Display tech item name and description */}
                                <CardTitle>{getsingleTech.name}</CardTitle>
                                <CardDescription>{getsingleTech.desc}</CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                }
            </div>
        </div>
    )
}

export default page
