'use client'

import React, { useState } from 'react'
import { Profile } from '@/utils/Profile'
import{ProfileCard, ProfileForm} from "@/components"

const ProfileTemplate = () => {
    const [profiles, setProfiles] = useState<Profile[]>([])
    const [editingProfile,setEditProfile] = useState<Profile | undefined>(undefined)

    const addProfile = (profile: Profile)=>{
        if(!profile.id){
            const newProfile = {...profile, id: Date.now()}
            setProfiles([...profiles, newProfile])
        }else{
            const updatedProfiles = profiles.map((p)=> 
                p.id === profile.id ? profile : p
            )
            setProfiles(updatedProfiles)
        }

        setEditProfile(undefined)
    }

    const startEditProfile = (profile: Profile) =>{
        setEditProfile(profile)
    }

    const deleteProfile = (id: number)=>{
        setProfiles(profiles.filter((profile)=> profile.id != id));
    }
  return (
    <div>
      <button onClick={()=> 
        setEditProfile({id:0,name:"", age:0, image: ""})
        }
        className='mb-4 px-4 py-4 bg-blue-500 text-white rounded hover:bg-blue-700'
        >
            Add Profile
      </button>
      {editingProfile && (
        <ProfileForm profile={editingProfile} onSubmit={addProfile}/>
      )}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {profiles.map((profile)=>(
                <ProfileCard  
                    key={profile.id}  
                    profile={profile} 
                    onEdit={()=> startEditProfile(profile)}
                    onDelete={()=> deleteProfile(profile.id)}
                />
            ))}
      </div>
    </div>
  )
}

export {ProfileTemplate}
