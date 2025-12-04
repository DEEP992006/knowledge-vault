"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState, useEffect } from "react"
import KnowledgeCard from "@/components/ui/knowledge/KnowledgeCard"
import { AllKnowledgeAction } from "@/Action/Knowledge"
import { useCurrentUser } from "@/hook/hook"
import type { TechItem } from "@/lib/tech-data"

const CATEGORIES = ["All", "React", "TypeScript", "CSS", "Performance", "Next.js", "Backend"]

export default function ExplorePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [showknowledge, setShowknowledge] = useState<TechItem[]>([])
  const { email } = useCurrentUser()

  useEffect(() => {
    const fetchKnowledge = async () => {
      const getknowledge: TechItem[] = await AllKnowledgeAction()
      console.log("Fetched knowledge:", getknowledge)
      setShowknowledge(getknowledge)
    }
    fetchKnowledge()
  }, [email])

  const filteredItems = showknowledge.filter((item) => {
    const matchesCategory = selectedCategory === "All" || (item as any).category === selectedCategory
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      <Header />
      <div>
        <div>
          <div>
            <h1>Explore Knowledge</h1>
            <p>Discover and browse all knowledge items from our community</p>
          </div>

          {/* Search Bar */}
          <div>
            <div>
              <input
                type="text"
                placeholder="Search knowledge..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div>
            {/* Filters Sidebar */}
            <aside>
              <div>
                <div>
                  <h3>Categories</h3>
                </div>
                <div>
                  {CATEGORIES.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Knowledge Grid */}
            <div>
              {filteredItems.length > 0 ? (
                <div>
                  {filteredItems.map((item) => (
                    <KnowledgeCard
                      key={item.id}
                      id={item.id}
                      img={item.img}
                      name={item.name}
                      desc={item.desc}
                      email={item.email}
                    />
                  ))}
                </div>
              ) : (
                <div>
                  <p>No knowledge items available yet</p>
                  <p>Start by adding your first knowledge item</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
