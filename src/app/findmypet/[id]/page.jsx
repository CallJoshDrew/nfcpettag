"use client";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { doc, serverTimestamp, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../../../FirebaseConfig";

export default async function FindMyPet() {
  // findmypet[slug]
  const params = useParams();
  // findmypet[slug]?id=feafewafewfaewfew
  const searchParams = useSearchParams();
  const searchID = searchParams.get("id");
  // console.log(searchID);

  const [petName, setPetName] = useState(params?.id);
  const [breed, setBreed] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [spayed, setSpayed] = useState("");
  const [birthday, setBirthday] = useState("");
  const [todos, setTodos] = useState([]);

  // const petRef = doc(db, "myPets", searchID, "pet", params.id);
  // const fetchPet = async () => {
  //   const petSnap = await getDoc(petRef);
  //   if (petSnap.exists()) {
  //     setBreed(petSnap.data().breed);
  //     setSpecies(petSnap.data().species);
  //     setGender(petSnap.data().gender);
  //     setSpayed(petSnap.data().spayed);
  //     setBirthday(petSnap.data().birthday);
  //   } else {
  //     console.log("No such document!");
  //   }
  // };

  // const [fetching, setFetching] = useState(false);

  // useEffect(() => {
  //   if (!searchID) return;

  //   const fetchData = async () => {
  //     setFetching(true);
  //     await fetchPet();
  //     setFetching(false);
  //   };

  //   fetchData();
  // }, [searchID]);

  return (
    <div>
      Help!, My pet {params.id} was lost! I am {searchID}
    </div>
  );
}
