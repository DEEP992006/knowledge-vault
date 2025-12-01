'use client'

import { UserallKnowledgeAction } from '@/Action/Knowledge'
import KnowledgeCard from '@/components/ui/knowledge/KnowledgeCard'
import { useCurrentUser } from '@/hook/hook'
import { TechItem } from '@/lib/tech-data'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [userknowledge, setUserKnowledge] = useState<TechItem[] | null>(null)
  const { email } = useCurrentUser()

  const userAllKnowledge = async (email: string) => {
    const userall = await UserallKnowledgeAction(email)
    setUserKnowledge(userall)
  }

  useEffect(() => {
    if (email) {
      userAllKnowledge(email)
    }
  }, [email])

  return (
    <div>
      {userknowledge &&
        userknowledge.map((u) => (
          <KnowledgeCard
            key={u.id} 
            id={u.id}
            img={u.img}
            name={u.name}
            desc={u.desc}
            email={u.email}
          />
        ))}
    </div>
  )
}

export default Page