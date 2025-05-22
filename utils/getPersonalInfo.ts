import personalData from "@/constants/chat-bot/personal-info"


export function getPersonalInfo(query: string): string[] {
  const normalizedQuery = query.toLowerCase()
  const results: string[] = []

  personalData.forEach((section) => {
    let isRelevant = false

    if (
      section.name.toLowerCase().includes(normalizedQuery) ||
      (section.description && section.description.toLowerCase().includes(normalizedQuery)) ||
      (section.details && section.details.toLowerCase().includes(normalizedQuery))
    ) {
      isRelevant = true
    }

    if (
      (normalizedQuery.includes("skills") && section.id === "skills") ||
      (normalizedQuery.includes("projects") && section.id === "projects") ||
      (normalizedQuery.includes("experience") && section.id === "experience") ||
      (normalizedQuery.includes("education") && section.id === "education") ||
      (normalizedQuery.includes("services") && section.id === "services") ||
      (normalizedQuery.includes("about") && section.id === "about-me")
    ) {
      isRelevant = true
    }

    if (isRelevant) {
      let info = `Section: ${section.name}\n`
      info += `Description: ${section.description}\n`

      if (section.features) {
        info += `Skills/Services: ${section.features.join(", ")}\n`
      }

      if (section.details) {
        info += `Details: ${section.details}\n`
      }

      results.push(info)
    }
  })

  return results.slice(0, 3)
}
