import { useState, useEffect } from "react";
import {supabase} from './supabaseClient'

const Account = ({session}) => {
    const [loading, setLoading] = useState(true)
    const [userName, setUsername] = useState(null)
    const [website, setWebsite] = useState(null)
    const [avatar_url, setAvatarUrl] = useState(null)
    useEffect(() =>{
        getProfile()
    }, [session])
} 