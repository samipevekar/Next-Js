"use client"

type ErrorPageProps = {
    error:Error
}

export default function ErrorPage({error}:ErrorPageProps) {
  return (
    <div>
      {error.message}
    </div>
  )
}
