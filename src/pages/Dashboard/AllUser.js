import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'react-hot-toast';

function AllUser() {
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch(`https://way-to-talk-server.vercel.app/api/users`);
      const data = await res.json();
      return data;
    }
  })

  const handleMakeAdmin = id => {
    fetch(`https://way-to-talk-server.vercel.app/api/users/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.modified) {
          toast.success("Make admin successful..")
          refetch();
        }
      })
  }

  const handleDeleteUser = id => {
    fetch(`https://way-to-talk-server.vercel.app/api/users/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          toast.success("User is Deleted..")
          refetch();
        }
      })
  }

  return (
    <div>
      <h2 className='text-2xl font-bold'>All User</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Delete user</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, i) =>
                <tr className="hover" key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                  <td><button onClick={() => handleDeleteUser(user._id)} className='btn btn-xs btn-warning'>Delete</button></td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllUser