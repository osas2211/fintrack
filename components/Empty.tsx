import React from "react"
import { ImFilesEmpty } from "react-icons/im"

interface EmptyStateProps {
  message?: string
  action?: React.ReactNode
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  message = "No data found",
  action,
}) => (
  <div className="flex flex-col items-center justify-center py-16 text-center text-gray-500">
    <ImFilesEmpty className="text-5xl mb-4 text-[#4B8B9F]" />
    <p className="mb-2 text-lg">{message}</p>
    {action && <div className="mt-4">{action}</div>}
  </div>
)
