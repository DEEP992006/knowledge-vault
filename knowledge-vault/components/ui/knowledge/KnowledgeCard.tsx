'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../card'
import { TechItem } from '@/lib/tech-data'

// KnowledgeCard Component 
const KnowledgeCard = ({id,img,name,desc}:TechItem) => {
    return (
        <div>
            {/* Link to individual knowledge item detail page */}
            <a href={`/single/${id}`}>
                {/* Card container with fixed dimensions */}
                <Card className='h-70 w-80' >
                    {/* Image section */}
                    <CardContent>
                        <img className='h-20 w-20' src={img}/>
                    </CardContent>
                    {/* Title and description section */}
                    <CardHeader>
                        <CardTitle>{name}</CardTitle>
                        <CardDescription>{desc}</CardDescription>
                    </CardHeader>
                </Card>
            </a>
        </div>
    )
}

export default KnowledgeCard
