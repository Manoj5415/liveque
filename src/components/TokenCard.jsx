export default function TokenCard({ token, counter }) {
  return (
    <div className="bg-blue-600 text-white p-8 rounded-2xl text-center shadow-xl w-80">
      <p className="text-lg">Now Serving</p>
      <p className="text-6xl font-extrabold my-4">{token}</p>
      <p className="text-md">Please go to {counter}</p>
    </div>
  )
}
