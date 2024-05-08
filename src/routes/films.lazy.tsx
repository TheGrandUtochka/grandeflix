import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/films')({
  component: () => <div>Hello /films!</div>
})