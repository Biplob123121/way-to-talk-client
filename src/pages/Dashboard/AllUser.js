import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'react-hot-toast';

function AllUser() {
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:4000/api/users`);
      const data = await res.json();
      return data;
    }
  })

  const handleMakeAdmin = id => {
    fetch(`http://localhost:4000/api/users/${id}`, {
      method: 'PUT'
    })
      .then(res => res.json())
      .then(data => {
        if(data.modified){
          toast.success("Make admin successful..")
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
                  <td>{user.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                  <td><button className='btn btn-xs btn-warning'>Delete</button></td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllUser