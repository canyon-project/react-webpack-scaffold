import React from "react"

interface ExampleComponentProps {
  title: string
  description?: string
}

const ExampleComponent: React.FC<ExampleComponentProps> = ({ title, description = "Default description" }) => {
  return (
    <div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

export default ExampleComponent

