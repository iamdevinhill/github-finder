import React from 'react'
import {FaCodepen, FaStore, FaUserFriends, FaUsers} from 'react-icons/fa'
import {useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import Spinner from '../components/layout/Spinner'
import { useParams } from 'react-router-dom'
import GithubContext from '../context/github/GithubContext'


function User() {
    const {getUser, user} = useContext(GithubContext)

    const params = useParams()

    useEffect(() => {
        getUser(params.login)
        // getUserRepos(params.login)
    }, [])

  return (
    <div>{user.login}</div>
  )
}

export default User