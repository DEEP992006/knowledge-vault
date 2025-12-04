'use client'

import { MCQ, newQuizAction } from '@/Action/QuizAction'
import React, { useState } from 'react'


const page = () => {
    const [technology, setTechnology] = useState('')
    const [difficulty, setDifficulty] = useState('medium')
    const [questions, setQuestions] = useState<Omit<MCQ, 'id'>[]>([{
        questions: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        correctedAnswers: 0
    }])

    const addQuestion = () => {
        setQuestions([...questions, {
            questions: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            correctedAnswers: 0
        }])
    }

    const updateQuestion = (index: number, field: keyof Omit<MCQ, 'id'>, value: string | number) => {
        const newQuestions = [...questions]
        newQuestions[index] = { ...newQuestions[index], [field]: value }
        setQuestions(newQuestions)
    }

    const removeQuestion = (index: number) => {
        setQuestions(questions.filter((_, i) => i !== index))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await newQuizAction(technology, difficulty, questions)
        alert('Quiz created!')
        setTechnology('')
        setDifficulty('medium')
        setQuestions([{
            questions: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            correctedAnswers: 0
        }])
    }

    return (
        <div className="container">
            <h1>Create New Quiz</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Technology:</label>
                    <input
                        type="text"
                        placeholder="e.g., JavaScript, React, Python"
                        value={technology}
                        onChange={(e) => setTechnology(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Difficulty:</label>
                    <select
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        className="select-input"
                    >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>

                <h2>Questions ({questions.length})</h2>
                {questions.map((q, index) => (
                    <div key={index} className="question-card">
                        <div className="question-header">
                            <h3>Question {index + 1}</h3>
                            {questions.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeQuestion(index)}
                                    className="btn-remove"
                                >
                                    Remove
                                </button>
                            )}
                        </div>

                        <div className="form-group">
                            <label>Question Text:</label>
                            <input
                                type="text"
                                placeholder="Enter your question"
                                value={q.questions}
                                onChange={(e) => updateQuestion(index, 'questions', e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Option 1:</label>
                            <input
                                type="text"
                                placeholder="First option"
                                value={q.option1}
                                onChange={(e) => updateQuestion(index, 'option1', e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Option 2:</label>
                            <input
                                type="text"
                                placeholder="Second option"
                                value={q.option2}
                                onChange={(e) => updateQuestion(index, 'option2', e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Option 3:</label>
                            <input
                                type="text"
                                placeholder="Third option"
                                value={q.option3}
                                onChange={(e) => updateQuestion(index, 'option3', e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Option 4:</label>
                            <input
                                type="text"
                                placeholder="Fourth option"
                                value={q.option4}
                                onChange={(e) => updateQuestion(index, 'option4', e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Correct Answer (0 = Option 1, 1 = Option 2, 2 = Option 3, 3 = Option 4):</label>
                            <select
                                value={q.correctedAnswers}
                                onChange={(e) => updateQuestion(index, 'correctedAnswers', parseInt(e.target.value))}
                                className="select-input"
                                required
                            >
                                <option value={0}>Option 1</option>
                                <option value={1}>Option 2</option>
                                <option value={2}>Option 3</option>
                                <option value={3}>Option 4</option>
                            </select>
                        </div>
                    </div>
                ))}

                <button type="button" onClick={addQuestion} className="btn-secondary">
                    + Add Another Question
                </button>

                <button type="submit" className="btn-primary">
                    Create Quiz
                </button>
            </form>
        </div>
    )
}

export default page
