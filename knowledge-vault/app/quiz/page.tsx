'use client'

import { getQuizAction, Quiz } from '@/Action/QuizAction'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const page = () => {

  const [Quiz, setQuiz] = useState<Quiz[]|null>(null)
  const router = useRouter()

  useEffect(() => {
    all()
  }, [])
  

  const all = async () => {
    const allquiz = await getQuizAction()
    setQuiz(allquiz as Quiz[])
  }

  const handleQuizClick = (id: number) => {
    router.push(`/quiz/${id}`)
  }


  return (
    <div>
      <div>
        <h1>Available Quizzes</h1>
        
        <div>
          {Quiz && Quiz.map((q) => (
            <div 
              key={q.id} 
              onClick={() => handleQuizClick(q.id)}
              style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '12px', cursor: 'pointer' }}
            >
              <div>
                <h2>
                  {q.technology}
                </h2>
              </div>
              <div>
                <div>
                  <span>Difficulty:</span>
                  <span>
                    {q.difficulty}
                  </span>
                </div>
                <p>Click to start quiz</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page
