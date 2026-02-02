import TokenCard from "../components/TokenCard"

export default function Display() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <TokenCard token={42} counter="Counter 1" />
    </div>
  )
}
