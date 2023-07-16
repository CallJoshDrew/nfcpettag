'use client'
import React from 'react'
import { useParams, useSearchParams  } from 'next/navigation'
export default function FindMyPet() {
  // findmypet[slug]
  const params = useParams ();
  // findmypet[slug]?id=feafewafewfaewfew
  const searchParams = useSearchParams()
  const searchID = searchParams.get('id')
  console.log(searchID);

  return (
    <div>Help!, My pet {params.id} was lost! I am {searchID}</div>
  )
}
